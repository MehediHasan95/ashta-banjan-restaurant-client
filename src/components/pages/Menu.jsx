import CoverPhoto from "../shared/CoverPhoto";
import image1 from "../../assets/menu/banner3.jpg";
import image2 from "../../assets/menu/salad-bg.jpg";
import image3 from "../../assets/menu/dessert-bg.jpeg";
import image4 from "../../assets/menu/soup-bg.jpg";
import image5 from "../../assets/menu/pizza-bg.jpg";
import MenuCard from "../shared/MenuCard";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useMenuCategory from "../../hooks/useMenuCategory";

const Menu = () => {
  const [offered] = useMenuCategory("offered");
  const [dessert] = useMenuCategory("dessert");
  const [salad] = useMenuCategory("salad");
  const [soup] = useMenuCategory("soup");
  const [pizza] = useMenuCategory("pizza");

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>Menu - Ashta Banjan</title>
      </Helmet>

      <CoverPhoto
        image={image1}
        title={"Our Menu"}
        bio={"Would you like to try a dish?"}
      />

      <div>
        <div className="text-center my-20">
          <p className="text-beer italic">---Don't miss---</p>
          <h1 className="text-4xl font-bold mt-2">
            TODAY'S <span className="text-beer">OFFER</span>
          </h1>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {offered.map((e) => (
            <MenuCard key={e._id} item={e} />
          ))}
        </div>
      </div>

      <div className="my-20">
        <CoverPhoto
          image={image3}
          title={"DESSERTS"}
          bio={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid gap-3 lg:grid-cols-2 my-10">
          {dessert.slice(0, 6).map((e) => (
            <MenuCard key={e._id} item={e} />
          ))}
        </div>
        <p className="text-center my-5">
          <Link to="/order">
            <button className="px-4 py-2 border-b-4 border-deepbeer rounded-lg hover:text-deepbeer">
              View Full Menu
            </button>
          </Link>
        </p>
      </div>

      <div className="my-20">
        <CoverPhoto
          image={image5}
          title={"PIZZA"}
          bio={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid gap-3 lg:grid-cols-2 my-10">
          {pizza.slice(0, 6).map((e) => (
            <MenuCard key={e._id} item={e} />
          ))}
        </div>
        <p className="text-center my-5">
          <Link to="/order">
            <button className="px-4 py-2 border-b-4 border-deepbeer rounded-lg hover:text-deepbeer">
              View Full Menu
            </button>
          </Link>
        </p>
      </div>

      <div className="my-20">
        <CoverPhoto
          image={image2}
          title={"SALADS"}
          bio={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid gap-3 lg:grid-cols-2 my-10">
          {salad.slice(0, 6).map((e) => (
            <MenuCard key={e._id} item={e} />
          ))}
        </div>
        <p className="text-center my-5">
          <Link to="/order">
            <button className="px-4 py-2 border-b-4 border-deepbeer rounded-lg hover:text-deepbeer">
              View Full Menu
            </button>
          </Link>
        </p>
      </div>

      <div className="my-20">
        <CoverPhoto
          image={image4}
          title={"SOUPS"}
          bio={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid gap-3 lg:grid-cols-2 my-10">
          {soup.slice(0, 6).map((e) => (
            <MenuCard key={e._id} item={e} />
          ))}
        </div>
        <p className="text-center my-5">
          <Link to="/order">
            <button className="px-4 py-2 border-b-4 border-deepbeer rounded-lg hover:text-deepbeer">
              View Full Menu
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Menu;
