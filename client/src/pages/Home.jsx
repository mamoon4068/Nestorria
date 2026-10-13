import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProperties from "../components/FeaturedProperties";
import Faq from "../components/Faq";

const Home = () => (
  <div className="bg-gradient-to-r from-[#fffbee] to-white">
    <Hero />
    <About />
    <FeaturedProperties />
    <Faq />
  </div>
);

export default Home;