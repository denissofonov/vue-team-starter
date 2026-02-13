import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import UiInput from '../UiInput.vue'

describe('UiInput', () => {
  it('renders label when provided', () => {
    const wrapper = mount(UiInput, {
      props: { label: 'Email' },
    })
    expect(wrapper.find('.ui-input__label').text()).toBe('Email')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(UiInput)
    const input = wrapper.find('input')
    await input.setValue('hello')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hello'])
  })

  it('shows error message', () => {
    const wrapper = mount(UiInput, {
      props: { error: 'Required field' },
    })
    expect(wrapper.find('.ui-input__error').text()).toBe('Required field')
    expect(wrapper.classes()).toContain('ui-input--error')
  })

  it('disables input', () => {
    const wrapper = mount(UiInput, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })
})
