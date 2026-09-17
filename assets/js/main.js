/**
 * Master Main Script: Navigation, Active Spy, Mobile Drawer & Micro-interactions
 * Portfolio: Abdur Rehman
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Drawer Toggle ---
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
  const navToggleIcon = document.getElementById('nav-toggle-icon');

  function openMobileMenu() {
    mobileDrawer.classList.remove('hidden');
    // slight delay to trigger transition
    setTimeout(() => {
      mobileDrawer.classList.remove('opacity-0', '-translate-y-4');
      mobileDrawer.classList.add('opacity-100', 'translate-y-0');
    }, 10);
    navToggleBtn.setAttribute('aria-expanded', 'true');
    if (navToggleIcon) {
      navToggleIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`;
    }
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('opacity-100', 'translate-y-0');
    mobileDrawer.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => {
      mobileDrawer.classList.add('hidden');
    }, 250);
    navToggleBtn.setAttribute('aria-expanded', 'false');
    if (navToggleIcon) {
      navToggleIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />`;
    }
  }

  if (navToggleBtn && mobileDrawer) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) closeMobileMenu();
      else openMobileMenu();
    });

    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', () => closeMobileMenu());
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !navToggleBtn.contains(e.target)) {
        if (navToggleBtn.getAttribute('aria-expanded') === 'true') {
          closeMobileMenu();
        }
      }
    });
  }

  // --- 2. Active Section Scroll Spy & Horizontal Progress Bar ---
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');

  function updateScrollProgress() {
    if (!scrollProgressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }

  function updateActiveNav() {
    updateScrollProgress();
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-white', 'font-semibold');
            link.classList.remove('text-neutral-300');
          } else {
            link.classList.remove('text-white', 'font-semibold');
            link.classList.add('text-neutral-300');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateActiveNav();

  // --- 3. Dynamic Current Year in Footer ---
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- 4. Interactive Section Spotlight & Grid Beam (Modern SaaS Look) ---
  function attachInteractiveSpotlight(sectionId, spotlightId, gridId) {
    const section = document.getElementById(sectionId);
    const spotlight = document.getElementById(spotlightId);
    const spotlightGrid = document.getElementById(gridId);

    if (!section) return;

    let ticking = false;

    section.addEventListener('mousemove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          section.style.setProperty('--mouse-x', `${x}px`);
          section.style.setProperty('--mouse-y', `${y}px`);
          if (spotlight) {
            spotlight.style.setProperty('--mouse-x', `${x}px`);
            spotlight.style.setProperty('--mouse-y', `${y}px`);
            spotlight.style.opacity = '1';
          }
          if (spotlightGrid) {
            spotlightGrid.style.setProperty('--mouse-x', `${x}px`);
            spotlightGrid.style.setProperty('--mouse-y', `${y}px`);
            spotlightGrid.style.opacity = '1';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    section.addEventListener('mouseenter', () => {
      if (spotlight) spotlight.style.opacity = '1';
      if (spotlightGrid) spotlightGrid.style.opacity = '1';
    });

    section.addEventListener('mouseleave', () => {
      // Smoothly fade out spotlight instead of resetting coordinates back to center
      if (spotlight) spotlight.style.opacity = '0';
      if (spotlightGrid) spotlightGrid.style.opacity = '0';
    });
  }

  attachInteractiveSpotlight('home', 'hero-spotlight', 'hero-spotlight-grid');
  attachInteractiveSpotlight('skills', 'skills-spotlight', 'skills-spotlight-grid');
  attachInteractiveSpotlight('certifications', 'cert-spotlight', 'cert-spotlight-grid');
});
