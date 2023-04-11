export interface IInput1 {
  _voltage?: IVoltage;
  _current?: ICurrent;
  _switch?: ISwitch;
}

export interface IVoltage {
  _anVoltage: number | null;
  _bnVoltage: number | null;
  _cnVoltage: number | null;
  _abVoltage: number | null;
  _acVoltage: number | null;
  _bcVoltage: number | null;
}

export interface ICurrent {
  _aCurrent: number | null;
  _bCurrent: number | null;
  _cCurrent: number | null;
}

export interface ISwitch {
  _switch1On: boolean;
  _switch2On: boolean;
  _switchSOn: boolean;
  _switch1Er: boolean;
  _switch2Er: boolean;
  _switchSEr: boolean;
}

export interface IProducts {
  obj: string;
  name: string;
  url: string;
  namePLC: string;
}
