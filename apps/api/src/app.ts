import { Hono } from 'hono';
import { cors } from 'hono/cors';
import routes from './routes';
import type { Bindings } from './types/bindings';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', cors());

app.get('/', (c) => c.json({ message: 'API is running' }));
app.route('/', routes);

export default app;
