import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
  ],
  // 共用元件放 components/common/，名稱不加資料夾前綴，
  // 例如 components/common/BaseButton.vue 直接用 <BaseButton />
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  nitro: {
    prerender: {
      // GitHub Pages 是靜態網站，每個語系的首頁都要預先產生
      routes: ['/', '/zh-tw', '/id'],
    },
  },
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
  i18n: {
    // 翻譯檔放在 i18n/locales/，新增語系時在這裡加一筆並新增對應的 JSON 檔
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh-tw', language: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
      { code: 'id', language: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json' },
    ],
    defaultLocale: 'en',
    // 英文網址不加前綴（/），其他語系為 /zh-tw、/id
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      // 第一次造訪首頁時依瀏覽器語言自動導向，之後記住使用者選擇
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
  },
})
