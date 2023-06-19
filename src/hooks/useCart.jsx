import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data = [] } = useQuery({
    queryKey: ["carts"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [data, refetch];
};

export default useCart;
