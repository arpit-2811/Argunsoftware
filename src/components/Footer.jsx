import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-12 border-t border-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-3">
            <Logo variant="light" size="normal" />
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Argun Software Solutions builds custom loan management, billing, garage management, and CA firm software for businesses in Gopalganj, Bihar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">Navigation</div>
            <div><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-slate-300 hover:text-white transition-colors">Home</a></div>
            <div><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="text-slate-300 hover:text-white transition-colors">Products</a></div>
            <div><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-slate-300 hover:text-white transition-colors">Services</a></div>
            <div><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-slate-300 hover:text-white transition-colors">About Us</a></div>
            <div><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-slate-300 hover:text-white transition-colors">Contact</a></div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-2 text-xs text-slate-300">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">Contact</div>
            <div>Phone: <a href="tel:7091276451" className="text-white hover:text-electric transition-colors">+91 70912 76451</a></div>
            <div className="leading-normal">
              Address: Rajhwahi Colony, Between Arya Petroleum Pump & Lakhpatiya More, Gopalganj, Bihar – 841428
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Argun Software Solutions. All rights reserved.
          </div>
          <div>
            Gopalganj, Bihar, India
          </div>
        </div>

      </div>
    </footer>
  );
}
