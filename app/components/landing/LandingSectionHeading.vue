<script setup lang="ts">
// 區塊標題：編號、小標、大標與說明。
// 預設是寬版（桌機左欄小標、右欄大標）；stacked 是上下排列，給左右分欄的區塊用。dark 用在深色區塊
withDefaults(defineProps<{
  index?: string
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
  stacked?: boolean
  id?: string
}>(), { index: undefined, description: undefined, dark: false, stacked: false, id: undefined })
</script>

<template>
  <div :class="stacked ? '' : 'grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10'">
    <LandingEyebrow
      :index="index"
      :label="eyebrow"
      :dark="dark"
      :class="stacked ? '' : 'lg:col-span-3 lg:pt-3'"
    />
    <div :class="stacked ? 'mt-6' : 'lg:col-span-9'">
      <h2
        :id="id"
        class="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl"
        :class="[dark ? 'text-white' : 'text-ink', stacked ? '' : 'lg:text-6xl']"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-6 max-w-2xl text-lg leading-relaxed text-pretty"
        :class="dark ? 'text-white/70' : 'text-ink/65'"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
