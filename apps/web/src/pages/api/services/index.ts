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
    
    let query = db.select().from(schema.services);
    if (lang) {
      query = query.where(eq(schema.services.lang, lang));
    }
    
    const items = await query;
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
    const result = await db.insert(schema.services).values(body).returning();
    return new Response(JSON.stringify(result[0]), { status: 201, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
