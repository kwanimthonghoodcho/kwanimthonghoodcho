import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kwanimthonghoodcho/', // GitHub Pages base path
  build: {
    outDir: 'build', // Output to 'build' directory for gh-pages
  },
})
