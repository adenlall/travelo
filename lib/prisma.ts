// import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
// import { PrismaNeon } from '@prisma/adapter-neon';
// import ws from "ws";

// neonConfig.webSocketConstructor = ws;
// neonConfig.poolQueryViaFetch = true;

// const connectionString = `${process.env.DATABASE_URL}`;
// const pool = new Pool({ connectionString });
// const adapter = new PrismaNeon(pool);

export const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma
