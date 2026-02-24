import Image from "next/image";

const timelineData = [
  {
    year: "1993",
    title: "Incorporation",
    description:
      "Setlite Engineers Limited was founded to provide high-standard services and spare parts support for the earthmoving equipment industry.",
    logo: null,
    image: "/logo.png",
    align: "left",
  },
  {
    year: "1995",
    title: "Hindustan Motors Partnership",
    description:
      "Signed agreement with Hindustan Motors Power Products Division, gaining specialized expertise in transmission overhauling and parts support.",
    logo: "/t2.png",
    image: null,
    align: "right",
  },
  {
    year: "2012",
    title: "International Expansion",
    description:
      "Partnered with Kian Ann Engineering Ltd (Singapore) to supply genuine spares for Komatsu, Hitachi, and other heavy equipment.",
    logo: null,
    image: "/t3.png",
    align: "left",
  },
  {
    year: "2014",
    title: "Authorized AVTEC Dealership",
    description:
      "Partnered with AVTEC, India's leading manufacturer of powertrain and precision-engineered products, supporting OEMs like BEML, Caterpillar, and ISUZU.",
    logo: "/t4.png",
    image: null,
    align: "right",
  },
  {
    year: "2015",
    title: "Joint Venture with Kian Ann",
    description:
      "Formed Setlite Kian Ann Limited (SKL) to supply undercarriage solutions for open-pit mining, quarrying, and construction.",
    logo: "/t5.png",
    image: null,
    align: "left",
  },
  {
    year: "2018",
    title: "State-of-the-Art Workshop",
    description:
      "Opened a modern Ballabhgarh facility for repairing and refurbishing engines & transmissions from upto 1400 HP.",
    logo: null,
    image: "/t6.jpg",
    align: "right",
  },
  {
    year: "2025",
    title: "State-of-the-Art MRO Facility in Northern India",
    description:
      "Spanning 1.3 acres, our upcoming facility in Northern India will serve as a premier service centre for complete engines and transmission overhauling, as well as refurbishment of large-scale mining equipment like excavators, loaders, and dozers. Strategically located near a major port with direct access to an expressway leading to Delhi airport, it ensures seamless logistics and accessibility for clients. Equipped with state-of-the-art technology, advanced diagnostic tools, efficient workflows, and skilled expertise, the facility is designed to deliver unmatched maintenance, repair, and overhaul (MRO) services—setting a new benchmark in the region.",
    logo: null,
    image: "/2025.jpg",
    align: "left",
  },
];

const Timeline = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-950 text-white py-20">
      {/* Section Header */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-3xl md:text-3xl font-extrabold tracking-wide">
          OUR <span className="text-yellow-400">JOURNEY</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-sm">
          A timeline of growth, partnerships, and innovation
        </p>
      </div>

      {/* Vertical Line (desktop only, spans full height of container) */}
      <div className="hidden md:block absolute left-1/2 top-[10%] bottom-0 w-[3px] bg-yellow-400 transform -translate-x-1/2"></div>

      {/* Timeline Items */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 relative">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center mb-20 md:mb-24"
          >
            {/* MOBILE: Logo above content */}
            <div className="flex flex-col items-center md:hidden mb-6">
              {(item.logo || item.image) && (
                <div className="relative w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-gray-900 border-4 border-yellow-400 overflow-hidden shadow-lg">
                  <Image
                    src={item.logo || item.image}
                    alt="timeline"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* DESKTOP LEFT SIDE */}
            {item.align === "left" && (
              <>
                <div className="hidden md:flex w-1/2 justify-end pr-6">
                  <div className="bg-[#272B30] border border-white/20 text-white p-8 rounded-xl shadow-lg max-w-md relative transition-all duration-300 hover:scale-[1.02]">
                    <span className="text-yellow-400 font-bold text-xl md:text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold mt-2 text-lg md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-md mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="absolute right-[-11px] top-8 w-5 h-5 rounded-full bg-yellow-400 border-4 border-[#0c0e0f]"></span>
                  </div>
                </div>

                {/* Desktop Circle */}
                <div className="hidden md:flex flex-col items-center mx-6">
                  {(item.logo || item.image) && (
                    <div className="relative w-30 h-30 md:w-30 md:h-30 rounded-full bg-gray-900 border-4 border-yellow-400 overflow-hidden shadow-lg">
                      <Image
                        src={item.logo || item.image}
                        alt="timeline"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="hidden md:block w-1/2"></div>
              </>
            )}

            {/* DESKTOP RIGHT SIDE */}
            {item.align === "right" && (
              <>
                <div className="hidden md:block w-1/2"></div>

                {/* Desktop Circle */}
                <div className="hidden md:flex flex-col items-center mx-6">
                  {(item.logo || item.image) && (
                    <div className="relative w-32 h-32 md:w-30 md:h-30 rounded-full bg-gray-900 border-4 border-yellow-400 overflow-hidden shadow-lg">
                      <Image
                        src={item.logo || item.image}
                        alt="timeline"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="hidden md:flex w-1/2 justify-start pl-6">
                  <div className="bg-[#272B30] border border-white/20 text-white p-8 rounded-xl shadow-lg max-w-md relative transition-all duration-300 hover:scale-[1.02]">
                    <span className="text-yellow-400 font-bold text-xl md:text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold mt-2 text-lg md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-md mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="absolute left-[-11px] top-8 w-5 h-5 rounded-full bg-yellow-400 border-4 border-[#0c0e0f]"></span>
                  </div>
                </div>
              </>
            )}

            {/* MOBILE CONTENT (always below logo) */}
            <div className="md:hidden w-full flex justify-center">
              <div className="bg-[#272B30] border border-white/20 text-white p-6 sm:p-8 rounded-xl shadow-lg max-w-lg relative transition-all duration-300 hover:scale-[1.02]">
                <span className="text-yellow-400 font-bold text-lg sm:text-xl">
                  {item.year}
                </span>
                <h3 className="text-white font-semibold mt-2 text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
