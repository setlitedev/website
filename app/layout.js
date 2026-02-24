import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Setlite Engineers Limited | Heavy Machinery Maintenance, Spare Parts & Service Solutions – India & Global",
  description:
    "Setlite Engineers Limited is a global leader in heavy equipment and mining machinery solutions. For over 30 years we provide expert maintenance, OEM spare parts, engine & transmission overhauling, and annual service contracts for mining, construction, railway and metro equipment across India and worldwide. Trusted by major OEMs and industries for reliable service, fast delivery, and cutting-edge workshop facilities.",
  keywords: [
    "Setlite Engineers Limited",
    "Setlite",
    "setlite",
    "heavy machinery maintenance India",
    "mining equipment service",
    "earthmoving equipment repair",
    "heavy equipment spare parts",
    "engine overhauling service",
    "transmission rebuilding",
    "railway maintenance contracts",
    "metro maintenance AMC",
    "global mining equipment support",
    "AVTEC authorized dealer",
    "construction equipment spare parts",
    "heavy equipment MRO solutions",
    "industrial engine repair",
    "mining spare parts supplier India",
    "heavy equipment service worldwide",
    "Setlite Engineers spare parts",
    "mining transmission overhauling",
    "engine refurbishment",
    "BEML Caterpillar Komatsu spares",
    "India heavy equipment leader",
    "global heavy machinery service",
    "earthmoving machinery support",
    "powertrain precision engineering",
    "industrial machinery maintenance",
  ],
  openGraph: {
    title: "Setlite Engineers Limited – Heavy Equipment Service & Spare Parts",
    description:
      "Trusted worldwide for heavy machinery maintenance, OEM spares, and mining equipment solutions. Over 30 years of excellence.",
    url: "https://www.setlite.com",
    siteName: "Setlite Engineers Limited",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Setlite Engineers Limited Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
