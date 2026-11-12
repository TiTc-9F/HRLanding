<script setup lang="ts">
const { t } = useI18n()

const steps = ['discovery', 'setup', 'training']
</script>

<template>
  <section
    id="steps"
    class="scroll-mt-16 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <LandingSectionHeading
        :eyebrow="t('steps.eyebrow')"
        :title="t('steps.title')"
        :description="t('steps.description')"
      />

      <ol class="mt-16 grid gap-8 md:grid-cols-3">
        <li
          v-for="(step, index) in steps"
          :key="step"
          class="relative rounded-2xl border border-slate-200 p-8"
        >
          <span class="text-5xl font-bold text-brand-100">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="mt-4 text-xl font-semibold text-slate-900">
            {{ t(`steps.items.${step}.title`) }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-600">
            {{ t(`steps.items.${step}.desc`) }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
