import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Ensure trailing slash
  plugins: [
    react(),
    tailwindcss(),
  ],
  // server: {
  //   host: true, // Enable to listen on all addresses, including LAN
  //   port: 5173, // Specify the port
  //   hmr: {
  //     protocol: 'ws', // Use WebSocket protocol
  //     host: 'localhost', // Specify the host for HMR
  //     port: 5173, // Specify the port for HMR
  //   },
  // },
})
