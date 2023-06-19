import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    refetch,
    data: admin,
    isLoading,
  } = useQuery({
    queryKey: ["admin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.uid}`);
      return res.data;
    },
  });
  return [admin, refetch, isLoading];
};

export default useAdmin;
