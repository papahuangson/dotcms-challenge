/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tsconfigPaths()],
    base: '/dotcms-challenge/',
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: '.vitest/setup',
      include: ['**/test.{ts,tsx}']
    },
    define: {
      'process.env.DOTCMS_AUTH_TOKEN': JSON.stringify(
        env.VITE_DOTCMS_AUTH_TOKEN
      ),
      'process.env.DOTCMS_HOST': JSON.stringify(env.VITE_DOTCMS_HOST)
    }
  }
})
