import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [data, refetch] = useCart();
  const [admin] = useAdmin();

  const active = "px-5 py-2 text-deepbeer font-bold";
  const inActive = "px-5 py-2 hover:text-beer";

  const handleSignOut = () => [
    userSignOut()
      .then(() => {
        refetch();
      })
      .catch((err) => console.log(err.code)),
  ];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto drawer z-20">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-transparent text-chineseBlack">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
            </div>
            <div className="flex-1">
              <div className="flex items-center font-lobster">
                <img src={logo} alt="logo" className="w-10" />
                <p className="text-3xl text-chineseBlack">
                  <span className="text-deepbeer">Ashta</span>Banjan
                </p>
              </div>
            </div>
            <div className="block lg:flex-none lg:hidden">
              <Link to="/account/cart">
                <button className="px-5 py-2 hover:text-beer relative">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <small className="absolute top-1 mx-1">
                    {data?.length > 0 && data.length}
                  </small>
                </button>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="flex items-center">
                <li>
                  <NavLink to="/">
                    {({ isActive }) => (
                      <button className={isActive ? active : inActive}>
                        Home
                      </button>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/menu">
                    {({ isActive }) => (
                      <button className={isActive ? active : inActive}>
                        Menu
                      </button>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order">
                    {({ isActive }) => (
                      <button className={isActive ? active : inActive}>
                        Order
                      </button>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    {({ isActive }) => (
                      <button className={isActive ? active : inActive}>
                        Contact
                      </button>
                    )}
                  </NavLink>
                </li>
                {user && (
                  <>
                    {admin?.role ? (
                      <li>
                        <NavLink to="/admin/home">
                          {({ isActive }) => (
                            <button className={isActive ? active : inActive}>
                              {user?.displayName}'s Account
                            </button>
                          )}
                        </NavLink>
                      </li>
                    ) : (
                      <li>
                        <NavLink to="/account/dashboard">
                          {({ isActive }) => (
                            <button className={isActive ? active : inActive}>
                              {user?.displayName}'s Account
                            </button>
                          )}
                        </NavLink>
                      </li>
                    )}
                  </>
                )}

                <li>
                  <Link to="/account/cart">
                    <button className="px-5 py-2 hover:text-beer relative">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <small className="absolute top-1 mx-1">
                        {data?.length > 0 && data.length}
                      </small>
                    </button>
                  </Link>
                </li>

                <li>
                  {user ? (
                    <button
                      onClick={handleSignOut}
                      className="px-5 py-2 hover:text-beer"
                    >
                      Signout
                    </button>
                  ) : (
                    <Link to="/auth">
                      <button className="px-5 py-2 hover:text-beer">
                        Signin
                      </button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="p-4 w-80 h-full bg-base-200">
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>Home</button>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/menu">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>Menu</button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/order">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    Order
                  </button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {({ isActive }) => (
                  <button className={isActive ? active : inActive}>
                    Contact
                  </button>
                )}
              </NavLink>
            </li>
            {user && (
              <li>
                <details>
                  <summary>
                    {admin?.role ? (
                      <NavLink to="/admin/home">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {user?.displayName}'s Account
                          </button>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink to="/account/dashboard">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {user?.displayName}'s Account
                          </button>
                        )}
                      </NavLink>
                    )}
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <NavLink to="/admin/home">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {/* <FontAwesomeIcon icon={faHome} className="me-3" /> */}
                            Admin Home
                          </button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/admin/additems">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {/* <FontAwesomeIcon icon={faUtensils} className="me-3" /> */}
                            Add Items
                          </button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/admin/payment">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {/* <FontAwesomeIcon icon={faListU} className="me-3" /> */}
                            Manage Items
                          </button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/admin/cart">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {/* <FontAwesomeIcon icon={faBook} className="me-3" /> */}
                            Manage Bookings
                          </button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/admin/users">
                        {({ isActive }) => (
                          <button className={isActive ? active : inActive}>
                            {/* <FontAwesomeIcon icon={faUsers} className="me-3" /> */}
                            All Users
                          </button>
                        )}
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
            <li>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="px-5 py-2 hover:text-beer"
                >
                  Signout
                </button>
              ) : (
                <Link to="/auth">
                  <button className="px-5 py-2 hover:text-beer">Signin</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
