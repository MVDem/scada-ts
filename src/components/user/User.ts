import { IUserProducts, IUser } from './type';

export class User {
  name: string;
  email: string;
  phone: number;
  city: string;
  products: IUserProducts;

  constructor({ name, email, phone, city, products }: IUser) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.city = city;
    this.products = products;
  }

  //   setUserData(): IUser1 {
  //     return;
  //   }
}
