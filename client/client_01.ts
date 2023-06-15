// Uncomment to get errors

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

export async function sample01 () {
  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

  // await trpc.vegetableCreate.mutate(2345234);
  // await trpc.vegetableList.query().then(vegetables => vegetables.forEach(vegetable => {
  //   console.log('Vegetables:', vegetables);
  //   const n: number = vegetable.name;
  // }));
}
