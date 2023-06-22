import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMyOrder = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    refetch,
    data: myOrder,
    isLoading,
  } = useQuery({
    queryKey: ["payment"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?uid=${user?.uid}`);
      return res.data;
    },
  });

  return [myOrder, refetch, isLoading];
};

export default useMyOrder;
