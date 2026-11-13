<script setup lang="ts">
// 產品畫面示意的外框：標題列加內容。畫面是 HTML 組成的示意，不是截圖
withDefaults(defineProps<{ title: string, meta?: string }>(), { meta: undefined })
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_60px_-30px_rgb(11_16_36/0.35)]">
    <div class="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-3.5">
      <div class="flex min-w-0 items-center gap-3">
        <span
          class="flex gap-1.5"
          aria-hidden="true"
        >
          <span class="size-2.5 rounded-full bg-ink/15" />
          <span class="size-2.5 rounded-full bg-ink/15" />
          <span class="size-2.5 rounded-full bg-ink/15" />
        </span>
        <p class="truncate text-sm font-semibold text-ink">
          {{ title }}
        </p>
      </div>
      <slot name="badge">
        <p
          v-if="meta"
          class="shrink-0 text-xs text-ink/50"
        >
          {{ meta }}
        </p>
      </slot>
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>
