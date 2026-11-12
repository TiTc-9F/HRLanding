<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const features: { icon: LandingIconName, title: string, desc: string }[] = [
  { icon: 'users', title: 'Employee records', desc: 'Keep profiles, contracts and job history in one place with role-based access, instead of spreadsheets scattered everywhere.' },
  { icon: 'clock', title: 'Time & attendance', desc: 'Clock in by mobile GPS or Wi-Fi, match against schedules automatically, and get alerts on exceptions.' },
  { icon: 'calendar', title: 'Leave & overtime', desc: 'Online requests with multi-level approvals, automatic annual leave accrual, and self-service balances.' },
  { icon: 'wallet', title: 'Payroll', desc: 'Pull in attendance and leave data, calculate insurance and tax automatically, and issue payslips in one click.' },
  { icon: 'chart', title: 'Reports & analytics', desc: 'Live dashboards for labor cost, turnover and attendance, so decisions are backed by data.' },
  { icon: 'shield', title: 'Security & compliance', desc: 'Encryption in transit and at rest plus full audit logs, aligned with privacy and labor regulations.' },
]
</script>

<template>
  <section
    id="features"
    class="scroll-mt-16 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <LandingSectionHeading
        eyebrow="Features"
        title="Everything HR does, in one platform"
        description="Hand the repetitive admin work to the system so your HR team can focus on what matters: people."
      />

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
        >
          <div class="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
            <LandingIcon
              :name="feature.icon"
              class="size-6"
            />
          </div>
          <h3 class="mt-5 text-lg font-semibold text-slate-900">
            {{ feature.title }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-600">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
