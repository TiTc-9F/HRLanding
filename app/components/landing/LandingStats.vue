<script setup lang="ts">
const { t } = useI18n()

// TODO: 替換成公司實際數據
const stats = computed(() => [
  { value: '500+', label: t('stats.customers') },
  { value: '80%', label: t('stats.timeSaved') },
  { value: '99.9%', label: t('stats.uptime') },
  { value: t('stats.onboardingValue'), label: t('stats.onboarding') },
])
</script>

<template>
  <section class="bg-brand-700 py-16 text-white">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <dl class="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col-reverse"
        >
          <dt class="mt-2 text-brand-100">
            {{ stat.label }}
          </dt>
          <dd class="text-4xl font-bold tracking-tight">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
      <p class="mt-8 text-center text-xs text-brand-200">
        {{ t('stats.note') }}
      </p>
    </div>
  </section>
</template>
