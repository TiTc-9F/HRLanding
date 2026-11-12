<script setup lang="ts">
const { site } = useAppConfig()

const highlights = ['Cloud-based, nothing to install', 'Built for Taiwan labor law', 'Guided onboarding']
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden"
  >
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
    <div class="absolute -top-40 right-0 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />

    <div class="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
      <div>
        <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm text-brand-700">
          <span class="size-2 rounded-full bg-brand-500" />
          {{ site.tagline }}
        </p>
        <h1 class="text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl">
          Less paperwork.<br>
          <span class="text-brand-600">More time for people.</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          From onboarding and attendance to leave and payroll, {{ site.productName }} brings scattered HR processes into one platform, automates the repetitive work, and gives managers a real-time view of their organization.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-medium text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            Book a free demo
            <LandingIcon
              name="arrow"
              class="size-4"
            />
          </a>
          <a
            href="#features"
            class="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            Explore features
          </a>
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <li
            v-for="item in highlights"
            :key="item"
            class="flex items-center gap-1.5"
          >
            <LandingIcon
              name="check"
              class="size-4 text-brand-600"
            />
            {{ item }}
          </li>
        </ul>
      </div>

      <LandingDashboardMock />
    </div>
  </section>
</template>
