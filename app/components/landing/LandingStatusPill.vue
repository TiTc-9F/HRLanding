<script setup lang="ts">
// 狀態標籤：done 完成、active 進行中、waiting 等待中、draft 草稿
const props = defineProps<{ tone: 'done' | 'active' | 'waiting' | 'draft', label: string }>()

const tones = {
  done: 'bg-emerald-50 text-emerald-700',
  active: 'bg-mist text-ink',
  waiting: 'bg-ink/5 text-ink/55',
  draft: 'bg-accent/50 text-ink',
}

const dots = {
  done: 'bg-emerald-500',
  active: 'bg-ink',
  waiting: 'bg-ink/30',
  draft: 'bg-ink',
}
</script>

<template>
  <span
    class="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
    :class="tones[props.tone]"
  >
    <span
      class="size-1.5 rounded-full"
      :class="dots[props.tone]"
      aria-hidden="true"
    />
    {{ props.label }}
  </span>
</template>
