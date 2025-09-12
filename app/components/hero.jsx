import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-14 2xl:pt-10 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
       <video
  src="/herovideo.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
></video>

        
       {/* Top-left red gradient overlay with grid */}
<div
  className="absolute inset-0 pointer-events-none opacity-80"
  style={{
    background: "radial-gradient(circle at top left, rgba(127,29,29,0.7) 0%, rgba(127,29,29,0.6) 10vw, transparent 30vw)",
  }}
>
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(circle at top left, rgba(127,29,29,0.7) 0%, rgba(127,29,29,0.6) 30vw, transparent 50vw),
      rgba(0,0,0,0.2)
    `,
  }}
></div>



  {/* Grid pattern only inside red area */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
      backgroundSize: "20px 20px", // bigger boxes
      maskImage:
        "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, transparent 100%)",
    }}
  ></div>
  </div>



      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-fade-in mt-10">
            <h1 className="text-5xl md:text-6xl font-bold font-rajdhani leading-tight tracking-wide text-white">
              POWERING HEAVY-DUTY
              <span className="block text-yellow-400">UPTIME</span>
            </h1>
            <h2 className="text-xl md:text-xl font-semibold font-rajdhani uppercase tracking-wide text-white/90">
              Trusted Worldwide for Total Heavy Equipment Service
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
            <Link href="/services">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center group">
              EXPLORE OUR SERVICES
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link href="/contact">
            <button className="border-2 border-yellow-400 hover:border-yellow-300 text-yellow-400 hover:text-yellow-300 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center group">
              CONTACT US
            </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            {[
              { number: "30+", label: "YEARS EXPERIENCE" },
              { number: "1,00,000+", label: "PARTS IN STOCK" },
              { number: "50+", label: "COUNTRIES SERVED" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold font-rajdhani text-yellow-400 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-md text-white/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Electrical Trace Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </section>
  );
};

export default Hero;