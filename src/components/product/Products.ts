import { IProducts } from './type';

export class Products {
  name: string;
  obj: string;
  url: string;
  namePLC: string;
  constructor(options: IProducts) {
    this.name = options.name;
    this.obj = options.obj;
    this.url = options.url;
    this.namePLC = options.namePLC;
  }
  getValue() {}
}
