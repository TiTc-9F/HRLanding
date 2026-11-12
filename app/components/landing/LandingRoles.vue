<script setup lang="ts">
// 適用角色：桌機上區塊固定在畫面中（外層 260vh、內層 sticky），垂直捲動時卡片橫向移動。
// 手機與減少動態時不固定，改成可以左右滑的卡片列（scroll-snap）。
const { t } = useI18n()

const roles = ['hr', 'manager', 'employee', 'leader'] as const

const root = ref<HTMLElement>()
const track = ref<HTMLElement>()
const { progress, enabled } = useScrollProgress(root, 'pin')

// 要橫移的距離 = 卡片列總寬 - 畫面寬；視窗改變時重算
const distance = ref(0)
const wide = ref(false)
let resizeObserver: ResizeObserver | undefined

function measure() {
  wide.value = window.matchMedia('(min-width: 1024px)').matches
  if (!track.value) return
  distance.value = Math.max(0, track.value.scrollWidth - window.innerWidth)
}

onMounted(() => {
  measure()
  resizeObserver = new ResizeObserver(measure)
  if (track.value) resizeObserver.observe(track.value)
  window.addEventListener('resize', measure)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', measure)
})

const trackStyle = computed(() =>
  enabled.value && wide.value
    ? { transform: `translate3d(${(-progress.value * distance.value).toFixed(1)}px, 0, 0)` }
    : undefined,
)

function points(key: string) {
  return ['p1', 'p2', 'p3'].map(p => t(`audience.tabs.${key}.points.${p}`))
}
</script>

<template>
  <section
    id="audience"
    ref="root"
    class="relative bg-ink text-white lg:h-[260vh] motion-reduce:lg:h-auto"
    aria-labelledby="audience-title"
  >
    <div class="overflow-hidden py-24 sm:py-32 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center lg:py-0 motion-reduce:lg:static motion-reduce:lg:h-auto motion-reduce:lg:py-32">
      <!-- 手機與減少動態：標題在卡片列上方 -->
      <LandingContainer class="lg:hidden motion-reduce:lg:block">
        <LandingSectionHeading
          id="audience-title"
          :eyebrow="t('audience.eyebrow')"
          :title="t('audience.title')"
          dark
        />
      </LandingContainer>

      <div
        ref="track"
        class="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6 lg:mt-0 lg:w-max lg:snap-none lg:items-center lg:overflow-visible lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] motion-reduce:lg:mt-12 motion-reduce:lg:w-auto motion-reduce:lg:overflow-x-auto"
        :style="trackStyle"
      >
        <!-- 桌機橫向捲動時，標題是卡片列的第一格，高度只算卡片本身 -->
        <div class="hidden w-[26rem] shrink-0 pr-8 lg:block motion-reduce:lg:hidden">
          <LandingSectionHeading
            :eyebrow="t('audience.eyebrow')"
            :title="t('audience.title')"
            dark
          />
        </div>
        <article
          v-for="(role, i) in roles"
          :key="role"
          class="w-[85vw] max-w-[30rem] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-ink-soft sm:w-[26rem] lg:w-[30rem]"
          :aria-labelledby="`role-${role}-title`"
        >
          <LandingPhoto
            :name="`role-${role}`"
            :alt="t(`photos.${role}`)"
            ratio="aspect-[16/10]"
          />
          <div class="p-7">
            <p class="flex items-center gap-2 text-sm font-semibold text-white/60">
              <span class="grid size-6 place-items-center rounded-full bg-accent font-mono text-xs text-ink">{{ i + 1 }}</span>
              {{ t(`audience.tabs.${role}.label`) }}
            </p>
            <h3
              :id="`role-${role}-title`"
              class="mt-4 font-display text-2xl leading-tight font-medium tracking-tight text-balance"
            >
              {{ t(`audience.tabs.${role}.title`) }}
            </h3>
            <p class="mt-3 leading-relaxed text-pretty text-white/65">
              {{ t(`audience.tabs.${role}.desc`) }}
            </p>
            <LandingCheckList
              :items="points(role)"
              dark
              class="mt-6 text-sm"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
