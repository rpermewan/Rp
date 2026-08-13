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

// Duplicate ticker content for a seamless marquee loop (skip if reduced motion)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.ticker-track').forEach((track) => {
    track.innerHTML += track.innerHTML;
  });
}

// Mark current nav item
const here = (location.pathname.split('/').pop() || 'index.html');
document.querySelectorAll('.nav-links a').forEach((a) => {
  const href = a.getAttribute('href');
  if (href === here || (here === '' && href === 'index.html')) {
    a.setAttribute('aria-current', 'page');
  }
});

// Seasonal availability calendar — render from /data/seasonal-calendar.json
const calBody = document.getElementById('cal-body');
if (calBody) {
  const CELL = { peak: 'peak', available: 'on', off: '' };
  const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  fetch('/data/seasonal-calendar.json')
    .then(r => r.json())
    .then(data => {
      calBody.innerHTML = data.varieties.map(v =>
        `<tr><th scope="row">${v.variety}</th>${MONTHS.map(m => `<td class="${CELL[v[m]] || ''}"></td>`).join('')}</tr>`
      ).join('');
    })
    .catch(() => {
      calBody.innerHTML = '<tr><td colspan="13" style="text-align:center;padding:2rem;opacity:0.5">Unable to load calendar data.</td></tr>';
    });
}

// Trading terms documents — render from /data/trading-terms.json
const docsGrid = document.getElementById('docs-grid');
if (docsGrid) {
  fetch('/data/trading-terms.json')
    .then(r => r.json())
    .then(data => {
      docsGrid.innerHTML = data.documents.map(doc =>
        `<article class="card">
          <span class="num">PDF · ${doc.category}</span>
          <h3 class="h-s">${doc.title}</h3>
          <p>${doc.description}</p>
          <a href="${doc.filename}" class="btn btn-ghost" download>Download <span class="arrow">↓</span></a>
        </article>`
      ).join('');
    })
    .catch(() => {});
}

// Netlify Identity — redirect to /admin after login
(function () {
  var s = document.createElement('script');
  s.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
  document.head.appendChild(s);
  s.onload = function () {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', function (user) {
        if (!user) {
          window.netlifyIdentity.on('login', function () {
            document.location.href = '/admin/';
          });
        }
      });
    }
  };
})();
