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
 
        <PrimeMovers/>
        <OurExpertise/>
        <Presence/>
        <Commitment/>
      {/* Disclaimer */}
      <div className="border-b border-black bg-black pt-4  px-4 pb-10">
        <p className="text-xs md:text-sm text-gray-400 text-center max-w-5xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> All brand names and images used are
          solely for reference and illustration purposes. Setlite Engineers
          Limited does not imply any ownership or direct affiliation unless
          specifically stated.
        </p>
      </div>
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default About;

