
import Hero from "./components/hero";

import StatsSection from "./components/stats";
import Clients from "./components/client";
import Footer from "./components/footer";
import Categories from "./products/components/categories";
import ServiceCategories from "./services/components/servicecategory";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen ">
      <Hero />
      <Categories/>
      <ServiceCategories/>
      <StatsSection/>
      <Clients/>{/* Call to Action */}
 <div className="text-center pt-16 pb-16">
  <div className="bg-[#272B30] p-8 rounded-xl shadow-md max-w-3xl mx-auto border-amber-50 border-2">
    <h3 className="text-[20px] font-bold mb-4 text-white">Don't See Your Equipment?</h3>
    <p className="text-gray-300 mb-6 text-[13px]">
      We support hundreds of additional models across all major OEMs. Contact our technical team for specific model support and parts availability.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/contact">
      <button className="bg-yellow-500 text-[13px] text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
        Contact Technical Team
      </button>
      </Link>
      <Link href="/products">
      <button className="border border-yellow-500 text-[13px] text-yellow-500 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition">
        Browse All Equipment
      </button>
      </Link>
    </div>
  </div>
</div>
 {/* Disclaimer */}
      <div className="border-b border-black   px-4 pb-10">
        <p className="text-xs md:text-[13px] text-gray-400 text-center max-w-5xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> All brand names and images used are
          solely for reference and illustration purposes. Setlite Engineers
          Limited does not imply any ownership or direct affiliation unless
          specifically stated.
        </p>
      </div>
      <Footer/>
    </div>
  );
}
