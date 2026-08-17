import React from 'react';
import { Star, Quote, Building, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Total Car Care',
      location: 'Gopalganj, Bihar',
      role: 'Auto Workshop Owner',
      product: 'Argun Garage Management Software',
      rating: 5,
      quote: 'Argun Garage Software made digital job card creation instant. Our mechanics can track spare parts and customer billing without manual paperwork. The local support in Gopalganj is unmatched!'
    },
    {
      name: 'Scholars Academy',
      location: 'Gopalganj, Bihar',
      role: 'Educational Administrator',
      product: 'Custom ERP & Billing System',
      rating: 5,
      quote: 'Managing student fees, staff payroll, and compliance reports used to take days. Argun Software built a custom ERP that runs effortlessly with zero glitches.'
    },
    {
      name: 'Apex CA Associates',
      location: 'Siwan & Gopalganj',
      role: 'Chartered Accountant Partner',
      product: 'Argun CA Firm Management System',
      rating: 5,
      quote: 'We track over 300 GST & IT filing deadlines seamlessly. The document vault and client task assignment feature saved our team during audit season.'
    },
    {
      name: 'Bihar Traders & Distibutors',
      location: 'Chhapra, Bihar',
      role: 'Wholesale Distributor',
      product: 'Argun Billing Software',
      rating: 5,
      quote: 'Generating 100% tax compliant GST bills takes under 10 seconds per invoice now. Our stock inventory is always in sync with counter sales.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-bgOffwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Client Feedback
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-display tracking-tight">
            Trusted by Business Leaders Across Bihar
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how Argun Software Solutions transforms daily operations, loan tracking, billing, and compliance for regional enterprises.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 border border-neutralBorder shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-electric/10 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-gold text-amber-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Product Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy text-base font-display">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.role} • <span className="text-electric font-semibold">{item.location}</span></div>
                </div>

                <span className="text-[11px] font-bold text-navy bg-navy/5 px-3 py-1 rounded-full border border-navy/10">
                  {item.product}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
