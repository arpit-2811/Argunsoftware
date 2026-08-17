import React from 'react';

export default function Hero() {
  const handleScrollToProducts = (e) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-bgOffwhite py-20 sm:py-28 lg:py-36 border-b border-borderGrey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Confident Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-tight">
          We Build Software That Drives Your Business Forward
        </h1>

        {/* Muted Subheadline */}
        <p className="text-mutedGrey text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
          Custom software, websites, and apps for businesses across Bihar.
        </p>

        {/* Single Primary Action Button */}
        <div className="pt-4">
          <a
            href="#products"
            onClick={handleScrollToProducts}
            className="inline-block bg-electric hover:bg-electric-hover text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-md transition-colors"
          >
            View Our Products
          </a>
        </div>

      </div>
    </section>
  );
}
