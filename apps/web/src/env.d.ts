/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

interface Env {
  DB: D1Database;
  R2_BUCKET: R2Bucket;
}

declare module 'cloudflare:workers' {
  export const env: Env;
}

declare namespace App {
  interface Locals extends Runtime {}
}
