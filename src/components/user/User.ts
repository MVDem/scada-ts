import { IUserProducts, IUser } from './type';

export class User {
  id?: string;
  name?: string;
  email?: string;
  phone?: number;
  city?: string;
  products?: IUserProducts;

  constructor(options: IUser | null) {
    this.id = options?.id;
    this.name = options?.name;
    this.email = options?.email;
    this.phone = options?.phone;
    this.city = options?.city;
    this.products = options?.products;
  }

  setUserData(options: IUser) {
    this.name = options.name;
    this.email = options.email;
    this.phone = options.phone;
    this.city = options.city;
    this.products = options.products;
  }
}
