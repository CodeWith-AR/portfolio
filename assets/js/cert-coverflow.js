/**
 * 3D Certifications Coverflow Carousel & Credential Modal Logic
 * Controls 3D spatial slide offsets and verified credential popup
 */

(function () {
  let currentCert = 0;
  const certSlides = document.querySelectorAll('.cert-slide');
  const totalCerts = certSlides.length;

  if (totalCerts === 0) return;

  function updateCertClasses() {
    certSlides.forEach((slide, idx) => {
      // Remove all offset classes
      slide.classList.remove('active', 'prev-1', 'next-1', 'prev-2', 'next-2', 'hidden-cert', 'border-crimson-500/50', 'border-white/10');

      const offset = (idx - currentCert + totalCerts) % totalCerts;

      if (offset === 0) {
        slide.classList.add('active', 'border-crimson-500/50');
      } else if (offset === 1) {
        slide.classList.add('next-1', 'border-white/10');
      } else if (offset === 2) {
        slide.classList.add('next-2', 'border-white/10');
      } else if (offset === totalCerts - 1) {
        slide.classList.add('prev-1', 'border-white/10');
      } else if (offset === totalCerts - 2) {
        slide.classList.add('prev-2', 'border-white/10');
      } else {
        slide.classList.add('hidden-cert', 'border-white/10');
      }
    });

    // Update indicator dots
    const indicators = document.getElementById('cert-indicators');
    if (indicators) {
      Array.from(indicators.children).forEach((dot, idx) => {
        if (idx === currentCert) {
          dot.className = 'w-6 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_#e50914] transition-all duration-300';
        } else {
          dot.className = 'w-2 h-2 rounded-full bg-white/20 transition-all duration-300 cursor-pointer hover:bg-white/40';
        }
      });
    }
  }

  window.nextCert = function () {
    currentCert = (currentCert + 1) % totalCerts;
    updateCertClasses();
  };

  window.prevCert = function () {
    currentCert = (currentCert - 1 + totalCerts) % totalCerts;
    updateCertClasses();
  };

  window.setCert = function (idx) {
    if (idx >= 0 && idx < totalCerts) {
      currentCert = idx;
      updateCertClasses();
    }
  };

  // Keyboard navigation for coverflow
  window.addEventListener('keydown', (e) => {
    const certSection = document.getElementById('certifications');
    if (!certSection) return;
    const rect = certSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !document.getElementById('cert-modal')?.classList.contains('flex')) {
      if (e.key === 'ArrowRight') window.nextCert();
      else if (e.key === 'ArrowLeft') window.prevCert();
    }
  });

  // Touch swipe support for coverflow
  const coverflowContainer = document.querySelector('#certifications .perspective-container');
  if (coverflowContainer) {
    let startX = 0;
    coverflowContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    coverflowContainer.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) window.nextCert();
        else window.prevCert();
      }
    }, { passive: true });
  }

  // --- Certificate Modal Functions ---
  window.showCertModal = function (issuer, title, id, date, verifyUrl, imageUrl) {
    const modalIssuer = document.getElementById('modal-issuer');
    const modalTitle = document.getElementById('modal-title');
    const modalId = document.getElementById('modal-id');
    const modalDate = document.getElementById('modal-date');
    const modalVerifyBtn = document.getElementById('modal-verify-btn');
    const modalImage = document.getElementById('modal-cert-image');
    const modalFullImgBtn = document.getElementById('modal-full-img-btn');
    const modalImageContainer = document.getElementById('modal-cert-image-container');
    const modal = document.getElementById('cert-modal');

    if (modalIssuer) modalIssuer.textContent = issuer;
    if (modalTitle) modalTitle.textContent = title;
    if (modalId) modalId.textContent = id;
    if (modalDate) modalDate.textContent = date;
    if (modalVerifyBtn) {
      modalVerifyBtn.href = verifyUrl || 'https://github.com/CodeWith-AR';
    }

    if (modalImage && imageUrl) {
      modalImage.src = imageUrl;
      modalImage.alt = title;
      if (modalImageContainer) modalImageContainer.classList.remove('hidden');
      if (modalFullImgBtn) modalFullImgBtn.href = imageUrl;
    } else if (modalImageContainer) {
      modalImageContainer.classList.add('hidden');
    }

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden'; // prevent bg scroll
    }
  };

  window.closeCertModal = function () {
    const modal = document.getElementById('cert-modal');
    if (modal) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // Close modal on escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeCertModal();
  });

  // Initialize Coverflow
  document.addEventListener('DOMContentLoaded', updateCertClasses);
  updateCertClasses();
})();
