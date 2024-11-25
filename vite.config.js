import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // Allow external access (important for Render)
    port: process.env.PORT || 10000,  // Use Render's provided PORT or fallback to 10000
  },
})
