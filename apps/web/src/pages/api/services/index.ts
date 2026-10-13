export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';
import { eq } from 'drizzle-orm';

export const GET: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const lang = context.url.searchParams.get('lang');
    
    const items = lang
      ? await db.select().from(schema.services).where(eq(schema.services.lang, lang))
      : await db.select().from(schema.services);
    return new Response(JSON.stringify(items), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

export const POST: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const body = await context.request.json();
    const service = {
      title: String(body.title ?? '').trim(),
      description: String(body.description ?? ''),
      icon: String(body.icon ?? ''),
      imageUrl: String(body.imageUrl ?? ''),
      variant: ['gray', 'peach', 'orange'].includes(body.variant) ? body.variant : 'gray',
      badge: String(body.badge ?? ''),
      actionText: String(body.actionText ?? ''),
      sortOrder: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
      isActive: body.isActive !== false,
      lang: String(body.lang ?? 'az'),
    };

    if (!service.title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), { status: 400 });
    }

    const result = await db.insert(schema.services).values(service).returning();
    return new Response(JSON.stringify(result[0]), { status: 201, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
