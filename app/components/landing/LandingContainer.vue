<script setup lang="ts">
// 全站共用的內容寬度與左右留白（手機 16px）
withDefaults(defineProps<{ as?: string }>(), { as: 'div' })
</script>

<template>
  <component
    :is="as"
    class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
  >
    <slot />
  </component>
</template>
