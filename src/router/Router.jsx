import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Menu from "../components/pages/Menu";
import Order from "../components/pages/Order";
import Authentication from "../components/auth/Authentication";
import ErrorPage from "../components/pages/ErrorPage";
import MyAccount from "../components/pages/MyAccount";
import PrivateRouter from "./PrivateRouter";
import MyCart from "../components/pages/MyCart";
import MyDashboard from "../components/pages/MyDashboard";
import AdminDashboard from "../components/admin/AdminDashboard";
import AllUsers from "../components/admin/AllUsers";
import AddItems from "../components/admin/AddItems";
import AdminHome from "../components/admin/AdminHome";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManageItems from "../components/admin/ManageItems";
import UpdateItems from "../components/admin/UpdateItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "account",
        element: (
          <PrivateRouter>
            <MyAccount />
          </PrivateRouter>
        ),
        children: [
          {
            path: "dashboard",
            element: <MyDashboard />,
          },
          {
            path: "cart",
            element: <MyCart />,
          },
        ],
      },
      {
        path: "auth",
        element: <Authentication />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <PrivateRouter>
        <AdminPrivateRoute>
          <AdminDashboard />
        </AdminPrivateRoute>
      </PrivateRouter>
    ),
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "additems",
        element: <AddItems />,
      },
      {
        path: "allItem",
        element: <ManageItems />,
      },
      {
        path: "update/:id",
        element: <UpdateItems />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
