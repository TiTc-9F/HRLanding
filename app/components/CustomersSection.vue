<script setup lang="ts">
// 深度證明：客戶案例（真人頭像 + 姓名職稱 + 一句引言 + 兩個成效數字 + 公司標誌），放在產品特色之後、CTA 之前。
// 目前是提案用的示意客戶，頭像是 AI 生成的虛構人物；site.mockProof 關掉時整區不顯示。
const { site } = useAppConfig()
const { t } = useI18n()

const cases = ['global', 'tech', 'growth'] as const
</script>

<template>
  <section
    v-if="site.mockProof"
    id="customers"
    class="bg-white py-24 sm:py-32"
    aria-labelledby="customers-title"
  >
    <PageContainer>
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="customers-title"
          :eyebrow="t('cases.eyebrow')"
          :title="t('cases.title')"
        />
        <span class="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/55">
          {{ t('proof.mockBadge') }}
        </span>
      </div>

      <ul class="mt-16 grid grid-cols-1 border-t border-ink/10 lg:grid-cols-3">
        <li
          v-for="(key, i) in cases"
          :key="key"
          v-reveal="i"
          class="flex flex-col border-b border-ink/10 py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-12 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
        >
          <p class="font-mono text-xs tracking-wider text-ink/50 uppercase">
            {{ t(`cases.items.${key}.meta`) }}
          </p>

          <figure class="mt-7 flex flex-1 flex-col">
            <!-- 手機與平板（單欄）：頭像在左、姓名職稱在右，不會只有左半邊有東西；
                 桌機三欄：頭像在上、姓名在下 -->
            <figcaption class="flex items-center gap-5 lg:block">
              <!-- 名字就在旁邊，頭像當裝飾，不重複唸 -->
              <PersonPhoto
                :name="`portrait-${key}`"
                alt=""
                ratio="aspect-square"
                class="w-24 shrink-0 rounded-2xl sm:w-28 lg:w-40"
              />
              <span class="block min-w-0">
                <span class="block font-display text-2xl font-medium tracking-tight text-ink lg:mt-6">
                  {{ t(`cases.items.${key}.person`) }}
                </span>
                <span class="mt-1 block text-sm leading-relaxed text-ink/55">
                  {{ t(`cases.items.${key}.role`) }}<br>@ {{ t(`cases.items.${key}.company`) }}
                </span>
              </span>
            </figcaption>
            <blockquote class="mt-6 flex-1 text-lg leading-relaxed text-pretty text-ink/80">
              &ldquo;{{ t(`cases.items.${key}.quote`) }}&rdquo;
            </blockquote>
          </figure>

          <dl class="mt-8 grid grid-cols-2 gap-3 border-t border-ink/10 pt-6">
            <div
              v-for="m in ['m1', 'm2']"
              :key="m"
              class="flex flex-col-reverse"
            >
              <dt class="mt-1 text-xs leading-snug text-ink/55">
                {{ t(`cases.items.${key}.${m}l`) }}
              </dt>
              <dd class="font-display text-2xl font-semibold tracking-tight text-ink">
                {{ t(`cases.items.${key}.${m}v`) }}
              </dd>
            </div>
          </dl>

          <SampleLogo
            :name="t(`cases.items.${key}.company`)"
            class="mt-10 text-2xl text-ink"
          />
        </li>
      </ul>

      <p class="mt-10 text-sm text-ink/50">
        {{ t('cases.note') }}
      </p>
    </PageContainer>
  </section>
</template>
