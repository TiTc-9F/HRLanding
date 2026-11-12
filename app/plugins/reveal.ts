// v-reveal：捲動到畫面時淡入。值是第幾個（用來錯開時間），例如 v-reveal="2"
// 伺服器端與預先產生的 HTML 不加任何 class，內容一律可見；
// 瀏覽器端只處理「還在畫面下方」的元素，避免已經看到的內容閃一下。
import type { Directive } from 'vue'

const STAGGER_MS = 80

let observer: IntersectionObserver | undefined

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  return observer
}

const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    el.style.setProperty('--reveal-delay', `${(binding.value ?? 0) * STAGGER_MS}ms`)
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
