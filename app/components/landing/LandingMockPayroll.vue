<script setup lang="ts">
// 「出勤到薪資」示意：結算的四個項目都已自動帶入或試算，最後一步寄出薪資單。
// 循環播放：四個項目依序完成 → 薪資圖表長出來、寄出薪資單的按鈕亮起
const { t } = useI18n()

const root = ref<HTMLElement>()
const { step } = useStepLoop(root, 5, { interval: 700 })

const rows = computed(() => [
  { label: t('showcase.mock.attendanceRow'), icon: 'clock' as const, status: t('showcase.mock.synced') },
  { label: t('showcase.mock.leaveRow'), icon: 'calendar' as const, status: t('showcase.mock.synced') },
  { label: t('showcase.mock.insuranceRow'), icon: 'shield' as const, status: t('showcase.mock.calculated') },
  { label: t('showcase.mock.taxRow'), icon: 'file' as const, status: t('showcase.mock.calculated') },
])
</script>

<template>
  <div ref="root">
    <LandingMockFrame
      :title="t('showcase.mock.payrollTitle')"
      :meta="t('showcase.mock.payrollEmployees')"
      aria-hidden="true"
    >
      <ul class="divide-y divide-ink/5">
        <li
          v-for="(row, i) in rows"
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
            :tone="step > i ? 'done' : 'waiting'"
            :label="step > i ? row.status : t('heroVisual.waiting')"
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
            class="flex-1 origin-bottom rounded-t bg-ink/15 transition-transform duration-700 ease-out-expo last:bg-ink"
            :class="step >= 5 ? 'scale-y-100' : 'scale-y-[0.15]'"
            :style="{ height: `${h}%`, transitionDelay: step >= 5 ? `${i * 40}ms` : '0ms' }"
          />
        </div>
        <span
          class="inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors duration-500"
          :class="step >= 5 ? 'bg-accent text-ink' : 'bg-ink text-white'"
        >
          <LandingIcon
            name="mail"
            class="size-4"
          />
          {{ t('showcase.mock.payslips') }}
        </span>
      </div>
    </LandingMockFrame>
  </div>
</template>
