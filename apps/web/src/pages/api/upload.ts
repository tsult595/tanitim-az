export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  try {
    const { R2_BUCKET } = context.locals.runtime.env;
    const formData = await context.request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const ext = file.name.split('.').pop() || 'bin';
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const key = `uploads/${timestamp}-${randomStr}.${ext}`;
    
    await R2_BUCKET.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
      },
    });

    const url = `https://cdn.tanitim.az/${key}`;
    
    return new Response(JSON.stringify({ url, key }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
