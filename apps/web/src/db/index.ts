import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/db/schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const globalForDb = globalThis as typeof globalThis & {
  creatorLabPool?: Pool;
};

const pool =
  globalForDb.creatorLabPool ??
  new Pool({
    connectionString,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.creatorLabPool = pool;
}

export const db = drizzle(pool, { schema });
export { schema };
