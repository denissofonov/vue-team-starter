import { ref, shallowRef } from 'vue'
import type { Ref, ShallowRef } from 'vue'

interface UseAsyncStateReturn<T> {
  data: ShallowRef<T | null>
  error: ShallowRef<Error | null>
  isLoading: Ref<boolean>
  execute: (...args: unknown[]) => Promise<T | null>
}

export function useAsyncState<T>(
  fn: (...args: unknown[]) => Promise<T>,
  options: { immediate?: boolean } = {},
): UseAsyncStateReturn<T> {
  const data = shallowRef<T | null>(null)
  const error = shallowRef<Error | null>(null)
  const isLoading = ref(false)

  async function execute(...args: unknown[]): Promise<T | null> {
    isLoading.value = true
    error.value = null

    try {
      const result = await fn(...args)
      data.value = result
      return result
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
      return null
    } finally {
      isLoading.value = false
    }
  }

  if (options.immediate) {
    execute()
  }

  return { data, error, isLoading, execute }
}
