<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const { t } = useI18n()

const items: { key: string, icon: LandingIconName }[] = [
  { key: 'records', icon: 'users' },
  { key: 'attendance', icon: 'clock' },
  { key: 'leave', icon: 'calendar' },
  { key: 'payroll', icon: 'wallet' },
  { key: 'reports', icon: 'chart' },
  { key: 'security', icon: 'shield' },
]
</script>

<template>
  <section
    id="features"
    class="scroll-mt-16 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <LandingSectionHeading
        :eyebrow="t('features.eyebrow')"
        :title="t('features.title')"
        :description="t('features.description')"
      />

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in items"
          :key="item.key"
          class="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
        >
          <div class="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
            <LandingIcon
              :name="item.icon"
              class="size-6"
            />
          </div>
          <h3 class="mt-5 text-lg font-semibold text-slate-900">
            {{ t(`features.items.${item.key}.title`) }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-600">
            {{ t(`features.items.${item.key}.desc`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
