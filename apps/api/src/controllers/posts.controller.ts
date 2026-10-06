import type { Context } from 'hono';
import { createDb } from '../db';
import { postSchema } from '../schemas/posts.schema';
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from '../services/posts.service';
import type { Bindings } from '../types/bindings';

type AppContext = Context<{ Bindings: Bindings }>;

const getPostId = (c: AppContext) => Number(c.req.param('id'));

export const listPosts = async (c: AppContext) => {
  const result = await getPosts(createDb(c.env.DB));
  return c.json({ data: result });
};

export const showPost = async (c: AppContext) => {
  const id = getPostId(c);
  if (!Number.isInteger(id)) return c.json({ error: 'Invalid post id' }, 400);

  const result = await getPostById(createDb(c.env.DB), id);
  if (!result) return c.json({ error: 'Post not found' }, 404);
  return c.json({ data: result });
};

export const storePost = async (c: AppContext) => {
  const parsedBody = postSchema.safeParse(await c.req.json());
  if (!parsedBody.success) return c.json({ error: parsedBody.error.flatten() }, 400);

  const created = await createPost(createDb(c.env.DB), parsedBody.data);
  return c.json({ data: created }, 201);
};

export const updatePostById = async (c: AppContext) => {
  const id = getPostId(c);
  const parsedBody = postSchema.safeParse(await c.req.json());
  if (!Number.isInteger(id)) return c.json({ error: 'Invalid post id' }, 400);
  if (!parsedBody.success) return c.json({ error: parsedBody.error.flatten() }, 400);

  const updated = await updatePost(createDb(c.env.DB), id, parsedBody.data);
  if (!updated) return c.json({ error: 'Post not found' }, 404);
  return c.json({ data: updated });
};

export const destroyPost = async (c: AppContext) => {
  const id = getPostId(c);
  if (!Number.isInteger(id)) return c.json({ error: 'Invalid post id' }, 400);

  const deleted = await deletePost(createDb(c.env.DB), id);
  if (!deleted) return c.json({ error: 'Post not found' }, 404);
  return c.json({ data: deleted });
};
