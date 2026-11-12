// 循環播放的示意動畫（產品畫面一步一步完成）：元素進到畫面時，step 從 0 每隔 interval 毫秒加 1，
// 到 total 後停 hold 毫秒，再從 0 重來。離開畫面、分頁切到背景、滑鼠移上去時暫停。
// 伺服器端與開啟「減少動態」時一律是 total（完成後的畫面），內容不會因為沒有動畫而看不到。
import type { Ref } from 'vue'

export function useStepLoop(
  target: Ref<HTMLElement | null | undefined>,
  total: number,
  { interval = 900, hold = 2600 } = {},
) {
  const step = ref(total)
  let timer: ReturnType<typeof setTimeout> | undefined
  let visible = false
  let hovered = false
  let observer: IntersectionObserver | undefined

  function stop() {
    clearTimeout(timer)
    timer = undefined
  }

  function tick() {
    timer = setTimeout(() => {
      step.value = step.value >= total ? 0 : step.value + 1
      tick()
    }, step.value >= total ? hold : interval)
  }

  function update() {
    const run = visible && !hovered && !document.hidden
    if (run && !timer) tick()
    else if (!run) stop()
  }

  function onEnter() {
    hovered = true
    update()
  }

  function onLeave() {
    hovered = false
    update()
  }

  onMounted(() => {
    const el = target.value
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // 還在畫面下方的從空白開始；已經看得到的先停在完成畫面，等下一輪再重播，避免一載入就閃一下
    if (el.getBoundingClientRect().top > window.innerHeight) step.value = 0
    observer = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting
      update()
    }, { threshold: 0.3 })
    observer.observe(el)
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', update)
  })

  onBeforeUnmount(() => {
    stop()
    observer?.disconnect()
    target.value?.removeEventListener('pointerenter', onEnter)
    target.value?.removeEventListener('pointerleave', onLeave)
    document.removeEventListener('visibilitychange', update)
  })

  return { step }
}
