export const prerender = false;
import type { APIRoute } from 'astro';
import { getDb, schema } from '../../../lib/db';

export const GET: APIRoute = async (context) => {
  try {
    const { DB } = context.locals.runtime.env;
    const db = getDb(DB);
    const items = await db.select().from(schema.contacts);
    return new Response(JSON.stringify(items), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

export const POST: APIRoute = async (context) => {
  try {
    const { DB } = context.locals.runtime.env;
    const db = getDb(DB);
    const body = await context.request.json();
    const result = await db.insert(schema.contacts).values(body).returning();
    return new Response(JSON.stringify(result[0]), { status: 201, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
