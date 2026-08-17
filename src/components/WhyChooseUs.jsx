import React from 'react';

export default function WhyChooseUs() {
  const points = [
    'Secure & Reliable',
    'Ongoing Support',
    'Built for Growth',
    'Fast Delivery',
    'Local Support'
  ];

  return (
    <section className="py-12 bg-white border-b border-borderGrey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-charcoal tracking-wide">
          {points.map((point, idx) => (
            <React.Fragment key={idx}>
              <span>{point}</span>
              {idx < points.length - 1 && (
                <span className="text-borderGrey font-bold select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
