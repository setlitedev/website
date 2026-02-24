"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Tooltip as ReactTooltip } from "react-tooltip";

// ✅ Dynamically import react-simple-maps (fixes SSR issues in Next.js)
const ComposableMap = dynamic(
  () => import("react-simple-maps").then((m) => m.ComposableMap),
  { ssr: false }
);
const Geographies = dynamic(
  () => import("react-simple-maps").then((m) => m.Geographies),
  { ssr: false }
);
const Geography = dynamic(
  () => import("react-simple-maps").then((m) => m.Geography),
  { ssr: false }
);

// 🌍 World topojson data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Certification Badges data
  const badges = [
    {
      title: "ISO Certified",
      description: "Meeting global quality standards",
      icon: require("lucide-react").ShieldCheck,
    },
    {
      title: "Trusted Supplier",
      description: "Over 1,00,000+ parts supplied worldwide",
      icon: require("lucide-react").Package,
    },
    {
      title: "Global Network",
      description: "Supplying to 50+ countries",
      icon: require("lucide-react").Globe,
    },
    {
      title: "30+ Years Experience",
      description: "Three decades of expertise",
      icon: require("lucide-react").Award,
    },
    {
      title: "Customer Support",
      description: "24/7 assistance worldwide",
      icon: require("lucide-react").Headphones,
    },
  ];

  const stats = [
    {
      number: 30,
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise since 1993",
    },
    {
      number: 100000,
      suffix: "+",
      label: "Parts in Stock",
      description: "Ready for immediate dispatch",
    },
    {
      number: 50,
      suffix: "+",
      label: "Countries Served",
      description: "Global service network",
    },
  ];

  // Highlighted countries
  const highlightCountries = [
    "United States of America",
    "Germany",
    "Russia",
    "China",
    "India",
    "Indonesia",
    "Australia",
    "South Africa",
    "United Kingdom",
    "Nepal",
    "United Arab Emirates",
    "Turkey",
    "Canada",
    "Oman",
    "Saudi Arabia",
  ];

  // ✅ Observer to start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0, // trigger as soon as it enters
        rootMargin: "0px 0px -10% 0px", // small preload margin
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Counter animation
  const CountUpNumber = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(end * easeOutQuart));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(end);
      };
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span className="font-bold text-3xl md:text-[32px] text-yellow-500">
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative bg-[#0D1013] overflow-hidden text-white"
    >
      {/* 🔴 Grid overlay inside red gradient area */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, transparent 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[32px] font-bold mb-1">
            WHY <span className="text-yellow-400">SEL</span>
          </h2>
          <p className="text-lg md:text-[16px] text-gray-400 max-w-2xl mx-auto">
            Over Three decades of engineering excellence delivering reliable
            solutions worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
    {stats.map((stat, index) => (
  <div
    key={index}
    className="text-center bg-[#272B30] py-4 rounded-xl shadow-md w-72 border-amber-50 border-2"
  >
    <div className="text-[12px] font-bold">
      <CountUpNumber end={stat.number} suffix={stat.suffix} />
    </div>
    <h3 className="text-lg md:text-[16px] font-semibold mt-2">
      {stat.label}
    </h3>
    <p className="text-sm md:text-[12px] text-gray-400">
      {stat.description}
    </p>
  </div>
))}
        </div>

        {/* Global Sourcing Network */}
        <div className="text-center mb-12 max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">GLOBAL SOURCING NETWORK</h3>

          <div className="p-4">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 120 }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties.name;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        data-tooltip-id="map-tooltip"
                        data-tooltip-content={countryName}
                        style={{
                          default: {
                            fill: highlightCountries.includes(countryName)
                              ? "#FFD600"
                              : "transparent",
                            stroke: "#666",
                            strokeWidth: 0.5,
                          },
                          hover: { fill: "#FFC107", outline: "none" },
                          pressed: { fill: "#FFB300", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
            <ReactTooltip id="map-tooltip" />
          </div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-[16px]">
            Our global export network delivers top-grade machinery parts across
            continents, supporting industries with speed and reliability.
          </p>
        </div>

        {/* ✅ Certification Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1E23] rounded-xl shadow-md p-4 text-center hover:shadow-[0_0_20px_rgba(255,214,0,0.5)] transition-shadow"
              >
                <div className="flex items-center justify-center w-8 h-8 mx-auto rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="inline-block mt-4 px-3 py-1 text-xs font-medium text-yellow-500 bg-yellow-500/10 rounded-full">
                  {badge.title}
                </span>
                <p className="text-sm text-gray-400 mt-3">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
