import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// ─── Bloglar ───────────────────────────────────────────────
export const blogs = sqliteTable('blogs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull().default(''),
  excerpt: text('excerpt').default(''),
  coverImage: text('cover_image').default(''),
  lang: text('lang').notNull().default('az'),
  isPublished: integer('is_published', { mode: 'boolean' }).notNull().default(false),
  publishedAt: text('published_at'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
  updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Xidmətlər ────────────────────────────────────────────
export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull().default(''),
  icon: text('icon').default(''),
  badge: text('badge').default(''),
  actionText: text('action_text').default(''),
  sortOrder: integer('sort_order').notNull().default(0),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  lang: text('lang').notNull().default('az'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
  updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Müştərilər (Loqolar) ─────────────────────────────────
export const clients = sqliteTable('clients', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  logoUrl: text('logo_url').notNull().default(''),
  website: text('website').default(''),
  sortOrder: integer('sort_order').notNull().default(0),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Kontakt Formalar ─────────────────────────────────────
export const contacts = sqliteTable('contacts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').default(''),
  message: text('message').notNull(),
  isRead: integer('is_read', { mode: 'boolean' }).notNull().default(false),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Tərcümələr ───────────────────────────────────────────
export const translations = sqliteTable('translations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  key: text('key').notNull().unique(),
  az: text('az').notNull().default(''),
  ru: text('ru').notNull().default(''),
  en: text('en').notNull().default(''),
  updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Sayt Parametrləri ────────────────────────────────────
export const settings = sqliteTable('settings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  key: text('key').notNull().unique(),
  value: text('value').notNull().default(''),
  updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});
