import Benefits from "./components/Benefits";
import Brands from "./components/Brands";
import OurCourses from "./components/OurCourses";
import OurPricing from "./components/OurPricing";
import Potential from "./components/Potential";
import Questions from "./components/Questions";
import Testimonials from "./components/Testimonials";
import { containerImg } from "./constants";

const Home = () => {
  return (
    <div className="px-10 lg:px-8 md:px-6 sm:px-4 xs:px-2">
      <Potential />
      <Brands />
      <div>
        <img
          className="h-1/2 w-full"
          src={containerImg}
          alt="img"
        />
      </div>
      <Benefits />
      <OurCourses />
      <Testimonials />
      <OurPricing />
      <Questions />
    </div>
  );
};

export default Home;
