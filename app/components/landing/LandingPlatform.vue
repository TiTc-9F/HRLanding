<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const { t } = useI18n()

// bento 排法（桌機 4 欄）：考核 2×2 當主角，其餘依 span 自動排滿 4 列
type Tile = { key: string, icon: LandingIconName, span: string }
const tiles: Tile[] = [
  { key: 'review', icon: 'star', span: 'md:col-span-2 lg:row-span-2' },
  { key: 'records', icon: 'id', span: 'md:col-span-2' },
  { key: 'attendance', icon: 'clock', span: '' },
  { key: 'leave', icon: 'calendar', span: '' },
  { key: 'payroll', icon: 'wallet', span: 'md:col-span-2' },
  { key: 'promotion', icon: 'trend', span: '' },
  { key: 'probation', icon: 'hourglass', span: '' },
  { key: 'growth', icon: 'sprout', span: 'md:col-span-2' },
  { key: 'insights', icon: 'chart', span: 'md:col-span-2' },
]

const stats = ['templates', 'code', 'record']

// 考核卡上的並排評分示意：本人、組長、評審
const scores = computed(() => [
  { label: t('platform.tiles.review.chip1'), value: 78 },
  { label: t('platform.tiles.review.chip2'), value: 84 },
  { label: t('platform.tiles.review.chip3'), value: 81 },
])
</script>

<template>
  <section
    id="platform"
    class="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32"
    aria-labelledby="platform-title"
  >
    <LandingContainer>
      <LandingSectionHeading
        id="platform-title"
        :index="t('platform.index')"
        :eyebrow="t('platform.eyebrow')"
        :title="t('platform.title')"
        :description="t('platform.description')"
        dark
      />

      <ul class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(tile, i) in tiles"
          :key="tile.key"
          v-reveal="i"
          class="group relative flex flex-col rounded-3xl border border-white/10 bg-ink-soft p-6 transition-colors duration-300 hover:border-white/25"
          :class="tile.span"
        >
          <span
            class="grid size-11 place-items-center rounded-2xl"
            :class="tile.key === 'review' ? 'bg-white text-ink' : 'bg-white/5 text-white/70'"
          >
            <LandingIcon
              :name="tile.icon"
              class="size-5"
            />
          </span>
          <h3
            class="mt-6 font-bold tracking-tight"
            :class="tile.key === 'review' ? 'text-2xl sm:text-3xl' : 'text-lg'"
          >
            {{ t(`platform.tiles.${tile.key}.title`) }}
          </h3>
          <p class="mt-2 leading-relaxed text-pretty text-white/65">
            {{ t(`platform.tiles.${tile.key}.desc`) }}
          </p>

          <!-- 主角卡：三方評分並排的示意 -->
          <div
            v-if="tile.key === 'review'"
            class="mt-auto space-y-3 pt-8"
            aria-hidden="true"
          >
            <div
              v-for="score in scores"
              :key="score.label"
              class="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-3 text-sm"
            >
              <span class="truncate text-white/70">{{ score.label }}</span>
              <span class="h-2 overflow-hidden rounded-full bg-white/10">
                <span
                  class="block h-full rounded-full bg-white"
                  :style="{ width: `${score.value}%` }"
                />
              </span>
              <span class="text-right font-mono text-white/80">{{ score.value }}</span>
            </div>
          </div>
        </li>
      </ul>

      <!-- 數字與說明放在同一段，螢幕閱讀器會連著唸「11 種評估範本…」 -->
      <ul class="mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
        <li
          v-for="(stat, i) in stats"
          :key="stat"
          v-reveal="i"
        >
          <p>
            <span class="block text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
              {{ t(`platform.stats.${stat}.value`) }}
            </span>
            <span class="mt-2 block max-w-[16rem] text-white/65">
              {{ t(`platform.stats.${stat}.label`) }}
            </span>
          </p>
        </li>
      </ul>
    </LandingContainer>
  </section>
</template>
