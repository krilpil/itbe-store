import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (!global.prisma) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.prisma = new PrismaClient({
    log: ["info"],
  });
}
// eslint-disable-next-line prefer-const,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line prefer-const
prisma = global.prisma;

export default prisma;
