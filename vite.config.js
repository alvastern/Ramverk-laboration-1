import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [tailwindcss()],
  input: {
    start: resolve(import.meta.dirname, 'index.html'),
    bootstrap: resolve(import.meta.dirname, 'bootstrap.html'),
    tailwind: resolve(import.meta.dirname, 'tailwind.html'),
    publicering: resolve(import.meta.dirname, 'publicering.html'),
  },
})