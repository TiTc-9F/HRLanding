<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const { site } = useAppConfig()
const { t } = useI18n()

const items: { key: string, icon: LandingIconName }[] = [
  { key: 'roles', icon: 'users' },
  { key: 'visibility', icon: 'eye' },
  { key: 'audit', icon: 'file' },
  { key: 'encryption', icon: 'lock' },
]
</script>

<template>
  <section
    id="trust"
    class="bg-white py-24 sm:py-32"
    aria-labelledby="trust-title"
  >
    <LandingContainer>
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <LandingSectionHeading
            id="trust-title"
            :index="t('trust.index')"
            :eyebrow="t('trust.eyebrow')"
            :title="t('trust.title')"
            :description="t('trust.description', { name: site.productName })"
            stacked
          />
          <div
            class="mt-10 hidden aspect-square max-w-xs place-items-center rounded-[2rem] bg-ink text-white lg:grid"
            aria-hidden="true"
          >
            <div class="relative grid size-40 place-items-center">
              <span class="absolute inset-0 rounded-full border border-white/10" />
              <span class="absolute inset-5 rounded-full border border-white/15" />
              <span class="absolute inset-10 rounded-full border border-white/20" />
              <LandingIcon
                name="shield"
                class="size-12 text-ember-300"
              />
            </div>
          </div>
        </div>

        <ul class="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <li
            v-for="(item, i) in items"
            :key="item.key"
            v-reveal="i"
            class="flex flex-col rounded-3xl border border-ink/10 p-7 transition-colors duration-300 hover:border-ink/25"
          >
            <span class="grid size-12 place-items-center rounded-2xl bg-mist text-ink">
              <LandingIcon
                :name="item.icon"
                class="size-6"
              />
            </span>
            <h3 class="mt-8 text-xl font-bold tracking-tight text-ink">
              {{ t(`trust.items.${item.key}.title`) }}
            </h3>
            <p class="mt-3 leading-relaxed text-pretty text-ink/65">
              {{ t(`trust.items.${item.key}.desc`) }}
            </p>
          </li>
        </ul>
      </div>
    </LandingContainer>
  </section>
</template>
