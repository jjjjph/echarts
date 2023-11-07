import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/apis':{
        target:'http://www.shuiyue.info:21000/',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/apis/, '')
      }
    }
}
})
