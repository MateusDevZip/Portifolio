export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        "outline-variant": "#424754",
        "on-primary-container": "#00285d",
        "surface-dim": "#0b1326",
        "surface-tint": "#adc6ff",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "surface-variant": "#2d3449",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#c2c6d6",
        "outline": "#8c909f",
        "primary": "#adc6ff",
        "primary-container": "#4d8eff",
        "secondary": "#4edea3",
        "secondary-container": "#00a572",
        "tertiary": "#ffb95f",
        "tertiary-container": "#ca8100",
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    }
  }
}
