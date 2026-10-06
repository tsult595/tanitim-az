import { Hono } from 'hono';
import {
  destroyContact,
  listContacts,
  markContactRead,
  replyContact,
  storeContact,
} from '../controllers/contacts.controller';
import type { Bindings } from '../types/bindings';

const contactsRouter = new Hono<{ Bindings: Bindings }>();

contactsRouter.get('/', listContacts);
contactsRouter.post('/', storeContact);
contactsRouter.patch('/:id/read', markContactRead);
contactsRouter.post('/:id/reply', replyContact);
contactsRouter.delete('/:id', destroyContact);

export default contactsRouter;
