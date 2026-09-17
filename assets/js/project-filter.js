/**
 * Project Category Filter Logic
 * Smooth category switching between All, Web, Mobile, and AI & ML
 */

(function () {
  window.filterProjects = function (category) {
    // Update active filter buttons
    const buttons = document.querySelectorAll('.project-filter-btn');
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('tab-active', 'text-white');
        btn.classList.remove('text-neutral-400', 'bg-obsidian-850');
      } else {
        btn.classList.remove('tab-active', 'text-white');
        btn.classList.add('text-neutral-400', 'bg-obsidian-850');
      }
    });

    // Show/hide project sections or cards
    const projectBlocks = document.querySelectorAll('.project-category-block');
    projectBlocks.forEach((block) => {
      const blockCategory = block.getAttribute('data-category');
      if (category === 'all' || blockCategory === category) {
        block.style.display = 'block';
        block.style.opacity = '0';
        setTimeout(() => {
          block.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }, 10);
      } else {
        block.style.display = 'none';
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Default to 'all'
    const defaultBtn = document.querySelector('.project-filter-btn[data-filter="all"]');
    if (defaultBtn) defaultBtn.click();
  });
})();
