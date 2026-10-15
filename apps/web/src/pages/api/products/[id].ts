export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';
import { eq } from 'drizzle-orm';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

const idFrom = (context: Parameters<NonNullable<APIRoute>>[0]) => {
  const id = Number(context.params.id);
  if (!Number.isInteger(id) || id < 1) throw new Error('Invalid product id');
  return id;
};

export const PUT: APIRoute = async (context) => {
  try {
    const id = idFrom(context);
    const body = await context.request.json() as Record<string, unknown>;
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    if (!name) return json({ error: 'Name is required' }, 400);
    const href = typeof body.href === 'string' ? body.href.trim() : '';
    if (href && !/^(https?:\/\/|\/)/i.test(href)) return json({ error: 'Link must be http(s) or a relative path' }, 400);
    const db = getDb(env.DB);
    const result = await db.update(schema.products).set({
      name,
      description: typeof body.description === 'string' ? body.description : '',
      buttonText: typeof body.buttonText === 'string' ? body.buttonText : '',
      href,
      accent: typeof body.accent === 'string' ? body.accent.replace(/[^a-zA-Z0-9\s:/.[\]-]/g, '') : 'from-slate-100 to-white',
      imageUrl: typeof body.imageUrl === 'string' ? body.imageUrl : '',
      sortOrder: typeof body.sortOrder === 'number' ? body.sortOrder : 0,
      isActive: body.isActive !== false,
      updatedAt: new Date().toISOString(),
    }).where(eq(schema.products.id, id)).returning();
    return result[0] ? json(result[0]) : json({ error: 'Not found' }, 404);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to update product' }, 400);
  }
};

export const DELETE: APIRoute = async (context) => {
  try {
    const id = idFrom(context);
    const db = getDb(env.DB);
    await db.delete(schema.products).where(eq(schema.products.id, id));
    return json({ success: true });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to delete product' }, 400);
  }
};
