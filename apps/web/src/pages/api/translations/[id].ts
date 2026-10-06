export const prerender = false;
import type { APIRoute } from 'astro';
import { getDb, schema } from '../../../lib/db';
import { eq } from 'drizzle-orm';

export const PUT: APIRoute = async (context) => {
  try {
    const { DB } = context.locals.runtime.env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    const body = await context.request.json();
    const result = await db.update(schema.translations).set({...body, updatedAt: new Date().toISOString()}).where(eq(schema.translations.id, id)).returning();
    if (result.length === 0) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    return new Response(JSON.stringify(result[0]), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

export const DELETE: APIRoute = async (context) => {
  try {
    const { DB } = context.locals.runtime.env;
    const db = getDb(DB);
    const id = parseInt(context.params.id as string);
    await db.delete(schema.translations).where(eq(schema.translations.id, id));
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
