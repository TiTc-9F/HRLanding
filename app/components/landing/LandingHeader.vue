<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

// 客戶案例只在開啟示意資料（或之後有真實客戶）時才有，導覽也跟著顯示
const links = computed(() => [
  { label: t('nav.platform'), href: '#platform' },
  { label: t('nav.showcase'), href: '#showcase' },
  ...(site.mockProof ? [{ label: t('nav.customers'), href: '#customers' }] : []),
  { label: t('nav.audience'), href: '#audience' },
  { label: t('nav.trust'), href: '#trust' },
  { label: t('nav.faq'), href: '#faq' },
])

// 浮在頁面上方的膠囊導覽列；手機選單 Esc 關閉，點連結後也關閉
const open = ref(false)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="sticky top-0 z-50 px-3 pt-3 sm:px-4">
    <div class="mx-auto max-w-7xl rounded-full border border-ink/5 bg-white/80 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.15)] backdrop-blur-xl">
      <div class="flex h-14 items-center justify-between gap-4 pr-2 pl-4 sm:pl-5">
        <a
          href="#top"
          class="flex shrink-0 items-center gap-2.5 rounded-full font-display text-lg font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          :aria-label="t('nav.home', { name: site.productName })"
        >
          <LandingLogo class="size-7" />
          {{ site.productName }}
        </a>

        <nav
          class="hidden items-center gap-1 lg:flex"
          :aria-label="t('nav.menu')"
        >
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-mist hover:text-ink focus-visible:outline-2 focus-visible:outline-ink"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <div class="hidden items-center gap-2 sm:flex">
            <LandingLanguageSwitcher />
            <LandingButton
              href="#contact"
              variant="dark"
            >
              {{ t('nav.bookDemo') }}
            </LandingButton>
          </div>
          <button
            type="button"
            class="grid size-11 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-ink lg:hidden"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            :aria-label="open ? t('nav.close') : t('nav.menu')"
            @click="open = !open"
          >
            <LandingIcon
              :name="open ? 'close' : 'menu'"
              class="size-5"
            />
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="open"
      id="mobile-menu"
      class="mx-auto mt-2 max-w-7xl rounded-3xl border border-ink/5 bg-white p-4 shadow-xl lg:hidden"
    >
      <nav class="flex flex-col">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="flex min-h-12 items-center rounded-xl px-3 text-lg font-medium text-ink hover:bg-mist"
          @click="open = false"
        >
          {{ link.label }}
        </a>
      </nav>
      <div class="mt-4 flex flex-col gap-3 sm:hidden">
        <LandingLanguageSwitcher />
        <LandingButton
          href="#contact"
          variant="dark"
          size="lg"
          @click="open = false"
        >
          {{ t('nav.bookDemo') }}
        </LandingButton>
      </div>
    </div>
  </header>
</template>
