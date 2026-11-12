// 捲動進度：回傳 0～1 的 progress，給視差、固定捲動（pin）、逐字亮起等效果用。
// - through：元素從畫面底部進來到從頂部離開（一般視差）
// - pin：元素頂端貼到畫面頂端起，到元素底端貼到畫面底端止（外層很高、內層 sticky 的區塊）
// 使用者開啟「減少動態」時 enabled 為 false，元件應直接顯示最終畫面、不套用任何位移。
import type { Ref } from 'vue'

export function useScrollProgress(target: Ref<HTMLElement | null | undefined>, mode: 'through' | 'pin' = 'through') {
  const progress = ref(0)
  const enabled = ref(false)
  let frame = 0

  function measure() {
    frame = 0
    const el = target.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    let value: number
    if (mode === 'pin') {
      const distance = rect.height - vh
      value = distance > 0 ? -rect.top / distance : 0
    }
    else {
      value = (vh - rect.top) / (vh + rect.height)
    }
    progress.value = Math.min(1, Math.max(0, value))
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(measure)
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    enabled.value = true
    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (frame) cancelAnimationFrame(frame)
  })

  return { progress, enabled }
}
