<script setup lang="ts">
// 姓名縮寫頭像，顏色依名字固定（示意用的虛構人名）
const props = withDefaults(defineProps<{ name: string, size?: 'sm' | 'md' }>(), { size: 'sm' })

const palettes = [
  'bg-mist text-ink',
  'bg-clay text-ink',
  'bg-sage text-ink',
  'bg-ink text-white',
]

const initials = computed(() =>
  props.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase(),
)

const palette = computed(() => {
  const code = [...props.name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0)
  return palettes[code % palettes.length]
})
</script>

<template>
  <span
    class="grid shrink-0 place-items-center rounded-full font-semibold"
    :class="[palette, size === 'sm' ? 'size-8 text-xs' : 'size-10 text-sm']"
    aria-hidden="true"
  >
    {{ initials }}
  </span>
</template>
