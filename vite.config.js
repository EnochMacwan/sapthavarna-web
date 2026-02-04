import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages (repo name)
  base: '/sapthavarna-web/',
  
  // Project root and public folder
  publicDir: 'assets/images',
  
  build: {
    // Output to docs folder for GitHub Pages
    outDir: 'docs',
    
    // Clear the folder
    emptyOutDir: true,
    
    // Rollup options
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html',
        notfound: '404.html'
      }
    }
  },
  
  // Dev server config
  server: {
    port: 3000,
    open: true
  }
});
