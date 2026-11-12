<script setup lang="ts">
const { site } = useAppConfig()

useHead({
  htmlAttrs: { lang: 'en' },
})

useSeoMeta({
  title: `${site.productName} | ${site.tagline}`,
  description: 'From onboarding and attendance to leave and payroll, run every HR process on one platform and give your HR team time back for people.',
})
</script>

<template>
  <div class="bg-white font-sans text-slate-700 antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
