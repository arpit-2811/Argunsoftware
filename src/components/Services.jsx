import React from 'react';
import { Code2, Cpu, Workflow, Globe, Smartphone, Cloud } from 'lucide-react';

export const servicesList = [
  {
    id: 'custom-dev',
    title: 'Custom Software Development',
    tagline: 'Powerful. Scalable. Tailored for You.',
    icon: Code2
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tagline: 'Intelligent Solutions for Smarter Businesses.',
    icon: Cpu
  },
  {
    id: 'automation',
    title: 'Business Automation',
    tagline: 'Automate. Optimize. Accelerate Growth.',
    icon: Workflow
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    tagline: 'Modern. Responsive. Results Driven.',
    icon: Globe
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Android. iOS. Cross Platform.',
    icon: Smartphone
  },
  {
    id: 'cloud-it',
    title: 'Cloud & IT Solutions',
    tagline: 'Secure. Reliable. Always Available.',
    icon: Cloud
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-bgOffwhite border-b border-borderGrey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Our Services
          </h2>
          <p className="text-mutedGrey text-sm sm:text-base mt-2 font-normal">
            Software design, development, and technical infrastructure for growing companies.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const IconComp = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 border border-borderGrey hover:border-slate-300 transition-colors"
              >
                <div className="mb-4 text-navy">
                  <IconComp className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-base font-bold text-navy mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-mutedGrey font-medium">
                  {service.tagline}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
