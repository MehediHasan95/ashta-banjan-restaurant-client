import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = (page, limit) => {
  const {
    refetch,
    data: ourMenu,
    isLoading,
  } = useQuery({
    queryKey: ["menu"],

    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/menu?page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  return [ourMenu, refetch, isLoading];
};

export default useMenu;
