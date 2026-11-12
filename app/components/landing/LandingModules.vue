<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const modules: { icon: LandingIconName, label: string, title: string, desc: string, points: string[] }[] = [
  {
    icon: 'clock',
    label: 'Attendance',
    title: 'Clock-ins, shifts and alerts on autopilot',
    desc: 'Employees clock in from their phones, the system flags late arrivals, early leaves and overtime against the schedule, and managers are notified instantly. No more month-end reconciliation.',
    points: ['GPS, Wi-Fi and IP-based clock-in', 'Flexible hours and rotating shifts', 'Automatic exception alerts to managers'],
  },
  {
    icon: 'calendar',
    label: 'Leave approvals',
    title: 'Approvals that never get stuck',
    desc: 'Design multi-level approval flows, keep a full trail from request to approval, and let employees check their own leave balances, calculated automatically.',
    points: ['Approval steps per department', 'Annual leave accrued by seniority', 'Approve on the go with push notifications'],
  },
  {
    icon: 'wallet',
    label: 'Payroll',
    title: 'From timesheet to payslip in one click',
    desc: 'Attendance, leave and overtime flow straight into payroll. Insurance, pension and tax are calculated instantly, and digital payslips go out to every employee.',
    points: ['Insurance brackets kept up to date', 'Bank transfer files in one click', 'Encrypted digital payslips'],
  },
]
</script>

<template>
  <section
    id="modules"
    class="scroll-mt-16 bg-slate-50 py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <LandingSectionHeading
        eyebrow="Modules"
        title="HR workflows built for Taiwan businesses"
        description="Designed around how teams actually work, so everyone is productive from day one."
      />

      <div class="mt-16 space-y-20">
        <div
          v-for="(mod, index) in modules"
          :key="mod.label"
          class="grid items-center gap-10 lg:grid-cols-2"
        >
          <div :class="{ 'lg:order-2': index % 2 === 1 }">
            <p class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
              <LandingIcon
                :name="mod.icon"
                class="size-5"
              />
              {{ mod.label }}
            </p>
            <h3 class="mt-3 text-2xl font-bold text-slate-900">
              {{ mod.title }}
            </h3>
            <p class="mt-4 leading-relaxed text-slate-600">
              {{ mod.desc }}
            </p>
            <ul class="mt-6 space-y-3">
              <li
                v-for="point in mod.points"
                :key="point"
                class="flex items-center gap-3 text-slate-700"
              >
                <span class="grid size-6 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <LandingIcon
                    name="check"
                    class="size-3.5"
                  />
                </span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- 產品截圖預留位置：之後換成 <NuxtImg src="/images/xxx.png" /> -->
          <div
            class="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-brand-300 bg-gradient-to-br from-brand-100 to-white"
            :class="{ 'lg:order-1': index % 2 === 1 }"
          >
            <div class="text-center text-brand-400">
              <LandingIcon
                :name="mod.icon"
                class="mx-auto size-16"
              />
              <p class="mt-3 text-sm">
                {{ mod.label }} screenshot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
