<script setup lang="ts">
const { t } = useI18n()

const faqs = ['modules', 'customize', 'install', 'migrate', 'security', 'pricing']
</script>

<template>
  <section
    id="faq"
    class="bg-paper py-24 sm:py-32"
    aria-labelledby="faq-title"
  >
    <LandingContainer class="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <LandingSectionHeading
        id="faq-title"
        :eyebrow="t('faq.eyebrow')"
        :title="t('faq.title')"
        stacked
        class="lg:col-span-4"
      />

      <div class="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-8">
        <details
          v-for="faq in faqs"
          :key="faq"
          class="group"
        >
          <summary class="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
            {{ t(`faq.items.${faq}.q`) }}
            <span class="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">
              <LandingIcon
                name="plus"
                class="size-4"
              />
            </span>
          </summary>
          <p class="max-w-2xl pb-6 leading-relaxed text-pretty text-ink/70">
            {{ t(`faq.items.${faq}.a`) }}
          </p>
        </details>
      </div>
    </LandingContainer>
  </section>
</template>
