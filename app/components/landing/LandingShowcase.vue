<script setup lang="ts">
const { t } = useI18n()

// 三段左右交錯的特色介紹；每段的 id 讓首屏的問題按鈕可以直接跳過來
const items = ['configure', 'routing', 'payroll'] as const

function points(key: string) {
  return ['p1', 'p2', 'p3'].map(p => t(`showcase.items.${key}.points.${p}`))
}
</script>

<template>
  <section
    id="showcase"
    class="bg-white py-24 sm:py-32"
    aria-labelledby="showcase-title"
  >
    <LandingContainer>
      <LandingSectionHeading
        id="showcase-title"
        :index="t('showcase.index')"
        :eyebrow="t('showcase.eyebrow')"
        :title="t('showcase.title')"
      />

      <div class="mt-20 space-y-24 sm:space-y-32">
        <article
          v-for="(key, i) in items"
          :id="`showcase-${key}`"
          :key="key"
          class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
          :aria-labelledby="`showcase-${key}-title`"
        >
          <div
            v-reveal
            class="lg:col-span-5"
            :class="{ 'lg:order-2': i % 2 === 1 }"
          >
            <p class="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1 text-sm font-semibold text-ink">
              <span class="font-mono text-xs text-ink/50">0{{ i + 1 }}</span>
              {{ t(`showcase.items.${key}.label`) }}
            </p>
            <h3
              :id="`showcase-${key}-title`"
              class="mt-5 text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-4xl"
            >
              {{ t(`showcase.items.${key}.title`) }}
            </h3>
            <p class="mt-5 text-lg leading-relaxed text-pretty text-ink/70">
              {{ t(`showcase.items.${key}.desc`) }}
            </p>
            <LandingCheckList
              :items="points(key)"
              class="mt-8"
            />
            <a
              href="#contact"
              class="group mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ink"
            >
              {{ t('showcase.learnMore') }}
              <LandingIcon
                name="arrow"
                class="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <!-- 人物照片在後、產品畫面往前疊一半；奇數列左右對調 -->
          <div
            v-reveal="1"
            class="relative lg:col-span-7"
            :class="{ 'lg:order-1': i % 2 === 1 }"
          >
            <LandingPhoto
              :name="`showcase-${key}`"
              :alt="t(`photos.${key}`)"
              class="w-[88%] rounded-3xl"
              :class="i % 2 === 1 ? 'mr-auto' : 'ml-auto'"
            />
            <div
              class="relative z-10 -mt-[30%] w-[92%] sm:w-[80%]"
              :class="i % 2 === 1 ? 'ml-auto' : 'mr-auto'"
            >
              <LandingMockConfigure v-if="key === 'configure'" />
              <LandingMockRouting v-else-if="key === 'routing'" />
              <LandingMockPayroll v-else />
            </div>
          </div>
        </article>
      </div>
    </LandingContainer>
  </section>
</template>
