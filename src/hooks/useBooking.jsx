import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = () => {
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: booking } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get("/booking");
      return res.data;
    },
  });
  return [booking, refetch];
};

export default useBooking;
