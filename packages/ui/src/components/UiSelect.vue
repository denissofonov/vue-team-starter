<script setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectLabel,
} from 'reka-ui'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Select...',
  disabled: false,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <SelectRoot :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <SelectTrigger class="ui-select__trigger" :disabled="disabled">
      <SelectValue :placeholder="placeholder" />
      <span class="ui-select__icon" aria-hidden="true">&#9662;</span>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent class="ui-select__content" position="popper" :side-offset="4">
        <SelectViewport>
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            class="ui-select__item"
          >
            <SelectItemIndicator class="ui-select__indicator">
              &#10003;
            </SelectItemIndicator>
            <SelectItemText>{{ option.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style>
.ui-select__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  min-width: 180px;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  color: var(--color-neutral-900);
  cursor: pointer;
  transition: border-color var(--transition-fast);
  outline: none;
}

.ui-select__trigger:hover {
  border-color: var(--color-neutral-400);
}

.ui-select__trigger:focus-visible {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.ui-select__trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-select__icon {
  font-size: var(--font-size-xs);
  color: var(--color-neutral-500);
}

.ui-select__content {
  background: var(--color-surface);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-1);
  min-width: var(--reka-select-trigger-width);
  z-index: 1000;
  animation: select-show var(--transition-fast);
}

.ui-select__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  cursor: pointer;
  outline: none;
  transition: background var(--transition-fast);
}

.ui-select__item:hover,
.ui-select__item[data-highlighted] {
  background: var(--color-primary-50);
  color: var(--color-primary-700);
}

.ui-select__item[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-select__indicator {
  width: 16px;
  font-size: var(--font-size-xs);
  color: var(--color-primary-600);
}

@keyframes select-show {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
