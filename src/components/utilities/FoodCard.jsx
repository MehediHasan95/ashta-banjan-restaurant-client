import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FoodCard = ({ item, handleAddToCart }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="col-span-1 overflow-hidden bg-base-200">
      <div className="h-80 relative">
        <img src={image} alt="image" className="w-full h-full object-cover" />
        <p className="bg-beer text-white absolute px-3 py-1 top-4 right-4">
          $ {price}
        </p>
      </div>
      <div className="text-center p-3">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{recipe.slice(0, 100)}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="bg-beer hover:bg-deepbeer text-white px-4 py-2 my-2"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
