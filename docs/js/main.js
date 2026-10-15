// Sections fade in + rise 12px once, as they enter the viewport.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sections = document.querySelectorAll('.reveal');

if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  sections.forEach((el) => io.observe(el));
}

// The illustrated desk clip only plays when motion is allowed; otherwise its poster stays.
const clip = document.querySelector('.now-video');
if (clip && !reduceMotion) {
  clip.play().catch(() => {});
}
