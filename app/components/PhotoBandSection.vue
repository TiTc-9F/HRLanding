<script setup lang="ts">
// 視差大圖：照片比外框高 30%，捲動時比頁面慢，標語則稍微往上快一點，兩層拉開深度
const { t } = useI18n()
</script>

<template>
  <section
    class="px-3 sm:px-4"
    :aria-label="t('peopleBand.quote')"
  >
    <div class="relative mx-auto h-[80vh] min-h-[28rem] max-w-[96rem] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
      <div
        v-parallax="0.18"
        class="absolute inset-x-0 -top-[15%] h-[130%]"
      >
        <PersonPhoto
          name="people-band"
          :alt="t('photos.band')"
          ratio="h-full"
        />
      </div>
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
        aria-hidden="true"
      />
      <div class="absolute inset-x-0 bottom-0">
        <PageContainer class="pb-10 sm:pb-16">
          <p
            v-parallax="-0.08"
            class="max-w-4xl font-display text-[clamp(1.9rem,4.5vw,4rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance text-white"
          >
            {{ t('peopleBand.quote') }}
          </p>
        </PageContainer>
      </div>
    </div>
  </section>
</template>
