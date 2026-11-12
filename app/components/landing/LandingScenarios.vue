<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

// 適用情境：取代「客戶案例」。在有真實客戶與授權之前，只放清楚標示為示意的情境
const { t } = useI18n()

const items: { key: string, icon: LandingIconName }[] = [
  { key: 'global', icon: 'globe' },
  { key: 'tech', icon: 'code' },
  { key: 'growth', icon: 'sprout' },
]
</script>

<template>
  <section
    id="scenarios"
    class="bg-paper py-24 sm:py-32"
    aria-labelledby="scenarios-title"
  >
    <LandingContainer>
      <LandingSectionHeading
        id="scenarios-title"
        :index="t('scenarios.index')"
        :eyebrow="t('scenarios.eyebrow')"
        :title="t('scenarios.title')"
      />

      <ul class="mt-16 grid gap-4 md:grid-cols-3">
        <li
          v-for="(item, i) in items"
          :key="item.key"
          v-reveal="i"
          class="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5"
        >
          <LandingPhoto
            :name="`scenario-${item.key}`"
            :alt="t(`photos.${item.key}`)"
          />
          <div class="flex flex-1 flex-col p-7">
            <div class="flex items-center justify-between gap-4">
              <span class="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink/70">
                {{ t(`scenarios.items.${item.key}.tag`) }}
              </span>
              <LandingIcon
                :name="item.icon"
                class="size-6 text-ink"
              />
            </div>
            <h3 class="mt-8 text-2xl font-bold tracking-tight text-balance text-ink">
              {{ t(`scenarios.items.${item.key}.title`) }}
            </h3>
            <p class="mt-4 leading-relaxed text-pretty text-ink/65">
              {{ t(`scenarios.items.${item.key}.desc`) }}
            </p>
          </div>
        </li>
      </ul>

      <p class="mt-6 text-sm text-ink/50">
        {{ t('scenarios.note') }}
      </p>
    </LandingContainer>
  </section>
</template>
