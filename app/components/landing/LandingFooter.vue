<script setup lang="ts">
const { site } = useAppConfig()
const { t } = useI18n()
const year = new Date().getFullYear()

// 只連到頁面裡真的存在的區塊與聯絡信箱，不放還沒有的頁面
const columns = computed(() => [
  {
    title: t('footer.product'),
    links: [
      { label: t('nav.platform'), href: '#platform' },
      { label: t('showcase.items.configure.label'), href: '#showcase-configure' },
      { label: t('showcase.items.routing.label'), href: '#showcase-routing' },
      { label: t('showcase.items.payroll.label'), href: '#showcase-payroll' },
    ],
  },
  {
    title: t('footer.company'),
    links: [
      { label: t('nav.audience'), href: '#audience' },
      { label: t('nav.trust'), href: '#trust' },
      { label: t('steps.eyebrow'), href: '#steps' },
      { label: t('nav.faq'), href: '#faq' },
    ],
  },
  {
    title: t('footer.contact'),
    links: [
      { label: t('nav.bookDemo'), href: '#contact' },
      { label: site.contactEmail, href: `mailto:${site.contactEmail}` },
    ],
  },
])
</script>

<template>
  <footer class="bg-ink pt-4 pb-10 text-white">
    <LandingContainer>
      <div class="grid grid-cols-1 gap-12 border-t border-white/10 pt-16 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <LandingLogo
            variant="light"
            class="h-9"
          />
          <p class="mt-4 max-w-sm text-white/60">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <nav
          class="grid gap-10 sm:grid-cols-3 lg:col-span-7"
          :aria-label="t('footer.product')"
        >
          <div
            v-for="column in columns"
            :key="column.title"
          >
            <p class="text-sm font-semibold text-white/50">
              {{ column.title }}
            </p>
            <ul class="mt-4 space-y-1">
              <li
                v-for="link in column.links"
                :key="link.href"
              >
                <a
                  :href="link.href"
                  class="inline-flex min-h-10 items-center text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <p class="mt-16 text-sm text-white/45">
        © {{ year }} {{ site.productName }}. {{ t('footer.rights') }}
      </p>
    </LandingContainer>
  </footer>
</template>
