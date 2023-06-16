import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Vegetable, Product, db } from './db';

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  vegetableList: publicProcedure
    .query(async () => {
      const items = await db.vegetable.findMany();
      return items;
    }),
  vegetableCreate: publicProcedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .mutation(async ({input, ctx}) => {
      const vegetable = new Vegetable(input);
      return db.vegetable.create(vegetable);
    }),
  productList: publicProcedure
    .query(async () => {
      const items = await db.product.findMany();
      return items;
    }),
  productCreate: publicProcedure
    .input(z.object({
      name: z.string().max(26),
      price: z.number().min(0.1).max(100),
      currency: z.enum(['EUR', 'USD', 'CNY']),
    }))
    .mutation(async ({input, ctx}) => {
      const product = new Product(input);
      return db.product.create(product);
    })
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
