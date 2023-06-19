import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <p className="text-beer italic">---What Our Clients Say---</p>
        <h1 className="text-4xl font-bold mt-2">
          OUR <span className="text-beer">TESTIMONIALS</span>
        </h1>
      </div>
      <div>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {review.map((e) => (
            <SwiperSlide key={e._id}>
              <div className="text-center p-10">
                <Rating
                  style={{
                    maxWidth: 100,
                    margin: "0 auto",
                  }}
                  value={e.rating}
                  readOnly
                />
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-9xl text-chineseBlack my-3"
                />
                <p className="w-full lg:w-3/4 mx-auto">{e.details}</p>
                <h1 className="text-2xl text-beer">{e.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
