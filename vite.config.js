import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  {
  plugins: [vue()],
  base:"http://www.brozoneradio.com/test/",
  publicDir:"./public/",
  require:"./data/"
  }
)