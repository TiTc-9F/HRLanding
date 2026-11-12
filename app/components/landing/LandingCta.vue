<script setup lang="ts">
const { site } = useAppConfig()

const mailto = computed(() =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(`${site.productName} demo request`)}`,
)
</script>

<template>
  <section
    id="contact"
    class="scroll-mt-16 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 px-6 py-16 text-center text-white sm:px-16">
        <div class="absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl" />
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to make HR work easier?
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-brand-100">
          Book a 30-minute online demo. A consultant will walk you through the product based on your needs and suggest a rollout plan.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            :href="mailto"
            class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            <LandingIcon
              name="mail"
              class="size-5"
            />
            Book a demo
          </a>
          <a
            :href="`mailto:${site.contactEmail}`"
            class="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            {{ site.contactEmail }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
