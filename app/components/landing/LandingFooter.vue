<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 py-10">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
      <p class="flex items-center gap-2 font-semibold text-slate-700">
        <span class="grid size-6 place-items-center rounded-md bg-brand-600 text-[10px] text-white">HR</span>
        {{ site.productName }}
      </p>
      <p>© {{ year }} {{ site.productName }}. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>
