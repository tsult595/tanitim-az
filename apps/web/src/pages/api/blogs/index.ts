export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { and, asc, desc, eq } from 'drizzle-orm';
import { getDb, schema } from '../../../lib/db';

const locales = new Set(['az', 'ru', 'en']);
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export function blogValues(body: unknown) {
  if (!body || typeof body !== 'object') throw new Error('Request body must be an object');
  const input = body as Record<string, unknown>;
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  const slug = typeof input.slug === 'string' ? input.slug.trim().toLowerCase() : '';
  const content = typeof input.content === 'string' ? input.content.trim() : '';
  const lang = typeof input.lang === 'string' ? input.lang : 'az';
  if (!title || !slug || !content) throw new Error('Title, slug, and content are required');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error('Slug may contain lowercase letters, numbers, and hyphens only');
  if (!locales.has(lang)) throw new Error('Unsupported language');
  const published = input.isPublished === true || input.isPublished === 'true';
  return {
    title, slug, content, lang,
    excerpt: typeof input.excerpt === 'string' ? input.excerpt.trim() : '',
    coverImage: typeof input.coverImage === 'string' ? input.coverImage.trim() : '',
    translationKey: typeof input.translationKey === 'string' ? input.translationKey.trim() : slug,
    seoTitle: typeof input.seoTitle === 'string' ? input.seoTitle.trim() : '',
    seoDescription: typeof input.seoDescription === 'string' ? input.seoDescription.trim() : '',
    isPublished: published,
    publishedAt: published ? new Date().toISOString() : null,
  };
}

export const GET: APIRoute = async (context) => {
  try {
    const db = getDb(env.DB);
    const lang = context.url.searchParams.get('lang');
    const published = context.url.searchParams.get('published');
    const conditions = [lang && locales.has(lang) ? eq(schema.blogs.lang, lang) : undefined, published === 'true' ? eq(schema.blogs.isPublished, true) : undefined].filter(Boolean);
    const query = db.select().from(schema.blogs).orderBy(desc(schema.blogs.createdAt), asc(schema.blogs.id));
    const items = conditions.length ? await query.where(and(...conditions)) : await query;
    return json(items);
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Failed to load blogs' }, 500); }
};

export const POST: APIRoute = async (context) => {
  try {
    const result = await getDb(env.DB).insert(schema.blogs).values(blogValues(await context.request.json())).returning();
    return json(result[0], 201);
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Failed to create blog' }, 400); }
};
