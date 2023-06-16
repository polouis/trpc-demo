import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

export async function sample03() {
  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });

  await trpc.productCreate.mutate({name: 'abcdefghijabcdefghijabcdf', price: 3.54, currency: 'EUR'});
  await trpc.productCreate.mutate({name: 'Carrot', price: 3.54, currency: 'EUR'});

  let products = await trpc.productList.query();
  console.log('Products:', products);

  await trpc.productCreate.mutate({name: 'Potato', price: 1.54, currency: 'EUR'});

  products = await trpc.productList.query();
  console.log('Products:', products);
}
