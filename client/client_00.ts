import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

export async function sample00() {
  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

  await trpc.vegetableList.query().then(vegetables => console.log('Vegetables:', vegetables));
}

