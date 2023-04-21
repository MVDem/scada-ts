import { IStoreObjects } from '../type';
import HightVoltCard from './ElecHightVolt';
import LowVoltCard from './ElecLowVolt';

export function ObjectCard(props: { key: number; prop: IStoreObjects }) {
  const { objSystems } = props.prop;

  const systems = objSystems.map((elem, i) => {
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
    <div>
      {/* {systems.map((e, i) => {
        return <div key={i}>{e}</div>;
      })} */}
      <div className="obj-card">
        <h3 className="obj-card__title">Название объекта</h3>
        <div className="obj-card__main-content">
          <div className="obj-card__extra-content">
            <h4 className="obj-card__extra-title"> hight volt </h4>
            <div className="obj-card__extra-data">
              <div>
                <h5>9.9kV</h5>
                <h5>120А</h5>
              </div>
              <div>
                <h5>9.9kV</h5>
                <h5>120А</h5>
              </div>
            </div>
            <p>Схема работы проектная</p>
          </div>
          <div className="obj-card__extra-content">
            <h4 className="obj-card__extra-title"> low volt </h4>
            <div className="obj-card__extra-data">
              <div>
                <h5>224V</h5>
                <h5>1310А</h5>
              </div>
              <div>
                <h5>221V</h5>
                <h5>1280А</h5>
              </div>
            </div>
            <p>Схема работы проектная</p>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="board-obj__ElHightVolt">
          <h2>Название подстанции</h2>
          <p className="boardobj__input">
            Схема электроснабжения <span>{}</span>
          </p>
          <p className="board-obj__volt">
            {' '}
            Напряжение сети <span>{}</span>
          </p>
          <p className="board-obj__current">
            {' '}
            Потребляемая мощность <span>{}</span>
          </p>
          <div className="board-obj__alarm"></div>
        </div>
      </div> */}
    </div>
  );
}
