/**
 * Contact Form & Quick Connect Interactive Logic
 * Handles email copying toast, direct mail trigger, and contact form validation
 */

(function () {
  // Toast notification helper
  function showToast(message, isSuccess = true) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl backdrop-blur-xl border font-mono text-xs shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none';
      document.body.appendChild(toast);
    }

    if (isSuccess) {
      toast.style.background = 'rgba(20, 20, 24, 0.9)';
      toast.style.borderColor = 'rgba(229, 9, 20, 0.6)';
      toast.style.color = '#ffffff';
      toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_#e50914]"></span> ${message}`;
    } else {
      toast.style.background = 'rgba(30, 20, 20, 0.9)';
      toast.style.borderColor = 'rgba(255, 77, 90, 0.8)';
      toast.style.color = '#ff4d5a';
      toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500"></span> ${message}`;
    }

    toast.classList.remove('translate-y-10', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 3200);
  }

  // Copy Email to Clipboard
  window.copyEmail = function (email = 'mailrehman90527300@gmail.com') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast(`Copied to clipboard: ${email}`))
        .catch(() => window.location.href = `mailto:${email}`);
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  // Contact Form Submission Handler
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
          showToast('Please fill in all required fields.', false);
          return;
        }

        // Open mailto with populated fields
        const subject = encodeURIComponent(`Portfolio Inquiry from ${nameInput.value.trim()}`);
        const body = encodeURIComponent(
          `Hello Abdur Rehman,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
        );

        window.location.href = `mailto:mailrehman90527300@gmail.com?subject=${subject}&body=${body}`;
        showToast('Launching email client to send message...');
        contactForm.reset();
      });
    }
  });
})();
