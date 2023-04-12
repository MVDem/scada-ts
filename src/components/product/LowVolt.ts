import { Products } from './Products';
import { IInput1, IProducts } from './type';

export class LowVolt extends Products {
  private _input1?: IInput1 | null;
  private _input2?: IInput1 | null;
  private _anVoltage: number | null;
  private _bnVoltage: number | null;
  private _cnVoltage: number | null;
  private _abVoltage: number | null;
  private _acVoltage: number | null;
  private _bcVoltage: number | null;
  private _aCurrent: number | null;
  private _bCurrent: number | null;
  private _cCurrent: number | null;
  private _maxPower: number | null;
  constructor(options: IProducts) {
    super(options);
    this._input1 = null;
    this._input2 = null;
    this._anVoltage = 220;
    this._bnVoltage = 220;
    this._cnVoltage = 220;
    this._abVoltage = 380;
    this._acVoltage = 380;
    this._bcVoltage = 380;
    this._aCurrent = 1200;
    this._bCurrent = 1350;
    this._cCurrent = 1280;
    this._maxPower = 1600;
  }

  get infoInput1() {
    return this._input1;
  }

  get infoInput2() {
    return this._input2;
  }

  get infoanVoltage() {
    return this._anVoltage;
  }

  get infobnVoltage() {
    return this._bnVoltage;
  }

  get infocnVoltage() {
    return this._cnVoltage;
  }

  get infoabVoltage() {
    return this._abVoltage;
  }

  get infoacVoltage() {
    return this._acVoltage;
  }

  get infobcVoltage() {
    return this._bcVoltage;
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
    // this._maxPower=user.maxPower;
    //сделать запрос на сервер

    fetch(
      'https://raw.githubusercontent.com/MVDem/scada-ts/main/API/v1/user.json'
    )
      .then((response) => {
        if (response.ok) {
          // console.log(response.body);
          return response.json();
        }
      })
      .then((data) => {
        // console.log(data);
      });
  }
}
