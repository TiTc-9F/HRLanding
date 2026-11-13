<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

// 「你想先解決哪些事？」：勾選的項目會帶進預約 Demo 的信件主旨，業務一看就知道要準備什麼
const topics = ['attendance', 'leave', 'payroll', 'performance', 'technical', 'probation']
const picked = ref<string[]>([])

function toggle(key: string) {
  picked.value = picked.value.includes(key)
    ? picked.value.filter(k => k !== key)
    : [...picked.value, key]
}

const ctaLabel = computed(() =>
  picked.value.length ? t('hero.pickedCta', { n: picked.value.length }) : t('hero.primary'),
)

const ctaHref = computed(() => {
  if (!picked.value.length) return '#contact'
  const names = picked.value.map(key => t(`marquee.items.${key}`)).join('、')
  const subject = t('cta.mailSubjectTopics', { name: site.productName, topics: names })
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`
})
</script>

<template>
  <section
    id="top"
    class="px-3 pt-3 sm:px-4"
    aria-labelledby="hero-title"
  >
    <div class="relative isolate mx-auto max-w-[96rem] overflow-hidden rounded-[2rem] bg-white sm:rounded-[2.5rem]">
      <PageContainer class="grid grid-cols-1 items-center gap-14 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
        <div class="lg:col-span-6">
          <p class="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-sm font-medium text-ink/75">
            <span
              class="size-2 rounded-full bg-accent-strong"
              aria-hidden="true"
            />
            {{ t('hero.eyebrow') }}
          </p>

          <h1
            id="hero-title"
            class="mt-6 font-display text-[clamp(2.6rem,6vw,5.25rem)] leading-[1.02] font-medium tracking-[-0.04em] text-balance text-ink"
          >
            <span class="block">{{ t('hero.title1') }}</span>
            <span class="relative inline-block">
              <!-- 萊姆黃底線只是裝飾 -->
              <span
                class="absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.32em] rounded-full bg-accent"
                aria-hidden="true"
              />
              {{ t('hero.title2') }}
            </span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink/65">
            {{ t('hero.description', { name: site.productName }) }}
          </p>

          <fieldset class="mt-9">
            <legend class="text-sm font-semibold text-ink">
              {{ t('hero.pickLabel') }}
            </legend>
            <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <button
                v-for="key in topics"
                :key="key"
                type="button"
                :aria-pressed="picked.includes(key)"
                class="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-2xl border px-3.5 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                :class="picked.includes(key) ? 'border-ink bg-ink text-white' : 'border-ink/10 bg-paper text-ink hover:border-ink/30'"
                @click="toggle(key)"
              >
                <span
                  class="grid size-5 shrink-0 place-items-center rounded-md border transition-colors"
                  :class="picked.includes(key) ? 'border-accent bg-accent text-ink' : 'border-ink/25 bg-white'"
                  aria-hidden="true"
                >
                  <AppIcon
                    v-if="picked.includes(key)"
                    name="check"
                    class="size-3.5"
                  />
                </span>
                {{ t(`marquee.items.${key}`) }}
              </button>
            </div>
          </fieldset>

          <div class="relative z-10 mt-6 flex flex-wrap gap-3">
            <BaseButton
              :href="ctaHref"
              size="lg"
              icon="arrow"
            >
              {{ ctaLabel }}
            </BaseButton>
            <BaseButton
              href="#platform"
              variant="secondary"
              size="lg"
            >
              {{ t('hero.secondary') }}
            </BaseButton>
          </div>
        </div>

        <HeroScene class="lg:col-span-6" />
      </PageContainer>
    </div>
  </section>
</template>
