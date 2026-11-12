<script setup lang="ts">
// 連結形式的按鈕。primary：品牌藍實心；secondary：淺底描邊；light：深色區塊上的白底；ghost-light：深色區塊上的描邊
import type { LandingIconName } from './LandingIcon.vue'

withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary' | 'light' | 'ghost-light'
  size?: 'md' | 'lg'
  icon?: LandingIconName
}>(), { variant: 'primary', size: 'md', icon: undefined })

const variants = {
  'primary': 'bg-ink text-white hover:bg-ink-soft focus-visible:outline-ink',
  'secondary': 'border border-ink/15 bg-white text-ink hover:border-ink/40 focus-visible:outline-ink',
  'light': 'bg-white text-ink hover:bg-mist focus-visible:outline-white',
  'ghost-light': 'border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white',
}

const sizes = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}
</script>

<template>
  <a
    :href="href"
    class="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
    <LandingIcon
      v-if="icon"
      :name="icon"
      class="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
    />
  </a>
</template>
