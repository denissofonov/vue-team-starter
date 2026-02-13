import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import UiButton from '../UiButton.vue'

describe('UiButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(UiButton, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('applies variant class', () => {
    const wrapper = mount(UiButton, {
      props: { variant: 'danger' },
    })
    expect(wrapper.classes()).toContain('ui-button--danger')
  })

  it('applies size class', () => {
    const wrapper = mount(UiButton, {
      props: { size: 'lg' },
    })
    expect(wrapper.classes()).toContain('ui-button--lg')
  })

  it('disables button when disabled prop is true', () => {
    const wrapper = mount(UiButton, {
      props: { disabled: true },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('disables button when loading', () => {
    const wrapper = mount(UiButton, {
      props: { loading: true },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('.ui-button__loader').exists()).toBe(true)
  })

  it('emits click event', async () => {
    const wrapper = mount(UiButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
