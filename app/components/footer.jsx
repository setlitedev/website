"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white"> 
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Logo, Description, Social Media */}
        <div className="mb-10 md:mb-0 mt-4 max-w-md">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-20 h-20 flex items-center  justify-center">
              <Image
                src="/logo.png"
                alt="Setlite Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-[16px] font-bold tracking-wide">
                SETLITE ENGINEERS LIMITED
              </h3>
              <p className="text-[14px] text-gray-400 ">
                Your Prime Movers
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[14px] text-gray-400 mb-6">
            Trusted global partner in mining, construction, and railway
            maintenance. Delivering precision engineering solutions since 1993.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-6">
            <Link
              href="https://www.linkedin.com/company/setliteengineersltd/"
              target="_blank"
              className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/setliteengineersltd/"
              target="_blank"
              className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Right Section: Quick Links and Contact Info */}
        <div className="flex flex-col md:flex-row md:space-x-16 mt-6">
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-[16px] font-bold mb-3">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-500 text-[13px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-yellow-500 text-[13px]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500 text-[13px]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[16px] font-bold mb-3">Head Office</h4>
            <ul className="text-sm text-gray-400 space-y-3 max-w-xs">
              <li className="flex items-start">
                <MdLocationOn className="mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/5-G,+5th+Floor,+Vandana+Building,+11+Tolstoy+Marg,+Connaught+Place,+New+Delhi,+110001,+India"
                  target="_blank"
                  className="hover:text-yellow-500 text-[13px]"
                >
                  5-G, 5th Floor, Vandana Building, 11 Tolstoy Marg,
                  Connaught Place, New Delhi – 110001, India
                </a>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2 text-yellow-500 " />
                <a href="tel:+911123311111" className="hover:text-yellow-500 text-[13px]">
                  +91-11-23311111
                </a>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-yellow-500" />
                <a
                  href="mailto:sales@setlite.com"
                  className="hover:text-yellow-500 text-[13px]"
                >
                  sales@setlite.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     

      {/* Bottom Separator and Copyright */}
      <div className="border-t border-gray-700 pt-4 pb-6">
        <p className="text-xs text-gray-400 text-center">
          © 2025 Setlite Engineers Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
