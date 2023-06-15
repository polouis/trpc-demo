import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

export async function sample02() {
  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

  await trpc.vegetableCreate.mutate('Carrot');
  await trpc.vegetableCreate.mutate('Tomato');
  await trpc.vegetableCreate.mutate('Artichoke');

  let vegetables = await trpc.vegetableList.query();
  console.log('Vegetables:', vegetables);

  await trpc.vegetableCreate.mutate('Cranberry');

  vegetables = await trpc.vegetableList.query();
  console.log('Vegetables:', vegetables);
}
