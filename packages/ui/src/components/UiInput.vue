<script setup lang="ts">
import { Label } from 'reka-ui'
import { useId } from 'vue'

interface Props {
  modelValue?: string
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'number' | 'search'
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '',
  label: '',
  error: '',
  disabled: false,
  type: 'text',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = useId()
const errorId = useId()
</script>

<template>
  <div class="ui-input" :class="{ 'ui-input--error': error, 'ui-input--disabled': disabled }">
    <Label v-if="label" :for="inputId" class="ui-input__label">{{ label }}</Label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="!!error"
      :aria-describedby="error ? errorId : undefined"
      class="ui-input__field"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" :id="errorId" class="ui-input__error" role="alert">{{ error }}</span>
  </div>
</template>

<style scoped>
.ui-input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.ui-input__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
}

.ui-input__field {
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  color: var(--color-neutral-900);
  background: var(--color-surface);
  transition: border-color var(--transition-fast);
  outline: none;
}

.ui-input__field:focus-visible {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.ui-input--error .ui-input__field {
  border-color: var(--color-error);
}

.ui-input--error .ui-input__field:focus-visible {
  box-shadow: 0 0 0 3px #fee2e2;
}

.ui-input__error {
  font-size: var(--font-size-xs);
  color: var(--color-error);
}

.ui-input--disabled .ui-input__field {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--color-neutral-100);
}
</style>
