document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (header) {
    const setHeaderState = () => {
      header.classList.toggle('compact', window.scrollY > 20);
    };
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop() || (window.location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  const revealItems = document.querySelectorAll('.reveal, .fade-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));

  const backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop) {
    const toggleButton = () => {
      backToTop.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
    };
    toggleButton();
    window.addEventListener('scroll', toggleButton, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
