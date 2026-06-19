// Bungle Group — minimal interactions

// Mobile nav toggle
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('[data-nav-toggle]');
  if (toggle) {
    const links = document.getElementById('nav-links');
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  }
});

// Duplicate ticker content for a seamless marquee loop
document.querySelectorAll('.ticker-track').forEach((track) => {
  track.innerHTML += track.innerHTML;
});

// Mark current nav item
const here = (location.pathname.split('/').pop() || 'index.html');
document.querySelectorAll('.nav-links a').forEach((a) => {
  const href = a.getAttribute('href');
  if (href === here || (here === '' && href === 'index.html')) {
    a.setAttribute('aria-current', 'page');
  }
});
