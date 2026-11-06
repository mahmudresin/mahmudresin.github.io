import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base ensures compatibility with both:
  // - User/Org pages: https://<username>.github.io/
  // - Project pages:  https://<username>.github.io/<repo-name>/
  base: './',
})
