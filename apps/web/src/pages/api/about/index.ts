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

export const GET: APIRoute = async () => {
  try {
    const db = getDb(env.DB);
    const content = await db.select().from(schema.aboutContent).limit(1);
    return json(content[0] ?? null);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to load About content' }, 500);
  }
};

export const PUT: APIRoute = async (context) => {
  try {
    const body = await context.request.json() as {
      title?: string;
      description?: string;
      buttonText?: string;
      images?: Array<{ src: string; alt: string }>;
    };
    const title = body.title?.trim();
    const description = body.description?.trim();
    const buttonText = body.buttonText?.trim();
    if (!title || !description || !buttonText) return json({ error: 'Title, description, and button text are required' }, 400);
    if (!Array.isArray(body.images) || body.images.some((image) => !image || !image.src?.trim() || typeof image.alt !== 'string')) {
      return json({ error: 'Each image needs a source and alt text' }, 400);
    }
    const db = getDb(env.DB);
    const existing = await db.select().from(schema.aboutContent).limit(1);
    const values = {
      title,
      description,
      buttonText,
      images: JSON.stringify(body.images),
      updatedAt: new Date().toISOString(),
    };
    const content = existing[0]
      ? await db.update(schema.aboutContent).set(values).where(eq(schema.aboutContent.id, existing[0].id)).returning()
      : await db.insert(schema.aboutContent).values(values).returning();
    return json(content[0], 200);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Failed to save About content' }, 400);
  }
};
