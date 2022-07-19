import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    includeSource: ["src/**/*.{js,ts,vue}"],
    exclude: ['src','node_modules', 'dist', '.idea', '.git', '.cache'],
  },
})