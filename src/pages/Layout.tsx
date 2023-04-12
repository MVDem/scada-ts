import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { systems } from '../components/product';
import { HightVolt } from '../components/product/HightVolt';
import { LowVolt } from '../components/product/LowVolt';

export default function Layout() {
  return (
    <>
      <header className="header"></header>
      <main className="main">
        <div className="menu">
          <div className="menu-main">
            <div className="menu-top">
              {systems?.map((elem, i): JSX.Element => {
                if (elem instanceof HightVolt) {
                  return (
                    <button key={i} type="button" className="menu-top__btn">
                      Electricity hight voltage
                    </button>
                  );
                } else if (elem instanceof LowVolt) {
                  return (
                    <button key={i} type="button" className="menu-top__btn">
                      Electricity low voltage
                    </button>
                  );
                }
                return <></>;
              })}
              {/* {electriсity && (
                <button
                  type="button"
                  id="electricity"
                  onClick={onClick}
                  className="menu-top__btn"
                >
                  Electricity
                </button>
              )}
              {waterSupplyValue && (
                <button
                  type="button"
                  id="water"
                  onClick={onClick}
                  className="menu-top__btn"
                >
                  Water
                </button>
              )}
              {gasSupplyValue && (
                <button
                  type="button"
                  id="gas"
                  onClick={onClick}
                  className="menu-top__btn"
                >
                  Gas
                </button>
              )} */}
            </div>

            <div className="menu-bottom">
              <button
                className="menu-bottom__logout"
                // onClick={() => logaut()}
              >
                Logout
              </button>
            </div>
          </div>
          <div id="menu-extra" className="menu-extra visually-hidden">
            <div id="electricity-extra-menu" className="visually-hidden">
              {/* {electriсity?.electriсityHightVoltageValue && (
                <NavLink to="#" className="menu-extra__link">
                  <button className="menu-extra__btn">HightVoltage</button>
                </NavLink>
              )}
              {electriсity?.electriсityLowVoltageValue && (
                <button className="menu-extra__btn">
                  <NavLink to="#" className="menu-extra__link">
                    LowVoltage
                  </NavLink>
                </button>
              )} */}
            </div>
            <div id="water-extra-menu" className="visually-hidden">
              <button className="menu-extra__btn">
                <NavLink to="#" className="menu-extra__link">
                  Water
                </NavLink>
              </button>
              <button className="menu-extra__btn">
                <NavLink to="#" className="menu-extra__link">
                  Water
                </NavLink>
              </button>
            </div>
            <div id="gas-extra-menu" className="visually-hidden">
              <button className="menu-extra__btn">
                <NavLink to="#" className="menu-extra__link">
                  Gas
                </NavLink>
              </button>
              <button className="menu-extra__btn">
                <NavLink to="#" className="menu-extra__link">
                  Gas
                </NavLink>
              </button>
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
