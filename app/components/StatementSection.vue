<script setup lang="ts">
// 一段大字固定在畫面中間，捲動時逐詞由淡轉深（外層 220vh、內層 sticky）。
// 斷詞在瀏覽器端用 Intl.Segmenter 做，伺服器端先輸出完整句子，避免兩邊斷法不同。
// 減少動態時不固定、不變淡，直接顯示整段。
const { site } = useAppConfig()
const { t, locale } = useI18n()

const text = computed(() => t('statement.text', { name: site.productName }))

type Segment = { text: string, index: number }
const segments = ref<Segment[] | null>(null)
let wordCount = 1

function split() {
  if (typeof Intl === 'undefined' || !('Segmenter' in Intl)) return
  const segmenter = new Intl.Segmenter(locale.value, { granularity: 'word' })
  let index = -1
  segments.value = [...segmenter.segment(text.value)].map((s) => {
    if (s.isWordLike) index += 1
    return { text: s.segment, index: Math.max(index, 0) }
  })
  wordCount = Math.max(index + 1, 1)
}

const root = ref<HTMLElement>()
const { progress, enabled } = useScrollProgress(root, 'pin')

onMounted(split)
watch(text, split)

function opacity(index: number) {
  if (!enabled.value) return 1
  // 捲到 85% 時全部亮起，留一點停頓再離開
  const lit = (progress.value / 0.85) * wordCount - index
  return 0.16 + Math.min(1, Math.max(0, lit)) * 0.84
}
</script>

<template>
  <section
    ref="root"
    class="relative h-[220vh] motion-reduce:h-auto"
    aria-labelledby="statement-eyebrow"
  >
    <div class="sticky top-0 flex min-h-dvh items-center motion-reduce:static motion-reduce:py-28">
      <PageContainer>
        <SectionEyebrow
          id="statement-eyebrow"
          :label="t('statement.eyebrow')"
        />
        <p class="mt-8 max-w-5xl font-display text-[clamp(1.9rem,4.6vw,4.25rem)] leading-[1.15] font-medium tracking-[-0.03em] text-pretty text-ink">
          <template v-if="segments">
            <span class="sr-only">{{ text }}</span>
            <span aria-hidden="true">
              <span
                v-for="(segment, i) in segments"
                :key="i"
                class="transition-opacity duration-150"
                :style="{ opacity: opacity(segment.index) }"
              >{{ segment.text }}</span>
            </span>
          </template>
          <template v-else>
            {{ text }}
          </template>
        </p>
      </PageContainer>
    </div>
  </section>
</template>
