<script setup lang="ts">
// 兩排能力標籤，跟著捲動往相反方向滑（不是自己跑，捲多少動多少）。
// 減少動態時不位移，改成置中換行；螢幕閱讀器讀的是下面那份完整清單。
const { t } = useI18n()

const keys = [
  'records', 'onboarding', 'attendance', 'shifts', 'leave', 'payroll', 'performance', 'technical',
  'promotion', 'probation', 'checkin', 'idp', 'letters', 'audit', 'reports',
]
const items = computed(() => keys.map(key => t(`marquee.items.${key}`)))
const rows = computed(() => [items.value.slice(0, 8), items.value.slice(7)])

const root = ref<HTMLElement>()
const { progress, enabled } = useScrollProgress(root)

function rowStyle(index: number) {
  if (!enabled.value) return undefined
  const shift = index === 0 ? -progress.value * 30 : (progress.value - 1) * 30
  return { transform: `translate3d(${shift}%, 0, 0)` }
}
</script>

<template>
  <section
    ref="root"
    class="overflow-hidden py-16 sm:py-24"
    :aria-label="t('marquee.label')"
  >
    <ul class="sr-only">
      <li
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
    <div
      class="space-y-4"
      aria-hidden="true"
    >
      <div
        v-for="(row, i) in rows"
        :key="i"
        class="flex w-max gap-4 will-change-transform motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4"
        :class="i === 1 ? 'ml-[-20%] motion-reduce:ml-0' : ''"
        :style="rowStyle(i)"
      >
        <!-- 重複一次，確保滑動時整排都填滿 -->
        <span
          v-for="(item, j) in [...row, ...row]"
          :key="`${item}-${j}`"
          class="flex items-center gap-3 rounded-full px-6 py-3.5 font-display text-xl font-medium whitespace-nowrap sm:text-3xl"
          :class="[
            (j + i) % 4 === 0 ? 'bg-accent text-ink' : (j + i) % 4 === 2 ? 'bg-ink text-white' : 'bg-white text-ink',
            j >= row.length ? 'motion-reduce:hidden' : '',
          ]"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>
