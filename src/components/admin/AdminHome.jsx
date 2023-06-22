import {
  faKitchenSet,
  faTruck,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import OrderChart from "./OrderChart";
import OrderPieChart from "./OrderPieChart";

const AdminHome = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["admin-stats"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chart } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl">
        Hi, {user && user?.displayName} Welcome Back!
      </h1>
      <div className="grid gap-3 lg:grid-cols-4 my-5">
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#C651F7] to-[#FCDBFF]">
          <FontAwesomeIcon icon={faWallet} className="text-6xl" />
          <p className="text-2xl">
            ${data?.revenue[0]?.total} <br /> Revenue
          </p>
        </div>
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <FontAwesomeIcon icon={faUsers} className="text-6xl" />
          <p className="text-2xl">
            {data?.totalUsers} <br /> Users
          </p>
        </div>
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
          <FontAwesomeIcon icon={faKitchenSet} className="text-6xl" />
          <p className="text-2xl">
            {data?.totalRecipes} <br /> Recipes
          </p>
        </div>
        <div className="col-span-1 bg-beer text-white p-8 flex space-x-3 justify-center items-center bg-gradient-to-r from-[#72B5FF] to-[#B6F7FF]">
          <FontAwesomeIcon icon={faTruck} className="text-6xl" />
          <p className="text-2xl">
            {data?.totalOrder} <br /> Orders
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="col-span-1">
          <OrderChart data={chart} />
        </div>
        <div className="col-span-1">
          <OrderPieChart data={chart} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
