// ─── Theme toggle ─────────────────────────────────────────
(function () {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
})();

// ─── Cursor ───────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

// Sembunyikan cursor di perangkat touch
let isTouch = false;
window.addEventListener('touchstart', () => {
  isTouch = true;
  cursor.style.display = 'none';
  ring.style.display = 'none';
}, { once: true });

document.addEventListener('mousemove', e => {
  if (isTouch) return;
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  if (!isTouch) {
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .exp-tab, .project-card, .theme-toggle').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// ─── Nav scroll ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Hamburger menu ───────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
});

function closeMobileMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

// ─── Reveal on scroll ─────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .skill-cell').forEach(el => revealObs.observe(el));

// ─── Skill bar widths ─────────────────────────────────────
document.querySelectorAll('.skill-bar-fill').forEach(el => {
  el.style.width = (parseFloat(el.style.getPropertyValue('--w')) * 100) + '%';
});

// ─── Experience tabs ──────────────────────────────────────
function switchExp(tab, id) {
  document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById(id).classList.add('active');
}

// ─── Toast notification ───────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ─── Contact form submit ──────────────────────────────────
function handleSubmit() {
  const n = document.getElementById('cName').value.trim();
  const e = document.getElementById('cEmail').value.trim();
  const m = document.getElementById('cMsg').value.trim();
  if (!n || !e || !m) {
    showToast('⚠ Mohon isi semua field terlebih dahulu.');
    return;
  }
  const subject = encodeURIComponent('Pesan dari Portfolio — ' + n);
  const body = encodeURIComponent('Nama: ' + n + '\nEmail: ' + e + '\n\nPesan:\n' + m);
  window.location.href = 'mailto:arifakbarudin7@gmail.com?subject=' + subject + '&body=' + body;
  showToast('✓ Membuka aplikasi email Anda...');
  document.getElementById('cName').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMsg').value = '';
}

// ─── CV button ────────────────────────────────────────────
// Tombol CV sudah aktif sebagai link langsung ke file PDF.
// Ganti path "cv/cv-arif-akbarudin.pdf" dengan lokasi file CV yang sebenarnya.
