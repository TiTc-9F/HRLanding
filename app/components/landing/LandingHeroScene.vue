<script setup lang="ts">
// 首屏右側的分層畫面：陶土色底板與萊姆黃圓形在最後面、人物照片在中間、三張產品小卡在最前面。
// 每一層用 v-parallax 以不同速度移動，捲動時產生深度；小卡另外有輕微的待機漂浮。
// 進度卡會循環播放「第一關完成 → 第二關進行中」，減少動態時直接停在這個畫面。
const { t } = useI18n()

const reviewCard = ref<HTMLElement>()
const { step } = useStepLoop(reviewCard, 2, { interval: 1100, hold: 3200 })
const bars = computed(() => [step.value >= 1 ? 100 : 0, step.value >= 2 ? 62 : 0, 0])
</script>

<template>
  <div
    class="relative mx-auto w-full max-w-xl lg:max-w-none"
    aria-hidden="true"
  >
    <!-- 最後層：萊姆黃圓形，往反方向慢慢移動（手機上會被推到按鈕上，所以不顯示） -->
    <div
      v-parallax="0.12"
      class="absolute -top-10 -right-6 hidden size-56 rounded-full bg-accent sm:block"
    />

    <!-- 中間層：陶土色底板裡的人物照片 -->
    <div
      v-parallax="-0.05"
      class="relative rounded-[2rem] bg-clay p-3 sm:p-4"
    >
      <LandingPhoto
        name="hero-one-on-one"
        :alt="t('photos.hero')"
        ratio="aspect-[4/5] sm:aspect-[5/6]"
        class="rounded-[1.5rem]"
        eager
      />
    </div>

    <!-- 最前層：三張小卡，速度各不同。
         進度卡放在框的左上角外側、插圖人物頭頂上方的留白，視差幅度較小，捲動時才不會蓋到人臉 -->
    <div
      ref="reviewCard"
      v-parallax="-0.1"
      class="absolute -top-8 -left-3 w-52 sm:-top-10 sm:-left-12 sm:w-60"
    >
      <div class="rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.35)] motion-safe:animate-[float-y_6s_ease-in-out_infinite]">
        <p class="text-xs font-medium text-ink/55">
          {{ t('heroVisual.reviewTitle') }}
        </p>
        <div class="mt-3 space-y-2.5">
          <div
            v-for="(w, i) in bars"
            :key="i"
            class="flex items-center gap-2"
          >
            <span
              class="grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-semibold transition-colors duration-500"
              :class="w === 100 ? 'bg-ink text-accent' : 'bg-mist text-ink/60'"
            >{{ i + 1 }}</span>
            <span class="h-1.5 flex-1 overflow-hidden rounded-full bg-mist">
              <span
                class="block h-full rounded-full bg-ink transition-[width] duration-1000 ease-out-expo"
                :style="{ width: `${w}%` }"
              />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-parallax="-0.32"
      class="absolute -right-2 bottom-[22%] w-56 sm:-right-8 sm:w-60"
    >
      <div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.35)] motion-safe:animate-[float-y_7s_ease-in-out_infinite_-2s]">
        <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-sage text-ink">
          <LandingIcon
            name="wifi"
            class="size-5"
          />
        </span>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-ink">
            {{ t('heroVisual.clockIn') }} 08:57
          </p>
          <p class="truncate text-xs text-ink/55">
            {{ t('heroVisual.clockInStatus') }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-parallax="-0.16"
      class="absolute bottom-[5%] left-[8%] w-60 sm:w-64"
    >
      <div class="flex items-center gap-3 rounded-2xl bg-ink p-4 text-white shadow-[0_20px_50px_-20px_rgb(0_0_0/0.5)] motion-safe:animate-[float-y_8s_ease-in-out_infinite_-4s]">
        <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-ink">
          <LandingIcon
            name="trend"
            class="size-5"
          />
        </span>
        <div class="min-w-0">
          <p class="text-sm font-semibold">
            {{ t('heroVisual.promotion') }}
          </p>
          <p class="text-xs text-white/65">
            {{ t('heroVisual.promotionDetail') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
