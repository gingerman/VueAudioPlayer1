import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  {
  plugins: [vue()],
  base:"/",
  publicDir:"./public",
  require:"./audio/"
  }
)


  // {
  // plugins: [vue()],
  // base:"http://www.brozoneradio.com/test/",
  // publicDir:"./public/",
  // require:"./audio/"
  // }

// base:"/brozone_zone_1/dist/",


// require:"./audio/",
// publicDir:"./audio/",