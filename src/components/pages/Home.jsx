import { Helmet } from "react-helmet-async";
import Banner from "../utilities/Banner";
import Category from "../utilities/Category";
import ChefRecommends from "../utilities/ChefRecommends";
import OurFeatures from "../utilities/OurFeatures";
import OurMenu from "../utilities/OurMenu";
import Testimonial from "../utilities/Testimonial";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>Home - Ashta Banjan</title>
      </Helmet>
      <Banner />
      <Category />
      <OurMenu />
      <ChefRecommends />
      <OurFeatures />
      <Testimonial />
    </div>
  );
};

export default Home;
