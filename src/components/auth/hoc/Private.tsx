import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { IState } from '../../type';

const Private = ({ children }: any) => {
  const location = useLocation();
  const user = useSelector((state: IState) => state.user);

  if (!user.userId) {
    return <Navigate to="/signIn" state={{ from: location }} />;
  }
  return children;
};

export { Private };
