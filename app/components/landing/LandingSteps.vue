<script setup lang="ts">
// 導入流程：左邊標題固定，右邊三個步驟沿著一條線排，線會隨捲動由上往下填滿
const { t } = useI18n()

const steps = ['discovery', 'setup', 'launch']

const list = ref<HTMLElement>()
const { progress, enabled } = useScrollProgress(list)

// through 模式下，清單中段對齊畫面中間時大約走到 0.5；放大讓線在離開前填滿
const fill = computed(() => (enabled.value ? Math.min(1, Math.max(0, (progress.value - 0.2) / 0.5)) : 1))
</script>

<template>
  <section
    id="steps"
    class="py-24 sm:py-32"
    aria-labelledby="steps-title"
  >
    <LandingContainer class="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-28">
          <LandingSectionHeading
            id="steps-title"
            compact
            :eyebrow="t('steps.eyebrow')"
            :title="t('steps.title')"
            :description="t('steps.description')"
          />
        </div>
      </div>

      <ol
        ref="list"
        class="relative space-y-6 pl-14 lg:col-span-7"
      >
        <!-- 底線與填滿的線，只是裝飾 -->
        <span
          class="absolute top-2 bottom-2 left-[1.15rem] w-0.5 rounded-full bg-ink/10"
          aria-hidden="true"
        />
        <span
          class="absolute top-2 left-[1.15rem] w-0.5 origin-top rounded-full bg-ink"
          :style="{ height: 'calc(100% - 1rem)', transform: `scaleY(${fill})` }"
          aria-hidden="true"
        />
        <li
          v-for="(step, i) in steps"
          :key="step"
          class="relative rounded-[1.75rem] bg-white p-8"
        >
          <span
            class="absolute top-8 -left-14 grid size-10 place-items-center rounded-full font-mono text-sm font-semibold transition-colors duration-300"
            :class="fill >= i / (steps.length - 1) - 0.05 ? 'bg-accent text-ink' : 'bg-paper text-ink/50 ring-1 ring-ink/10'"
            aria-hidden="true"
          >0{{ i + 1 }}</span>
          <h3 class="font-display text-2xl font-medium tracking-tight text-ink">
            {{ t(`steps.items.${step}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-pretty text-ink/65">
            {{ t(`steps.items.${step}.desc`) }}
          </p>
        </li>
      </ol>
    </LandingContainer>
  </section>
</template>
