import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    target: 'ES2015'
  },
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 56'],
    }),
  ],
})
