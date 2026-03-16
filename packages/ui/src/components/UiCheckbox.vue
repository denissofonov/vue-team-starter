<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

interface Props {
  modelValue?: boolean
  disabled?: boolean
  label?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  label: '',
})

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <div class="ui-checkbox__wrapper">
    <CheckboxRoot
      :checked="modelValue"
      :disabled="disabled"
      class="ui-checkbox"
      @update:checked="$emit('update:modelValue', $event)"
    >
      <CheckboxIndicator class="ui-checkbox__indicator">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M11.5 3.5L5.5 9.5L2.5 6.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>
    <span v-if="label" class="ui-checkbox__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.ui-checkbox__wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
}

.ui-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-neutral-300);
  border-radius: var(--radius-sm);
  background: var(--color-surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  outline: none;
  padding: 0;
}

.ui-checkbox[data-state='checked'] {
  background: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.ui-checkbox:hover:not(:disabled) {
  border-color: var(--color-primary-400);
}

.ui-checkbox:focus-visible {
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.ui-checkbox:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-checkbox__indicator {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-checkbox__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-700);
}
</style>
