<script setup lang="ts">
const steps = [
  { title: 'Discovery call', desc: 'A consultant learns your org structure, shifts and pay rules, then recommends a rollout plan.' },
  { title: 'Data import & setup', desc: 'We import your employee data and configure approval flows and pay items to match your current policies.' },
  { title: 'Training & go-live', desc: 'Hands-on training for HR and managers, with ongoing support after launch.' },
]
</script>

<template>
  <section
    id="steps"
    class="scroll-mt-16 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <LandingSectionHeading
        eyebrow="How it works"
        title="Switch systems in three simple steps"
        description="A dedicated consultant guides you all the way, no IT team required."
      />

      <ol class="mt-16 grid gap-8 md:grid-cols-3">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative rounded-2xl border border-slate-200 p-8"
        >
          <span class="text-5xl font-bold text-brand-100">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="mt-4 text-xl font-semibold text-slate-900">
            {{ step.title }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-600">
            {{ step.desc }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
