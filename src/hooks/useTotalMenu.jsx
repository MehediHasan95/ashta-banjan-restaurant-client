import { useEffect, useState } from "react";

const useTotalMenu = (category) => {
  const [totalMenu, setTotalMenu] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/count?category=${category}`)
      .then((res) => res.json())
      .then((res) => setTotalMenu(res.total));
  }, [category]);

  return [totalMenu];
};

export default useTotalMenu;
