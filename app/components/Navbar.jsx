"use client";
import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Search,
  Menu,
  X,
  Home,
  Info,
  Box,
  Wrench,
  Phone as PhoneIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false); // Mobile dropdown
  const [mounted, setMounted] = useState(false);

  // Ensure hydration-safe rendering
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Products", href: "/products", icon: Box },
    { label: "Services", href: "/services", icon: Wrench },
    { label: "Contact Us", href: "/contact", icon: PhoneIcon },
  ];

  const moreItems = [
    { label: "Partners", href: "/partners" },
    { label: "Blogs", href: "/blogs" },
  ];

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                <Image
                  src="/logo.png"
                  alt="SEL Logo"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h1 className="hidden sm:block text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                <span className="text-[#FBC400]">S</span>
                <span className="text-white dark:text-gray-100">ETLITE </span>
                <span className="text-[#FBC400]">E</span>
                <span className="text-white dark:text-gray-100">NGINEERS </span>
                <span className="text-[#FBC400]">L</span>
                <span className="text-white dark:text-gray-100">IMITED</span>
              </h1>
            </div>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-6 pb-6 ${
          isScrolled
            ? "bg-black dark:bg-black backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-md py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="SEL Logo"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                {/* Company Name */}
                <div className="hidden sm:block">
                  <h1 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    <span className="text-[#FBC400]">S</span>
                    <span className="text-white dark:text-gray-100">ETLITE </span>
                    <span className="text-[#FBC400]">E</span>
                    <span className="text-white dark:text-gray-100">
                      NGINEERS{" "}
                    </span>
                    <span className="text-[#FBC400]">L</span>
                    <span className="text-white dark:text-gray-100">IMITED</span>
                  </h1>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-white dark:text-gray-200 hover:text-[#FBC400] transition-all duration-200 group"
                >
                  <item.icon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* More Dropdown */}
              <div className="relative ml-2 group">
                <button className="flex items-center space-x-1 text-sm font-medium text-white dark:text-gray-200 hover:text-[#FBC400] transition-all duration-200">
                  <span>More</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-3 w-36 bg-black dark:bg-gray-900 shadow-lg rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out invisible group-hover:visible">
                  <ul className="py-2">
                    {moreItems.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 text-xs text-white dark:text-gray-200 hover:text-yellow-400 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="tel:+911123311111,23321111,23721111"
                className="flex items-center space-x-2 px-3 py-2 bg-[#FBC400] text-black rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919716001002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FBC400]/50`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    isScrolled ? "text-white" : "text-white dark:text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-white" : "text-white dark:text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0D1013] dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <Link href="/" className="flex items-center space-x-3">
                  <Image src="/logo.png" alt="SEL Logo" width={36} height={36} />
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                    <span className="text-[#FBC400]">S</span>
                    <span className="text-white dark:text-gray-100">ETLITE </span>
                    <span className="text-[#FBC400]">E</span>
                    <span className="text-white dark:text-gray-100">NGINEERS </span>
                    <span className="text-[#FBC400]">L</span>
                    <span className="text-white dark:text-gray-100">IMITED</span>
                  </h2>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="h-6 w-6 text-white dark:text-gray-300" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-3 w-full p-3 rounded-lg text-sm text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all duration-200 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5 text-[#FBC400] group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ))}

                  {/* More Dropdown Mobile */}
                  <div className="border-t border-gray-700 pt-4">
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="flex items-center justify-between w-full p-3 rounded-lg text-sm text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all duration-200"
                    >
                      <span className="text-sm font-medium">More</span>
                      {isMoreOpen ? (
                        <ChevronUp className="h-5 w-5 text-[#FBC400]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#FBC400]" />
                      )}
                    </button>
                    {isMoreOpen && (
                      <div className="ml-3 mt-2 space-y-2">
                        {moreItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block p-2 rounded-lg text-xs text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="pt-6 space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    <a
                      href="tel:+911123311111"
                      className="flex items-center justify-center space-x-2 p-3 bg-[#FBC400] text-black rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href="https://wa.me/919716001002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </nav>

              {/* Mobile Footer */}
              <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  Contact us for all your engineering solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
