import salad from "../../assets/category/slide1.jpg";
import FoodCard from "./FoodCard";

const ChefRecommends = () => {
  const data = [
    {
      name: "Caeser Salad",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      price: 25.8,
      image: salad,
    },
    {
      name: "Caeser Salad",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      price: 45.8,
      image: salad,
    },
    {
      name: "Caeser Salad",
      recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      price: 35.8,
      image: salad,
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <p className="text-beer italic">---Should Try---</p>
        <h1 className="text-4xl font-bold mt-2">
          CHEF <span className="text-beer">RECOMMENDS</span>
        </h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((e, index) => (
          <FoodCard key={index} item={e} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
