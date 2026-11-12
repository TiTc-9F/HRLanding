<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const { t } = useI18n()

const items: { key: string, icon: LandingIconName }[] = [
  { key: 'attendance', icon: 'clock' },
  { key: 'leave', icon: 'calendar' },
  { key: 'payroll', icon: 'wallet' },
]
const points = ['p1', 'p2', 'p3']
</script>

<template>
  <section
    id="modules"
    class="scroll-mt-16 bg-slate-50 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <LandingSectionHeading
        :eyebrow="t('modules.eyebrow')"
        :title="t('modules.title')"
        :description="t('modules.description')"
      />

      <div class="mt-16 space-y-20">
        <div
          v-for="(item, index) in items"
          :key="item.key"
          class="grid items-center gap-10 lg:grid-cols-2"
        >
          <div :class="{ 'lg:order-2': index % 2 === 1 }">
            <p class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
              <LandingIcon
                :name="item.icon"
                class="size-5"
              />
              {{ t(`modules.items.${item.key}.label`) }}
            </p>
            <h3 class="mt-3 text-2xl font-bold text-slate-900">
              {{ t(`modules.items.${item.key}.title`) }}
            </h3>
            <p class="mt-4 leading-relaxed text-slate-600">
              {{ t(`modules.items.${item.key}.desc`) }}
            </p>
            <ul class="mt-6 space-y-3">
              <li
                v-for="point in points"
                :key="point"
                class="flex items-center gap-3 text-slate-700"
              >
                <span class="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <LandingIcon
                    name="check"
                    class="size-3.5"
                  />
                </span>
                {{ t(`modules.items.${item.key}.points.${point}`) }}
              </li>
            </ul>
          </div>

          <!-- 產品截圖預留位置：之後換成 <NuxtImg src="/images/xxx.png" /> -->
          <div
            class="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-brand-300 bg-gradient-to-br from-brand-100 to-white"
            :class="{ 'lg:order-1': index % 2 === 1 }"
          >
            <div class="text-center text-brand-400">
              <LandingIcon
                :name="item.icon"
                class="mx-auto size-16"
              />
              <p class="mt-3 text-sm">
                {{ t('modules.screenshot', { label: t(`modules.items.${item.key}.label`) }) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
