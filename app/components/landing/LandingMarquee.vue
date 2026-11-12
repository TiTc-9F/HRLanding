<script setup lang="ts">
// 平台涵蓋的人資工作，取代客戶 logo 牆（沒有真實客戶前不放假 logo）
const { t } = useI18n()

const keys = [
  'records', 'onboarding', 'attendance', 'shifts', 'leave', 'payroll', 'performance', 'technical',
  'promotion', 'probation', 'checkin', 'idp', 'letters', 'audit', 'reports',
]

const items = computed(() => keys.map(key => t(`marquee.items.${key}`)))
</script>

<template>
  <section
    class="marquee border-y border-ink/10 bg-white py-6"
    :aria-label="t('marquee.label')"
  >
    <div class="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]">
      <!-- 兩份清單各自帶右側間距、彼此不留 gap，往左移 50% 時才接得無縫 -->
      <div class="marquee-track flex w-max">
        <!-- 第二份只是讓跑馬燈接得起來：螢幕閱讀器不重複唸，減少動態時隱藏 -->
        <ul
          v-for="copy in 2"
          :key="copy"
          class="flex shrink-0 justify-center gap-3 pr-3 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:px-4"
          :class="{ 'marquee-clone': copy === 2 }"
          :aria-hidden="copy === 2 ? 'true' : undefined"
        >
          <li
            v-for="item in items"
            :key="item"
            class="flex items-center gap-3 rounded-full border border-ink/10 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-ink/75"
          >
            <span
              class="size-1.5 rounded-full bg-ink/30"
              aria-hidden="true"
            />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
