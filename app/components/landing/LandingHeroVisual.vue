<script setup lang="ts">
// 首屏的主視覺：一張人物照片（主管與部屬的一對一），疊上考核進度與兩張小卡，
// 讓人一眼看到「人」與「平台」是同一件事
const { t } = useI18n()

const steps = computed(() => [
  { label: t('heroVisual.stepSelf'), tone: 'done' as const, status: t('heroVisual.done'), value: 100 },
  { label: t('heroVisual.stepLead'), tone: 'active' as const, status: t('heroVisual.inProgress'), value: 62 },
  { label: t('heroVisual.stepHead'), tone: 'waiting' as const, status: t('heroVisual.waiting'), value: 0 },
])
</script>

<template>
  <figure class="relative pb-4 sm:pb-10">
    <LandingPhoto
      name="hero-one-on-one"
      :alt="t('photos.hero')"
      ratio="aspect-[4/3] sm:aspect-[16/11]"
      class="ml-auto w-full rounded-3xl sm:w-[88%]"
      eager
    />

    <!-- 疊在照片左下的考核進度 -->
    <LandingMockFrame
      :title="t('heroVisual.reviewTitle')"
      :meta="t('heroVisual.reviewMeta')"
      class="relative z-10 mx-3 -mt-20 sm:mx-0 sm:-mt-40 sm:w-[min(25rem,72%)]"
      aria-hidden="true"
    >
      <ol class="space-y-4">
        <li
          v-for="(step, i) in steps"
          :key="step.label"
          class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
        >
          <span class="grid size-8 place-items-center rounded-full bg-paper font-mono text-xs font-semibold text-ink/60">
            {{ i + 1 }}
          </span>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold text-ink">
              {{ step.label }}
            </p>
            <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/5">
              <div
                class="h-full rounded-full bg-ink"
                :style="{ width: `${step.value}%` }"
              />
            </div>
          </div>
          <LandingStatusPill
            :tone="step.tone"
            :label="step.status"
          />
        </li>
      </ol>
      <p class="mt-5 flex items-baseline justify-between border-t border-ink/10 pt-4 text-sm text-ink/60">
        {{ t('heroVisual.progress') }}
        <span class="text-2xl font-extrabold tracking-tight text-ink">54%</span>
      </p>
    </LandingMockFrame>

    <!-- 照片右上的兩張小卡：人資行政（打卡）與人才發展（升等）；手機上省略 -->
    <div
      class="absolute top-6 right-3 z-20 hidden w-60 gap-3 sm:grid lg:-right-4"
      aria-hidden="true"
    >
      <div class="flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
        <span class="grid size-10 place-items-center rounded-xl bg-mist text-ink">
          <LandingIcon
            name="wifi"
            class="size-5"
          />
        </span>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-ink">
            {{ t('heroVisual.clockIn') }} 08:57
          </p>
          <p class="truncate text-xs text-ink/55">
            {{ t('heroVisual.clockInStatus') }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3 rounded-2xl bg-ink p-4 text-white shadow-xl">
        <span class="grid size-10 place-items-center rounded-xl bg-white/10 text-ember-300">
          <LandingIcon
            name="trend"
            class="size-5"
          />
        </span>
        <div class="min-w-0">
          <p class="text-sm font-semibold">
            {{ t('heroVisual.promotion') }}
          </p>
          <p class="text-xs text-white/65">
            {{ t('heroVisual.promotionDetail') }}
          </p>
        </div>
      </div>
    </div>
  </figure>
</template>
