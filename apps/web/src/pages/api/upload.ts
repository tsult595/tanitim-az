export const prerender = false;
import { env } from 'cloudflare:workers';
import type { APIRoute } from 'astro';

const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif', 'image/svg+xml']);
const maxBytes = 8 * 1024 * 1024;
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

function isUploadKey(value: unknown): value is string {
  return typeof value === 'string' && /^uploads\/[a-z0-9-]+\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(value);
}

export const POST: APIRoute = async (context) => {
  try {
    const R2_BUCKET = env.R2_BUCKET;

    if (!R2_BUCKET) {
      return new Response(JSON.stringify({ error: 'R2 binding is not configured' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const formData = await context.request.formData();
    const file = formData.get('file');
    
    if (!(file instanceof File)) {
      return json({ error: 'No file provided' }, 400);
    }
    if (!allowedTypes.has(file.type)) {
      return json({ error: 'Only JPEG, PNG, WebP, AVIF, GIF, and SVG images are supported' }, 415);
    }
    if (file.size === 0 || file.size > maxBytes) {
      return json({ error: 'Image must be between 1 byte and 8 MB' }, 413);
    }

    const arrayBuffer = await file.arrayBuffer();
    const extensionByType: Record<string, string> = {
      'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp',
      'image/avif': 'avif', 'image/gif': 'gif', 'image/svg+xml': 'svg',
    };
    const ext = extensionByType[file.type];
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const key = `uploads/${timestamp}-${randomStr}.${ext}`;
    
    await R2_BUCKET.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
      },
    });

    const url = `/api/r2/${key}`;
    
    return json({ url, key });
  } catch (error: any) {
    return json({ error: error.message }, 500);
  }
};

// Used only to compensate an upload when the following database save fails.
export const DELETE: APIRoute = async (context) => {
  try {
    const { key } = await context.request.json() as { key?: unknown };
    if (!isUploadKey(key)) return json({ error: 'Invalid upload key' }, 400);
    await env.R2_BUCKET.delete(key);
    return json({ success: true });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Unable to delete upload' }, 500);
  }
};
