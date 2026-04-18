// @ts-check
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroReveal() {
  const reveals = document.querySelectorAll('#hero-title span');
  gsap.to(reveals, {
    y: "0%",
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    delay: 0.5
  });
}

export function initScrollTriggers(lenis) {
  const aboutItems = document.querySelectorAll('.about-item');
  const citationEl = document.getElementById('skill-citation');

  aboutItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        item.classList.add('is-visible');
        if (citationEl) {
          gsap.to(citationEl, { opacity: 0, y: -20, duration: 0.2, onComplete: () => {
            citationEl.innerText = item.getAttribute('data-quote');
            gsap.to(citationEl, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });
          }});
        }
      },
      onEnterBack: () => {
        if (citationEl && item.getAttribute('data-quote')) {
          gsap.to(citationEl, { opacity: 0, y: 20, duration: 0.2, onComplete: () => {
            citationEl.innerText = item.getAttribute('data-quote');
            gsap.to(citationEl, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });
          }});
        }
      },
      onLeaveBack: () => item.classList.remove('is-visible')
    });
  });
}

export function initProjectsSpy(lenis) {
  const projectLinks = document.querySelectorAll('.split-project-item');
  const projectPreviews = document.querySelectorAll('.project-preview-item');
  const counterEl = document.getElementById('project-counter');

  projectPreviews.forEach((preview, index) => {
    ScrollTrigger.create({
      trigger: preview,
      start: "top center",
      end: "bottom center",
      onEnter: () => activateProject(index),
      onEnterBack: () => activateProject(index)
    });
  });

  function activateProject(index) {
    projectLinks.forEach(link => link.classList.remove('active'));
    projectPreviews.forEach(prev => prev.classList.remove('active'));

    if (projectLinks[index]) projectLinks[index].classList.add('active');
    if (projectPreviews[index]) projectPreviews[index].classList.add('active');
    if (counterEl) counterEl.textContent = String(index + 1).padStart(2, '0');
  }
}

export function initNavBackdrop() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  }, { passive: true });
}

export function initPageTransitions() {
  const pageTransition = document.getElementById('page-transition');
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http') || href.startsWith('//')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = href;
      gsap.timeline()
        .set(pageTransition, { scaleY: 0, transformOrigin: 'center bottom', pointerEvents: 'all' })
        .to(pageTransition, { scaleY: 1, duration: 0.55, ease: 'power3.inOut' })
        .then(() => { window.location.href = target; });
    });
  });

  if (document.referrer && document.referrer.includes(window.location.hostname)) {
    gsap.fromTo(pageTransition,
      { scaleY: 1, transformOrigin: 'center top' },
      { scaleY: 0, duration: 0.55, ease: 'power3.inOut', delay: 0.1, onComplete: () => {
        pageTransition.style.pointerEvents = 'none';
      }}
    );
  }
}
