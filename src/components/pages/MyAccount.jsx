import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const MyAccount = () => {
  const active = "w-full text-left p-3 text-beer underline";
  const inActive = "w-full text-left p-3 hover:text-beer";

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>My Account - Ashta Banjan</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-3">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="p-4 w-80 h-full bg-base-200 text-base-content">
            <li>
              <NavLink to="dashboard">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    Dashboard
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="reservation">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    Reservation
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="payment">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    Payment History
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="cart">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    My Cart
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="review">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    My Review
                  </button>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
