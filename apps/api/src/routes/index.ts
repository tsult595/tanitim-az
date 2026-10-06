import { Hono } from 'hono';
import contactsRouter from './contacts.routes';
import postsRouter from './posts.routes';
import type { Bindings } from '../types/bindings';

const routes = new Hono<{ Bindings: Bindings }>();

routes.route('/contacts', contactsRouter);
routes.route('/posts', postsRouter);

export default routes;
