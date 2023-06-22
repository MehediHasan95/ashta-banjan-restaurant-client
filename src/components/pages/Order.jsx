import { useContext, useEffect, useState } from "react";
import image from "../../assets/banner2.jpg";
import CoverPhoto from "../shared/CoverPhoto";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Helmet } from "react-helmet-async";
import FoodCard from "../utilities/FoodCard";
import useMenuCategory from "../../hooks/useMenuCategory";
import useTotalMenu from "../../hooks/useTotalMenu";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";
import swal from "sweetalert";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [tabIndex, setTabIndex] = useState(0);
  const [menuCategory, setMenuCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);
  const selectedCategory = menuCategory[tabIndex];
  const [totalMenu] = useTotalMenu(selectedCategory || "salad");
  const [menuItems] = useMenuCategory(selectedCategory || "salad", page, limit);

  const pagesNumbers = [...Array(Math.ceil(totalMenu / limit)).keys()];
  const [data, refetch] = useCart();

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((res) => setMenuCategory(res));
  }, [tabIndex]);

  const handleAddToCart = (item) => {
    if (user) {
      fetch(
        "https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/carts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
            menuId: item._id,
            name: item.name,
            image: item.image,
            price: item.price,
            category: item.category,
          }),
        }
      )
        .then((res) => res.json())
        .then(() => {
          refetch();
        });
    } else {
      swal("Please signin", {
        icon: "warning",
        buttons: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>Order - Ashta Banjan</title>
      </Helmet>
      <CoverPhoto
        image={image}
        title={"Your Order"}
        bio={"Would you like to try a dish?"}
      />
      <div className="my-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="text-center"
          selectedTabClassName="text-beer font-bold border-b-4 border-b-beer"
        >
          <TabList className="border-none flex justify-center my-10">
            {menuCategory.map((e, index) => (
              <Tab
                key={index}
                className="text-xs lg:text-base uppercase px-2 lg:px-5 cursor-pointer"
              >
                {e}
              </Tab>
            ))}
          </TabList>

          {menuCategory.map((e, index) => (
            <TabPanel key={index}>
              <div className="grid px-2 gap-5 grid-cols-2 lg:grid-cols-3">
                {menuItems.map((item) => (
                  <FoodCard
                    key={item._id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
              <div className="my-5">
                {pagesNumbers.length > 1 && (
                  <>
                    {pagesNumbers.map((number) => (
                      <button
                        onClick={() => setPage(number)}
                        key={number}
                        className={`mx-1 border w-10 h-10 border-beer ${
                          page === number && "bg-beer text-white"
                        }`}
                      >
                        {number + 1}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
