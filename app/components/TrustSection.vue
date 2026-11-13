<script setup lang="ts">
import type { IconName } from '~/components/common/AppIcon.vue'

// 安全與權限：左邊說明加一組隨捲動錯開的同心圓（裝飾），右邊四張卡片
const { site } = useAppConfig()
const { t } = useI18n()

const items: { key: string, icon: IconName }[] = [
  { key: 'roles', icon: 'users' },
  { key: 'visibility', icon: 'eye' },
  { key: 'audit', icon: 'file' },
  { key: 'encryption', icon: 'lock' },
]
</script>

<template>
  <section
    id="trust"
    class="py-24 sm:py-32"
    aria-labelledby="trust-title"
  >
    <PageContainer class="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5">
        <SectionHeading
          id="trust-title"
          compact
          :eyebrow="t('trust.eyebrow')"
          :title="t('trust.title')"
          :description="t('trust.description', { name: site.productName })"
        />
        <div
          class="relative mt-12 hidden aspect-square max-w-sm lg:block"
          aria-hidden="true"
        >
          <span
            v-parallax="0.1"
            class="absolute inset-0 rounded-full border border-ink/10"
          />
          <span
            v-parallax="0.04"
            class="absolute inset-[12%] rounded-full border border-ink/15"
          />
          <span
            v-parallax="-0.04"
            class="absolute inset-[24%] rounded-full bg-sage"
          />
          <span
            v-parallax="-0.12"
            class="absolute inset-[36%] grid place-items-center rounded-full bg-ink text-accent"
          >
            <AppIcon
              name="shield"
              class="size-12"
            />
          </span>
        </div>
      </div>

      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:self-center">
        <li
          v-for="(item, i) in items"
          :key="item.key"
          v-reveal="i"
          class="flex flex-col rounded-[1.75rem] bg-white p-7"
        >
          <span class="grid size-12 place-items-center rounded-2xl bg-accent text-ink">
            <AppIcon
              :name="item.icon"
              class="size-6"
            />
          </span>
          <h3 class="mt-10 font-display text-xl font-medium tracking-tight text-ink">
            {{ t(`trust.items.${item.key}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-pretty text-ink/65">
            {{ t(`trust.items.${item.key}.desc`) }}
          </p>
        </li>
      </ul>
    </PageContainer>
  </section>
</template>
