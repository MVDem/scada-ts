//=========dataFromServer===============

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  city: string;
  products: IUserProducts;
}

export interface IUserProducts {
  [propName: string]: IuserObject;
}

export interface IuserObject {
  objId: number | null;
  objName: string | null;
  objAdress: string | null;
  objSystems: IuserSystems;
}

export interface IuserSystems {
  [propName: string]: IuserSystem;
}

export interface IuserSystem {
  name: string;
  type: string;
  namePLC: string;
  url: string;
  maxPower: number;
}

// ========state===========

export interface IState {
  user: IinitialState;
}

export interface IinitialState {
  userId: string | null;
  email: string | null;
  name: string | null;
  phone: number | null;
  city: string | null;
  products: Array<IStoreObjects> | null;
  systems?: Array<systems>;
}

// export type storePriducts = Array<IuserSystem>;

export interface IStoreObjects {
  objId: number | null;
  objName: string | null;
  objAdress: string | null;
  objSystems: Array<IuserSystem | null>;
}

//=========systems============

export type systems = IHightVolt | ILowVolt;

export interface systemsObj {
  objId: number | null;
  objName: string | null;
  objAdress: string | null;
  objSystemsData: Array<IHightVolt | ILowVolt>;
}
export interface IHightVolt {
  input1?: IInput;
  input2?: IInput;
  switchSOn?: boolean;
  switchSEr?: boolean;
}

export interface ILowVolt {
  input1?: IInput;
  input2?: IInput;
  switchSOn?: boolean;
  switchSEr?: boolean;
}

export interface IInput {
  voltage?: IVoltage;
  current?: ICurrent;
  switch?: ISwitch;
}

export interface IVoltage {
  anVoltage: number | null;
  bnVoltage: number | null;
  cnVoltage: number | null;
  abVoltage?: number | null;
  acVoltage?: number | null;
  bcVoltage?: number | null;
}

export interface ICurrent {
  aCurrent: number | null;
  bCurrent: number | null;
  cCurrent: number | null;
}

export interface ISwitch {
  switchOn: boolean;
  switchEr: boolean;
}
