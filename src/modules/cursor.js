// @ts-check
import gsap from 'gsap';

export function initCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');

  if (!cursor || !follower) return;

  if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(follower, {
          scale: 1.5,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderColor: "rgba(255,255,255,0.8)",
          duration: 0.3
        });
        gsap.to(cursor, { scale: 0, duration: 0.2 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(255,255,255,0.4)",
          duration: 0.3
        });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      });
    });
  }
}

export function initParticleBurst() {
  document.addEventListener('click', e => {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'click-particle';
      p.style.left = e.clientX + 'px';
      p.style.top = e.clientY + 'px';
      p.style.setProperty('--angle', `${(360 / count) * i}deg`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 650);
    }
  });
}
