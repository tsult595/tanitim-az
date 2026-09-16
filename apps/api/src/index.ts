import { Hono } from 'hono';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { createDb } from './db';
import { posts } from './db/schema';

import type { D1Database } from '@cloudflare/workers-types';


type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

const postSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  slug: z.string().min(3),
});

app.get('/', (c) => {
  return c.json({ message: 'API is running' });
});

app.get('/posts', async (c) => {
  const db = createDb(c.env.DB);
  const result = await db.select().from(posts).all();

  return c.json({ data: result });
});

app.get('/posts/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const db = createDb(c.env.DB);

  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.id, id))
    .get();

  if (!result) {
    return c.json({ error: 'Post not found' }, 404);
  }

  return c.json({ data: result });
});

app.post('/posts', async (c) => {
  const parsedBody = postSchema.safeParse(await c.req.json());

  if (!parsedBody.success) {
    return c.json({ error: parsedBody.error.flatten() }, 400);
  }

  const body = parsedBody.data;
  const db = createDb(c.env.DB);

  const [created] = await db
    .insert(posts)
    .values({
      title: body.title,
      content: body.content,
      slug: body.slug,
      createdAt: new Date(),
    })
    .returning();

  return c.json({ data: created }, 201);
});

app.put('/posts/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const parsedBody = postSchema.safeParse(await c.req.json());

  if (!parsedBody.success) {
    return c.json({ error: parsedBody.error.flatten() }, 400);
  }

  const body = parsedBody.data;
  const db = createDb(c.env.DB);

  const updated = await db
    .update(posts)
    .set({
      title: body.title,
      content: body.content,
      slug: body.slug,
    })
    .where(eq(posts.id, id))
    .returning();

  if (!updated[0]) {
    return c.json({ error: 'Post not found' }, 404);
  }

  return c.json({ data: updated[0] });
});

app.delete('/posts/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const db = createDb(c.env.DB);

  const deleted = await db
    .delete(posts)
    .where(eq(posts.id, id))
    .returning();

  if (!deleted[0]) {
    return c.json({ error: 'Post not found' }, 404);
  }

  return c.json({ data: deleted[0] });
});

export default app;