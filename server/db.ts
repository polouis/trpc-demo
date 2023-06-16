interface IdentifiedValue {
  id: number;
};

export class Product implements IdentifiedValue {
  id: number = 0;
  name: string = '';
  price: number = 0;
  currency: string = '';

  constructor(data: {name: string, price: number, currency: string}) {
    this.name = data.name;
    this.price = data.price;
    this.currency = data.currency;
  }
}

export class Vegetable implements IdentifiedValue {
  id: number = 0;
  name: string = '';

  constructor(name: string) {
    this.name = name;
  }
};

class Datastore<T extends IdentifiedValue> {
  private datastore: T[];

  public constructor() {
    this.datastore = [];
  }

  public async findMany() {
    return this.datastore;
  }

  public async findById(id: number) {
    return this.datastore.find((item) => item.id === id);
  }

  public async create(data: T) {
    data.id = this.datastore.length + 1
    this.datastore.push(data);
    return data;
  }
};

export const db = {
  vegetable: new Datastore<Vegetable>(),
  product: new Datastore<Product>(),
};
