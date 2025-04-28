import { PrismaClient } from "@prisma/client";
import { env } from "@/env";

// Create Prisma Client instance
const createPrismaClient = () =>
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

// Use global object to preserve Prisma instance in dev (to avoid hot reload issues)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Export the client
export const db = globalForPrisma.prisma ?? createPrismaClient();

// Cache the client in dev
if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
