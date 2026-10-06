import type { Context } from 'hono';
import { createDb } from '../db';
import { contactSchema, replySchema } from '../schemas/contacts.schema';
import {
  createContact,
  deleteContact,
  getContacts,
  markContactAsRead,
  replyToContact,
} from '../services/contacts.service';
import type { Bindings } from '../types/bindings';

type AppContext = Context<{ Bindings: Bindings }>;

const getContactId = (c: AppContext) => Number(c.req.param('id'));

export const listContacts = async (c: AppContext) => {
  const result = await getContacts(createDb(c.env.DB));
  return c.json({ data: result });
};

export const storeContact = async (c: AppContext) => {
  const parsedBody = contactSchema.safeParse(await c.req.json());
  if (!parsedBody.success) return c.json({ error: parsedBody.error.flatten() }, 400);

  const created = await createContact(createDb(c.env.DB), parsedBody.data);
  return c.json({ data: created }, 201);
};

export const markContactRead = async (c: AppContext) => {
  const id = getContactId(c);
  if (!Number.isInteger(id)) return c.json({ error: 'Invalid contact id' }, 400);

  const updated = await markContactAsRead(createDb(c.env.DB), id);
  if (!updated) return c.json({ error: 'Contact message not found' }, 404);
  return c.json({ data: updated });
};

export const replyContact = async (c: AppContext) => {
  const id = getContactId(c);
  const parsedBody = replySchema.safeParse(await c.req.json());
  if (!Number.isInteger(id)) return c.json({ error: 'Invalid contact id' }, 400);
  if (!parsedBody.success) return c.json({ error: parsedBody.error.flatten() }, 400);

  const updated = await replyToContact(createDb(c.env.DB), id, parsedBody.data.reply);
  if (!updated) return c.json({ error: 'Contact message not found' }, 404);

  return c.json({
    data: updated,
    mailto: `mailto:${updated.email}?subject=${encodeURIComponent(`Re: ${updated.subject}`)}&body=${encodeURIComponent(parsedBody.data.reply)}`,
  });
};

export const destroyContact = async (c: AppContext) => {
  const id = getContactId(c);
  if (!Number.isInteger(id)) return c.json({ error: 'Invalid contact id' }, 400);

  const deleted = await deleteContact(createDb(c.env.DB), id);
  if (!deleted) return c.json({ error: 'Contact message not found' }, 404);
  return c.json({ data: deleted });
};
