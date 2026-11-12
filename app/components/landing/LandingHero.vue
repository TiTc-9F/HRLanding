<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

// 「想先看哪一塊？」：每個問題跳到回答它的區塊
const asks = computed(() => [
  { label: t('hero.asks.configure'), href: '#showcase-configure' },
  { label: t('hero.asks.routing'), href: '#showcase-routing' },
  { label: t('hero.asks.payroll'), href: '#showcase-payroll' },
  { label: t('hero.asks.trust'), href: '#trust' },
])
</script>

<template>
  <section
    id="top"
    class="relative isolate overflow-hidden"
    aria-labelledby="hero-title"
  >
    <LandingContainer class="pt-12 pb-20 sm:pt-20 lg:pb-28">
      <p class="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink/80 backdrop-blur">
        <span
          class="size-1.5 rounded-full bg-ember-500"
          aria-hidden="true"
        />
        {{ t('hero.eyebrow') }}
      </p>

      <h1
        id="hero-title"
        class="mt-6 max-w-5xl text-[clamp(2.25rem,7.2vw,6.25rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance text-ink"
      >
        <!-- 前兩句淡一階，視線落在最後一句 -->
        <span class="block text-ink/40">{{ t('hero.title1') }}</span>
        <span class="block text-ink/40">{{ t('hero.title2') }}</span>
        <span class="block">{{ t('hero.title3') }}</span>
      </h1>

      <div class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-5">
          <p class="max-w-xl text-lg leading-relaxed text-pretty text-ink/70">
            {{ t('hero.description', { name: site.productName }) }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <LandingButton
              href="#contact"
              size="lg"
              icon="arrow"
            >
              {{ t('hero.primary') }}
            </LandingButton>
            <LandingButton
              href="#platform"
              variant="secondary"
              size="lg"
            >
              {{ t('hero.secondary') }}
            </LandingButton>
          </div>

          <div class="mt-10">
            <p class="text-sm font-semibold text-ink/55">
              {{ t('hero.askLabel') }}
            </p>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="ask in asks"
                :key="ask.href"
              >
                <a
                  :href="ask.href"
                  class="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 text-sm text-ink/80 transition-colors hover:border-ink/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-ink"
                >
                  {{ ask.label }}
                  <LandingIcon
                    name="arrowDown"
                    class="size-3.5"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <LandingHeroVisual class="lg:col-span-7" />
      </div>
    </LandingContainer>
  </section>
</template>
