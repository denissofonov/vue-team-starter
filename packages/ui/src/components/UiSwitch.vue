<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'

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
  <div class="ui-switch__wrapper">
    <SwitchRoot
      :checked="modelValue"
      :disabled="disabled"
      class="ui-switch"
      @update:checked="$emit('update:modelValue', $event)"
    >
      <SwitchThumb class="ui-switch__thumb" />
    </SwitchRoot>
    <span v-if="label" class="ui-switch__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.ui-switch__wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
}

.ui-switch {
  width: 40px;
  height: 22px;
  background: var(--color-neutral-300);
  border-radius: var(--radius-full);
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  transition: background var(--transition-fast);
  outline: none;
  display: flex;
  align-items: center;
}

.ui-switch[data-state='checked'] {
  background: var(--color-primary-600);
}

.ui-switch:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-switch:focus-visible {
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.ui-switch__thumb {
  display: block;
  width: 18px;
  height: 18px;
  background: var(--color-surface);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
  transform: translateX(2px);
}

.ui-switch[data-state='checked'] .ui-switch__thumb {
  transform: translateX(20px);
}

.ui-switch__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-700);
}
</style>
