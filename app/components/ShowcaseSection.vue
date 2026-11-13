<script setup lang="ts">
// 產品特色（Apollo 式）：桌機左欄固定，右欄每捲到一段，左邊就展開那一段的說明；
// 手機不固定，每段的文字直接放在畫面上方。人物照片在後、產品畫面往前疊一半。
const { t } = useI18n()

const items = ['configure', 'routing', 'payroll'] as const
const active = ref(0)
const blocks = shallowRef<HTMLElement[]>([])

function points(key: string) {
  return ['p1', 'p2', 'p3'].map(p => t(`showcase.items.${key}.points.${p}`))
}

let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = blocks.value.indexOf(entry.target as HTMLElement)
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  blocks.value.forEach(el => observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    id="showcase"
    class="py-24 sm:py-32"
    aria-labelledby="showcase-title"
  >
    <PageContainer class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-28">
          <SectionHeading
            id="showcase-title"
            compact
            :eyebrow="t('showcase.eyebrow')"
            :title="t('showcase.title')"
          />

          <!-- 桌機：三段的目錄，目前這段展開說明 -->
          <ol class="mt-12 hidden space-y-2 lg:block">
            <li
              v-for="(key, i) in items"
              :key="key"
            >
              <a
                :href="`#showcase-${key}`"
                class="block rounded-2xl p-5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-ink"
                :class="active === i ? 'bg-white' : 'hover:bg-white/60'"
                :aria-current="active === i ? 'step' : undefined"
              >
                <span class="flex items-center gap-3">
                  <span
                    class="grid size-7 place-items-center rounded-full font-mono text-xs font-semibold transition-colors"
                    :class="active === i ? 'bg-accent text-ink' : 'bg-ink/5 text-ink/50'"
                  >{{ i + 1 }}</span>
                  <span
                    class="font-display text-xl font-medium tracking-tight transition-colors"
                    :class="active === i ? 'text-ink' : 'text-ink/45'"
                  >{{ t(`showcase.items.${key}.label`) }}</span>
                </span>
                <span
                  v-if="active === i"
                  class="mt-3 block pl-10 text-ink/65 motion-safe:animate-[fade-up_0.5s_var(--ease-out-expo)]"
                >
                  {{ t(`showcase.items.${key}.desc`) }}
                </span>
              </a>
            </li>
          </ol>
        </div>
      </div>

      <div class="space-y-24 lg:col-span-7 lg:space-y-0">
        <article
          v-for="(key, i) in items"
          :id="`showcase-${key}`"
          :key="key"
          ref="blocks"
          class="flex flex-col justify-center lg:min-h-[85vh]"
          :aria-labelledby="`showcase-${key}-title`"
        >
          <!-- 標題給所有裝置（桌機只是視覺上縮小，讓螢幕閱讀器讀得到每段的主題） -->
          <p class="text-sm font-semibold text-ink/55 lg:hidden">
            0{{ i + 1 }} · {{ t(`showcase.items.${key}.label`) }}
          </p>
          <h3
            :id="`showcase-${key}-title`"
            class="mt-3 font-display text-3xl leading-tight font-medium tracking-[-0.025em] text-balance text-ink lg:mt-0 lg:mb-6 lg:text-2xl"
          >
            {{ t(`showcase.items.${key}.title`) }}
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-ink/65 lg:hidden">
            {{ t(`showcase.items.${key}.desc`) }}
          </p>
          <CheckList
            :items="points(key)"
            class="mt-6 mb-10 lg:hidden"
          />

          <div class="relative">
            <PersonPhoto
              :name="`showcase-${key}`"
              :alt="t(`photos.${key}`)"
              class="w-[86%] rounded-[1.75rem]"
              :class="i % 2 === 1 ? 'mr-auto' : 'ml-auto'"
            />
            <div
              v-parallax="-0.12"
              class="relative z-10 -mt-[32%] w-[94%] sm:w-[78%]"
              :class="i % 2 === 1 ? 'ml-auto' : 'mr-auto'"
            >
              <ConfigureMock v-if="key === 'configure'" />
              <RoutingMock v-else-if="key === 'routing'" />
              <PayrollMock v-else />
            </div>
          </div>
        </article>
      </div>
    </PageContainer>
  </section>
</template>
