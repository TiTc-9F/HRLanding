<script setup lang="ts">
// 語言選單。dark 用在炭黑底的頁首與手機選單
withDefaults(defineProps<{ dark?: boolean }>(), { dark: false })

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
      class="pointer-events-none absolute left-3 size-4"
      :class="dark ? 'text-white/70' : 'text-ink/60'"
    />
    <select
      v-model="current"
      class="min-h-11 cursor-pointer appearance-none rounded-full border py-2 pr-4 pl-9 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      :class="dark
        ? 'border-white/20 bg-white/5 text-white hover:border-white/50 focus-visible:outline-white'
        : 'border-ink/15 bg-white/70 text-ink hover:border-ink/40 focus-visible:outline-ink'"
    >
      <!-- 下拉清單一律白底黑字，深色選單在部分系統上才不會變成白字白底 -->
      <option
        v-for="item in locales"
        :key="item.code"
        :value="item.code"
        class="bg-white text-ink"
      >
        {{ item.name }}
      </option>
    </select>
  </label>
</template>
