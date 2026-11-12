<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

// 依目前語系輸出 <html lang>、hreflang 與 canonical 等 SEO 標籤
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))

useSeoMeta({
  title: () => t('meta.title', { name: site.productName }),
  description: () => t('meta.description'),
})
</script>

<template>
  <div class="bg-white font-sans text-slate-700 antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
