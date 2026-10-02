document.addEventListener('DOMContentLoaded', function () {
  
  // Mobile Navigation Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', function () {
      mobileDrawer.classList.toggle('open');
    });

    // Close drawer when any mobile nav link is clicked
    const mobileLinks = mobileDrawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Contact Form to Instant WhatsApp Integration
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Extract form fields dynamically across all page variants
      const nameInput = contactForm.querySelector('#name');
      const phoneInput = contactForm.querySelector('#phone');
      
      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      
      // Business/Store/Workshop name if present
      const businessField = contactForm.querySelector('#business-name') || 
                            contactForm.querySelector('#workshop') || 
                            (contactForm.querySelector('input#message') ? contactForm.querySelector('input#message') : null);
      const businessName = businessField ? businessField.value.trim() : '';

      // Product or service from dropdown if present
      const productSelect = contactForm.querySelector('#product-interest');
      let productInterest = '';
      if (productSelect && productSelect.selectedIndex > 0) {
        productInterest = productSelect.options[productSelect.selectedIndex].text.trim();
      }

      // Textarea message if present
      const textareaMsg = contactForm.querySelector('textarea#message');
      const details = textareaMsg ? textareaMsg.value.trim() : '';

      // Detect Page Title / Context
      const pageTitle = document.title ? document.title.split('|')[0].trim() : 'Website Inquiry';

      // Build structured, clean WhatsApp message
      let waMessage = `*New Inquiry — Argun Software Solutions*\n\n`;
      waMessage += `👤 *Name:* ${name}\n`;
      waMessage += `📱 *Phone:* ${phone}\n`;
      if (businessName) {
        waMessage += `🏢 *Business / Shop:* ${businessName}\n`;
      }
      if (productInterest) {
        waMessage += `📦 *Interested In:* ${productInterest}\n`;
      }
      if (details) {
        waMessage += `📝 *Requirements:* ${details}\n`;
      }
      waMessage += `📍 *Page:* ${pageTitle}\n`;
      waMessage += `🔗 *URL:* ${window.location.href}`;

      const waUrl = `https://wa.me/917091276451?text=${encodeURIComponent(waMessage)}`;

      // Attempt to open WhatsApp directly
      try {
        window.open(waUrl, '_blank');
      } catch (err) {
        console.log('Notice: browser blocked window.open popup', err);
      }

      // Update Feedback UI with instant fallback button
      if (formFeedback) {
        formFeedback.innerHTML = `
          <div style="text-align: center; padding: 1rem 0;">
            <div style="font-size: 2.25rem; margin-bottom: 0.5rem;">🎉</div>
            <h3 class="feedback-title" style="font-size: 1.25rem; font-weight: 700; color: #0B1F44; margin-bottom: 0.5rem;">
              Thank You, ${name || 'Valued Client'}!
            </h3>
            <p class="feedback-desc" style="font-size: 0.9375rem; color: #4B5563; line-height: 1.6; margin-bottom: 1.25rem;">
              Your inquiry has been formatted. If WhatsApp did not open automatically, tap the button below to connect with our specialist directly:
            </p>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background-color: #25D366; border-color: #25D366; color: #FFFFFF; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); margin-bottom: 1.25rem; width: 100%;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Open WhatsApp Chat Now →
            </a>
            <div>
              <button id="reset-form-btn" type="button" class="btn-text" style="color: #64748B; font-size: 0.8125rem; text-decoration: underline; background: none; border: none; cursor: pointer;">
                Send another message
              </button>
            </div>
          </div>
        `;
        contactForm.classList.add('hidden');
        formFeedback.classList.remove('hidden');

        // Re-attach reset handler
        const newResetBtn = formFeedback.querySelector('#reset-form-btn');
        if (newResetBtn) {
          newResetBtn.addEventListener('click', function () {
            contactForm.reset();
            formFeedback.classList.add('hidden');
            contactForm.classList.remove('hidden');
          });
        }
      }
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Close all open items first
      faqQuestions.forEach(function (otherBtn) {
        otherBtn.classList.remove('open');
        const otherAnswer = otherBtn.nextElementSibling;
        if (otherAnswer) otherAnswer.classList.remove('open');
      });

      // Toggle clicked item
      if (!isOpen) {
        btn.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });

});
