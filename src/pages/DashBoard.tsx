// import { useEffect, useState } from 'react';
import HightVoltCard from '../components/layout/ElecHightVolt';
import LowVoltCard from '../components/layout/ElecLowVolt';
import { useSelector } from 'react-redux';
import { IinitialState } from '../components/type';

export default function DashBoard() {
  const mass = useSelector((state: IinitialState) => state.systems);
  // const state = useSelector((state: IinitialState) => state);
  // console.log(state);

  // const [time, setTime] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     mass!.map((e) => {
  //       e.setValue();
  //       console.log('Значение загружено');
  //       return setTime(1);
  //     });
  //   }, 50000);
  // }, [time]);

  return (
    <>
      <div id="board-container" className="board__container">
        {mass?.map((elem, i): JSX.Element => {
          if (elem) {
            return <HightVoltCard key={i} prop={elem} />;
          } else if (elem) {
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
