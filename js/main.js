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

// ─── Toggle "Lihat semua" projects ───────────────────────
(function () {
  const btn = document.getElementById('toggleProjects');
  if (!btn) return;
  let expanded = false;

  btn.addEventListener('click', () => {
    expanded = !expanded;
    document.querySelectorAll('.project-extra').forEach(card => {
      card.style.display = expanded ? 'block' : 'none';
      // trigger reveal animation untuk card yang baru muncul
      if (expanded) {
        setTimeout(() => card.classList.add('visible'), 50);
      } else {
        card.classList.remove('visible');
      }
    });
    btn.textContent = expanded ? '← Sembunyikan' : 'Lihat semua →';
  });
})();

// ─── Reveal on scroll ─────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .skill-cell').forEach(el => revealObs.observe(el));

// ─── Counter animation untuk hero stats ───────────────────
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000; // 2 detik
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      el.textContent = Math.floor(current) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      el.textContent = target + '+';
    }
  };
  updateCounter();
}

// Jalankan counter saat hero-status atau hero-stats-mobile terlihat
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.hero-stat-num[data-target]').forEach(animateCounter);
      statsObs.disconnect(); // hanya jalankan sekali
    }
  });
}, { threshold: 0.3 });

const heroStatus = document.querySelector('.hero-status');
const heroStatsMobile = document.querySelector('.hero-stats-mobile');
if (heroStatus) statsObs.observe(heroStatus);
if (heroStatsMobile) statsObs.observe(heroStatsMobile);

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
