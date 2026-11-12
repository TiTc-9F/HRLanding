// v-parallax：圖層隨捲動以不同速度移動，做出前後景的深度。
// 值是速度（畫面高度的比例）：-0.1 代表整段經過時往上多移動 10% 畫面高；正數往下。
// 量的是父元素的位置（不是自己），避免位移影響量測。只動 transform，不動版面。
// 開啟減少動態時完全不處理，圖層停在原位。
import type { Directive } from 'vue'

type Layer = { el: HTMLElement, speed: number }

const layers = new Set<Layer>()
let frame = 0
let listening = false

function update() {
  frame = 0
  const vh = window.innerHeight
  for (const layer of layers) {
    const parent = layer.el.parentElement
    if (!parent) continue
    const rect = parent.getBoundingClientRect()
    if (rect.bottom < -vh || rect.top > vh * 2) continue
    // 父元素中心對齊畫面中心時位移為 0，往上下兩側線性增加
    const offset = ((rect.top + rect.height / 2) - vh / 2) / vh
    layer.el.style.transform = `translate3d(0, ${(-offset * layer.speed * vh).toFixed(1)}px, 0)`
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update)
}

function listen() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
}

const registry = new WeakMap<HTMLElement, Layer>()

const parallax: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const layer = { el, speed: binding.value ?? -0.1 }
    el.style.willChange = 'transform'
    layers.add(layer)
    registry.set(el, layer)
    listen()
    schedule()
  },
  updated(el, binding) {
    const layer = registry.get(el)
    if (layer) layer.speed = binding.value ?? -0.1
  },
  unmounted(el) {
    const layer = registry.get(el)
    if (layer) layers.delete(layer)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', parallax)
})
