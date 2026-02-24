"use client";

import { motion } from "framer-motion";
import Partnerhero from "./hero";
import Footer from "../components/footer";

export default function PartnersPage() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-950 text-white">
      <Partnerhero />
      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 via-black to-gray-950">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight"
          >
            OUR <span className="text-yellow-400">PARTNERS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-md text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We collaborate with world-leading companies to deliver innovative solutions in
            <span className="text-yellow-400"> heavy machinery, mining, construction, and powertrain industries</span>
            across India and beyond.
          </motion.p>
        </div>
      </section>

      {/* Partner: AVTEC */}
      <article className="relative py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-800/60 to-black/60 backdrop-blur-lg hover:scale-[1.02] transition-transform">
              <img
                src="/t4.png"
                alt="AVTEC Limited"
                className="w-full h-[280px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-2xl font-bold text-yellow-400">AVTEC Limited</h2>
            <p className="mt-4 text-md text-gray-300 leading-relaxed">
              Since 2014, Setlite Engineers has been an authorized dealer of
              <span className="text-yellow-400 font-semibold"> AVTEC Limited</span>,
              a leading manufacturer of powertrain and precision-engineered products.
              This partnership ensures access to high-performance transmissions, engines,
              and spares across the automotive and off-highway industries in India.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-white">Capabilities & Brands</h3>
            <ul className="mt-4 grid gap-2 text-md text-gray-300 list-disc list-inside">
              <li>TT/TRT 2000 Series – wheel loaders, tow tractors, heavy forklifts, rail</li>
              <li>CRT 5633 – compact powershift (up to 430 HP) for railway & utility vehicles</li>
              <li>CT 100 – forklifts (5–10 tons) with versatile shifting options</li>
              <li>Legacy models: CLT 754, CLBT 754, M 6610</li>
            </ul>

            <p className="mt-6 text-gray-200 font-medium">
              Trusted globally by
              <span className="text-yellow-400"> General Motors, Ford, Mahindra & Mahindra, Caterpillar, BEML</span>
              and more.
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Founded in 2005 and part of the CK Birla Group, AVTEC is India’s largest independent
              manufacturer of engines and transmissions. By combining AVTEC’s engineering excellence
              with Setlite Engineers’ strong service ecosystem, customers gain reliable access to
              complete powertrain solutions—from spare parts and servicing to new transmission deliveries
              and customized contracts, ensuring consistent performance across industries.
            </p>
          </motion.div>
        </div>
      </article>

      {/* Divider */}
      <div className="h-[2px] max-w-4xl mx-auto bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 my-16"></div>

      {/* Partner: SKL Equipment + Kian Ann */}
      <article className="relative py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <h2 className="text-2xl font-bold text-yellow-400">SKL Equipment Pvt Ltd</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              In 2016, Setlite Engineers partnered with
              <span className="text-yellow-400 font-semibold"> Kian Ann Engineering Pte Ltd</span>,
              a global distributor of heavy machinery and diesel engine components based in Singapore.
              This joint venture led to the establishment of SKL Equipment Pvt Ltd, focusing on undercarriage
              solutions for open-pit mining, quarrying, and construction sectors in India.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-white">Kian Ann: Capabilities & Brands</h3>
            <ul className="mt-4 grid gap-2 text-gray-300 list-disc list-inside">
              <li>Undercarriage components & spare parts</li>
              <li>Diesel engine components</li>
              <li>Transmission & powertrain parts</li>
              <li>Hydraulic & electrical components</li>
              <li>Wear parts & accessories</li>
            </ul>

            <p className="mt-6 text-gray-200 font-medium">
              Supported Brands:
              <span className="text-yellow-400">
                Caterpillar, Komatsu, Cummins, Hitachi, Kobelco, Volvo, Mercedes Benz, Scania,
                Hyundai, Doosan, and more
              </span>
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Founded in 1965, Kian Ann Engineering is one of the world’s largest independent distributors
              of heavy machinery parts, distributing to 60+ countries worldwide from its 260,000 sq ft warehouse
              in Singapore. Its extensive inventory covers excavators, bulldozers, graders, paving machines,
              agricultural machinery, and dump trucks.
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              The joint venture between Setlite Engineers and Kian Ann combines Setlite’s expertise in the
              Indian market with Kian Ann’s global product range and logistics. SKL Equipment delivers reliable
              supply chains, premium undercarriage solutions, and world-class service tailored for India’s mining
              and construction industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-800/60 to-black/60 backdrop-blur-lg hover:scale-[1.02] transition-transform">
              <img
                src="/t5.png"
                alt="Kian Ann Engineering"
                className="w-full h-[200px] md:h-[310px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-950 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold"
        >
          Building <span className="text-yellow-400">Strong Partnerships</span>
        </motion.h2>
        <p className="mt-6 text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our alliances with AVTEC, Kian Ann, and other global leaders enable us to deliver unmatched
          quality, reliability, and innovation across automotive, construction, mining, and heavy equipment
          industries in India and abroad.
        </p>
      </section>
{/* Disclaimer */}
      <div className="border-b border-gray-800 pt-4  px-4 pb-10">
        <p className="text-xs md:text-sm text-gray-400 text-center max-w-5xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> All brand names and images used are
          solely for reference and illustration purposes. Setlite Engineers
          Limited does not imply any ownership or direct affiliation unless
          specifically stated.
        </p>
      </div>
      <Footer />
    </div>
  );
}
