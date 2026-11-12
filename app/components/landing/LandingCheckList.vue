<script setup lang="ts">
// 打勾的重點清單
withDefaults(defineProps<{ items: string[], dark?: boolean }>(), { dark: false })
</script>

<template>
  <ul class="space-y-3">
    <li
      v-for="item in items"
      :key="item"
      class="flex gap-3"
      :class="dark ? 'text-white/80' : 'text-ink/75'"
    >
      <span
        class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
        :class="dark ? 'bg-accent text-ink' : 'bg-ink text-accent'"
      >
        <LandingIcon
          name="check"
          class="size-3"
        />
      </span>
      {{ item }}
    </li>
  </ul>
</template>
