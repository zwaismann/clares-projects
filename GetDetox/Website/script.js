// ========================================
// GetDetox - Scripts
// ========================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Nav scroll effect
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// Cookie consent banner
if (!localStorage.getItem('cookie-consent')) {
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = '<p>This site uses cookies for analytics and site functionality. By continuing to use this site, you consent to our use of cookies. See our <a href="/legal/#s8">Privacy Policy</a> for details.</p><button id="cookieAccept">Got It</button>';
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add('visible'), 500);
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  });
}

// Fade-in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-up class to elements
document.querySelectorAll('.section-header, .content-block, .timeline, .two-col, .callout, .warning-banner, .help-grid, .info-card').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
