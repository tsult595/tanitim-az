export const prerender = false;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']);
const maxFileSize = 10 * 1024 * 1024;

export const POST: APIRoute = async (context) => {
  try {
    const bucket = env.R2_BUCKET;
    if (!bucket) return new Response(JSON.stringify({ error: 'R2 binding is not configured' }), { status: 503 });

    const formData = await context.request.formData();
    const value = formData.get('file');
    if (!(value instanceof File)) return new Response(JSON.stringify({ error: 'Image file is required' }), { status: 400 });
    if (!allowedTypes.has(value.type)) return new Response(JSON.stringify({ error: 'Unsupported image type' }), { status: 415 });
    if (value.size > maxFileSize) return new Response(JSON.stringify({ error: 'Image must be 10 MB or smaller' }), { status: 413 });

    const extension = value.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin';
    const key = `products/${crypto.randomUUID()}.${extension}`;
    await bucket.put(key, await value.arrayBuffer(), {
      httpMetadata: { contentType: value.type },
    });

    return new Response(JSON.stringify({ url: `/api/r2/${key}`, key }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Failed to upload product image',
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
