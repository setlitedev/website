const AboutHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/abou1.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-[85vw] md:w-[75vw] lg:w-[70vw] mx-auto flex flex-col text-left px-4 sm:px-6 lg:px-8 mt-10">
        {/* Heading */}
        <h1 className="mb-8 text-3xl sm:text-3xl md:text-3xl lg:text-[36px] font-bold leading-relaxed uppercase ">
          <span className="block">30+ Years Of</span>
          <span className="block">Engineering</span>
          <span className="block text-yellow-500">Excellence</span>
        </h1>

        {/* Paragraph */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-xl xl:text-[16px] text-gray-300 mb-8 leading-relaxed">
          From a regional supplier to a trusted global partner in mining,
          construction, and railway maintenance. Delivering precision
          engineering solutions since 1993.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
