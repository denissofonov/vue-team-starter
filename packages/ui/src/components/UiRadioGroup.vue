<script setup lang="ts">
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'reka-ui'

interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  options: RadioOption[]
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
  orientation: 'vertical',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <RadioGroupRoot
    :model-value="modelValue"
    :disabled="disabled"
    :orientation="orientation"
    :class="['ui-radio-group', `ui-radio-group--${orientation}`]"
    @update:model-value="$emit('update:modelValue', String($event))"
  >
    <label
      v-for="option in options"
      :key="option.value"
      class="ui-radio-group__item"
    >
      <RadioGroupItem
        :value="option.value"
        :disabled="option.disabled"
        class="ui-radio-group__radio"
      >
        <RadioGroupIndicator class="ui-radio-group__indicator" />
      </RadioGroupItem>
      <span class="ui-radio-group__label">{{ option.label }}</span>
    </label>
  </RadioGroupRoot>
</template>

<style scoped>
.ui-radio-group {
  display: flex;
  gap: var(--spacing-3);
}

.ui-radio-group--vertical {
  flex-direction: column;
}

.ui-radio-group--horizontal {
  flex-direction: row;
}

.ui-radio-group__item {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
}

.ui-radio-group__radio {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-neutral-300);
  border-radius: var(--radius-full);
  background: var(--color-surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  outline: none;
  padding: 0;
}

.ui-radio-group__radio[data-state='checked'] {
  border-color: var(--color-primary-600);
}

.ui-radio-group__radio:hover:not(:disabled) {
  border-color: var(--color-primary-400);
}

.ui-radio-group__radio:focus-visible {
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.ui-radio-group__radio:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-radio-group__indicator {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--color-primary-600);
}

.ui-radio-group__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-700);
}
</style>
