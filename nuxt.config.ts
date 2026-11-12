// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: false, // 用 `npm run typecheck` 手動檢查，避免拖慢 dev
  },
})
