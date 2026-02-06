import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Base path for GitHub Pages (repo name)
  base: '/sapthavarna-web/',

  // Project root and public folder
  publicDir: 'assets/images',

  plugins: [{
    name: 'copy-web-folder',
    closeBundle() {
      const src = resolve(__dirname, 'web');
      const dest = resolve(__dirname, 'docs/web');
      mkdirSync(dest, { recursive: true });
      readdirSync(src).forEach(f => {
        copyFileSync(resolve(src, f), resolve(dest, f));
      });
    }
  }],

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
