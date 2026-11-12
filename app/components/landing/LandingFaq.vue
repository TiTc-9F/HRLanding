<script setup lang="ts">
const { t } = useI18n()

const faqs = ['install', 'customize', 'migrate', 'security', 'pricing']
</script>

<template>
  <section
    id="faq"
    class="scroll-mt-16 bg-slate-50 py-24"
  >
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <LandingSectionHeading
        :eyebrow="t('faq.eyebrow')"
        :title="t('faq.title')"
      />

      <div class="mt-12 space-y-4">
        <details
          v-for="faq in faqs"
          :key="faq"
          class="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-md"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
            {{ t(`faq.items.${faq}.q`) }}
            <span class="ml-4 text-xl text-brand-600 transition group-open:rotate-45">+</span>
          </summary>
          <p class="mt-3 leading-relaxed text-slate-600">
            {{ t(`faq.items.${faq}.a`) }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
