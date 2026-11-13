<script setup lang="ts">
// 「自動指派」示意：一份技術評核的關卡與負責人，最下面是組織異動後自動重排的提示。
// 循環播放：自評完成 → 評審關卡開始、兩位評審依序排入 → 跳出組織異動已自動重排
const { t } = useI18n()

const root = ref<HTMLElement>()
const { step } = useStepLoop(root, 4)

const hidden = 'translate-y-2 opacity-0'
</script>

<template>
  <div ref="root">
    <MockFrame
      :title="t('showcase.mock.routingTitle')"
      aria-hidden="true"
    >
      <ol class="space-y-4">
        <li class="flex items-center gap-4 rounded-xl border border-ink/10 p-4">
          <UserAvatar
            name="Mia Chen"
            size="md"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-ink">
              {{ t('showcase.mock.routingSelf') }}
            </p>
            <p class="text-xs text-ink/55">
              Mia Chen
            </p>
          </div>
          <StatusPill
            :tone="step >= 1 ? 'done' : 'active'"
            :label="step >= 1 ? t('heroVisual.done') : t('heroVisual.inProgress')"
          />
        </li>

        <li
          class="rounded-xl border p-4 transition-colors duration-500"
          :class="step >= 1 ? 'border-ink/20 bg-paper' : 'border-ink/10'"
        >
          <div class="flex items-center gap-4">
            <span class="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white">
              <AppIcon
                name="users"
                class="size-5"
              />
            </span>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold text-ink">
                {{ t('showcase.mock.routingReviewer') }}
              </p>
              <p class="truncate text-xs text-ink/55">
                {{ t('showcase.mock.routingReviewerWho') }}
              </p>
            </div>
            <StatusPill
              :tone="step >= 1 ? 'active' : 'waiting'"
              :label="step >= 1 ? t('heroVisual.inProgress') : t('heroVisual.waiting')"
            />
          </div>
          <div class="mt-4 grid gap-2 sm:grid-cols-2">
            <div
              v-for="(person, i) in ['Noah Wu', 'Emma Hsu']"
              :key="person"
              class="flex items-center gap-2.5 rounded-lg bg-white p-2.5 transition duration-500 ease-out-expo"
              :class="step >= i + 2 ? '' : hidden"
            >
              <UserAvatar :name="person" />
              <span class="truncate text-sm font-medium text-ink">{{ person }}</span>
            </div>
          </div>
        </li>

        <li class="flex items-center gap-4 rounded-xl border border-ink/10 p-4">
          <UserAvatar
            name="Ava Lin"
            size="md"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-ink">
              {{ t('showcase.mock.routingHead') }}
            </p>
            <p class="text-xs text-ink/55">
              Ava Lin
            </p>
          </div>
          <StatusPill
            tone="waiting"
            :label="t('heroVisual.waiting')"
          />
        </li>
      </ol>

      <p
        class="mt-5 flex gap-3 rounded-xl bg-ink p-4 text-sm leading-relaxed text-white/85 transition duration-500 ease-out-expo"
        :class="step >= 4 ? '' : hidden"
      >
        <AppIcon
          name="route"
          class="mt-0.5 size-5 shrink-0 text-accent"
        />
        {{ t('showcase.mock.orgChange') }}
      </p>
    </MockFrame>
  </div>
</template>
