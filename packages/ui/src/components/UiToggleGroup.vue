<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'

interface ToggleOption {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  options: ToggleOption[]
  type?: 'single' | 'multiple'
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'single',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <ToggleGroupRoot
    :type="type"
    :model-value="modelValue"
    class="ui-toggle-group"
    @update:model-value="$emit('update:modelValue', String($event ?? ''))"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
      class="ui-toggle-group__item"
    >
      {{ option.label }}
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>

<style scoped>
.ui-toggle-group {
  display: inline-flex;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.ui-toggle-group__item {
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-surface);
  border: none;
  border-right: 1px solid var(--color-neutral-200);
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-600);
  cursor: pointer;
  outline: none;
  transition: all var(--transition-fast);
}

.ui-toggle-group__item:last-child {
  border-right: none;
}

.ui-toggle-group__item:hover {
  background: var(--color-neutral-50);
}

.ui-toggle-group__item[data-state='on'] {
  background: var(--color-primary-50);
  color: var(--color-primary-700);
}

.ui-toggle-group__item:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}

.ui-toggle-group__item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
