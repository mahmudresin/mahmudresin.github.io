import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo is mahmudresin.github.io — a GitHub User Page.
// User pages are always served from the root (/), so base = '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
