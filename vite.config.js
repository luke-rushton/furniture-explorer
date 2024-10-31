import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://furniture.bcitwebdeveloper.ca/wp-content/plugins/react-plugin/furniture-explorer/",
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: `assets/furniture-explorer.js`,
  //       chunkFileNames: `assets/furniture-explorer.js`,
  //       assetFileNames: `assets/furniture-explorer.[ext]`
  //     }
  //   }
  // }
})
