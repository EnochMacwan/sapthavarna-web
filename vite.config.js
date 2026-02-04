import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages (repo name)
  base: '/sapthavarna-web/',
  
  build: {
    // Output to docs folder for GitHub Pages
    outDir: 'docs',
    
    // Don't empty the folder (in case of manual files)
    emptyOutDir: true,
    
    // Generate source maps for debugging
    sourcemap: false,
    
    // Rollup options
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html'
      }
    }
  },
  
  // Dev server config
  server: {
    port: 3000,
    open: true
  }
});
