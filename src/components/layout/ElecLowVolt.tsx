import { LowVolt } from '../product/LowVolt';
import CircleProgress from './CircleProgress';

export default function LowVoltCard(props: {
  key: number;
  prop: LowVolt;
}): JSX.Element {
  const {
    // infoabVoltage,
    // infoacVoltage,
    // infobcVoltage,
    infoanVoltage,
    infobnVoltage,
    infocnVoltage,
    infoaCurrent,
    infobCurrent,
    infocCurrent,
    infoMaxPower,
  } = props.prop;
  const radius: number = 40;
  const percentage: number = Math.round(
    ((infoaCurrent! + infobCurrent! + infocCurrent!) * 100) / 3 / infoMaxPower!
  );

  return (
    <>
      <div className="card">
        <h3 className="card__title">Power center 0.4kV</h3>
        <div className="card__content-list">
          <div className="card__main-content">
            <CircleProgress radius={radius} percentage={percentage} />
            <div className="card__main-subcontent">
              <p>Current A: {infoaCurrent}A</p>
              <p>Current B: {infobCurrent}A</p>
              <p>Current C: {infocCurrent}A</p>
            </div>
          </div>
          <div className="card__extra-content">
            <p>Voltage A: {infoanVoltage}B</p>
            <p>Voltage B: {infobnVoltage}B</p>
            <p>Voltage C: {infocnVoltage}B</p>
          </div>
        </div>
      </div>
    </>
  );
}
