import { Products } from './Products';
import { IProducts } from './type';

export class HightVolt extends Products {
  private _aVoltage?: number | null;
  private _bVoltage?: number | null;
  private _cVoltage?: number | null;
  private _aCurrent?: number | null;
  private _bCurrent?: number | null;
  private _cCurrent?: number | null;
  private _maxPower: number | null;
  constructor(options: IProducts) {
    super(options);
    this._aVoltage = 9800;
    this._bVoltage = 9900;
    this._cVoltage = 9700;
    this._aCurrent = 120;
    this._bCurrent = 150;
    this._cCurrent = 100;
    this._maxPower = 250;
  }

  get infoaVoltage() {
    return this._aVoltage;
  }

  get infobVoltage() {
    return this._bVoltage;
  }

  get infocVoltage() {
    return this._cVoltage;
  }

  get infoaCurrent() {
    return this._aCurrent;
  }

  get infobCurrent() {
    return this._bCurrent;
  }

  get infocCurrent() {
    return this._cCurrent;
  }

  get infoMaxPower() {
    return this._maxPower;
  }

  setValue() {
    //сделать запрос на сервер
  }
}
