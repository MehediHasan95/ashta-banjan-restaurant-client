import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Name: {user && user?.displayName} </h1>
      <h1>Email: {user && user?.email} </h1>
    </div>
  );
};

export default MyDashboard;
