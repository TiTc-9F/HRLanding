<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()

const links = computed(() => [
  { label: t('nav.platform'), href: '#platform' },
  { label: t('nav.showcase'), href: '#showcase' },
  { label: t('nav.audience'), href: '#audience' },
  { label: t('nav.trust'), href: '#trust' },
  { label: t('nav.faq'), href: '#faq' },
])

// 手機選單：Esc 關閉，點連結後也關閉
const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-colors duration-300"
    :class="scrolled || open ? 'border-ink/10 bg-paper/85 backdrop-blur-xl' : 'border-transparent bg-paper/0'"
  >
    <LandingContainer class="flex h-16 items-center justify-between gap-4">
      <a
        href="#top"
        class="flex shrink-0 items-center gap-2.5 rounded-lg font-extrabold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        :aria-label="t('nav.home', { name: site.productName })"
      >
        <LandingLogo class="size-8" />
        <span class="text-lg">{{ site.productName }}</span>
      </a>

      <nav
        class="hidden items-center gap-1 lg:flex"
        :aria-label="t('nav.menu')"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-ink"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <!-- 手機寬度放不下語言選單與預約按鈕，改放在選單裡 -->
        <div class="hidden items-center gap-2 sm:flex">
          <LandingLanguageSwitcher />
          <LandingButton href="#contact">
            {{ t('nav.bookDemo') }}
          </LandingButton>
        </div>
        <button
          type="button"
          class="grid size-11 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-ink lg:hidden"
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
    </LandingContainer>

    <div
      v-show="open"
      id="mobile-menu"
      class="border-t border-ink/10 lg:hidden"
    >
      <LandingContainer
        as="nav"
        class="flex flex-col py-4"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="flex min-h-12 items-center border-b border-ink/5 text-lg font-semibold text-ink"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <div class="mt-5 flex flex-col gap-3 sm:hidden">
          <LandingLanguageSwitcher />
          <LandingButton
            href="#contact"
            size="lg"
            @click="open = false"
          >
            {{ t('nav.bookDemo') }}
          </LandingButton>
        </div>
      </LandingContainer>
    </div>
  </header>
</template>
