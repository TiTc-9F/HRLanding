<script setup lang="ts">
import type { LandingIconName } from './LandingIcon.vue'

const { t } = useI18n()

// 依角色切換的分頁（WAI-ARIA tabs：左右鍵切換、Home／End 跳到頭尾）
const roles: { key: string, icon: LandingIconName }[] = [
  { key: 'hr', icon: 'users' },
  { key: 'manager', icon: 'flow' },
  { key: 'employee', icon: 'id' },
  { key: 'leader', icon: 'chart' },
]

const active = ref(0)
const tabRefs = ref<HTMLButtonElement[]>([])

function select(index: number, focus = false) {
  active.value = (index + roles.length) % roles.length
  if (focus) nextTick(() => tabRefs.value[active.value]?.focus())
}

function onKeydown(event: KeyboardEvent) {
  const moves: Record<string, number> = {
    ArrowRight: active.value + 1,
    ArrowLeft: active.value - 1,
    Home: 0,
    End: roles.length - 1,
  }
  const next = moves[event.key]
  if (next === undefined) return
  event.preventDefault()
  select(next, true)
}

const current = computed(() => roles[active.value]!.key)
const points = computed(() => ['p1', 'p2', 'p3'].map(p => t(`audience.tabs.${current.value}.points.${p}`)))
const tasks = computed(() => ['t1', 't2', 't3'].map(p => t(`audience.tabs.${current.value}.tasks.${p}`)))
</script>

<template>
  <section
    id="audience"
    class="bg-paper py-24 sm:py-32"
    aria-labelledby="audience-title"
  >
    <LandingContainer>
      <LandingSectionHeading
        id="audience-title"
        :index="t('audience.index')"
        :eyebrow="t('audience.eyebrow')"
        :title="t('audience.title')"
      />

      <div
        role="tablist"
        :aria-label="t('audience.eyebrow')"
        class="mt-14 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
        @keydown="onKeydown"
      >
        <button
          v-for="(role, i) in roles"
          :id="`audience-tab-${role.key}`"
          :key="role.key"
          ref="tabRefs"
          type="button"
          role="tab"
          :aria-selected="active === i"
          :aria-controls="`audience-panel-${role.key}`"
          :tabindex="active === i ? 0 : -1"
          class="inline-flex min-h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          :class="active === i ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink/75 hover:border-ink/40 hover:text-ink'"
          @click="select(i)"
        >
          <LandingIcon
            :name="role.icon"
            class="size-4"
          />
          {{ t(`audience.tabs.${role.key}.label`) }}
        </button>
      </div>

      <div
        :id="`audience-panel-${current}`"
        :key="current"
        role="tabpanel"
        :aria-labelledby="`audience-tab-${current}`"
        tabindex="0"
        class="mt-8 grid grid-cols-1 gap-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 focus-visible:outline-2 focus-visible:outline-ink sm:p-10 lg:grid-cols-2 lg:gap-16"
      >
        <div class="motion-safe:animate-[fade-up_0.5s_var(--ease-out-expo)]">
          <h3 class="text-2xl font-extrabold tracking-tight text-balance text-ink sm:text-3xl">
            {{ t(`audience.tabs.${current}.title`) }}
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-pretty text-ink/70">
            {{ t(`audience.tabs.${current}.desc`) }}
          </p>
          <LandingCheckList
            :items="points"
            class="mt-8"
          />
        </div>

        <div class="rounded-2xl bg-ink p-3 pb-6 text-white motion-safe:animate-[fade-up_0.6s_var(--ease-out-expo)] sm:p-4 sm:pb-6">
          <LandingPhoto
            :name="`role-${current}`"
            :alt="t(`photos.${current}`)"
            ratio="aspect-[16/9]"
            class="rounded-xl"
          />
          <p class="mt-6 px-3 text-sm font-semibold text-white/60 sm:px-2">
            {{ t('audience.todayLabel') }}
          </p>
          <ul class="mt-4 space-y-3 px-3 sm:px-2">
            <li
              v-for="(task, i) in tasks"
              :key="task"
              class="flex items-start gap-3 rounded-xl bg-white/5 p-4"
            >
              <span
                class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full font-mono text-xs"
                :class="i === 0 ? 'bg-ember-400 text-ink' : 'bg-white/10 text-white/70'"
              >
                {{ i + 1 }}
              </span>
              <span class="text-sm leading-relaxed text-white/85">{{ task }}</span>
            </li>
          </ul>
        </div>
      </div>
    </LandingContainer>
  </section>
</template>
