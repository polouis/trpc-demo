export type Vegetable = { id: number; name: string };
 
const items: Vegetable[] = [
  { id: 0, name: "Cabbage"},
  { id: 1, name: "Carrot"},
  { id: 2, name: "Tomato"},
  { id: 3, name: "Artichoke"},
];
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
