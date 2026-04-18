import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portifolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projeto1: resolve(__dirname, 'projeto1.html'),
        projeto2: resolve(__dirname, 'projeto2.html'),
        projeto3: resolve(__dirname, 'projeto3.html'),
      }
    }
  }
})
