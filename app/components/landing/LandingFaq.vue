<script setup lang="ts">
const faqs = [
  { q: 'Do I need to install software or run a server?', a: 'No. It is a cloud service you can use from any browser or our mobile app, and we handle all updates for you.' },
  { q: 'Can it fit our company policies?', a: 'Yes. Shifts, leave types, approval flows and pay items are all configurable, and our consultants can help with special requirements.' },
  { q: 'Can we migrate data from our old system?', a: 'Yes. We provide Excel import templates, and a consultant will help review and convert your existing data.' },
  { q: 'How is our data protected?', a: 'Data is encrypted in transit and at rest, with daily backups, role-based access control and full audit logs.' },
  { q: 'How is pricing calculated?', a: 'Pricing is based on headcount and modules. Book a demo and we will prepare a quote for your needs.' },
]
</script>

<template>
  <section
    id="faq"
    class="scroll-mt-16 bg-slate-50 py-24"
  >
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <LandingSectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
      />

      <div class="mt-12 space-y-4">
        <details
          v-for="faq in faqs"
          :key="faq.q"
          class="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-md"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
            {{ faq.q }}
            <span class="ml-4 text-xl text-brand-600 transition group-open:rotate-45">+</span>
          </summary>
          <p class="mt-3 leading-relaxed text-slate-600">
            {{ faq.a }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
