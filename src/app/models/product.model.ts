export class Product {
    id?: number;
    name: string = '';
    description: string = '';
    quantity: number = 0;
    minimumQuantity: number = 0;
    categoryId: number = 0;
    locationId: number = 0;
    price: number = 0;
    category?: { name: string };
    location?: { name: string };
  
    constructor(init?: Partial<Product>) {
      Object.assign(this, init);
    }
  }
  