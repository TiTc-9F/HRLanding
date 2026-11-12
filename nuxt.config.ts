// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false, // 關閉匿名使用統計，避免啟動時卡在 telemetry 詢問
  typescript: {
    strict: true,
    typeCheck: false, // 用 `npm run typecheck` 手動檢查，避免拖慢 dev
  },
})
