import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const portfolioProjects = [
  {
    title: 'Vatsalya Hospital',
    url: 'https://vatsalyahospitalgpj.com/',
    category: 'Healthcare • Hospital',
    location: 'Gopalganj, Bihar',
    description: 'Comprehensive hospital website with doctor profiles, emergency care services, departments catalog, high-speed cloud deployment, and top-ranking Google Business Profile in Gopalganj.',
    deliverables: ['Web Development', 'Cloud Deployment', 'Hospital SEO', 'Google Business Profile']
  },
  {
    title: 'Dr. Shams Taurej Hospital',
    url: 'https://drshamstaurejhospital.in/',
    category: 'Healthcare • Clinic',
    location: 'Gopalganj, Bihar',
    description: 'Modern surgical and healthcare clinic website with patient consultation guides, treatment schedules, mobile-first performance optimization, and verified Google Business Profile.',
    deliverables: ['Web Development', 'Fast Deployment', 'Medical SEO', 'Google Business Profile']
  },
  {
    title: 'Gorakhpur Diabetes & Obesity Center',
    url: 'https://gorakhpurdiabetes.com/',
    category: 'Healthcare • Specialty Center',
    location: 'Gorakhpur Region',
    description: 'Super-specialty medical center web platform built for chronic illness and metabolic care guidance, patient education, high-performance hosting, and targeted local healthcare SEO.',
    deliverables: ['Web Development', 'Cloud Hosting', 'Regional SEO', 'Google Business Profile']
  },
  {
    title: 'AK Tiles',
    url: 'https://aktilesgop.com/',
    category: 'Manufacturing • Tiles',
    location: 'Gopalganj, Bihar',
    description: 'Online product showcase and digital catalogue for premium tiles, pavers, and building materials, featuring direct WhatsApp inquiry integration, fast loading, and commercial SEO.',
    deliverables: ['Web Development', 'Product Showcase', 'Commercial SEO', 'Google Business Profile']
  },
  {
    title: 'The Scholars Academy',
    url: 'https://thescholarsacademy.in/',
    category: 'Education • Institution',
    location: 'Gopalganj, Bihar',
    description: 'Comprehensive institutional school website featuring admissions information, curriculum structure, student events, faculty portal, education SEO, and Google Business Profile.',
    deliverables: ['Web Development', 'School ERP/Portal', 'Education SEO', 'Google Business Profile']
  },
  {
    title: 'Travel Googly',
    url: 'https://www.travelgoogly.org/',
    category: 'Tours & Travel',
    location: 'India & International',
    description: 'Dynamic tourism portal presenting holiday itineraries, domestic and international tour packages, instant quote booking workflows, tourism SEO ranking, and Google brand presence.',
    deliverables: ['Web Development', 'Booking Portal', 'Tourism SEO', 'Google Business Profile']
  },
  {
    title: 'Kenas Labs',
    url: 'https://kenaslabs.com/',
    category: 'Pharmaceuticals • Nutraceuticals',
    location: 'New Delhi, India',
    description: 'Modern pharmaceutical and nutraceutical web platform showcasing Mangovita™ multivitamin syrups, FSSAI compliance, ISO certifications, product specifications, and high-performance cloud deployment.',
    deliverables: ['Web Development', 'Cloud Deployment', 'Product Showcase', 'Brand SEO']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white border-b border-borderGrey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-electric border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Live Client Deployments
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Client Websites &amp; Digital Projects
          </h2>
          <p className="text-mutedGrey text-sm sm:text-base mt-2 font-normal">
            Real websites developed, cloud-deployed, SEO-ranked, and Google Business Profile optimized by Argun Software Solutions across Bihar &amp; neighboring regions.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-bgOffwhite border border-borderGrey rounded-xl p-6 flex flex-col justify-between hover:border-electric transition-all hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-electric bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-mutedGrey font-medium">
                    {project.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2">
                  {project.title}
                </h3>

                <p className="text-charcoal text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.deliverables.map((item, dIdx) => (
                    <span 
                      key={dIdx}
                      className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-borderGrey pt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  Live Website
                </span>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-electric hover:text-blue-700 transition-colors"
                >
                  Visit Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
