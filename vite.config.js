import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// GitHub Pages 项目页部署在 /web/ 子路径下
export default defineConfig({
  base: '/web/',
  plugins: [
    vue(),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
})
