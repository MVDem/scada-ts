import { useSelector } from 'react-redux';
import { IState } from '../components/type';
import { useParams } from 'react-router-dom';
import { CardCurrent } from '../components/layout/CardCurrent';
import { CardVoltage } from '../components/layout/CardVoltage';
import { CardScheme } from '../components/layout/CardScheme';
import { CardData } from '../components/layout/CardData';
import { CardShedule } from '../components/layout/CardShedule';
// import HightVoltCard from '../components/layout/ElecHightVolt';
// import LowVoltCard from '../components/layout/ElecLowVolt';

export default function BoardSys() {
  const products = useSelector((state: IState) => state.user.products);
  const { id, type } = useParams();

  const objSystems = products?.find((elem) => elem.objId === +id!)?.objSystems;

  const system = objSystems?.find((elem) => elem?.type === type);

  console.log(system);
  return (
    <>
      <div className="system">
        <div className="system__current">
          <CardCurrent />
        </div>
        <div className="system__voltage">
          <CardVoltage />
        </div>
        <div className="system__scheme">
          <CardScheme />
        </div>
        <div className="system__current-schedule">
          <CardShedule />
        </div>
        <div className="system__data">
          <CardData />
        </div>
        <div className="system__camera"></div>
        <div className="system__alarms"></div>

        {/* {system?.type === 'userHightVolt' ? (
        <HightVoltCard key={+id!} prop={system} />
      ) : (
        <LowVoltCard key={+id!} prop={system!} />
      )} */}
      </div>
    </>
  );
}
