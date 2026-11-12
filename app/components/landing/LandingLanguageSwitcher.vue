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
    <LandingIcon
      name="globe"
      class="pointer-events-none absolute left-3 size-4 text-ink/60"
    />
    <select
      v-model="current"
      class="min-h-11 cursor-pointer appearance-none rounded-full border border-ink/15 bg-white/70 py-2 pr-4 pl-9 text-sm font-medium text-ink transition-colors hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
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
