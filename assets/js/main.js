/* ============================================
   Matías Ortega — Portfolio
   main.js
   ============================================ */

// ---------- Mobile menu toggle ----------
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');

menuToggle.addEventListener('click', () => {
  const isOpen = mobilePanel.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

mobilePanel.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Scroll reveal (IntersectionObserver) ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- KPI count-up animation ----------
// Values are displayed as real numbers in HTML for no-JS fallback.
// This script animates from 0 to the target number on first view.
document.querySelectorAll('[data-count]').forEach(el => {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const unitEl = el.querySelector('.unit');
  const unitHTML = unitEl ? unitEl.outerHTML : '';
  let started = false;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        const dur = 900;
        const start = performance.now();

        function tick(now) {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);  // ease-out cubic
          const val = Math.round(target * eased);
          el.innerHTML = val.toLocaleString('es-AR') + unitHTML;
          if (p < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  obs.observe(el);
});
