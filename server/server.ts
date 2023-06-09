import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { initTRPC } from '@trpc/server';
import { db, Vegetable } from './db';

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  vegetableList: publicProcedure
    .query(async () => {
      const items = await db.vegetable.findMany();
      return items;
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
