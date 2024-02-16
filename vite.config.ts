import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    target: 'ES2015',
  },
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 56'],
    }),
  ],
  alias: {
    '@': '/src',
    '@components': '/src/components',
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './src/tests/setup.ts', // assuming the test folder is in the root of our project
  },
});
