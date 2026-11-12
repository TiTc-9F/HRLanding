<script setup lang="ts">
// 簡單的線條圖示集合；之後若安裝 @nuxt/icon 可以換掉
const icons = {
  users: 'M15 19.5v-1.5a3.75 3.75 0 0 0-3.75-3.75h-4.5A3.75 3.75 0 0 0 3 18v1.5M9 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 9v-1.5a3.75 3.75 0 0 0-2.81-3.63M15.75 4.62a3 3 0 0 1 0 5.76',
  clock: 'M12 6.75V12l3.75 2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 9h16.5M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5Z',
  wallet: 'M3.75 7.5h16.5v11.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V7.5Zm0 0V6a1.5 1.5 0 0 1 1.5-1.5h12M16.5 13.88h.01',
  chart: 'M3.75 20.25h16.5M6.75 16.5V11.25M11.25 16.5V7.5M15.75 16.5v-6M20.25 16.5V4.5',
  shield: 'M12 3 4.5 6v5.25c0 4.5 3.2 8.25 7.5 9.75 4.3-1.5 7.5-5.25 7.5-9.75V6L12 3Zm-3 9 2.25 2.25L15.75 9.75',
  check: 'm4.5 12.75 6 6 9-13.5',
  arrow: 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3',
  phone: 'M10.5 1.5h3a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 21V3a1.5 1.5 0 0 1 1.5-1.5Zm0 17.25h3',
  mail: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75',
} as const

export type LandingIconName = keyof typeof icons

defineProps<{ name: LandingIconName }>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="icons[name]" />
  </svg>
</template>
