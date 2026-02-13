<script setup lang="ts">
import { Primitive } from 'reka-ui'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  as?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  as: 'button',
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <Primitive
    :as="as"
    :class="['ui-button', `ui-button--${variant}`, `ui-button--${size}`]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="ui-button__loader" aria-hidden="true" />
    <slot />
  </Primitive>
</template>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  line-height: var(--line-height-tight);
}

.ui-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-button--sm {
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-size-sm);
}

.ui-button--md {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-base);
}

.ui-button--lg {
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-lg);
}

.ui-button--primary {
  background: var(--color-primary-600);
  color: white;
}

.ui-button--primary:hover:not(:disabled) {
  background: var(--color-primary-700);
}

.ui-button--secondary {
  background: transparent;
  color: var(--color-neutral-800);
  border-color: var(--color-neutral-300);
}

.ui-button--secondary:hover:not(:disabled) {
  background: var(--color-neutral-100);
}

.ui-button--ghost {
  background: transparent;
  color: var(--color-neutral-700);
}

.ui-button--ghost:hover:not(:disabled) {
  background: var(--color-neutral-100);
}

.ui-button--danger {
  background: var(--color-error);
  color: white;
}

.ui-button--danger:hover:not(:disabled) {
  background: #dc2626;
}

.ui-button__loader {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ui-button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
</style>
