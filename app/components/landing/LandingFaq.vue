<script setup lang="ts">
const { t } = useI18n()

const faqs = ['modules', 'customize', 'install', 'migrate', 'security', 'pricing']
</script>

<template>
  <section
    id="faq"
    class="py-24 sm:py-32"
    aria-labelledby="faq-title"
  >
    <LandingContainer class="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <LandingSectionHeading
        id="faq-title"
        compact
        :eyebrow="t('faq.eyebrow')"
        :title="t('faq.title')"
        class="lg:col-span-4"
      />

      <div class="space-y-3 lg:col-span-8">
        <details
          v-for="faq in faqs"
          :key="faq"
          class="group rounded-[1.5rem] bg-white px-6 transition-shadow open:shadow-[0_20px_40px_-30px_rgb(0_0_0/0.3)]"
        >
          <summary class="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-medium text-ink focus-visible:outline-2 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
            {{ t(`faq.items.${faq}.q`) }}
            <span class="grid size-9 shrink-0 place-items-center rounded-full bg-mist transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-accent motion-reduce:transition-none">
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
