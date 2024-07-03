import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Add more plugins here if needed
  ],
  server: {
    port: 3000, // Customize the port Vite runs on
    open: true, // Automatically open the browser when Vite starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    assetsDir: 'assets', // Specify the directory for assets (images, fonts, etc.)
    sourcemap: true, // Generate source maps for debugging
    manifest: true, // Generate manifest.json for PWA support
    // Add more build options as necessary
  },
  optimizeDeps: {
    include: ['react-icons/fa'], // Example: Include specific dependencies
    exclude: ['lodash'], // Example: Exclude specific dependencies
  },
});

