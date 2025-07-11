/**
 * Vite Configuration for Chrome Extension
 * This configures how the extension is built and bundled
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Plugins to use during build
  plugins: [
    react()  // Enables React JSX and hot reloading
  ],
  
  // Build configuration
  build: {
    // Rollup configuration for bundling
    rollupOptions: {
      // Entry points - what files to start bundling from
      input: {
        // Main content script that gets injected into LeetCode pages
        content: path.resolve(__dirname, 'src/content.tsx')
      },
      
      // Output file naming
      output: {
        entryFileNames: '[name].js',      // content.js
        chunkFileNames: '[name].js',      // Any code-split chunks
        assetFileNames: '[name].[ext]'    // CSS and other assets
      }
    },
    
    // Output directory for built files
    outDir: 'dist',
    
    // Clear the output directory before each build
    emptyOutDir: true
  }
}) 