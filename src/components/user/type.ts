export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  city: string;
  products: IUserProducts;
}

export interface IUserProducts {
  obj: IUserObject;
  [propName: string]: IUserObject;
}

export interface IUserObject {
  [propName: string]: IuserSystem;
}

export interface IuserSystem {
  type: string;
  name: string;
  url: string;
  namePLC: string;
  scheme?: number;
  maxPower?: number;
}
export enum systems {
  userHightVolt = 'userHightVolt',
  userLowVolt = 'userLowVolt',
  userGenerator = 'userGenerator',
  userUPS = 'userUPS',
  userWater = 'userWater',
  userGas = 'userGas',
  userHot = 'userHot',
}
