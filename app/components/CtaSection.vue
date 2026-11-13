<script setup lang="ts">
// 結尾的預約區：萊姆黃大面板，三個圓形以不同速度移動（裝飾）
const { site } = useAppConfig()
const { t } = useI18n()

const mailto = (subject: string) =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`

const demoHref = computed(() => mailto(t('cta.mailSubject', { name: site.productName })))
const salesHref = computed(() => mailto(t('cta.salesSubject', { name: site.productName })))
</script>

<template>
  <section
    id="contact"
    class="px-3 pb-3 sm:px-4 sm:pb-4"
    aria-labelledby="cta-title"
  >
    <div class="relative isolate mx-auto max-w-[96rem] overflow-hidden rounded-[2rem] bg-accent py-24 sm:rounded-[2.5rem] sm:py-36">
      <div
        class="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <span
          v-parallax="0.2"
          class="absolute -top-16 -left-16 size-64 rounded-full bg-white/50"
        />
        <span
          v-parallax="-0.25"
          class="absolute top-1/3 -right-20 size-80 rounded-full bg-sage"
        />
        <span
          v-parallax="0.1"
          class="absolute -bottom-24 left-1/3 size-56 rounded-full bg-clay"
        />
      </div>

      <PageContainer class="text-center">
        <p class="text-sm font-semibold tracking-wide text-ink/70">
          {{ t('cta.eyebrow') }}
        </p>
        <h2
          id="cta-title"
          class="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,5.25rem)] leading-[1.04] font-medium tracking-[-0.04em] text-balance text-ink"
        >
          {{ t('cta.title', { name: site.productName }) }}
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink/75">
          {{ t('cta.description') }}
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <BaseButton
            :href="demoHref"
            variant="dark"
            size="lg"
            icon="arrow"
          >
            {{ t('cta.primary') }}
          </BaseButton>
          <BaseButton
            :href="salesHref"
            variant="secondary"
            size="lg"
          >
            {{ t('cta.secondary') }}
          </BaseButton>
        </div>
        <!-- 降低決定的門檻：時間短、可以小規模先試、不需要 IT -->
        <ul class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink/75">
          <li
            v-for="a in ['a1', 'a2', 'a3']"
            :key="a"
            class="flex items-center gap-2"
          >
            <AppIcon
              name="check"
              class="size-4"
            />
            {{ t(`cta.assurances.${a}`) }}
          </li>
        </ul>
        <p class="mt-6 text-sm text-ink/60">
          {{ site.contactEmail }}
        </p>
      </PageContainer>
    </div>
  </section>
</template>
