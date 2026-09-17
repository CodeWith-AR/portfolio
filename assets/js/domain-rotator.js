/**
 * 3D Domain Rotator Carousel Logic
 * Interactive 3D Perspective Card Switcher for Abdur Rehman Portfolio
 */

(function () {
  let currentRotator = 0; // Start with Card 0 (Mobile & Web) active
  const rotatorCards = document.querySelectorAll('.rotator-card');
  const totalRotator = rotatorCards.length;

  if (totalRotator === 0) return;

  function updateRotatorClasses() {
    rotatorCards.forEach((card, idx) => {
      // Clear previous positional classes
      card.classList.remove('active', 'prev', 'next', 'hidden-card', 'border-crimson-500/80', 'border-white/10');

      const iconBox = card.querySelector('.rotator-icon');
      const pillBadge = card.querySelector('.rotator-pill');

      if (idx === currentRotator) {
        card.classList.add('active', 'border-crimson-500/80');
        if (iconBox) {
          iconBox.className = 'rotator-icon w-12 h-12 mx-auto mb-3 rounded-xl bg-crimson-500/20 border border-crimson-500 flex items-center justify-center text-crimson-400 text-lg font-bold font-mono shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300';
        }
        if (pillBadge) {
          pillBadge.className = 'rotator-pill inline-block px-3.5 py-1.5 rounded-full bg-crimson-500/10 border border-crimson-500/40 text-xs text-crimson-400 font-medium transition-all duration-300';
        }
      } else if (idx === (currentRotator + 1) % totalRotator) {
        card.classList.add('next', 'border-white/10');
        if (iconBox) {
          iconBox.className = 'rotator-icon w-12 h-12 mx-auto mb-3 rounded-xl bg-crimson-500/10 border border-crimson-500/30 flex items-center justify-center text-crimson-400 text-lg font-bold font-mono transition-all duration-300';
        }
        if (pillBadge) {
          pillBadge.className = 'rotator-pill inline-block px-3.5 py-1.5 rounded-full bg-obsidian-850 border border-white/10 text-xs text-neutral-300 font-medium transition-all duration-300';
        }
      } else if (idx === (currentRotator - 1 + totalRotator) % totalRotator) {
        card.classList.add('prev', 'border-white/10');
        if (iconBox) {
          iconBox.className = 'rotator-icon w-12 h-12 mx-auto mb-3 rounded-xl bg-crimson-500/10 border border-crimson-500/30 flex items-center justify-center text-crimson-400 text-lg font-bold font-mono transition-all duration-300';
        }
        if (pillBadge) {
          pillBadge.className = 'rotator-pill inline-block px-3.5 py-1.5 rounded-full bg-obsidian-850 border border-white/10 text-xs text-neutral-300 font-medium transition-all duration-300';
        }
      } else {
        card.classList.add('hidden-card', 'border-white/10');
      }
    });

    // Update indicator dots if present
    const indicatorContainer = document.getElementById('rotator-indicators');
    if (indicatorContainer) {
      Array.from(indicatorContainer.children).forEach((dot, idx) => {
        if (idx === currentRotator) {
          dot.className = 'w-5 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_#e50914] transition-all duration-300 cursor-pointer';
        } else {
          dot.className = 'w-2 h-2 rounded-full bg-white/20 transition-all duration-300 cursor-pointer hover:bg-white/40';
        }
      });
    }
  }

  window.nextRotator = function () {
    currentRotator = (currentRotator + 1) % totalRotator;
    updateRotatorClasses();
  };

  window.prevRotator = function () {
    currentRotator = (currentRotator - 1 + totalRotator) % totalRotator;
    updateRotatorClasses();
  };

  window.setRotator = function (idx) {
    if (idx >= 0 && idx < totalRotator) {
      currentRotator = idx;
      updateRotatorClasses();
    }
  };

  // Touch Swipe Support for Mobile Rotator
  const rotatorContainer = document.querySelector('.perspective-container');
  if (rotatorContainer) {
    let startX = 0;
    rotatorContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    rotatorContainer.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) window.nextRotator();
        else window.prevRotator();
      }
    }, { passive: true });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', updateRotatorClasses);
  updateRotatorClasses();
})();
