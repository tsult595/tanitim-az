export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';
import { asc } from 'drizzle-orm';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
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
    const items = await db.select().from(schema.clients).orderBy(asc(schema.clients.sortOrder), asc(schema.clients.id));
    return json(items);
  } catch (error: any) {
    return json({ error: error instanceof Error ? error.message : 'Failed to load clients' }, 500);
  }
};

export const POST: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const result = await db.insert(schema.clients).values(clientValues(await context.request.json())).returning();
    return json(result[0], 201);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to create client' }, 400);
  }
};
