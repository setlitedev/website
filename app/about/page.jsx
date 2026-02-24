import Footer from "../components/footer";
import AboutHero from "./components/abouthero";
import Commitment from "./components/commitment";

import OurExpertise from "./components/expertise";
import Presence from "./components/presence";
import PrimeMovers from "./components/prime";
import Timeline from "./components/Timeline";


const About = () => {
  return (
    <div className="min-h-screen bg-[#101416] text-white overflow-hidden">
      <div className=" mx-auto">
        <AboutHero />
        <div>

          <Timeline />

          <PrimeMovers />
          <OurExpertise />
          <Presence />
          <Commitment />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;

