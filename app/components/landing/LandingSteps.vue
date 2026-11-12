<script setup lang="ts">
const { t } = useI18n()

const steps = ['discovery', 'setup', 'launch']
</script>

<template>
  <section
    id="steps"
    class="bg-white py-24 sm:py-32"
    aria-labelledby="steps-title"
  >
    <LandingContainer>
      <LandingSectionHeading
        id="steps-title"
        :index="t('steps.index')"
        :eyebrow="t('steps.eyebrow')"
        :title="t('steps.title')"
        :description="t('steps.description')"
      />

      <ol class="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-3">
        <li
          v-for="(step, i) in steps"
          :key="step"
          v-reveal="i"
          class="bg-white p-8 sm:p-10"
        >
          <span class="font-mono text-sm font-semibold text-ink">0{{ i + 1 }}</span>
          <h3 class="mt-10 text-2xl font-bold tracking-tight text-ink">
            {{ t(`steps.items.${step}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-pretty text-ink/65">
            {{ t(`steps.items.${step}.desc`) }}
          </p>
        </li>
      </ol>
    </LandingContainer>
  </section>
</template>
