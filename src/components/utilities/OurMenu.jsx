import MenuCard from "../shared/MenuCard";
import useMenuCategory from "../../hooks/useMenuCategory";

const OurMenu = () => {
  const [popularMenu] = useMenuCategory("popular");

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <p className="text-beer italic">---Check it out---</p>
        <h1 className="text-4xl font-bold mt-2">
          FROM OUR <span className="text-beer">MENU</span>
        </h1>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {popularMenu.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <p className="text-center my-5">
        <button className="px-4 py-2 border-b-4 border-deepbeer rounded-lg hover:text-deepbeer">
          View Full Menu
        </button>
      </p>
    </div>
  );
};

export default OurMenu;
