import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"https://timbu-get-single-product.reavdev.workers.dev/",
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/, "")
      }
    }
  }
})
