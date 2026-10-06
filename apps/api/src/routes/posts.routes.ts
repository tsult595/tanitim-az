import { Hono } from 'hono';
import {
  destroyPost,
  listPosts,
  showPost,
  storePost,
  updatePostById,
} from '../controllers/posts.controller';
import type { Bindings } from '../types/bindings';

const postsRouter = new Hono<{ Bindings: Bindings }>();

postsRouter.get('/', listPosts);
postsRouter.get('/:id', showPost);
postsRouter.post('/', storePost);
postsRouter.put('/:id', updatePostById);
postsRouter.delete('/:id', destroyPost);

export default postsRouter;
