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

  // Contact Form Feedback Handler
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const resetFormBtn = document.getElementById('reset-form-btn');

  if (contactForm && formFeedback && resetFormBtn) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.classList.add('hidden');
      formFeedback.classList.remove('hidden');
    });

    resetFormBtn.addEventListener('click', function () {
      contactForm.reset();
      formFeedback.classList.add('hidden');
      contactForm.classList.remove('hidden');
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

