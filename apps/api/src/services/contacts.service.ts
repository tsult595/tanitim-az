import { eq } from 'drizzle-orm';
import { contactMessages } from '../db/schema';
import type { createDb } from '../db';

type Database = ReturnType<typeof createDb>;

export const getContacts = (db: Database) => db.select().from(contactMessages).all();

export const createContact = (
  db: Database,
  data: {
    name: string;
    email: string;
    subject: string;
    phone: string;
    message: string;
  },
) =>
  db
    .insert(contactMessages)
    .values({ ...data, createdAt: new Date() })
    .returning()
    .then(([created]) => created);

export const markContactAsRead = (db: Database, id: number) =>
  db
    .update(contactMessages)
    .set({ status: 'read', readAt: new Date() })
    .where(eq(contactMessages.id, id))
    .returning()
    .then(([updated]) => updated);

export const replyToContact = (db: Database, id: number, reply: string) =>
  db
    .update(contactMessages)
    .set({ reply, status: 'replied', repliedAt: new Date() })
    .where(eq(contactMessages.id, id))
    .returning()
    .then(([updated]) => updated);

export const deleteContact = (db: Database, id: number) =>
  db
    .delete(contactMessages)
    .where(eq(contactMessages.id, id))
    .returning()
    .then(([deleted]) => deleted);
