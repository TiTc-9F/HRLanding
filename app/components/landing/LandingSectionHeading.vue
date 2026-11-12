<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-sm font-semibold tracking-wider text-brand-600">
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-lg text-slate-600"
    >
      {{ description }}
    </p>
  </div>
</template>
