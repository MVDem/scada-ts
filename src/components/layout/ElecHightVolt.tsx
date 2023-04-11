import { HightVolt } from '../product/HightVolt';
import CircleProgress from './CircleProgress';

export default function HightVoltCard(props: {
  key: number;
  prop: HightVolt;
}): JSX.Element {
  const {
    infoaVoltage,
    infobVoltage,
    infocVoltage,
    infoaCurrent,
    infobCurrent,
    infocCurrent,
  } = props.prop;

  const radius: number = 40;
  const percentage: number = 45;
  // Math.round(
  // ((infoaCurrent! + infobCurrent! + infocCurrent!) * 100) / 3 / infoMaxPower!
  // );

  return (
    <>
      <div className="card">
        <h3 className="card__title">Power center 10kV</h3>
        <div className="card__content-list">
          <div className="card__main-content">
            <CircleProgress radius={radius} percentage={percentage} />
            <div className="card__main-subcontent">
              <p>Current A: {infoaCurrent}</p>
              <p>Current B: {infobCurrent}</p>
              <p>Current C: {infocCurrent}</p>
            </div>
          </div>
          <div className="card__extra-content">
            {/* <LineProgress /> */}
            <p>Voltage A: {infoaVoltage}</p>
            <p>Voltage B: {infobVoltage}</p>
            <p>Voltage C: {infocVoltage}</p>
          </div>
        </div>
      </div>
    </>
  );
}
