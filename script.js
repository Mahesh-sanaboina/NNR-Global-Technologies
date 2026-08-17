import * as THREE from 'three';

/* ============================================================
   NNR GLOBAL TECHNOLOGIES — FULL MULTI-SECTION ENGINE
   3D AI Neural Core Engine | Scroll Observer | Contact Form
   ============================================================ */

(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const rand = (a, b) => Math.random() * (b - a) + a;

  /* ──────────────────────────────────────────────────────────
     1. SCROLL PROGRESS BAR & ACTIVE NAV OBSERVER
     ────────────────────────────────────────────────────────── */
  const progressBar = $('#scroll-progress');
  const navbar = $('#navbar');

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      progressBar.style.width = `${Math.min(100, (scrollTop / docHeight) * 100)}%`;
    }
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollTop > 40);
    }
    updateActiveNav();
  }

  function updateActiveNav() {
    let current = '';
    $$('section[id], main[id]').forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    $$('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ──────────────────────────────────────────────────────────
     2. THREE.JS 3D INTERACTIVE AI NEURAL ENGINE
     ────────────────────────────────────────────────────────── */
  let scene, camera, renderer;
  let aiCoreGroup, centralCore, innerEnergyMesh, outerGlassMesh;
  let orbitalRingsGroup = [], nodesGroup, connectionsGroup, backgroundParticles;
  let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;
  let clock = new THREE.Clock();

  function initThreeAiCore() {
    const canvas = $('#threeAiCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const stage = canvas.parentElement;
    const width = stage.clientWidth || 540;
    const height = stage.clientHeight || 540;

    // Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    // WebGL Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Root Group
    aiCoreGroup = new THREE.Group();
    scene.add(aiCoreGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0284c7, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x0ea5e9, 3.5, 30);
    pointLight1.position.set(5, 5, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd97706, 2.0, 25);
    pointLight2.position.set(-6, -4, 6);
    scene.add(pointLight2);

    /* ── A. CENTRAL AI QUANTUM CORE (Glass + Energy Sphere) ── */
    centralCore = new THREE.Group();
    aiCoreGroup.add(centralCore);

    // Inner Glowing Energy Core
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 4);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8
    });
    innerEnergyMesh = new THREE.Mesh(innerGeo, innerMat);
    centralCore.add(innerEnergyMesh);

    // Outer Transparent Glass Sphere
    const outerGeo = new THREE.SphereGeometry(2.1, 64, 64);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.4,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    outerGlassMesh = new THREE.Mesh(outerGeo, outerMat);
    centralCore.add(outerGlassMesh);

    // Core Wireframe Aura
    const wireframeGeo = new THREE.IcosahedronGeometry(2.15, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    centralCore.add(wireframeMesh);

    /* ── B. 4 ORBITAL RINGS ── */
    const ringConfigs = [
      { radius: 3.4, stroke: 0.03, color: 0x0ea5e9, opacity: 0.7, rx: Math.PI / 3, ry: 0, rz: 0.2, speed: 0.4 },
      { radius: 4.2, stroke: 0.02, color: 0x0284c7, opacity: 0.6, rx: -Math.PI / 4, ry: Math.PI / 6, rz: 0, speed: -0.3 },
      { radius: 4.9, stroke: 0.025, color: 0xd97706, opacity: 0.65, rx: Math.PI / 6, ry: -Math.PI / 3, rz: Math.PI / 4, speed: 0.25 },
      { radius: 5.6, stroke: 0.018, color: 0x38bdf8, opacity: 0.5, rx: -Math.PI / 2.5, ry: 0, rz: -Math.PI / 6, speed: -0.2 }
    ];

    ringConfigs.forEach(cfg => {
      const ringGroup = new THREE.Group();
      ringGroup.rotation.set(cfg.rx, cfg.ry, cfg.rz);

      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.stroke, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
        blending: THREE.AdditiveBlending
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringGroup.add(ringMesh);

      // Dash dots on ring
      for (let i = 0; i < 6; i++) {
        const dotGeo = new THREE.SphereGeometry(0.06, 8, 8);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        const angle = (i / 6) * Math.PI * 2;
        dot.position.set(cfg.radius * Math.cos(angle), cfg.radius * Math.sin(angle), 0);
        ringGroup.add(dot);
      }

      ringGroup.userData = { speed: cfg.speed };
      orbitalRingsGroup.push(ringGroup);
      aiCoreGroup.add(ringGroup);
    });

    /* ── C. NEURAL NODES & DATA CONNECTIONS ── */
    nodesGroup = new THREE.Group();
    connectionsGroup = new THREE.Group();
    aiCoreGroup.add(nodesGroup);
    aiCoreGroup.add(connectionsGroup);

    const nodePositions = [];
    const nodeCount = 16;

    for (let i = 0; i < nodeCount; i++) {
      const theta = rand(0, Math.PI * 2);
      const phi = rand(0, Math.PI);
      const dist = rand(3.2, 5.2);

      const x = dist * Math.sin(phi) * Math.cos(theta);
      const y = dist * Math.sin(phi) * Math.sin(theta);
      const z = dist * Math.cos(phi);

      nodePositions.push(new THREE.Vector3(x, y, z));

      const nodeGeo = new THREE.SphereGeometry(rand(0.08, 0.14), 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xd97706 : i % 2 === 0 ? 0x0ea5e9 : 0x38bdf8,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeMesh.userData = {
        basePos: new THREE.Vector3(x, y, z),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.5, 1.5)
      };
      nodesGroup.add(nodeMesh);
    }

    // Connections between Nodes & Core
    nodePositions.forEach((pos, idx) => {
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(pos.x * 0.5 + rand(-0.3, 0.3), pos.y * 0.5 + rand(-0.3, 0.3), pos.z * 0.5),
        pos
      ];
      const curve = new THREE.CatmullRomCurve3(points);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(30));

      const lineMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0x0ea5e9 : 0x0284c7,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(curveGeo, lineMat);
      connectionsGroup.add(line);
    });

    /* ── D. BACKGROUND ELEGANT DUST PARTICLES ── */
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 120;
    const pPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = rand(-9, 9);
      pPositions[i * 3 + 1] = rand(-9, 9);
      pPositions[i * 3 + 2] = rand(-7, 5);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0x0ea5e9,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    backgroundParticles = new THREE.Points(particleGeo, pMat);
    aiCoreGroup.add(backgroundParticles);

    /* ── E. MOUSE INTERACTION ── */
    document.addEventListener('mousemove', (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    });

    window.addEventListener('resize', onWindowResize);
    animateThreeAiCore();
  }

  function onWindowResize() {
    const canvas = $('#threeAiCanvas');
    if (!canvas || !renderer || !camera) return;
    const stage = canvas.parentElement;
    const width = stage.clientWidth || 540;
    const height = stage.clientHeight || 540;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  /* ──────────────────────────────────────────────────────────
     3. ANIMATION LOOP (60FPS GPU ACCELERATED)
     ────────────────────────────────────────────────────────── */
  function animateThreeAiCore() {
    requestAnimationFrame(animateThreeAiCore);
    const elapsedTime = clock.getElapsedTime();

    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    if (aiCoreGroup) {
      aiCoreGroup.rotation.y = elapsedTime * 0.12 + mouseX * 0.35;
      aiCoreGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.05 + mouseY * 0.2;
      aiCoreGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;
    }

    if (innerEnergyMesh) {
      innerEnergyMesh.rotation.y = elapsedTime * 0.4;
      innerEnergyMesh.rotation.z = elapsedTime * 0.2;
      const scale = 1.0 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerEnergyMesh.scale.set(scale, scale, scale);
    }

    if (outerGlassMesh) {
      outerGlassMesh.rotation.y = -elapsedTime * 0.15;
    }

    orbitalRingsGroup.forEach(ring => {
      ring.rotation.z += ring.userData.speed * 0.015;
    });

    if (nodesGroup) {
      nodesGroup.children.forEach(node => {
        const u = node.userData;
        const offset = Math.sin(elapsedTime * u.speed + u.phase) * 0.12;
        node.position.x = u.basePos.x + offset;
        node.position.y = u.basePos.y + offset;
      });
    }

    renderer.render(scene, camera);
  }

  /* ──────────────────────────────────────────────────────────
     4. FORM SUBMISSION & INTERACTIVE HANDLERS
     ────────────────────────────────────────────────────────── */
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initThreeAiCore, 100);
  } else {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initThreeAiCore, 100));
  }

  const hamburger = $('#hamburger');
  const navMenu = $('#nav-menu');

  function closeNav() {
    hamburger && hamburger.classList.remove('active');
    navMenu && navMenu.classList.remove('open');
  }

  hamburger && hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu && navMenu.classList.toggle('open');
  });

  // Close nav when a link is tapped (mobile)
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close nav when tapping outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeNav();
      }
    }
  });

  // Smooth Scroll for internal hash anchors on the same page
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#' || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ──────────────────────────────────────────────────────────
     5. INDIVIDUAL ELEMENT-LEVEL SCROLL ANIMATION OBSERVER
     ────────────────────────────────────────────────────────── */
  function initElementLevelAnimations() {
    const sections = $$('section, main, footer');

    sections.forEach((sec, sIdx) => {
      // Find all animate-able elements inside this section
      const textElems = $$('.section-tag, .section-title, .section-subtitle, .hero-badge, .hero-heading, .company-desc, .contact-heading, .contact-sub, .contact-title-main, .contact-subtitle-main', sec);
      const cardElems = $$('.solution-card, .product-card, .case-card, .industry-card, .career-card, .eco-card, .eco-center-hub, .contact-card-box, .why-us-box, .company-stat-card', sec);
      const iconElems = $$('.card-icon-wrapper, .tech-card, .industry-icon, .tech-logo', sec);
      const btnElems = $$('.btn-primary-gradient, .btn-secondary-outline, .btn-nav-talk, .card-link', sec);
      const imageElems = $$('.case-card-img', sec);
      const statElems = $$('.stat-item', sec);
      const stageElems = $$('#ai-stage, .hero-right', sec);

      // Classify and tag elements
      textElems.forEach(el => { el.classList.add('anim-elem', 'anim-text'); });
      cardElems.forEach(el => { el.classList.add('anim-elem', 'anim-card'); });
      iconElems.forEach(el => { el.classList.add('anim-elem', 'anim-icon'); });
      btnElems.forEach(el => { el.classList.add('anim-elem', 'anim-button'); });
      imageElems.forEach(el => { el.classList.add('anim-elem', 'anim-image'); });
      statElems.forEach(el => { el.classList.add('anim-elem', 'anim-stat'); });
      stageElems.forEach(el => { el.classList.add('anim-elem', 'anim-3d'); });

      // Stagger all anim-elem children inside this section sequentially (100ms stagger)
      const allElems = $$('.anim-elem, .fade-in-up, .fade-in-right', sec);

      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            allElems.forEach((child, cIdx) => {
              const delay = cIdx * 100; // 100ms staggered delay
              setTimeout(() => {
                child.classList.add('anim-visible', 'visible');
              }, delay);
            });
            sectionObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      sectionObserver.observe(sec);
    });

    // Also observe any floating fallback elements
    const orphanObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-visible', 'visible');
          orphanObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    $$('.anim-elem:not(.anim-visible), .fade-in-up:not(.visible)').forEach(el => orphanObserver.observe(el));
  }

  // Interactive Ecosystem Card Hover Path Highlighting
  $$('.eco-card').forEach(card => {
    const pathId = card.getAttribute('data-path');
    if (!pathId) return;
    const pathEl = document.getElementById(pathId);
    if (!pathEl) return;

    card.addEventListener('mouseenter', () => {
      pathEl.classList.add('highlight');
    });
    card.addEventListener('mouseleave', () => {
      pathEl.classList.remove('highlight');
    });
  });

  // Clean element animation initialization
  initElementLevelAnimations();

  // Contact Form Handler for index.html and contact.html
  const contactForm = $('#contact-form') || $('#contact-page-form');
  const toast = $('#toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#fullname')?.value.trim();
      const email = contactForm.querySelector('#email')?.value.trim();
      if (!name || !email) {
        showToast('Please fill in required fields.', 'warn');
        return;
      }

      const btn = contactForm.querySelector('#submit-btn');
      if (btn) { btn.textContent = 'Sending Message...'; btn.disabled = true; }

      setTimeout(() => {
        contactForm.reset();
        if (btn) {
          btn.innerHTML = '<span>Send Message</span> <span class="btn-arrow">&#8594;</span>';
          btn.disabled = false;
        }
        showToast("Thank you! We've received your message and will reach out shortly.", 'ok');
      }, 1200);
    });
  }

  function showToast(msg, type = 'ok') {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-msg');
    const iconEl = toast.querySelector('.toast-icon');
    if (msgEl) msgEl.textContent = msg;
    if (iconEl) iconEl.textContent = type === 'ok' ? '✅' : '⚠️';
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 4000);
  }

  console.log('%c NNR Global Technologies — Engine Active ', 'background: #0284C7; color: #FFFFFF; padding: 8px 16px; border-radius: 8px; font-weight: 900; font-size: 14px;');

})();
