<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

const links = computed(() => [
  { label: t('nav.features'), href: '#features' },
  { label: t('nav.modules'), href: '#modules' },
  { label: t('nav.steps'), href: '#steps' },
  { label: t('nav.faq'), href: '#faq' },
])
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
      <a
        href="#top"
        class="flex shrink-0 items-center gap-2 font-bold text-slate-900"
      >
        <span class="grid size-8 place-items-center rounded-lg bg-brand-600 text-sm text-white">HR</span>
        <span class="hidden sm:inline">{{ site.productName }}</span>
      </a>

      <nav class="hidden items-center gap-8 text-sm lg:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-slate-600 transition hover:text-brand-600"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <LandingLanguageSwitcher />
        <a
          href="#contact"
          class="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-medium whitespace-nowrap sm:inline-block text-white shadow-sm transition hover:bg-brand-700"
        >
          {{ t('nav.bookDemo') }}
        </a>
      </div>
    </div>
  </header>
</template>
