<script setup lang="ts">
// 區塊標題：小標、大標與說明。center 置中；dark 用在深色區塊；compact 給左右分欄的窄欄（大標最大到 5xl）
withDefaults(defineProps<{
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
  center?: boolean
  compact?: boolean
  id?: string
}>(), { description: undefined, dark: false, center: false, compact: false, id: undefined })
</script>

<template>
  <div :class="center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <LandingEyebrow
      :label="eyebrow"
      :dark="dark"
      :class="center ? 'justify-center' : ''"
    />
    <h2
      :id="id"
      class="mt-5 font-display text-4xl leading-[1.08] font-medium tracking-[-0.03em] text-balance sm:text-5xl"
      :class="[dark ? 'text-white' : 'text-ink', compact ? '' : 'lg:text-6xl']"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-6 text-lg leading-relaxed text-pretty"
      :class="[dark ? 'text-white/70' : 'text-ink/65', center ? 'mx-auto max-w-2xl' : 'max-w-2xl']"
    >
      {{ description }}
    </p>
  </div>
</template>
