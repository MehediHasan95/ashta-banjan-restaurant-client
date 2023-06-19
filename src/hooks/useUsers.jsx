import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    refetch,
    data = [],
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  return [data, refetch, isLoading];
};

export default useUsers;
