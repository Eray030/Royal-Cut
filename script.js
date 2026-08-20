/* ════════════════════════════════════════════
   Royal Cut – Kapper Utrecht
   script.js
   ════════════════════════════════════════════ */

/* ── HAMBURGER MENU ── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Sluit mobiel menu bij klik buiten
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const ham  = document.getElementById('hamburger');
  if (!menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

/* ── HUIDIGE DAG MARKEREN ── */
// 0 = zondag, 1 = maandag, ..., 6 = zaterdag
const dagIds = ['dag-zo', 'dag-ma', 'dag-di', 'dag-wo', 'dag-do', 'dag-vr', 'dag-za'];
const today  = new Date().getDay();
const dagEl  = document.getElementById(dagIds[today]);
if (dagEl) dagEl.classList.add('today');

/* ── OPENINGSSTATUS "VANDAAG" ── */
const statusEl   = document.getElementById('todayStatus');
const geslotenOp = [4]; // donderdag = index 4
const now        = new Date();
const hour       = now.getHours() + now.getMinutes() / 60;

if (geslotenOp.includes(today)) {
  statusEl.textContent  = 'Vandaag gesloten';
  statusEl.style.color  = 'var(--gray)';
} else if (hour >= 9 && hour < 18) {
  statusEl.textContent  = 'Nu open · sluit om 18:00';
  statusEl.style.color  = '#6fcf97';
} else {
  statusEl.textContent  = 'Nu gesloten · opent om 09:00';
  statusEl.style.color  = 'var(--gray)';
}

/* ── NAV HIGHLIGHT BIJ SCROLLEN ── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.style.color = (a.getAttribute('href') === '#' + current)
      ? 'var(--gold)'
      : '';
  });
});
