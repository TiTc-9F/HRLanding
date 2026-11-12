<script setup lang="ts">
// 「自訂評估流程」示意：左邊是流程設定，右邊是即時試算會排給誰（人名皆為虛構）
const { t } = useI18n()

const steps = computed(() => [
  { label: t('showcase.mock.self'), who: t('showcase.mock.selfWho'), person: 'Mia Chen' },
  { label: t('showcase.mock.lead'), who: t('showcase.mock.leadWho'), person: 'Leo Wang' },
  { label: t('showcase.mock.head'), who: t('showcase.mock.headWho'), person: 'Ava Lin' },
])
</script>

<template>
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
            v-for="(step, i) in steps"
            :key="step.label"
            class="relative flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-3"
          >
            <span class="grid size-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs font-semibold text-white">
              {{ i + 1 }}
            </span>
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-ink">
                {{ step.label }}
              </p>
              <p class="truncate text-xs text-ink/55">
                {{ step.who }}
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
            v-for="step in steps"
            :key="step.person"
            class="flex items-center gap-2.5"
          >
            <LandingAvatar :name="step.person" />
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-ink">
                {{ step.person }}
              </p>
              <p class="truncate text-xs text-ink/55">
                {{ step.label }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </LandingMockFrame>
</template>
