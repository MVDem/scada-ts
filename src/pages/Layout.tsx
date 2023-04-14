import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IState, storePriducts } from '../components/type';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../components/auth/userSlice';

export default function Layout() {
  const products = useSelector((state: IState) => state.user.products);
  const [extraMenu, setExtraMenu] = useState(
    products?.length ? products![0] : []
  );
  const dispach = useDispatch();
  const navigate = useNavigate();
  console.log(products);

  function onClick(param: storePriducts) {
    const elem = document.getElementById('menu-extra');
    elem?.classList.remove('block');
    setExtraMenu(param);
  }

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
              {products !== null ? (
                products.length > 1 ? (
                  products.map((elem, i): JSX.Element => {
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => onClick(elem)}
                        className="menu-top__btn"
                        id={i.toString()}
                      >
                        {elem[0]?.name} {elem[0]?.adress}
                      </button>
                    );
                  })
                ) : (
                  products[0]?.map((e, i): JSX.Element => {
                    if (i >= 1) {
                      return (
                        <button
                          key={i}
                          type="button"
                          // onClick={onClick}
                          className="menu-top__btn"
                        >
                          {e.name}
                        </button>
                      );
                    }
                    return <div key={i}></div>;
                  })
                )
              ) : (
                <></>
              )}
            </div>

            <div className="menu-bottom">
              <button className="menu-bottom__logout" onClick={() => logaut()}>
                Logout
              </button>
            </div>
          </div>
          <div id="menu-extra" className="menu-extra block">
            <div id="electricity-extra-menu" className="">
              {extraMenu !== null ? (
                extraMenu?.map((e, i): JSX.Element => {
                  if (i >= 1) {
                    return (
                      <NavLink key={i} to="#" className="menu-extra__link">
                        <button className="menu-extra__btn">{e.name}</button>
                      </NavLink>
                    );
                  }
                  return <div key={i}></div>;
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="board">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__copy">
            <p>© 2022 MVDem.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
