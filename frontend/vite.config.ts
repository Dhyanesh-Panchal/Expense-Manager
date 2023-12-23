// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Expense Manager',
        short_name: 'Expenses',
        description: 'Manage your expenses on the go!',
        theme_color: '#4caf50',
        icons: [
          {
            src: 'pwa-192x192.png', // 192x192px
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png', // 512x512px
            sizes: '512x512',
            type: 'image/png',
          },
          // ... you can include other sizes as needed
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
      },
    }),
  ],
});
