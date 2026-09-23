import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-borderGrey py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-charcoal hover:text-electric text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Call, WhatsApp & CTA Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="tel:7091276451"
              className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-navy text-xs font-semibold px-3 py-2 rounded-md border border-blue-200 transition-colors"
              title="Direct Call: +91 70912 76451"
            >
              <Phone className="w-3.5 h-3.5 text-electric" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/917091276451?text=Hi%20Argun%20Software%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20software%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-2 rounded-md border border-emerald-200 transition-colors"
              title="Chat on WhatsApp"
            >
              <span>💬 WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-electric hover:bg-electric-hover text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:7091276451"
              className="bg-blue-50 text-navy border border-blue-200 text-xs font-bold px-2.5 py-1.5 rounded flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-electric" /> Call
            </a>
            <a
              href="https://wa.me/917091276451?text=Hi%20Argun%20Software%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20software%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal p-1 rounded hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-borderGrey px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-charcoal hover:text-electric text-sm font-medium py-1.5 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:7091276451"
              className="w-full text-center bg-navy hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Direct Call: +91 70912 76451
            </a>
            <a
              href="https://wa.me/917091276451?text=Hi%20Argun%20Software%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20software%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-md flex items-center justify-center gap-2"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
