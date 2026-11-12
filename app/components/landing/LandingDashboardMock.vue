<script setup lang="ts">
// 主視覺的產品畫面示意，之後可換成實際產品截圖（<NuxtImg>）
const { t } = useI18n()

const stats = computed(() => [
  { label: t('dashboard.checkedIn'), value: '128', sub: '/ 135' },
  { label: t('dashboard.pendingLeave'), value: '6', sub: t('dashboard.pendingLeaveSub') },
  { label: t('dashboard.newHires'), value: '4', sub: t('dashboard.newHiresSub') },
])

const bars = [40, 65, 52, 80, 72, 90, 60]

const approvals = computed(() => [
  { name: 'Alex Chen', type: t('dashboard.annualLeave'), color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Emily Lin', type: t('dashboard.overtime'), color: 'bg-amber-100 text-amber-700' },
  { name: 'Jason Wu', type: t('dashboard.sickLeave'), color: 'bg-sky-100 text-sky-700' },
])
</script>

<template>
  <div
    class="relative mx-auto w-full max-w-lg"
    aria-hidden="true"
  >
    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-brand-900/10">
      <div class="mb-4 flex items-center gap-1.5">
        <span class="size-2.5 rounded-full bg-red-300" />
        <span class="size-2.5 rounded-full bg-amber-300" />
        <span class="size-2.5 rounded-full bg-emerald-300" />
        <span class="ml-3 h-2 w-32 rounded-full bg-slate-100" />
      </div>

      <div class="grid grid-cols-3 gap-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-xl bg-slate-50 p-3"
        >
          <p class="text-xs text-slate-500">
            {{ stat.label }}
          </p>
          <p class="mt-1 text-xl font-bold text-slate-900">
            {{ stat.value }}
            <span class="text-xs font-normal text-slate-400">{{ stat.sub }}</span>
          </p>
        </div>
      </div>

      <div class="mt-4 rounded-xl bg-slate-50 p-4">
        <p class="mb-3 text-xs text-slate-500">
          {{ t('dashboard.attendanceWeek') }}
        </p>
        <div class="flex h-24 items-end gap-2">
          <div
            v-for="(h, i) in bars"
            :key="i"
            class="flex-1 rounded-t-md bg-brand-500/80"
            :style="{ height: `${h}%` }"
          />
        </div>
      </div>

      <div class="mt-4 space-y-2">
        <div
          v-for="item in approvals"
          :key="item.name"
          class="flex items-center justify-between gap-2 rounded-lg border border-slate-100 px-3 py-2 text-sm"
        >
          <span class="font-medium text-slate-800">{{ item.name }}</span>
          <span
            class="rounded-full px-2 py-0.5 text-xs"
            :class="item.color"
          >{{ item.type }}</span>
          <span class="text-xs text-brand-600">{{ t('dashboard.approve') }}</span>
        </div>
      </div>
    </div>

    <div class="absolute -bottom-12 -left-6 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
      <p class="text-xs text-slate-500">
        {{ t('dashboard.payrollDone') }}
      </p>
      <p class="text-sm font-semibold text-emerald-600">
        {{ t('dashboard.payrollDetail') }}
      </p>
    </div>
  </div>
</template>
