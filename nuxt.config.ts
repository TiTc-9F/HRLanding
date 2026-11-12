import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
    typeCheck: false, // 用 `pnpm run typecheck` 手動檢查，避免拖慢 dev
  },
  // 關閉匿名使用統計，避免啟動時卡在 telemetry 詢問
  telemetry: false,
  eslint: {
    config: {
      // 用 ESLint Stylistic 統一排版（取代 Prettier）
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
