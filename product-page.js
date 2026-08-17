/* ============================================================
   PRODUCT PAGE SHARED JS — NNR Global Technologies
   Handles: scroll progress, navbar scroll, hamburger, dropdown
   ============================================================ */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // 1. Scroll Progress Bar
  const scrollBar = $('#scroll-progress');
  window.addEventListener('scroll', () => {
    if (!scrollBar) return;
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollBar.style.width = pct + '%';
  }, { passive: true });

  // 2. Navbar Scroll Effect (product pages start scrolled)
  const navbar = $('#navbar');
  if (navbar && !navbar.classList.contains('scrolled')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 3. Hamburger Menu Toggle
  const hamburger = $('#hamburger');
  const navMenu = $('#nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
  }

  // 4. Nav Dropdown (hover works via CSS; this adds click support for mobile)
  const dropdowns = $$('.nav-dropdown');
  dropdowns.forEach(drop => {
    const trigger = drop.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      drop.classList.toggle('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    dropdowns.forEach(drop => {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
      }
    });
  });

  // 5. Scroll-reveal animations
  const animElems = $$('.fade-in-up, .fade-in-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animElems.forEach(el => revealObserver.observe(el));

  console.log('%c NNR Product Page — Loaded ', 'background: #0284C7; color: #fff; padding: 6px 14px; border-radius: 6px; font-weight: 700;');
})();
