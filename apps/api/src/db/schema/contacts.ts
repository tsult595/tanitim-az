import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const contactMessages = sqliteTable('contact_messages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  subject: text('subject').notNull(),
  phone: text('phone').notNull(),
  message: text('message').notNull(),
  status: text('status', { enum: ['new', 'read', 'replied'] }).notNull().default('new'),
  reply: text('reply'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  readAt: integer('read_at', { mode: 'timestamp' }),
  repliedAt: integer('replied_at', { mode: 'timestamp' }),
});
