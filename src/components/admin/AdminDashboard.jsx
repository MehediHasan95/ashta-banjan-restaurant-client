import {
  faBook,
  faHome,
  faListUl,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
  const active = "w-full text-left p-3 text-deepbeer font-extrabold";
  const inActive = "w-full text-left p-3 hover:text-deepbeer";

  return (
    <div>
      <Helmet>
        <title>Admin - Ashta Banjan</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-2">
          <div className="lg:hidden flex items-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <h1 className="ms-2">Ashta Banjan admin panel</h1>
          </div>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="p-4 w-80 h-full bg-beer text-white">
            <div className="flex items-center font-lobster my-5">
              <img src={logo} alt="logo" className="w-10" />
              <p className="text-3xl text-chineseBlack">
                <span className="text-white">Ashta</span>Banjan
              </p>
            </div>
            <div className="divider"></div>
            <li>
              <NavLink to="home">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    <FontAwesomeIcon icon={faHome} className="me-3" />
                    Admin Home
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="additems">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    <FontAwesomeIcon icon={faUtensils} className="me-3" />
                    Add Items
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="allItem">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    <FontAwesomeIcon icon={faListUl} className="me-3" />
                    Manage Items
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="booking">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    <FontAwesomeIcon icon={faBook} className="me-3" />
                    Manage Bookings
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="users">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    <FontAwesomeIcon icon={faUsers} className="me-3" />
                    All Users
                  </button>
                )}
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    <FontAwesomeIcon icon={faHome} className="me-3" />
                    Home
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

export default AdminDashboard;
