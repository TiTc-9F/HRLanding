export function useCounter(initial = 0) {
  const count = ref<number>(initial)
  const increment = (): void => {
    count.value++
  }
  const reset = (): void => {
    count.value = initial
  }
  return { count, increment, reset }
}
