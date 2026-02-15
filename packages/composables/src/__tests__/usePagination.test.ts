import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { usePagination } from '../usePagination'

describe('usePagination', () => {
  it('initializes with defaults', () => {
    const total = ref(100)
    const { page, totalPages, isFirst, isLast } = usePagination({ total })

    expect(page.value).toBe(1)
    expect(totalPages.value).toBe(10)
    expect(isFirst.value).toBe(true)
    expect(isLast.value).toBe(false)
  })

  it('navigates to next page', () => {
    const total = ref(30)
    const { page, next } = usePagination({ total, pageSize: 10 })

    next()
    expect(page.value).toBe(2)

    next()
    expect(page.value).toBe(3)

    next() // should not go beyond last
    expect(page.value).toBe(3)
  })

  it('navigates to previous page', () => {
    const total = ref(30)
    const { page, prev, next } = usePagination({ total, pageSize: 10 })

    prev() // should not go below 1
    expect(page.value).toBe(1)

    next()
    next()
    prev()
    expect(page.value).toBe(2)
  })

  it('goes to specific page', () => {
    const total = ref(50)
    const { page, goTo } = usePagination({ total, pageSize: 10 })

    goTo(3)
    expect(page.value).toBe(3)

    goTo(100) // clamps to max
    expect(page.value).toBe(5)

    goTo(0) // clamps to min
    expect(page.value).toBe(1)
  })

  it('computes offset and range', () => {
    const total = ref(25)
    const { offset, range, goTo } = usePagination({ total, pageSize: 10 })

    expect(offset.value).toBe(0)
    expect(range.value).toEqual({ start: 0, end: 10 })

    goTo(3)
    expect(offset.value).toBe(20)
    expect(range.value).toEqual({ start: 20, end: 25 })
  })

  it('reacts to total changes', () => {
    const total = ref(100)
    const { totalPages, goTo, page } = usePagination({ total, pageSize: 10 })

    goTo(10)
    expect(page.value).toBe(10)

    total.value = 50
    expect(totalPages.value).toBe(5)
  })
})
