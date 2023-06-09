import { router, publicProcedure } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { db, Vegetable } from './db';

const appRouter = router({
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
