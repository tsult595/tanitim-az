export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

const values = (body: unknown) => {
  if (!body || typeof body !== 'object') throw new Error('Request body must be an object');
  const input = body as Record<string, unknown>;
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  if (!name) throw new Error('Name is required');
  const href = typeof input.href === 'string' ? input.href.trim() : '';
  if (href && !/^(https?:\/\/|\/)/i.test(href)) throw new Error('Link must be http(s) or a relative path');
  return {
    name,
    description: typeof input.description === 'string' ? input.description : '',
    buttonText: typeof input.buttonText === 'string' ? input.buttonText : '',
    href,
    accent: typeof input.accent === 'string' ? input.accent.replace(/[^a-zA-Z0-9\s:/.[\]-]/g, '') : 'from-slate-100 to-white',
    imageUrl: typeof input.imageUrl === 'string' ? input.imageUrl : '',
    sortOrder: typeof input.sortOrder === 'number' ? input.sortOrder : 0,
    isActive: input.isActive !== false,
  };
};

export const GET: APIRoute = async () => {
  try {
    const db = getDb(env.DB);
    return json(await db.select().from(schema.products).orderBy(schema.products.sortOrder));
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to load products' }, 500);
  }
};

export const POST: APIRoute = async (context) => {
  try {
    const db = getDb(env.DB);
    const result = await db.insert(schema.products).values(values(await context.request.json())).returning();
    return json(result[0], 201);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to create product' }, 400);
  }
};
