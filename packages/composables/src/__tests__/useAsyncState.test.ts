import { describe, expect, it, vi } from 'vitest'
import { useAsyncState } from '../useAsyncState'

describe('useAsyncState', () => {
  it('starts with initial state', () => {
    const { data, error, isLoading } = useAsyncState(async () => 'test')

    expect(data.value).toBeNull()
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })

  it('executes and returns data', async () => {
    const { data, error, isLoading, execute } = useAsyncState(async () => 'hello')

    const result = await execute()

    expect(result).toBe('hello')
    expect(data.value).toBe('hello')
    expect(error.value).toBeNull()
    expect(isLoading.value).toBe(false)
  })

  it('handles errors', async () => {
    const { data, error, execute } = useAsyncState(async () => {
      throw new Error('fail')
    })

    const result = await execute()

    expect(result).toBeNull()
    expect(data.value).toBeNull()
    expect(error.value).toBeInstanceOf(Error)
    expect(error.value?.message).toBe('fail')
  })

  it('handles non-Error throws', async () => {
    const { error, execute } = useAsyncState(async () => {
      // eslint-disable-next-line no-throw-literal
      throw 'string error'
    })

    await execute()

    expect(error.value).toBeInstanceOf(Error)
    expect(error.value?.message).toBe('string error')
  })

  it('clears previous error on new execute', async () => {
    let shouldFail = true
    const { data, error, execute } = useAsyncState(async () => {
      if (shouldFail) throw new Error('fail')
      return 'ok'
    })

    await execute()
    expect(error.value).not.toBeNull()

    shouldFail = false
    await execute()
    expect(error.value).toBeNull()
    expect(data.value).toBe('ok')
  })

  it('executes immediately when option is set', async () => {
    const fn = vi.fn().mockResolvedValue('auto')
    useAsyncState(fn, { immediate: true })

    expect(fn).toHaveBeenCalledOnce()
  })
})
