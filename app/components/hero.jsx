import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://setlite.com"),
  title: {
    default: "Setlite | Heavy Equipment Parts & Service",
    template: "%s | Setlite",
  },
  description:
    "Setlite provides trusted heavy-duty equipment service and parts. With 30+ years experience, 1,00,000+ parts in stock, and service across 50+ countries, we power global uptime.",
  keywords: [
    "Setlite",
    "Heavy Equipment",
    "Undercarriage Parts",
    "Excavator Parts",
    "Bulldozer Parts",
    "Construction Equipment",
    "Mining Equipment",
    "Global Equipment Service",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://setlite.com",
    siteName: "Setlite",
    title: "Setlite | Heavy Equipment Parts & Service",
    description:
      "Trusted worldwide for heavy-duty equipment service. 30+ years experience, 1,00,000+ parts in stock, serving 50+ countries.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Setlite Heavy Equipment Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@setlite",
    title: "Setlite | Heavy Equipment Parts & Service",
    description:
      "Trusted worldwide for heavy-duty equipment service and parts supply.",
    images: ["/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};


const stats = [
  { number: "30+", label: "YEARS EXPERIENCE" },
  { number: "1,00,000+", label: "PARTS IN STOCK" },
  { number: "50+", label: "COUNTRIES SERVED" },
];

export default function HeroPage() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-20 md:pt-14 2xl:pt-10"
      aria-label="Hero Section - Heavy Equipment Services"
    >
      {/* Background Video */}
<video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"

  crossOrigin="anonymous"
  className="absolute inset-0 h-full w-full object-cover"
>
  <source
    src="https://ik.imagekit.io/l76jfketc/video/herovideo.webm?tr=w-1920,q-40,f-auto"
    type="video/webm"
  />
  <source
    src="https://ik.imagekit.io/l76jfketc/video/herovideo.mp4?tr=w-1920,q-40,f-auto"
    type="video/mp4"
  />
</video>



      {/* Red Gradient + Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,29,29,0.7)_0%,rgba(127,29,29,0.6)_30vw,transparent_50vw)] bg-black/20" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom_right,black_0%,rgba(0,0,0,0.9)_30%,transparent_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4 animate-fade-in mt-10">
          <h1 className="font-rajdhani text-3xl font-bold leading-tight tracking-wide text-white md:text-[38px]">
            POWERING HEAVY-DUTY
            <span className="block text-yellow-400">UPTIME</span>
          </h1>
          <h2 className="font-rajdhani text-lg font-normal uppercase tracking-wide text-white/90">
            Trusted Worldwide for Total Heavy Equipment Service
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:0.4s]">
          <Link href="/services" aria-label="Explore Our Services">
            <button className="group text-[14px] flex items-center justify-center rounded-lg bg-yellow-400 px-8 py-3 font-medium text-gray-900 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-yellow-300">
              EXPLORE OUR SERVICES
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="/contact" aria-label="Contact Us">
            <button className="group text-[14px] flex items-center justify-center rounded-lg border-2 border-yellow-400 px-8 py-3 font-medium text-yellow-400 transition-all duration-200 hover:scale-105 hover:border-yellow-300 hover:text-yellow-300">
              CONTACT US
            </button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
          {stats.map(({ number, label }, i) => (
            <div key={i} className="group text-center">
              <div className="font-rajdhani text-4xl font-bold text-yellow-400 transition-transform group-hover:scale-110">
                {number}
              </div>
              <div className="text-md uppercase tracking-wide text-white/80">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </section>
  );
}
