export default {
  content: ["./index.html", "./projeto1.html", "./projeto2.html", "./projeto3.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    }
  }
}
