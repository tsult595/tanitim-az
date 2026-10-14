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
    const lang = context.url.searchParams.get('lang');
    
    let query = db.select().from(schema.services);
    if (lang) {
      query = query.where(eq(schema.services.lang, lang));
    }
    
    const items = await query;
    return json(items);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load services';
    return json({ error: message }, 500);
  }
};

export const POST: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const result = await db.insert(schema.services).values(serviceValues(await context.request.json())).returning();
    return json(result[0], 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create service';
    return json({ error: message }, 400);
  }
};
