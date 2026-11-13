<script setup lang="ts">
// 堆疊卡片右側的產品示意（HTML 組成，不是截圖；人名皆為虛構）
defineProps<{ variant: 'core' | 'review' | 'growth' | 'care' }>()
const { t } = useI18n()

const scores = computed(() => [
  { label: t('stack.mock.self'), value: 78 },
  { label: t('stack.mock.lead'), value: 84 },
  { label: t('stack.mock.reviewer'), value: 81 },
])

const days = computed(() => [
  { label: t('stack.mock.day1'), at: 0, done: true },
  { label: t('stack.mock.day65'), at: 65, done: true },
  { label: t('stack.mock.day100'), at: 100, done: false },
])
</script>

<template>
  <div
    class="mx-auto w-full max-w-md"
    aria-hidden="true"
  >
    <!-- 人資行政：打卡 + 假單簽核 -->
    <div
      v-if="variant === 'core'"
      class="space-y-3"
    >
      <div class="flex items-center gap-4 rounded-2xl bg-paper p-5">
        <span class="grid size-12 place-items-center rounded-2xl bg-sage text-ink">
          <AppIcon
            name="wifi"
            class="size-6"
          />
        </span>
        <div>
          <p class="font-semibold text-ink">
            {{ t('heroVisual.clockIn') }} 08:57
          </p>
          <p class="text-sm text-ink/55">
            {{ t('heroVisual.clockInStatus') }}
          </p>
        </div>
      </div>
      <div class="rounded-2xl bg-paper p-5">
        <p class="text-sm font-medium text-ink/55">
          {{ t('heroVisual.leaveTitle') }}
        </p>
        <div class="mt-3 flex items-center gap-3">
          <UserAvatar
            name="Noah Wu"
            size="md"
          />
          <p class="min-w-0 flex-1 truncate font-semibold text-ink">
            {{ t('stack.mock.leaveRequest') }}
          </p>
          <span class="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">{{ t('stack.mock.approve') }}</span>
        </div>
      </div>
    </div>

    <!-- 評核：三方分數並排 + 等第 -->
    <div
      v-else-if="variant === 'review'"
      class="rounded-3xl bg-white p-6"
    >
      <div class="space-y-5">
        <div
          v-for="score in scores"
          :key="score.label"
        >
          <div class="flex justify-between text-sm">
            <span class="font-medium text-ink/70">{{ score.label }}</span>
            <span class="font-mono font-semibold text-ink">{{ score.value }}</span>
          </div>
          <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-mist">
            <div
              class="h-full rounded-full bg-ink"
              :style="{ width: `${score.value}%` }"
            />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between rounded-2xl bg-accent px-5 py-4">
        <span class="font-semibold text-ink">{{ t('stack.mock.grade') }}</span>
        <span class="font-display text-3xl font-semibold text-ink">A</span>
      </div>
    </div>

    <!-- 試用期與升等：時間軸 + 升等通過 -->
    <div
      v-else-if="variant === 'growth'"
      class="rounded-3xl bg-white p-6"
    >
      <div class="relative mx-2 mt-2 mb-10 h-1.5 rounded-full bg-mist">
        <div class="absolute inset-y-0 left-0 w-[65%] rounded-full bg-ink" />
        <div
          v-for="day in days"
          :key="day.at"
          class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
          :style="{ left: `${day.at}%` }"
        >
          <span
            class="block size-4 rounded-full ring-4 ring-white"
            :class="day.done ? 'bg-ink' : 'bg-accent-strong'"
          />
        </div>
      </div>
      <ul class="grid grid-cols-3 gap-2 text-xs font-medium text-ink/65">
        <li
          v-for="day in days"
          :key="day.at"
          :class="day.at === 100 ? 'text-right' : day.at === 65 ? 'text-center' : ''"
        >
          {{ day.label }}
        </li>
      </ul>
      <div class="mt-6 flex items-center gap-3 rounded-2xl bg-ink p-4 text-white">
        <span class="grid size-10 place-items-center rounded-xl bg-accent text-ink">
          <AppIcon
            name="trend"
            class="size-5"
          />
        </span>
        <div>
          <p class="text-sm font-semibold">
            {{ t('heroVisual.promotion') }}
          </p>
          <p class="text-xs text-white/65">
            {{ t('stack.mock.promotion') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 面談與發展：1 on 1 紀錄 -->
    <div
      v-else
      class="rounded-3xl bg-white p-6 text-ink"
    >
      <div class="flex items-center gap-3">
        <UserAvatar
          name="Emma Hsu"
          size="md"
        />
        <p class="font-semibold">
          {{ t('stack.mock.noteTitle') }}
        </p>
      </div>
      <ul class="mt-5 space-y-3 text-sm leading-relaxed text-ink/75">
        <li
          v-for="n in ['note1', 'note2', 'note3']"
          :key="n"
          class="flex gap-3 rounded-xl bg-paper p-3"
        >
          <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" />
          {{ t(`stack.mock.${n}`) }}
        </li>
      </ul>
      <p class="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold">
        <AppIcon
          name="eye"
          class="size-3.5"
        />
        {{ t('stack.mock.visibility') }}
      </p>
    </div>
  </div>
</template>
