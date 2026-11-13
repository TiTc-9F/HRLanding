<script setup lang="ts">
// 人物照片或循環短片的位置。檔名就是 name：
// - 照片放 app/assets/images/（.jpg、.webp、.png），例如 name="hero-one-on-one" 對應 hero-one-on-one.webp
// - 短片放 app/assets/videos/（.mp4），同名的照片當影片的封面，影片還沒開始播或不播時顯示
// 影片只在看得到時播放（靜音、循環），離開畫面就暫停；開啟「減少動態」的使用者只看照片。
// 檔案還沒放進來時顯示中性灰的占位框，標出這個位置要放什麼，版面不會跳動。
// alt 給空字串表示是裝飾用（例如旁邊已經寫了名字的頭像）。
const props = withDefaults(defineProps<{
  name: string
  alt: string
  ratio?: string
  eager?: boolean
}>(), { ratio: 'aspect-[4/3]', eager: false })

const images = import.meta.glob<string>('~/assets/images/*.{jpg,jpeg,webp,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const videos = import.meta.glob<string>('~/assets/videos/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
})

function find(files: Record<string, string>) {
  return Object.entries(files).find(([path]) =>
    path.split('/').pop()?.replace(/\.\w+$/, '') === props.name,
  )?.[1]
}

const src = computed(() => find(images))
const videoSrc = computed(() => find(videos))

const root = ref<HTMLElement>()
const video = ref<HTMLVideoElement>()
const motionOk = ref(false)
const playing = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!videoSrc.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  motionOk.value = true
  observer = new IntersectionObserver(([entry]) => {
    const el = video.value
    if (!el) return
    if (entry?.isIntersecting) el.play().catch(() => {})
    else el.pause()
  })
  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="root"
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
      :role="alt ? 'img' : undefined"
      :aria-label="alt || undefined"
      :aria-hidden="alt ? undefined : 'true'"
    >
      <p class="max-w-xs text-xs leading-relaxed text-ink/45">
        <AppIcon
          name="users"
          class="mx-auto mb-2 size-6"
        />
        {{ name }}
      </p>
    </div>

    <!-- 影片疊在封面上，真的開始播了才淡入，避免黑畫面閃一下 -->
    <video
      v-if="videoSrc && motionOk"
      ref="video"
      :src="videoSrc"
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
      class="absolute inset-0 size-full object-cover transition-opacity duration-700"
      :class="playing ? 'opacity-100' : 'opacity-0'"
      @playing="playing = true"
    />
  </div>
</template>
