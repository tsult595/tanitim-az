import type { APIRoute } from 'astro';

import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const key = context.params.key;

  if (!key) {
    return new Response('Missing R2 object key', { status: 400 });
  }

  const bucket = env.R2_BUCKET;

  if (!bucket) {
    return new Response('R2 binding is not configured', { status: 503 });
  }

  const object = await bucket.get(key);

  if (!object) {
    return new Response('R2 object not found', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('cache-control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
};
