import { useEffect, useState } from "react";

const useTotalMenu = (category) => {
  const [totalMenu, setTotalMenu] = useState(0);
  useEffect(() => {
    fetch(
      `https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/count?category=${category}`
    )
      .then((res) => res.json())
      .then((res) => setTotalMenu(res.total));
  }, [category]);

  return [totalMenu];
};

export default useTotalMenu;
