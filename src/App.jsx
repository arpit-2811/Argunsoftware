import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bgOffwhite text-charcoal font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Services />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
