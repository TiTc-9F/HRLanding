<script setup lang="ts">
interface Props {
  title: string
  initial?: number
}
const props = withDefaults(defineProps<Props>(), { initial: 0 })
const { count, increment, reset } = useCounter(props.initial)
</script>

<template>
  <div class="max-w-xs rounded-lg border border-gray-300 p-4">
    <h2 class="mb-2 text-xl font-bold">
      {{ props.title }}
    </h2>
    <p class="mb-3">
      Count: {{ count }}
    </p>
    <div class="flex gap-2">
      <button
        class="rounded border border-gray-400 px-3 py-1 hover:bg-gray-100"
        @click="increment"
      >
        +1
      </button>
      <button
        class="rounded border border-gray-400 px-3 py-1 hover:bg-gray-100"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>
