
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/",
//   resolve: {
//     alias: {
//       'date-fns/_lib/format/longFormatters': path.resolve(__dirname, 'node_modules/date-fns/_lib/format/longFormatters'),
//     }
//   },
//   optimizeDeps: {
//     include: ['date-fns']
//   },
//   build: {
//     chunkSizeWarningLimit: 1000, // Set a higher limit (in KB)
//     outDir: 'dist', // Ensure this points to 'dist'
//     rollupOptions: {
//       input: '/src/main.jsx', // Ensures Vite correctly identifies the entry point
//     },
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Update if deploying to a subdirectory
  resolve: {
    alias: {
      // Adjust the path if the alias is needed
      'date-fns/_lib/format/longFormatters': path.resolve(__dirname, 'node_modules/date-fns/_lib/format/longFormatters'),
    }
  },
  optimizeDeps: {
    include: ['date-fns'] // Include any other dependencies you might need here
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit (in KB)
    outDir: 'dist', // Ensure this matches the deployment setup
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'), // Ensure the entry point is correct
    },
  },
});
