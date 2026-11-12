<script setup lang="ts">
// 首屏正下方的輕量證明：一句話加一排客戶 logo（自動慢慢滑，滑鼠移上去或鍵盤聚焦時暫停）。
// 目前是提案用的示意客戶，site.mockProof 關掉時整區不顯示。
const { site } = useAppConfig()
const { t } = useI18n()

const companies = [
  'Harborline', 'Kitewave', 'Mapleton Health', 'Lumenfold', 'Orbitra',
  'Atlasbay', 'Pinecrest Studio', 'Sora Logistics', 'Fernwood Labs',
]
</script>

<template>
  <section
    v-if="site.mockProof"
    class="logo-marquee py-14 sm:py-20"
    :aria-label="t('proof.caption', { name: site.productName })"
  >
    <LandingContainer class="flex flex-wrap items-center justify-center gap-3 text-center">
      <p class="font-mono text-xs tracking-[0.18em] text-ink/55 uppercase">
        {{ t('proof.caption', { name: site.productName }) }}
      </p>
      <span class="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] font-semibold text-ink/55">
        {{ t('proof.mockBadge') }}
      </span>
    </LandingContainer>

    <div class="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:[mask-image:none]">
      <!-- 兩份清單各自帶右側間距、彼此不留 gap，往左移 50% 時才接得無縫 -->
      <div class="logo-marquee-track flex w-max">
        <ul
          v-for="copy in 2"
          :key="copy"
          class="flex shrink-0 items-center gap-14 pr-14 text-2xl text-ink/55 sm:gap-20 sm:pr-20 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-10 motion-reduce:px-4"
          :class="{ 'motion-reduce:hidden': copy === 2 }"
          :aria-hidden="copy === 2 ? 'true' : undefined"
        >
          <li
            v-for="company in companies"
            :key="company"
          >
            <LandingMockLogo :name="company" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
