export type Vegetable = { id: number; name: string };

const items: Vegetable[] = [];
export const db = {
  vegetable: {
    findMany: async () => items,
    findById: async (id: number) => items.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const item = { id: items.length + 1, ...data };
      items.push(item);
      return item;
    },
  },
};
