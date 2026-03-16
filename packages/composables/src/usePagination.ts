import type { Ref } from 'vue'
import { computed, ref } from 'vue'

interface UsePaginationOptions {
  total: Ref<number>
  pageSize?: number
  initialPage?: number
}

export function usePagination(options: UsePaginationOptions) {
  const page = ref(options.initialPage ?? 1)
  const pageSize = ref(options.pageSize ?? 10)

  const totalPages = computed(() => Math.max(1, Math.ceil(options.total.value / pageSize.value)))

  const isFirst = computed(() => page.value <= 1)
  const isLast = computed(() => page.value >= totalPages.value)

  const offset = computed(() => (page.value - 1) * pageSize.value)

  const range = computed(() => {
    const start = offset.value
    const end = Math.min(start + pageSize.value, options.total.value)
    return { start, end }
  })

  function next() {
    if (!isLast.value) page.value++
  }

  function prev() {
    if (!isFirst.value) page.value--
  }

  function goTo(p: number) {
    page.value = Math.max(1, Math.min(p, totalPages.value))
  }

  return { page, pageSize, totalPages, isFirst, isLast, offset, range, next, prev, goTo }
}
