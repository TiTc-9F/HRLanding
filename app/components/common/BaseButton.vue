<script setup lang="ts">
// 連結形式的按鈕。
// primary：萊姆黃底黑字（主要行動）；dark：黑底白字；secondary：白底描邊；ghost-light：深色區塊上的描邊
import type { IconName } from '~/components/common/AppIcon.vue'

withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'dark' | 'secondary' | 'ghost-light'
  size?: 'md' | 'lg'
  icon?: IconName
}>(), { variant: 'primary', size: 'md', icon: undefined })

const variants = {
  'primary': 'bg-accent text-ink hover:bg-accent-strong focus-visible:outline-ink',
  'dark': 'bg-ink text-white hover:bg-ink-soft focus-visible:outline-ink',
  'secondary': 'border border-ink/15 bg-white text-ink hover:border-ink/40 focus-visible:outline-ink',
  'ghost-light': 'border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white',
}

const sizes = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-13 px-7 text-base',
}
</script>

<template>
  <a
    :href="href"
    class="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
    <AppIcon
      v-if="icon"
      :name="icon"
      class="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
    />
  </a>
</template>
