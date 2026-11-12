<script setup lang="ts">
// 「出勤到薪資」示意：結算的四個項目都已自動帶入或試算，最後一步寄出薪資單
const { t } = useI18n()

const rows = computed(() => [
  { label: t('showcase.mock.attendanceRow'), icon: 'clock' as const, status: t('showcase.mock.synced') },
  { label: t('showcase.mock.leaveRow'), icon: 'calendar' as const, status: t('showcase.mock.synced') },
  { label: t('showcase.mock.insuranceRow'), icon: 'shield' as const, status: t('showcase.mock.calculated') },
  { label: t('showcase.mock.taxRow'), icon: 'file' as const, status: t('showcase.mock.calculated') },
])
</script>

<template>
  <LandingMockFrame
    :title="t('showcase.mock.payrollTitle')"
    :meta="t('showcase.mock.payrollEmployees')"
    aria-hidden="true"
  >
    <ul class="divide-y divide-ink/5">
      <li
        v-for="row in rows"
        :key="row.label"
        class="flex items-center gap-3 py-3"
      >
        <span class="grid size-9 shrink-0 place-items-center rounded-lg bg-paper text-ink/70">
          <LandingIcon
            :name="row.icon"
            class="size-4"
          />
        </span>
        <span class="min-w-0 flex-1 truncate text-sm font-medium text-ink">{{ row.label }}</span>
        <LandingStatusPill
          tone="done"
          :label="row.status"
        />
      </li>
    </ul>

    <div class="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper p-4">
      <div
        class="flex h-12 flex-1 items-end gap-1"
        aria-hidden="true"
      >
        <span
          v-for="(h, i) in [40, 52, 48, 60, 58, 72, 66, 80, 76, 90, 84, 100]"
          :key="i"
          class="flex-1 rounded-t bg-ink/15 last:bg-ink"
          :style="{ height: `${h}%` }"
        />
      </div>
      <span class="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white">
        <LandingIcon
          name="mail"
          class="size-4"
        />
        {{ t('showcase.mock.payslips') }}
      </span>
    </div>
  </LandingMockFrame>
</template>
