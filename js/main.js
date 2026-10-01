/**
 * NUFUZ LC — Main JavaScript
 * Navbar, Mobile Menu, Modal, Scroll Animations, Counters
 */

/* =========================================
   NAVBAR SCROLL EFFECT
   ========================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* =========================================
   MOBILE MENU
   ========================================= */
const burger = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

burger?.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger?.classList.remove('active');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* =========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    try {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 84;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } catch (err) {
      // Fallback for non-standard selector
    }
  });
});

/* =========================================
   MODAL
   ========================================= */
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

function openModal() {
  modalOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}

// Open triggers
document.querySelectorAll('[data-modal="open"]').forEach(el => {
  el.addEventListener('click', () => {
    openModal();
    if (el.dataset.course) {
      const courseSelect = document.getElementById('modal-course');
      if (courseSelect) {
        const val = el.dataset.course.toLowerCase();
        for (let opt of courseSelect.options) {
          if (opt.value.toLowerCase().includes(val) || opt.textContent.toLowerCase().includes(val)) {
            courseSelect.value = opt.value;
            break;
          }
        }
      }
    }
  });
});

// Close
modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* =========================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ========================================= */
const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => {
  animateObserver.observe(el);
});

/* =========================================
   ANIMATED COUNTERS
   ========================================= */
function animateCounter(el, target, duration = 2000, suffix = '') {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function update(time) {
    const elapsed = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3); // ease-out cubic
    const value = eased * target;
    el.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
    if (elapsed < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, 1800, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

/* =========================================
   PHONE INPUT MASK
   ========================================= */
function applyPhoneMask(input) {
  if (!input) return;

  input.addEventListener('input', function() {
    let digits = this.value.replace(/\D/g, '');
    if (!digits) {
      this.value = '';
      return;
    }
    if (digits.startsWith('998')) {
      digits = digits.slice(3);
    }
    digits = digits.slice(0, 9);

    let formatted = '+998';
    if (digits.length > 0) formatted += ' (' + digits.slice(0, 2);
    if (digits.length >= 2) formatted += ') ' + digits.slice(2, 5);
    if (digits.length >= 5) formatted += ' ' + digits.slice(5, 7);
    if (digits.length >= 7) formatted += ' ' + digits.slice(7, 9);

    this.value = formatted;
  });

  input.addEventListener('focus', function() {
    if (!this.value.trim()) {
      this.value = '+998 (';
    }
  });

  input.addEventListener('blur', function() {
    if (this.value === '+998 (' || this.value === '+998') {
      this.value = '';
    }
  });
}

applyPhoneMask(document.getElementById('phone'));
applyPhoneMask(document.getElementById('modal-phone'));

/* =========================================
   TOAST NOTIFICATION
   ========================================= */
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.background = isError
    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
    : 'linear-gradient(135deg, var(--emerald-600), var(--emerald-500))';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* =========================================
   HERO PROGRESS BAR ANIMATION
   ========================================= */
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach(fill => {
    const width = fill.dataset.width || '75';
    fill.style.width = width + '%';
  });
});

/* =========================================
   ACTIVE NAV LINK ON SCROLL
   ========================================= */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--emerald-400)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* =========================================
   CERTIFICATE LIGHTBOX MODAL
   ========================================= */
const certLightbox = document.getElementById('cert-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

function openCertLightbox(src, caption) {
  if (!certLightbox || !lightboxImg) return;
  lightboxImg.src = src;
  if (lightboxCaption) lightboxCaption.textContent = caption || '';
  certLightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
  certLightbox?.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeCertLightbox);
certLightbox?.addEventListener('click', (e) => {
  if (e.target === certLightbox) closeCertLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certLightbox?.classList.contains('active')) {
    closeCertLightbox();
  }
});

console.log('%cNufuz LC Landing Page ✅', 'color: #c5a869; font-size: 14px; font-weight: bold;');
