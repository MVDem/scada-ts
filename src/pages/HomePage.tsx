import { NavLink } from 'react-router-dom';

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
