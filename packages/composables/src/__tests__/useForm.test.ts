import { describe, expect, it } from 'vitest'
import { email, minLength, required, useForm } from '../useForm'

describe('useForm', () => {
  it('initializes with default values', () => {
    const { values } = useForm({
      name: { initial: 'John' },
      email: { initial: '' },
    })
    expect(values.value).toEqual({ name: 'John', email: '' })
  })

  it('validates required fields', () => {
    const { fields, validate } = useForm({
      name: { initial: '', rules: [required()] },
    })

    expect(validate()).toBe(false)
    expect(fields.name.error).toBe('Required')
  })

  it('passes validation with valid data', () => {
    const { fields, validate } = useForm({
      name: { initial: 'John', rules: [required()] },
    })

    expect(validate()).toBe(true)
    expect(fields.name.error).toBe('')
  })

  it('validates multiple rules in order', () => {
    const { fields, validate } = useForm({
      name: { initial: 'ab', rules: [required(), minLength(3)] },
    })

    expect(validate()).toBe(false)
    expect(fields.name.error).toBe('Minimum 3 characters')
  })

  it('validates email format', () => {
    const { fields, validate } = useForm({
      email: { initial: 'not-an-email', rules: [email()] },
    })

    expect(validate()).toBe(false)
    expect(fields.email.error).toBe('Invalid email')
  })

  it('resets form to initial values', () => {
    const { fields, reset } = useForm({
      name: { initial: 'John', rules: [required()] },
    })

    fields.name.value = 'Jane'
    fields.name.touched = true
    fields.name.error = 'some error'

    reset()

    expect(fields.name.value).toBe('John')
    expect(fields.name.touched).toBe(false)
    expect(fields.name.error).toBe('')
  })

  it('computes isValid reactively', () => {
    const { fields, isValid } = useForm({
      name: { initial: '', rules: [required()] },
    })

    expect(isValid.value).toBe(false)

    fields.name.value = 'John'
    expect(isValid.value).toBe(true)
  })

  it('touches individual field and validates it', () => {
    const { fields, touch } = useForm({
      name: { initial: '', rules: [required()] },
      email: { initial: '', rules: [required()] },
    })

    touch('name')

    expect(fields.name.touched).toBe(true)
    expect(fields.name.error).toBe('Required')
    expect(fields.email.touched).toBe(false)
    expect(fields.email.error).toBe('')
  })
})
