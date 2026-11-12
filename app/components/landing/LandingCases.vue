<script setup lang="ts">
// 深度證明：客戶案例卡（具名的人 + 一句引言 + 兩個成效數字），放在產品特色之後、CTA 之前。
// 目前是提案用的示意客戶，site.mockProof 關掉時整區不顯示。照片在框裡做視差。
const { site } = useAppConfig()
const { t } = useI18n()

const cases = [
  { key: 'global', offset: '' },
  { key: 'tech', offset: 'lg:mt-14' },
  { key: 'growth', offset: 'lg:mt-28' },
] as const
</script>

<template>
  <section
    v-if="site.mockProof"
    id="customers"
    class="bg-white py-24 sm:py-32"
    aria-labelledby="customers-title"
  >
    <LandingContainer>
      <div class="flex flex-wrap items-end justify-between gap-6">
        <LandingSectionHeading
          id="customers-title"
          :eyebrow="t('cases.eyebrow')"
          :title="t('cases.title')"
        />
        <span class="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/55">
          {{ t('proof.mockBadge') }}
        </span>
      </div>

      <ul class="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <li
          v-for="item in cases"
          :key="item.key"
          class="flex flex-col overflow-hidden rounded-[1.75rem] bg-paper"
          :class="item.offset"
        >
          <div class="relative aspect-[4/5] overflow-hidden">
            <div
              v-parallax="-0.08"
              class="absolute inset-x-0 -top-[10%] h-[120%]"
            >
              <LandingPhoto
                :name="`scenario-${item.key}`"
                :alt="t(`photos.${item.key}`)"
                ratio="h-full"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div class="absolute inset-x-5 bottom-5 text-white">
              <LandingMockLogo
                :name="t(`cases.items.${item.key}.company`)"
                class="text-xl"
              />
              <p class="mt-1 text-xs text-white/75">
                {{ t(`cases.items.${item.key}.meta`) }}
              </p>
            </div>
          </div>

          <figure class="flex flex-1 flex-col p-7">
            <span
              class="font-display text-5xl leading-none text-accent-strong"
              aria-hidden="true"
            >&ldquo;</span>
            <blockquote class="mt-2 flex-1 font-display text-xl leading-snug font-medium tracking-tight text-pretty text-ink">
              {{ t(`cases.items.${item.key}.quote`) }}
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-3">
              <LandingAvatar
                :name="t(`cases.items.${item.key}.person`)"
                size="md"
              />
              <span>
                <span class="block text-sm font-semibold text-ink">{{ t(`cases.items.${item.key}.person`) }}</span>
                <span class="block text-xs text-ink/55">{{ t(`cases.items.${item.key}.role`) }} · {{ t(`cases.items.${item.key}.company`) }}</span>
              </span>
            </figcaption>
            <dl class="mt-6 grid grid-cols-2 gap-3 border-t border-ink/10 pt-6">
              <div
                v-for="m in ['m1', 'm2']"
                :key="m"
                class="flex flex-col-reverse"
              >
                <dt class="mt-1 text-xs leading-snug text-ink/55">
                  {{ t(`cases.items.${item.key}.${m}l`) }}
                </dt>
                <dd class="font-display text-2xl font-semibold tracking-tight text-ink">
                  {{ t(`cases.items.${item.key}.${m}v`) }}
                </dd>
              </div>
            </dl>
          </figure>
        </li>
      </ul>

      <p class="mt-10 text-sm text-ink/50">
        {{ t('cases.note') }}
      </p>
    </LandingContainer>
  </section>
</template>
