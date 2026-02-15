import { reactive, computed } from 'vue'

type ValidationRule<T = string> = (value: T) => string | true
type FormFields = Record<string, unknown>

interface FieldState {
  value: unknown
  error: string
  touched: boolean
  rules: ValidationRule<any>[]
}

export function useForm<T extends FormFields>(config: {
  [K in keyof T]: { initial: T[K]; rules?: ValidationRule<T[K]>[] }
}) {
  const fields = reactive<Record<string, FieldState>>({})

  for (const [key, field] of Object.entries(config)) {
    fields[key] = {
      value: field.initial,
      error: '',
      touched: false,
      rules: field.rules ?? [],
    }
  }

  function validate(fieldName?: string): boolean {
    const keys = fieldName ? [fieldName] : Object.keys(fields)
    let valid = true

    for (const key of keys) {
      const field = fields[key]
      field.touched = true
      field.error = ''

      for (const rule of field.rules) {
        const result = rule(field.value)
        if (result !== true) {
          field.error = result
          valid = false
          break
        }
      }
    }

    return valid
  }

  function touch(fieldName: string) {
    if (fields[fieldName]) {
      fields[fieldName].touched = true
      validate(fieldName)
    }
  }

  function reset() {
    for (const [key, field] of Object.entries(config)) {
      fields[key].value = field.initial
      fields[key].error = ''
      fields[key].touched = false
    }
  }

  const isValid = computed(() => {
    for (const field of Object.values(fields)) {
      for (const rule of field.rules) {
        if (rule(field.value) !== true) return false
      }
    }
    return true
  })

  const values = computed(() => {
    const result = {} as T
    for (const key of Object.keys(fields)) {
      (result as any)[key] = fields[key].value
    }
    return result
  })

  return { fields, validate, touch, reset, isValid, values }
}

// Common validation rules
export const required = (msg = 'Required'): ValidationRule<string> =>
  (v) => (v && v.trim().length > 0) || msg

export const minLength = (min: number, msg?: string): ValidationRule<string> =>
  (v) => (v && v.length >= min) || msg || `Minimum ${min} characters`

export const maxLength = (max: number, msg?: string): ValidationRule<string> =>
  (v) => (!v || v.length <= max) || msg || `Maximum ${max} characters`

export const pattern = (regex: RegExp, msg = 'Invalid format'): ValidationRule<string> =>
  (v) => regex.test(v) || msg

export const email = (msg = 'Invalid email'): ValidationRule<string> =>
  pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg)
