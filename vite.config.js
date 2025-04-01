import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': '/src'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888', // 后端服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // build: {
  //   assetsInlineLimit: 0,  // 禁用 Base64 转换
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         'vendor': ['vue', 'vue-router', 'pinia']
  //       }
  //     }
  //   }
  // }
})
