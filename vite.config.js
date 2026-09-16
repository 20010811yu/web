import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 部署在 Netlify（域名根路径）
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
})
