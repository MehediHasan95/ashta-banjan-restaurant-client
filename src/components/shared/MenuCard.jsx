const MenuCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-3 rounded p-5">
      <div className="w-1/6 lg:w-[12%] h-20 rounded-bl-[2rem] rounded-br-[2rem] rounded-tr-[2rem] overflow-hidden">
        <img src={image} alt="items" className="w-full h-full object-cover" />
      </div>
      <div className="w-10/12 lg:w-[88%]">
        <div className="flex justify-between items-center text-deepbeer">
          <h1 className="text-xl uppercase">{name}</h1>
          <hr className="border-dashed border-black w-3/6" />
          <p>${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;
