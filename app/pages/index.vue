<script setup lang="ts">
useHead({ title: '首頁' })
</script>

<template>
  <main>
    <h1 class="mb-6 text-3xl font-bold">
      Nuxt + Vue + TypeScript + Vite
    </h1>
    <CounterCard
      title="計數器範例"
      :initial="1"
    />
  </main>
</template>
