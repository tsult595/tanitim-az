export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '../../../lib/db';
import { blogValues } from './index';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const idFrom = (id: string | undefined) => Number.isInteger(Number(id)) && Number(id) > 0 ? Number(id) : null;

export const GET: APIRoute = async (context) => {
  try {
    const id = idFrom(context.params.id); if (!id) return json({ error: 'Invalid blog id' }, 400);
    const item = await getDb(env.DB).select().from(schema.blogs).where(eq(schema.blogs.id, id));
    return item[0] ? json(item[0]) : json({ error: 'Not found' }, 404);
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Failed to load blog' }, 500); }
};

export const PUT: APIRoute = async (context) => {
  try {
    const id = idFrom(context.params.id); if (!id) return json({ error: 'Invalid blog id' }, 400);
    const db = getDb(env.DB);
    const existing = await db.select().from(schema.blogs).where(eq(schema.blogs.id, id));
    if (!existing[0]) return json({ error: 'Not found' }, 404);
    const values = blogValues({ ...existing[0], ...await context.request.json() });
    const result = await db.update(schema.blogs).set({ ...values, updatedAt: new Date().toISOString() }).where(eq(schema.blogs.id, id)).returning();
    return json(result[0]);
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Failed to update blog' }, 400); }
};

export const DELETE: APIRoute = async (context) => {
  try {
    const id = idFrom(context.params.id); if (!id) return json({ error: 'Invalid blog id' }, 400);
    const result = await getDb(env.DB).delete(schema.blogs).where(eq(schema.blogs.id, id)).returning({ id: schema.blogs.id });
    return result[0] ? json({ success: true }) : json({ error: 'Not found' }, 404);
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Failed to delete blog' }, 500); }
};
