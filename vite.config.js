import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        application: resolve(root,'application.html'),
        signUp:resolve(root, 'sign-up.html'),
        login:resolve(root, 'login.html'),
        portfolio:resolve(root, 'portfolio.html'),
        contactUs:resolve(root, 'contact-us.html'),
      }
    }
  }
})