import { useEffect, useState } from 'react';
import { IHightVolt, IuserSystem } from '../type';
import CircleProgress from './CircleProgress';
// import LineProgress from './LineProgress';

export default function HightVoltCard(props: {
  key: number;
  prop: IuserSystem;
}) {
  const product = props.prop;
  const [system, setSystem] = useState<IHightVolt>({});
  const [percent1, setPercentage1] = useState<number>(0);
  const [percent2, setPercentage2] = useState<number>(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      getData();
      setPercentage1(Math.round(perc1));
      setPercentage2(Math.round(perc2));
      setTime(30000);
    }, time);
  }, [system]);

  function getData() {
    fetch(product!.url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return console.log('error');
      })
      .then((data) => {
        setSystem(data);
        return console.log(data);
      });
  }

  const perc1 =
    ((system.input1?.current?.aCurrent! +
      system.input1?.current?.bCurrent! +
      system.input1?.current?.cCurrent!) *
      100) /
    3 /
    product.maxPower!;
  const perc2 =
    ((system.input2?.current?.aCurrent! +
      system.input2?.current?.bCurrent! +
      system.input2?.current?.cCurrent!) *
      100) /
    3 /
    product.maxPower!;

  const percentage1: number = percent1 ? percent1 : 0;
  const percentage2: number = percent2 ? percent2 : 0;
  const radius: number = 40;

  const inputstate =
    system.input1?.switch?.switchOn && system.input2?.switch?.switchOn
      ? 'стандартная'
      : 'резервная';

  return (
    <>
      <div className="card">
        <h3 className="card__title">{product.name}</h3>
        <div className="card__content-list">
          <div className="card__main-content">
            <div className="card__extra-content">
              <CircleProgress radius={radius} percentage={percentage1} />
              <div className="card__extra-subcontent">
                <p>Current A: {system.input1?.current?.aCurrent}</p>
                <p>Current B: {system.input1?.current?.bCurrent}</p>
                <p>Current C: {system.input1?.current?.cCurrent}</p>
              </div>
              <div className="card__extra-subcontent">
                <p>Voltage A: {system.input1?.voltage?.anVoltage}</p>
                <p>Voltage B: {system.input1?.voltage?.bnVoltage}</p>
                <p>Voltage C: {system.input1?.voltage?.cnVoltage}</p>
              </div>
            </div>
            <div className="card__extra-content">
              {/* <LineProgress /> */}
              <CircleProgress radius={radius} percentage={percentage2} />
              <div className="card__extra-subcontent">
                <p>Current A: {system.input2?.current?.aCurrent}</p>
                <p>Current B: {system.input2?.current?.bCurrent}</p>
                <p>Current C: {system.input2?.current?.cCurrent}</p>
              </div>
              <div className="card__extra-subcontent">
                <p>Voltage A: {system.input2?.voltage?.anVoltage}</p>
                <p>Voltage B: {system.input2?.voltage?.bnVoltage}</p>
                <p>Voltage C: {system.input2?.voltage?.cnVoltage}</p>
              </div>
            </div>
          </div>
          <div className="card__content-input">
            <p>
              Схема работы - <span>{inputstate}</span>
            </p>
          </div>
          <div className="card__content-alarm"></div>
        </div>
      </div>
    </>
  );
}
