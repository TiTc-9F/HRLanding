<script setup lang="ts">
// 區塊小標：編號 + 暖色圓點 + 文字
withDefaults(defineProps<{ index?: string, label: string, dark?: boolean }>(), { index: undefined, dark: false })
</script>

<template>
  <p
    class="flex items-center gap-3 text-sm font-semibold tracking-wide"
    :class="dark ? 'text-white/70' : 'text-ink/60'"
  >
    <span
      v-if="index"
      class="font-mono text-xs"
      :class="dark ? 'text-white/50' : 'text-ink/40'"
    >{{ index }}</span>
    <span
      class="size-1.5 rounded-full bg-ember-500"
      aria-hidden="true"
    />
    {{ label }}
  </p>
</template>
