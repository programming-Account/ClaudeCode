/* ============================================================
   Init
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

// ローダー中はスクロール禁止
document.body.style.overflow = 'hidden';

// ナビとヒーロー要素を初期状態にセット（ローダー完了後にアニメーション）
gsap.set('nav', { y: -80, opacity: 0 });
gsap.set(['.hero-sub', '.hero h1', '.hero-desc', '.hero .btn'], {
  opacity: 0,
  y: 40,
});

/* ============================================================
   Loader
   ============================================================ */
const loaderTl = gsap.timeline({
  onComplete: () => {
    gsap.to('#loader', {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        document.getElementById('loader').style.display = 'none';
        document.body.style.overflow = '';
        heroAnimation();
      },
    });
  },
});

loaderTl
  .from('.loader-icon', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(2)',
  })
  .from('.loader-text', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
  .to('.loader-bar-fill', { width: '100%', duration: 1.4, ease: 'power2.inOut' }, '-=0.1')
  .to(
    '.loader-icon',
    { rotate: 20, duration: 0.2, yoyo: true, repeat: 3, ease: 'sine.inOut' },
    '-=0.4'
  );

/* ============================================================
   Hero Animation (ローダー後に実行)
   ============================================================ */
function heroAnimation() {
  const tl = gsap.timeline();

  tl.to('nav', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    .to('.hero-sub', { opacity: 0.85, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.3')
    .to('.hero h1', { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' }, '-=0.45')
    .to('.hero-desc', { opacity: 0.9, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.5')
    .to(
      '.hero .btn',
      { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.3'
    );
}

/* ============================================================
   ScrollTrigger Utilities
   ============================================================ */
function staggerReveal(targets, trigger, opts = {}) {
  gsap.from(targets, {
    opacity: 0,
    y: 45,
    duration: 0.75,
    ease: 'power3.out',
    stagger: opts.stagger ?? 0.12,
    scrollTrigger: {
      trigger,
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    ...opts,
  });
}

function fadeReveal(target, trigger, opts = {}) {
  gsap.from(target, {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger,
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
    ...opts,
  });
}

/* ============================================================
   Concept Section
   ============================================================ */
ScrollTrigger.create({
  trigger: '.concept',
  start: 'top 80%',
  toggleActions: 'play none none none',
  onEnter: () => {
    gsap
      .timeline()
      .from('.concept .section-label', { opacity: 0, y: 20, duration: 0.5 })
      .from('.concept .section-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from(
        '.concept .divider',
        { scaleX: 0, transformOrigin: 'center', duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .from('.concept p', { opacity: 0, y: 20, duration: 0.7 }, '-=0.1');
  },
});

/* ============================================================
   Menu Section
   ============================================================ */
ScrollTrigger.create({
  trigger: '.menu',
  start: 'top 80%',
  toggleActions: 'play none none none',
  onEnter: () => {
    gsap
      .timeline()
      .from('.menu .section-label', { opacity: 0, y: 20, duration: 0.5 })
      .from('.menu .section-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from(
        '.menu-divider',
        { scaleX: 0, transformOrigin: 'center', duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .from(
        '.menu-card',
        {
          opacity: 0,
          y: 50,
          duration: 0.65,
          stagger: 0.14,
          ease: 'power3.out',
        },
        '-=0.2'
      );
  },
});

/* ============================================================
   Gallery Section
   ============================================================ */
ScrollTrigger.create({
  trigger: '.gallery-section',
  start: 'top 85%',
  toggleActions: 'play none none none',
  onEnter: () => {
    gsap
      .timeline()
      .from('.gallery-header .section-label', { opacity: 0, y: 20, duration: 0.5 })
      .from('.gallery-header .section-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from(
        '.gallery-header .divider',
        { scaleX: 0, transformOrigin: 'center', duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .from('.splide', { opacity: 0, y: 30, duration: 0.8 }, '-=0.1');
  },
});

/* ============================================================
   Access Section
   ============================================================ */
ScrollTrigger.create({
  trigger: '.access',
  start: 'top 80%',
  toggleActions: 'play none none none',
  onEnter: () => {
    gsap
      .timeline()
      .from('.access .section-label', { opacity: 0, y: 20, duration: 0.5 })
      .from('.access .section-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from(
        '.access .divider',
        { scaleX: 0, transformOrigin: 'center', duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .from(
        '.info-item',
        { opacity: 0, y: 35, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.1'
      );
  },
});

/* ============================================================
   CTA Section
   ============================================================ */
ScrollTrigger.create({
  trigger: '.cta',
  start: 'top 80%',
  toggleActions: 'play none none none',
  onEnter: () => {
    gsap
      .timeline()
      .from('.cta .section-label', { opacity: 0, y: 20, duration: 0.5 })
      .from('.cta .section-title', { opacity: 0, y: 30, duration: 0.65 }, '-=0.2')
      .from('.cta p', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from(
        '.cta .btn',
        { opacity: 0, scale: 0.85, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.2'
      );
  },
});

/* ============================================================
   Nav スクロール時スタイル変化
   ============================================================ */
ScrollTrigger.create({
  start: 'top -60px',
  end: 'max',
  toggleClass: { className: 'nav--scrolled', targets: 'nav' },
});

/* ============================================================
   Splide Gallery
   ============================================================ */
new Splide('#gallery-splide', {
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 4500,
  speed: 900,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  pauseOnHover: true,
  arrows: true,
  pagination: true,
  lazyLoad: 'nearby',
}).mount();
