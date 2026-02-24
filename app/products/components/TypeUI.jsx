"use client";
import Image from "next/image";
import { useState } from "react";

export default function TypeUI({ type }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ Get images: either type.images array or fallback to single type.image
  const images = type.images || (type.image ? [type.image] : []);
  const [selectedImage, setSelectedImage] = useState(images[0] || "");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API integration here
  };

  return (
    <div className="min-h-screen text-white px-6 md:px-12 pt-[20vh] pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        
        {/* LEFT SECTION */}
        <div>
          {/* MAIN IMAGE */}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={type.name}
              width={600}
              height={500}
              className="rounded-lg shadow-lg mx-auto object-contain bg-black/20"
            />
          )}

          {/* THUMBNAILS */}
          {images.length > 0 && (
            <div className="flex gap-4 mt-6 flex-wrap">
              {images.slice(0, 4).map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${type.name} thumbnail ${i + 1}`}
                  width={120}
                  height={100}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-lg shadow-md cursor-pointer hover:scale-105 transition ${
                    selectedImage === img
                      ? "ring-2 ring-yellow-400"
                      : "ring-1 ring-gray-700"
                  }`}
                />
              ))}

              {/* +X MORE BUTTON */}
              {images.length > 4 && (
                <button
                  onClick={() => setShowModal(true)}
                  className="w-28 h-24 flex items-center justify-center bg-[#1a1a1a] text-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:text-black transition"
                >
                  +{images.length - 4} more
                </button>
              )}
            </div>
          )}

          {/* SPECS */}
          <div className="mt-8 space-y-3">
            {type.specs?.map((spec, i) => (
              <p key={i} className="flex items-center gap-2 text-gray-300 text-md">
                <span className="text-yellow-400">
                  &#10003; <strong>{spec.label}:</strong> {spec.value}
                </span>
              </p>
            ))}
          </div>

          <button className="mt-6 bg-white text-black px-14 py-3 rounded-lg shadow-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
            View Specs
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
            {type.name}
          </h1>

          {type.description && (
            <p className="text-gray-300 leading-relaxed mb-8 text-md">
              {type.description}
            </p>
          )}

          <h2 className="text-lg font-bold text-white mb-4">
            FOR QUERIES ABOUT THIS PRODUCT
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#1a1a1a] p-6 rounded-2xl shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#111] text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#111] text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#111] text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#111] text-white rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* MODAL FOR ALL IMAGES */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-2xl max-w-5xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              All Images
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${type.name} image ${i + 1}`}
                  width={200}
                  height={150}
                  onClick={() => {
                    setSelectedImage(img);
                    setShowModal(false);
                  }}
                  className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
