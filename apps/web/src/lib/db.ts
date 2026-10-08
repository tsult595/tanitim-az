import { drizzle } from 'drizzle-orm/d1';
import * as schema from 'db/schema';

export function getDb(d1: D1Database) {
  return drizzle(d1, { schema });
}

export function getR2Url(key: string): string {
  return `/api/r2/${key}`;
}

export { schema };
export default getDb;
