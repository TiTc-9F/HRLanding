<script setup lang="ts">
// 跑馬燈後面的一張寬幅團隊照，配一句標語：先讓人看到「人」，再進入平台介紹
const { t } = useI18n()
</script>

<template>
  <section
    class="bg-paper pt-16 sm:pt-24"
    :aria-label="t('peopleBand.quote')"
  >
    <LandingContainer>
      <div class="relative overflow-hidden rounded-3xl">
        <LandingPhoto
          name="people-band"
          :alt="t('photos.band')"
          ratio="aspect-[4/5] sm:aspect-[21/9]"
        />
        <!-- 底部加一層漸暗，照片亮暗都讀得到字 -->
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          aria-hidden="true"
        />
        <p
          v-reveal
          class="absolute inset-x-6 bottom-6 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-white sm:inset-x-10 sm:bottom-10 sm:text-5xl"
        >
          {{ t('peopleBand.quote') }}
        </p>
      </div>
    </LandingContainer>
  </section>
</template>
