import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
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

          {/* Single Electric Blue CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-electric hover:bg-electric-hover text-white text-sm font-semibold px-4.5 py-2 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-electric text-white text-xs font-semibold px-3 py-1.5 rounded"
            >
              Contact
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
        </div>
      )}
    </header>
  );
}
