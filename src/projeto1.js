import './css/main.css';
import { initLenis } from './modules/lenis.js';
import { initCursor, initParticleBurst } from './modules/cursor.js';
import { initThreeBackground } from './modules/three-background.js';
import {
  initHeroReveal,
  initNavBackdrop,
  initPageTransitions
} from './modules/gsap-animations.js';

const lenis = initLenis();
initCursor();
initParticleBurst();
initThreeBackground({ count: 800, color: 0x88aaff });
initHeroReveal();
initNavBackdrop();
initPageTransitions();
