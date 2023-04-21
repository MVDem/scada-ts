import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IState, IStoreObjects } from '../components/type';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../components/auth/userSlice';

export default function Layout() {
  const products = useSelector((state: IState) => state.user.products);
  const [extraMenu, setExtraMenu] = useState(
    products?.length ? products![0] : null
  );

  const dispach = useDispatch();
  const navigate = useNavigate();

  function onClick(param: IStoreObjects) {
    const elem = document.getElementById('menu-extra');
    elem?.classList.remove('block');
    setExtraMenu(param);
  }

  function onClickHome() {
    const elem = document.getElementById('menu-extra');
    elem?.classList.add('block');
  }

  function onClickTo() {}

  function logaut() {
    dispach(removeUser());
    navigate('/', { replace: true });
  }

  return (
    <>
      <header className="header"></header>
      <main className="main">
        <div className="menu">
          <div className="menu-main">
            <div className="menu-top" id="top">
              <NavLink to={`/dashboard`} className="menu-extra__link">
                <button
                  type="button"
                  onClick={onClickHome}
                  className="menu-top__btn menu-top__btn-home"
                >
                  Home
                </button>
                <span className="menu-top__home"></span>
              </NavLink>
              {products !== null &&
                (products.length > 1
                  ? products.map((elem, i): JSX.Element => {
                      return (
                        <NavLink
                          key={i}
                          to={`/dashboard/${elem.objId}`}
                          className="menu-extra__link"
                        >
                          <button
                            key={i}
                            type="button"
                            onClick={() => onClick(elem)}
                            className="menu-top__btn"
                          >
                            {elem.objName} {elem.objAdress}
                          </button>
                        </NavLink>
                      );
                    })
                  : products[0]?.objSystems !== undefined &&
                    products[0].objSystems.map((e, i): JSX.Element => {
                      if (i >= 1) {
                        return (
                          <NavLink
                            key={i}
                            to={`/dashboard/${products![0]?.objId}/${e?.name}`}
                            className="menu-extra__link"
                          >
                            <button
                              type="button"
                              onClick={onClickTo}
                              className="menu-top__btn"
                            >
                              {e!.name}
                            </button>
                          </NavLink>
                        );
                      }
                      return <div key={i}></div>;
                    }))}
            </div>

            <div className="menu-bottom">
              <button className="menu-bottom__logout" onClick={() => logaut()}>
                Logout
              </button>
            </div>
          </div>
          <div id="menu-extra" className="menu-extra block">
            <div id="electricity-extra-menu" className="">
              {extraMenu !== null &&
                extraMenu !== undefined &&
                extraMenu.objSystems.map((e, i): JSX.Element => {
                  return (
                    <NavLink
                      key={i}
                      to={`/dashboard/${extraMenu.objId}/${e?.type}`}
                      className="menu-extra__link"
                    >
                      <button className="menu-extra__btn">{e!.name}</button>
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </div>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__copy">
            <p>© 2023 MVDem.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
