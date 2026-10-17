export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';
import { eq } from 'drizzle-orm';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const validId = (value: string | undefined) => Number.isInteger(Number(value)) && Number(value) > 0 ? Number(value) : null;
const clientValues = (body: unknown) => {
  if (!body || typeof body !== 'object') throw new Error('Request body must be an object');
  const input = body as Record<string, unknown>;
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const logoUrl = typeof input.logoUrl === 'string' ? input.logoUrl.trim() : '';
  if (!name || !logoUrl) throw new Error('Name and logo URL are required');
  if (!logoUrl.startsWith('/') && !/^https:\/\//.test(logoUrl)) throw new Error('Logo URL must be an absolute URL or site path');
  return { name, logoUrl, website: typeof input.website === 'string' ? input.website.trim() : '', sortOrder: Number.isInteger(input.sortOrder) ? input.sortOrder as number : 0, isActive: input.isActive !== false };
};

export const GET: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = validId(context.params.id);
    if (!id) return json({ error: 'Invalid client id' }, 400);
    const items = await db.select().from(schema.clients).where(eq(schema.clients.id, id));
    if (items.length === 0) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    return new Response(JSON.stringify(items[0]), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

export const PUT: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = validId(context.params.id);
    if (!id) return json({ error: 'Invalid client id' }, 400);
    const existing = await db.select().from(schema.clients).where(eq(schema.clients.id, id));
    if (!existing[0]) return json({ error: 'Not found' }, 404);
    const input = await context.request.json() as Record<string, unknown>;
    const result = await db.update(schema.clients).set(clientValues({ ...existing[0], ...input })).where(eq(schema.clients.id, id)).returning();
    return json(result[0]);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to update client' }, 400);
  }
};

export const DELETE: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = validId(context.params.id);
    if (!id) return json({ error: 'Invalid client id' }, 400);
    await db.delete(schema.clients).where(eq(schema.clients.id, id));
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
