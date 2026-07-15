import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base path must be '/' for Vercel deployment.
  // Vite defaults to this when no base is set, but being explicit
  // prevents subtle asset-path issues in production builds.
  base: '/',
  build: {
    // Generate sourcemaps for better error reporting in production.
    // Set to false to reduce bundle size if debugging isn't needed.
    sourcemap: false,
    // Rollup options for optimal production bundling.
    rollupOptions: {
      output: {
        // Manually chunk vendor bundles for better long-term caching.
        // This splits React, ReactDOM, and router into separate files
        // so they only need to be re-downloaded when those libs change.
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
        },
      },
    },
  },
})
