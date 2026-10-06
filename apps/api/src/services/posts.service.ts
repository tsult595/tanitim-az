import { eq } from 'drizzle-orm';
import { posts } from '../db/schema';
import type { createDb } from '../db';

type Database = ReturnType<typeof createDb>;

export const getPosts = (db: Database) => db.select().from(posts).all();

export const getPostById = (db: Database, id: number) =>
  db.select().from(posts).where(eq(posts.id, id)).get();

export const createPost = (
  db: Database,
  data: { title: string; content: string; slug: string },
) =>
  db
    .insert(posts)
    .values({ ...data, createdAt: new Date() })
    .returning()
    .then(([created]) => created);

export const updatePost = (
  db: Database,
  id: number,
  data: { title: string; content: string; slug: string },
) =>
  db
    .update(posts)
    .set(data)
    .where(eq(posts.id, id))
    .returning()
    .then(([updated]) => updated);

export const deletePost = (db: Database, id: number) =>
  db
    .delete(posts)
    .where(eq(posts.id, id))
    .returning()
    .then(([deleted]) => deleted);
