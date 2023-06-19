const CoverPhoto = ({ image, title, bio }) => {
  return (
    <div
      className="h-[30rem] relative bg-fixed bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="absolute top-1/4 bottom-1/4 left-[10%] right-[10%] bg-chineseBlack bg-opacity-50 text-white text-center flex justify-center items-center">
        <div>
          <h1 className="font-lobster text-3xl lg:text-6xl my-2">{title}</h1>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverPhoto;
