import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import slider1 from "../../assets/category/slide1.jpg";
import slider2 from "../../assets/category/slide2.jpg";
import slider3 from "../../assets/category/slide3.jpg";
import slider4 from "../../assets/category/slide4.jpg";
import slider5 from "../../assets/category/slide5.jpg";
import service from "../../assets/category/chef-service.jpg";
import CoverPhoto from "../shared/CoverPhoto";

const Category = () => {
  const data = [
    {
      img: slider1,
      title: "Salads",
    },
    {
      img: slider2,
      title: "Pizza",
    },
    {
      img: slider3,
      title: "Soups",
    },
    {
      img: slider4,
      title: "Desserts",
    },
    {
      img: slider5,
      title: "Salad",
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <p className="text-beer italic">---From 11:00am to 10:00pm---</p>
        <h1 className="text-4xl font-bold mt-2">
          ORDER <span className="text-beer">ONLINE</span>
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {data.map((e, index) => (
          <SwiperSlide
            key={index}
            className="rounded-lg overflow-hidden w-96 h-[30rem]"
          >
            <img
              src={e.img}
              alt="slider"
              className="w-full h-full object-cover"
            />
            <h1 className="text-3xl text-center font-bold text-white text-opacity-80 font-lobster -mt-20">
              {e.title}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-20">
        <CoverPhoto
          image={service}
          title={"AshtaBanjan"}
          bio={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.`}
        />
      </div>
    </div>
  );
};

export default Category;
