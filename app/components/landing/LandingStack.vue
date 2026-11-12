<script setup lang="ts">
// 平台全貌：桌機上四張大卡片用 sticky 依序疊上來（每張的停靠位置往下錯開一點，露出前一張的邊）；
// 手機上卡片比螢幕高，疊上來會蓋住還沒看到的下半部，所以手機只是一般往下排。
// 卡片底色輪流換，最後一張是深色；卡片裡的示意畫面再用 v-parallax 加一層深度。
const { t } = useI18n()

const cards = [
  { key: 'core', tone: 'bg-white text-ink' },
  { key: 'review', tone: 'bg-sage text-ink' },
  { key: 'growth', tone: 'bg-clay text-ink' },
  { key: 'care', tone: 'bg-ink text-white' },
] as const

const stats = ['templates', 'code', 'record']

function points(key: string) {
  return ['p1', 'p2', 'p3'].map(p => t(`stack.items.${key}.points.${p}`))
}
</script>

<template>
  <section
    id="platform"
    class="py-24 sm:py-32"
    aria-labelledby="platform-title"
  >
    <LandingContainer>
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
        <LandingSectionHeading
          id="platform-title"
          :eyebrow="t('platform.eyebrow')"
          :title="t('platform.title')"
          :description="t('platform.description')"
          class="lg:col-span-8"
        />
        <ul class="grid grid-cols-3 gap-4 lg:col-span-4">
          <li
            v-for="stat in stats"
            :key="stat"
            class="rounded-2xl bg-white p-4"
          >
            <p>
              <span class="block font-display text-4xl font-medium tracking-tight text-ink">{{ t(`platform.stats.${stat}.value`) }}</span>
              <span class="mt-1 block text-xs leading-snug text-ink/60">{{ t(`platform.stats.${stat}.label`) }}</span>
            </p>
          </li>
        </ul>
      </div>

      <ol class="mt-16 space-y-6">
        <li
          v-for="(card, i) in cards"
          :key="card.key"
          class="lg:sticky"
          :style="{ top: `calc(5.5rem + ${i * 1.5}rem)` }"
        >
          <article
            class="grid min-h-[34rem] grid-cols-1 gap-10 overflow-hidden rounded-[2rem] p-7 shadow-[0_-20px_40px_-30px_rgb(0_0_0/0.25)] sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-14"
            :class="card.tone"
            :aria-labelledby="`stack-${card.key}-title`"
          >
            <div>
              <p
                class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold"
                :class="card.key === 'care' ? 'bg-white/10 text-white/80' : 'bg-ink/5 text-ink/70'"
              >
                <span class="font-mono text-xs opacity-60">0{{ i + 1 }}</span>
                {{ t(`stack.items.${card.key}.label`) }}
              </p>
              <h3
                :id="`stack-${card.key}-title`"
                class="mt-6 font-display text-3xl leading-tight font-medium tracking-[-0.025em] text-balance sm:text-4xl"
              >
                {{ t(`stack.items.${card.key}.title`) }}
              </h3>
              <p
                class="mt-5 text-lg leading-relaxed text-pretty"
                :class="card.key === 'care' ? 'text-white/70' : 'text-ink/65'"
              >
                {{ t(`stack.items.${card.key}.desc`) }}
              </p>
              <LandingCheckList
                :items="points(card.key)"
                :dark="card.key === 'care'"
                class="mt-8"
              />
            </div>
            <div class="relative">
              <div v-parallax="-0.06">
                <LandingStackVisual :variant="card.key" />
              </div>
            </div>
          </article>
        </li>
      </ol>
    </LandingContainer>
  </section>
</template>
