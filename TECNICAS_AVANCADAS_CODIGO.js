// ============================================
// Técnicas Avançadas de Portfólios Premiados
// Adaptadas para Portfolio 3D com Three.js
// ============================================

/**
 * 1. LAZY LOADING DE CENAS 3D
 * 
 * Problema: Three.js é pesado. Se carregar tudo de uma vez, FCP/LCP sofrem.
 * Solução: Carregar WebGL scene somente quando visitor scrollar até ela.
 */

import { useEffect, useRef } from 'react';

export const useLazyWebGL = (containerRef) => {
  const sceneInitialized = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !sceneInitialized.current) {
            // Carregar Three.js assets dinamicamente
            import('three').then((THREE) => {
              initializeScene(containerRef.current, THREE);
              sceneInitialized.current = true;
            });
          }
        });
      },
      { threshold: 0.1 } // Dispara quando 10% da scene está visível
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
};

/**
 * 2. PERFORMANCE OPTIMIZATION: Frustum Culling
 * 
 * Conceito: Não renderize objetos 3D que estão fora da câmera
 * Impacto: Reduz draw calls em até 60%
 */

function setupFrustumCulling(scene, camera) {
  const frustum = new THREE.Frustum();
  const cameraMatrix = new THREE.Matrix4();

  function animate() {
    requestAnimationFrame(animate);

    // Atualiza frustum com posição atual da câmera
    cameraMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraMatrix);

    // Ativa/desativa renderização baseado em frustum
    scene.traverse((mesh) => {
      if (mesh.isMesh) {
        // Cull individual meshes
        mesh.visible = frustum.intersectsObject(mesh);
      }
    });

    renderer.render(scene, camera);
  }

  animate();
}

/**
 * 3. SCROLL-TRIGGERED ANIMATIONS
 * 
 * Padrão usado em portfólios de classe alta (Ewan Kerboas, etc)
 * Animações disparam conforme usuario scrolla para um elemento
 */

export const useScrollAnimation = (elementRef, options = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    duration = 0.6,
    easing = 'easeOut'
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Aplicar animação quando elemento entra na viewport
            entry.target.style.animation = `slideInUp ${duration}s ${easing} forwards`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, duration, easing]);
};

// CSS correspondente
const scrollAnimationCSS = `
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  @keyframes slideInUp {
    from { opacity: 1; transform: none; }
    to { opacity: 1; transform: none; }
  }
}
`;

/**
 * 4. RESPONSIVE PERFORMANCE: Qualidade Dinâmica
 * 
 * Padrão: Renderização de qualidade diferente em mobile vs desktop
 * Impacto: Mobile não precisa de assets 4K
 */

function getQualitySettings() {
  const isMobile = window.innerWidth < 768;
  const isSlowNetwork = navigator.connection?.effectiveType === '4g' || '3g';

  return {
    resolution: isMobile ? 0.5 : 1.0,
    shadowMapSize: isSlowNetwork ? 512 : 2048,
    particleCount: isMobile ? 100 : 500,
    geometryDetail: isMobile ? 'low' : 'high',
    textureResolution: isSlowNetwork ? '512px' : '2048px'
  };
}

// Usar no setup de cena
const qualitySettings = getQualitySettings();
renderer.setPixelRatio(Math.min(window.devicePixelRatio, qualitySettings.resolution));

/**
 * 5. CORE WEB VITALS: Monitorar em Real-Time
 * 
 * Padrão: Usar Web Vitals API para medir performance
 * Objetivo: Atingir Green em LCP, FID, CLS
 */

export const setupWebVitalsMonitoring = () => {
  // Largest Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('LCP:', entry.renderTime || entry.loadTime);
      if (entry.renderTime > 2.5 * 1000) {
        console.warn('LCP is slow - consider lazy loading assets');
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });

  // Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    }
    console.log('CLS:', clsValue);
  }).observe({ type: 'layout-shift', buffered: true });

  // First Input Delay
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FID:', entry.processingDuration);
    }
  }).observe({ type: 'first-input', buffered: true });
};

/**
 * 6. SMART CACHING STRATEGY
 * 
 * Padrão: Cache assets 3D agressivamente, invalida ao atualizar
 * Benefício: Repeat visits carregam 10x mais rápido
 */

export const useAssetCache = () => {
  const cache = new Map();

  const loadAsset = async (url, assetType = 'gltf') => {
    // Verificar se já está em cache
    if (cache.has(url)) {
      return cache.get(url);
    }

    try {
      let asset;

      if (assetType === 'gltf') {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        asset = await new GLTFLoader().loadAsync(url);
      } else if (assetType === 'texture') {
        const { TextureLoader } = THREE;
        asset = await new TextureLoader().loadAsync(url);
      }

      // Armazenar em cache com timestamp
      cache.set(url, {
        asset,
        timestamp: Date.now()
      });

      return asset;
    } catch (error) {
      console.error(`Failed to load asset: ${url}`, error);
      return null;
    }
  };

  const clearExpiredCache = () => {
    const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 horas
    const now = Date.now();

    for (const [url, data] of cache.entries()) {
      if (now - data.timestamp > CACHE_TTL) {
        cache.delete(url);
      }
    }
  };

  return { loadAsset, clearExpiredCache, cache };
};

/**
 * 7. MENU COM SCROLL DETECTION
 * 
 * Padrão visto em Ewan Kerboas: Menu destaca seção atual automaticamente
 */

export const useScrollSectionDetection = () => {
  const [activeSection, setActiveSection] = React.useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section'));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
};

// Uso no HTML/JSX
const activeSection = useScrollSectionDetection();

<nav className="sticky-menu">
  <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
    Projetos
  </a>
  <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
    Skills
  </a>
  <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
    Contato
  </a>
</nav>

<section data-section="projects">
  {/* Seus projetos 3D aqui */}
</section>

/**
 * 8. GESTURE HANDLING MOBILE
 * 
 * Padrão: Suporte a touch em dispositivos móveis
 */

export const useGestureControls = (containerRef, onGesture) => {
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let startDistance = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;

      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        startDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const handleTouchMove = (e) => {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      if (e.touches.length === 1) {
        // Swipe / drag
        onGesture({
          type: 'drag',
          deltaX,
          deltaY
        });
      } else if (e.touches.length === 2) {
        // Pinch zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const zoomDelta = distance - startDistance;

        onGesture({
          type: 'pinch',
          scale: zoomDelta / 100
        });
      }
    };

    containerRef.current?.addEventListener('touchstart', handleTouchStart);
    containerRef.current?.addEventListener('touchmove', handleTouchMove);

    return () => {
      containerRef.current?.removeEventListener('touchstart', handleTouchStart);
      containerRef.current?.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onGesture]);
};

/**
 * 9. PRELOAD CRÍTICA PARA LCP
 * 
 * Padrão: Precarregar assets que afetam Largest Contentful Paint
 */

export const preloadAssets = () => {
  // Preload imagens hero
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = '/images/hero.webp';
  document.head.appendChild(link);

  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.href = '/fonts/inter.woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Prefetch modelos 3D menos críticos
  const modelLink = document.createElement('link');
  modelLink.rel = 'prefetch';
  modelLink.href = '/models/project-2.gltf';
  document.head.appendChild(modelLink);
};

/**
 * 10. STATE MANAGEMENT OTIMIZADO
 * 
 * Padrão: Não usar Redux para portfólio. Muito overhead.
 * Usar Zustand ou Context simples.
 */

import create from 'zustand';

export const usePortfolioStore = create((set) => ({
  selectedProject: null,
  setSelectedProject: (id) => set({ selectedProject: id }),
  cameraPosition: { x: 0, y: 0, z: 8 },
  setCameraPosition: (pos) => set({ cameraPosition: pos }),
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
}));

// Uso
const { selectedProject, setSelectedProject } = usePortfolioStore();

/**
 * 11. ERROR BOUNDARY E FALLBACK
 * 
 * Padrão: WebGL pode falhar em alguns navegadores
 */

export const WebGLFallback = ({ children, fallback }) => {
  const [hasWebGL, setHasWebGL] = React.useState(true);

  React.useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');

    if (!gl) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return fallback || <div>Seu navegador não suporta WebGL.</div>;
  }

  return children;
};

/**
 * 12. BUILD OPTIMIZATION
 * 
 * next.config.js ou vite.config.js
 */

// Para Next.js
export const nextConfig = {
  compress: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        three: {
          test: /[\\/]node_modules[\\/]three[\\/]/,
          name: 'three',
          priority: 30,
          reuseExistingChunk: true
        }
      };
    }
    return config;
  }
};

// ============================================
// CHECKLIST DE IMPLEMENTAÇÃO
// ============================================

/**
 * Performance
 * [ ] Lazy load Three.js scene
 * [ ] Frustum culling ativado
 * [ ] Responsive quality settings
 * [ ] Web Vitals monitoradas
 * [ ] Asset caching em IndexedDB/Cache API
 * [ ] Gzip/Brotli compression
 *
 * UX/UI
 * [ ] Scroll animations em elementos
 * [ ] Menu com scroll detection
 * [ ] Gesture controls mobile
 * [ ] Preload de assets críticos
 * [ ] Error boundary + fallback
 * [ ] Accessibility (alt text, ARIA labels)
 *
 * Build
 * [ ] Code splitting configurado
 * [ ] Tree-shaking otimizado
 * [ ] Image optimization (WebP/AVIF)
 * [ ] Minification CSS/JS/HTML
 * [ ] Source maps em produção
 *
 * Monitoramento
 * [ ] Sentry para error tracking
 * [ ] Analytics de performance
 * [ ] User interaction tracking
 * [ ] A/B testing setup
 */
