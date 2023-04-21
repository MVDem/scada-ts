// import { useSelector } from 'react-redux';
// import { IState } from '../components/type';

import { CardAlarms } from '../components/layout/CardAlarms';
import { CardContacts } from '../components/layout/CardContacts';
import { CardNotification } from '../components/layout/CardNotification';
import { CardPlans } from '../components/layout/CardPlans';

export default function DashBoard() {
  // const user = useSelector((state: IState) => state.user);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__plans">
          <CardPlans />
        </div>
        <div className="dashboard__alarms">
          <CardAlarms />
        </div>
        <div className="dashboard__notification">
          <CardNotification />
        </div>
        <div className="dashboard__contacts">
          <CardContacts />
        </div>
      </div>
    </>
  );
}
