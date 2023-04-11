import HightVoltCard from '../components/layout/ElecHightVolt';
import LowVoltCard from '../components/layout/ElecLowVolt';
import { systems } from '../components/product';
import { HightVolt } from '../components/product/HightVolt';
import { LowVolt } from '../components/product/LowVolt';

export default function DashBoard() {
  return (
    <>
      <div id="board-container" className="board__container">
        {systems?.map((elem, i): JSX.Element => {
          if (elem instanceof HightVolt) {
            return <HightVoltCard key={i} prop={elem} />;
          } else if (elem instanceof LowVolt) {
            return <LowVoltCard key={i} prop={elem} />;
          }
          return <></>;
        })}
        {/* {electriсity?.electriсityHightVoltageValue && <ElectricityHightCard />}
        {electriсity?.electriсityLowVoltageValue && <ElectricityLowCard />}
        {waterSupplyValue && (
          <div className="card">
            <h3>description</h3>
            <p>coldWater: {waterSupplyValue.coldWater}</p>
            <p>hotWater: {waterSupplyValue.hotWater} </p>
          </div>
        )}
        {gasSupplyValue && (
          <div className="card">
            <h3>description</h3>
            <p>gaspressure: {gasSupplyValue.gaspressure} </p>
            <p>gasquantity: {gasSupplyValue.gasquantity} </p>
          </div>
        )} */}
      </div>
    </>
  );
}
