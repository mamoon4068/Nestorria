import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // server: {
  //   host: '127.0.0.1', // Change to '0.0.0.0' to listen on all interfaces
  //   port: 3001         // Change to your desired port
  // }
})







