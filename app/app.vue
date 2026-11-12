<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

// 依目前語系輸出 <html lang>、hreflang 與 canonical 等 SEO 標籤
const i18nHead = useLocaleHead()

// 分頁小圖示放在 public/；GitHub Pages 的網址有 /HRLanding/ 前綴，所以路徑要接上 baseURL
const base = useRuntimeConfig().app.baseURL

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
  link: [
    { rel: 'icon', href: `${base}favicon.ico`, sizes: '48x48' },
    { rel: 'icon', type: 'image/png', href: `${base}icon-512.png`, sizes: '512x512' },
    { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png` },
    ...(i18nHead.value.link || []),
  ],
  meta: [
    { name: 'theme-color', content: '#f2f1ec' },
    ...(i18nHead.value.meta || []),
  ],
}))

useSeoMeta({
  title: () => t('meta.title', { name: site.productName }),
  description: () => t('meta.description'),
})
</script>

<template>
  <div class="min-h-dvh bg-paper font-sans text-ink antialiased">
    <a
      href="#main"
      class="sr-only z-[60] rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {{ t('nav.skip') }}
    </a>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
