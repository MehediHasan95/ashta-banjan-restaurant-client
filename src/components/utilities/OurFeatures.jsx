import feature from "../../assets/featured.jpg";

const OurFeatures = () => {
  return (
    <div className="my-20 min-h-[60vh] bg-fixed bg-feature bg-center bg-no-repeat bg-cover grid place-items-center">
      <div>
        <div className="text-center mb-10">
          <p className="text-beer italic">---Check it out---</p>
          <h1 className="text-4xl font-bold mt-2 text-white">
            FROM OUR <span className="text-beer">MENU</span>
          </h1>
        </div>
        <div className="w-3/5 mx-auto flex justify-center items-center bg-white bg-opacity-80 text-chineseBlack space-x-10">
          <img
            src={feature}
            alt="featured"
            className="w-3/12 lg:w-3/6 rounded"
          />
          <div>
            <p className="text-xs lg:text-base">
              March 20, 2023 <br />
              WHERE CAN I GET SOME? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="px-4 py-2 border-b-4 border-chineseBlack rounded-lg hover:text-deepbeer">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
