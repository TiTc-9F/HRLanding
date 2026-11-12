<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const current = computed({
  get: () => locale.value,
  set: (code) => {
    router.push(switchLocalePath(code))
  },
})
</script>

<template>
  <label class="relative flex items-center">
    <span class="sr-only">{{ t('nav.language') }}</span>
    <svg
      class="pointer-events-none absolute left-2.5 size-4 text-slate-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      aria-hidden="true"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.4 3.75-5.4 3.75-9S14.5 5.4 12 3m0 18c-2.5-2.4-3.75-5.4-3.75-9S9.5 5.4 12 3M3.5 9h17M3.5 15h17" />
    </svg>
    <select
      v-model="current"
      class="cursor-pointer appearance-none rounded-full border border-slate-300 bg-white py-1.5 pr-3 pl-8 text-sm text-slate-700 transition hover:border-brand-300 focus:border-brand-500 focus:outline-none"
    >
      <option
        v-for="item in locales"
        :key="item.code"
        :value="item.code"
      >
        {{ item.name }}
      </option>
    </select>
  </label>
</template>
