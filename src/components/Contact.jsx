import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-borderGrey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Address & Phone Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                Contact Us
              </h2>
              <p className="text-mutedGrey text-sm mt-2 font-normal">
                Get in touch to discuss your software requirements or request a product overview.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-sm text-charcoal">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-mutedGrey">Phone / WhatsApp</div>
                <a href="tel:7091276451" className="font-bold text-navy hover:text-electric transition-colors text-base">
                  +91 70912 76451
                </a>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-mutedGrey">Office Address</div>
                <p className="font-medium text-charcoal leading-relaxed mt-0.5">
                  Rajhwahi Colony, Between Arya Petroleum Pump & Lakhpatiya More, Gopalganj, Bihar – 841428
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917091276451?text=Hi%20Argun%20Software%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20software."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-electric hover:underline"
                >
                  <span>Chat directly on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div className="lg:col-span-7">
            <div className="bg-bgOffwhite p-6 sm:p-8 rounded-lg border border-borderGrey">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <h3 className="text-lg font-bold text-navy">Thank You</h3>
                  <p className="text-xs text-mutedGrey max-w-sm mx-auto">
                    Your message has been received. Our team will contact you at <strong className="text-charcoal">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="text-xs font-semibold text-electric underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-borderGrey rounded-md p-2.5 text-sm text-charcoal focus:outline-none focus:border-electric"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-borderGrey rounded-md p-2.5 text-sm text-charcoal focus:outline-none focus:border-electric"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">
                      Message / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-borderGrey rounded-md p-2.5 text-sm text-charcoal focus:outline-none focus:border-electric resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-electric hover:bg-electric-hover text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors"
                  >
                    Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
