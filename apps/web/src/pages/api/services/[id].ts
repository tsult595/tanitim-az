export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb, schema } from '../../../lib/db';
import { eq } from 'drizzle-orm';

export const GET: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    const items = await db.select().from(schema.services).where(eq(schema.services.id, id));
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
    const id = parseInt(context.params.id as string);
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
      updatedAt: new Date().toISOString(),
    };

    if (!service.title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), { status: 400 });
    }

    const result = await db.update(schema.services).set(service).where(eq(schema.services.id, id)).returning();
    if (result.length === 0) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    return new Response(JSON.stringify(result[0]), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

export const DELETE: APIRoute = async (context) => {
  try {
    const { DB } = env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    await db.delete(schema.services).where(eq(schema.services.id, id));
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
