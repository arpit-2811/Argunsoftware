import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-bgOffwhite border-b border-borderGrey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            About Argun Software Solutions
          </h2>

          <p className="text-charcoal text-base sm:text-lg leading-relaxed font-normal">
            Argun Software Solutions is a Gopalganj, Bihar-based software company building custom, reliable software for local and regional businesses — from garages and CA firms to lending institutions and restaurants. We combine modern technical standards with direct, accessible support to help operational teams automate routine work and maintain clear financial records.
          </p>

          <p className="text-mutedGrey text-sm sm:text-base leading-relaxed font-normal">
            Our software systems are built from the ground up to be easy to deploy, simple for non-technical staff to learn, and resilient for daily business operations.
          </p>
        </div>

      </div>
    </section>
  );
}
