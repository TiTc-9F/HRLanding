<script setup lang="ts">
const { site } = useAppConfig()

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'How it works', href: '#steps' },
  { label: 'FAQ', href: '#faq' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a
        href="#top"
        class="flex items-center gap-2 font-bold text-slate-900"
      >
        <span class="grid size-8 place-items-center rounded-lg bg-brand-600 text-sm text-white">HR</span>
        {{ site.productName }}
      </a>

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-slate-600 transition hover:text-brand-600"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        href="#contact"
        class="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700"
      >
        Book a demo
      </a>
    </div>
  </header>
</template>
