import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [react(), reactRefresh()],
  server: {
<<<<<<< HEAD
    port: 3001
=======
    port: 3000
>>>>>>> c8f99f312a02c889f7ba7458ed4e4c05af1086c6
  }
})
