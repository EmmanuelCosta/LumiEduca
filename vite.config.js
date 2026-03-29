// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // FORÇA O PWA A FUNCIONAR NO NPM RUN DEV
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'LumiEduca',
        short_name: 'Lumi',
        description: 'Plataforma gamificada de educação infantil',
        theme_color: '#FF8C00', // Laranja Lumi
        background_color: '#FFFFFF',
        display: 'standalone', // Essencial para parecer um App
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any' // Adicione isso para ajudar o Chrome
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable' // Adicione isso para ícones adaptativos
          }
        ]
      }
    })
  ]
})