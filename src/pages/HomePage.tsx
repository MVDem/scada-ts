import { NavLink } from 'react-router-dom';
import { datadef } from '../API/user-def';
import { User } from '../components/user/User';

export const user = new User(datadef);

export default function HomePege() {
  return (
    <>
      <div className="home">
        <div className="home__wrapper">
          <h1 className="home__title">Homepage</h1>
          <NavLink to="/signin" className="home__btn">
            Вход
          </NavLink>
          <NavLink to="/signup" className="home__btn">
            Регистрация
          </NavLink>
        </div>
      </div>
    </>
  );
}
