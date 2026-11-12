<script setup lang="ts">
useHead({ title: '首頁' })
</script>

<template>
  <main>
    <h1>Nuxt + Vue + TypeScript + Vite</h1>
    <CounterCard title="計數器範例" :initial="1" />
  </main>
</template>
