import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

trpc.vegetableList.query().then(vegetables => console.log('Vegetables:', vegetables));

trpc.vegetableList.query().then(vegetables => vegetables.forEach(element => {
  console.log(element);
}));
