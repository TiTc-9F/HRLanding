<script setup lang="ts">
interface Props {
  title: string
  initial?: number
}
const props = withDefaults(defineProps<Props>(), { initial: 0 })
const { count, increment, reset } = useCounter(props.initial)
</script>

<template>
  <div class="card">
    <h2>{{ props.title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.card { border: 1px solid #ddd; border-radius: 8px; padding: 16px; max-width: 320px; }
button { margin-right: 8px; }
</style>
