import './css/main.css';
import { initLenis } from './modules/lenis.js';
import { initCursor, initParticleBurst } from './modules/cursor.js';
import { initThreeBackground } from './modules/three-background.js';
import {
  initHeroReveal,
  initScrollTriggers,
  initProjectsSpy,
  initNavBackdrop,
  initPageTransitions
} from './modules/gsap-animations.js';

const lenis = initLenis();
initCursor();
initParticleBurst();
initThreeBackground({ count: window.innerWidth < 768 ? 400 : 1500, color: 0xaaaaaa });
initHeroReveal();
initScrollTriggers(lenis);
initProjectsSpy(lenis);
initNavBackdrop();
initPageTransitions();
