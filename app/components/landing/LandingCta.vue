<script setup lang="ts">
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
    class="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-36"
    aria-labelledby="cta-title"
  >
    <LandingContainer class="text-center">
      <LandingEyebrow
        :label="t('cta.eyebrow')"
        dark
        class="justify-center"
      />
      <h2
        id="cta-title"
        class="mx-auto mt-6 max-w-4xl text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance"
      >
        {{ t('cta.title', { name: site.productName }) }}
      </h2>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/70">
        {{ t('cta.description') }}
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <LandingButton
          :href="demoHref"
          variant="light"
          size="lg"
          icon="arrow"
        >
          {{ t('cta.primary') }}
        </LandingButton>
        <LandingButton
          :href="salesHref"
          variant="ghost-light"
          size="lg"
        >
          {{ t('cta.secondary') }}
        </LandingButton>
      </div>
      <p class="mt-6 text-sm text-white/50">
        {{ site.contactEmail }}
      </p>
    </LandingContainer>
  </section>
</template>
