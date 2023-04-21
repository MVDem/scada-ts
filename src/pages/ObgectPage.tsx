import { useSelector } from 'react-redux';
import { IState } from '../components/type';
import { useParams } from 'react-router-dom';
import HightVoltCard from '../components/layout/ElecHightVolt';
import LowVoltCard from '../components/layout/ElecLowVolt';

export default function BoardObj() {
  const products = useSelector((state: IState) => state.user.products);
  const { id } = useParams();

  const objSystems = products?.find((elem) => elem.objId === +id!)?.objSystems;

  const systems = objSystems?.map((elem, i) => {
    return (
      <>
        {elem?.type === 'userHightVolt' ? (
          <HightVoltCard key={i} prop={elem} />
        ) : (
          <LowVoltCard key={i} prop={elem!} />
        )}
      </>
    );
  });

  console.log(systems);
  return (
    <div className="obj-container">
      {systems?.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
}
