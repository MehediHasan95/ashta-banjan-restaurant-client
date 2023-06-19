import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/banner/01.jpg";
import slider2 from "../../assets/banner/02.jpg";
import slider3 from "../../assets/banner/03.jpg";
import slider4 from "../../assets/banner/04.jpg";
import slider5 from "../../assets/banner/05.jpg";
import slider6 from "../../assets/banner/06.jpg";

const Banner = () => {
  const data = [slider1, slider2, slider3, slider4, slider5, slider6];

  return (
    <Carousel
      dynamicHeight={"false"}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      axis="horizontal"
    >
      {data.map((e, index) => (
        <div key={index} className=" lg:h-[45rem] overflow-hidden">
          <img src={e} alt="image" className="w-full h-full object-fill" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
