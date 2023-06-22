import { useEffect, useState } from "react";

const useMenuCategory = (category, page, limit) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/category?category=${category}&page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
      });
  }, [category, limit, page]);
  return [categories];
};

export default useMenuCategory;
