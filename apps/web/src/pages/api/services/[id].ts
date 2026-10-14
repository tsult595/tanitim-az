export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';
import { eq } from 'drizzle-orm';

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const variants = new Set(['gray', 'peach', 'orange']);

function serviceValues(body: unknown) {
  if (!body || typeof body !== 'object') throw new Error('Request body must be an object');
  const input = body as Record<string, unknown>;
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  const variant = typeof input.variant === 'string' ? input.variant : 'gray';
  if (!title) throw new Error('Title is required');
  if (!variants.has(variant)) throw new Error('Variant must be gray, peach, or orange');
  return {
    title,
    description: typeof input.description === 'string' ? input.description : '',
    icon: typeof input.icon === 'string' ? input.icon : '',
    imageUrl: typeof input.imageUrl === 'string'
      ? input.imageUrl
      : typeof input.img === 'string' ? input.img : '',
    variant,
    badge: typeof input.badge === 'string' ? input.badge : '',
    actionText: typeof input.actionText === 'string' ? input.actionText : '',
    sortOrder: typeof input.sortOrder === 'number' ? input.sortOrder : 0,
    isActive: input.isActive !== false,
    lang: typeof input.lang === 'string' ? input.lang : 'az',
  };
}

export const GET: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    const items = await db.select().from(schema.services).where(eq(schema.services.id, id));
    if (items.length === 0) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    return json(items[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load service';
    return json({ error: message }, 500);
  }
};

export const PUT: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    const result = await db.update(schema.services).set({
      ...serviceValues(await context.request.json()),
      updatedAt: new Date().toISOString(),
    }).where(eq(schema.services.id, id)).returning();
    if (result.length === 0) return json({ error: 'Not found' }, 404);
    return json(result[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to update service';
    return json({ error: message }, 400);
  }
};

export const DELETE: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    await db.delete(schema.services).where(eq(schema.services.id, id));
    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete service';
    return json({ error: message }, 500);
  }
};
