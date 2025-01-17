import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader  from 'vite-loader-svg'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  static:{
    directory:'public',
    serveDirectory: true
  },
  plugins: [react(), svgLoader()],
})

