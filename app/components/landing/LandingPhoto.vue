<script setup lang="ts">
// 人物照片的位置。照片放在 app/assets/images/，檔名就是 name（.jpg 或 .webp），
// 例如 name="hero-one-on-one" 對應 app/assets/images/hero-one-on-one.jpg。
// 檔案還沒放進來時顯示中性灰的占位框，標出這個位置要放什麼，版面不會跳動。
const props = withDefaults(defineProps<{
  name: string
  alt: string
  ratio?: string
  eager?: boolean
}>(), { ratio: 'aspect-[4/3]', eager: false })

const files = import.meta.glob<string>('~/assets/images/*.{jpg,jpeg,webp,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const src = computed(() => {
  const match = Object.entries(files).find(([path]) =>
    path.split('/').pop()?.replace(/\.(jpe?g|webp|png)$/, '') === props.name,
  )
  return match?.[1]
})
</script>

<template>
  <div
    class="relative overflow-hidden bg-mist"
    :class="ratio"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
      class="absolute inset-0 size-full object-cover"
    >
    <div
      v-else
      class="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgb(0_0_0/0.025)_12px_24px)] p-6 text-center"
      role="img"
      :aria-label="alt"
    >
      <p class="max-w-xs text-xs leading-relaxed text-ink/45">
        <LandingIcon
          name="users"
          class="mx-auto mb-2 size-6"
        />
        {{ name }}
      </p>
    </div>
  </div>
</template>
