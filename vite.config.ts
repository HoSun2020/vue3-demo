import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path';


const pathResolve = (pathStr: string) => {
  return resolve(__dirname, '.', pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        // /@/xxxx  =>  src/xxx
        find: /^\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  }
})
