import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const [admin, refetch, isLoading] = useAdmin();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-[70vh] grid place-items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else if (admin.role === "admin") {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default AdminPrivateRoute;
