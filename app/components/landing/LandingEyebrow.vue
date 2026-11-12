<script setup lang="ts">
// 區塊小標：萊姆黃圓點 + 文字
withDefaults(defineProps<{ label: string, dark?: boolean }>(), { dark: false })
</script>

<template>
  <p
    class="flex items-center gap-2.5 text-sm font-semibold tracking-wide"
    :class="dark ? 'text-white/70' : 'text-ink/60'"
  >
    <span
      class="size-2 rounded-full bg-accent-strong"
      aria-hidden="true"
    />
    {{ label }}
  </p>
</template>
