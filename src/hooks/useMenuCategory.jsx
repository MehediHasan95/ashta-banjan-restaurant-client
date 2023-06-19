import { useEffect, useState } from "react";

const useMenuCategory = (category, page, limit) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:5000/category?category=${category}&page=${page}&limit=${limit}`
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
