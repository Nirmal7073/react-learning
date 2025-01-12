import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'scss/main.scss';`,
      },
    },
  },
  build: {
    assetsInlineLimit: 0, 
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

