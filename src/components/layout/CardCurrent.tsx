import CircleProgress from './CircleProgress';

export function CardCurrent() {
  return (
    <>
      <div className="current">
        <h3 className="current__title">Current</h3>
        <div>
          <h5>Input 1</h5>
          <div className="current__value">
            <div>
              <CircleProgress radius={35} percentage={55} />
              <p>1260А</p>
            </div>
            <div>
              <CircleProgress radius={35} percentage={55} />
              <p>1260А</p>
            </div>
            <div>
              <CircleProgress radius={35} percentage={55} />
              <p>1260А</p>
            </div>
          </div>
          <h5>Input 2</h5>
          <div className="current__value">
            <div>
              <CircleProgress radius={35} percentage={55} />
              <p>1260А</p>
            </div>
            <div>
              <CircleProgress radius={35} percentage={55} />
              <p>1260А</p>
            </div>
            <div>
              <CircleProgress radius={35} percentage={55} />
              <p>1260А</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
