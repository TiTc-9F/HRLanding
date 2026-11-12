<script setup lang="ts">
// 「自訂評估流程」示意：左邊是流程設定，右邊是即時試算會排給誰（人名皆為虛構）。
// 循環播放：加一關，右邊就試算出那一關的負責人，三關都排好後停一下再重來
const { t } = useI18n()

const root = ref<HTMLElement>()
const { step } = useStepLoop(root, 6, { interval: 700 })

const steps = computed(() => [
  { label: t('showcase.mock.self'), who: t('showcase.mock.selfWho'), person: 'Mia Chen' },
  { label: t('showcase.mock.lead'), who: t('showcase.mock.leadWho'), person: 'Leo Wang' },
  { label: t('showcase.mock.head'), who: t('showcase.mock.headWho'), person: 'Ava Lin' },
])
</script>

<template>
  <div ref="root">
    <LandingMockFrame
      :title="t('showcase.mock.configureTitle')"
      aria-hidden="true"
    >
      <template #badge>
        <LandingStatusPill
          tone="draft"
          :label="t('showcase.mock.draft')"
        />
      </template>

      <div class="grid gap-5 sm:grid-cols-[1fr_14rem]">
        <div>
          <p class="text-xs font-semibold tracking-wide text-ink/50">
            {{ t('showcase.mock.stepsLabel') }}
          </p>
          <ol class="relative mt-3 space-y-3 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-ink/10">
            <li
              v-for="(item, i) in steps"
              :key="item.label"
              class="relative flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-3 transition duration-500 ease-out-expo"
              :class="step > i * 2 ? '' : 'translate-y-2 opacity-0'"
            >
              <span class="grid size-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs font-semibold text-white">
                {{ i + 1 }}
              </span>
              <div class="min-w-0">
                <p class="truncate text-sm font-semibold text-ink">
                  {{ item.label }}
                </p>
                <p class="truncate text-xs text-ink/55">
                  {{ item.who }}
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div class="rounded-xl bg-paper p-4">
          <p class="flex items-center gap-2 text-xs font-semibold text-ink/60">
            <LandingIcon
              name="eye"
              class="size-4"
            />
            {{ t('showcase.mock.preview') }}
          </p>
          <p class="mt-1 text-sm font-semibold text-ink">
            {{ t('showcase.mock.previewFor') }}
          </p>
          <ol class="mt-4 space-y-3">
            <li
              v-for="(item, i) in steps"
              :key="item.person"
              class="flex items-center gap-2.5 transition duration-500 ease-out-expo"
              :class="step > i * 2 + 1 ? '' : 'translate-y-2 opacity-0'"
            >
              <LandingAvatar :name="item.person" />
              <div class="min-w-0">
                <p class="truncate text-sm font-medium text-ink">
                  {{ item.person }}
                </p>
                <p class="truncate text-xs text-ink/55">
                  {{ item.label }}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </LandingMockFrame>
  </div>
</template>
