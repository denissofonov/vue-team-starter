<script setup lang="ts">
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})
</script>

<template>
  <span class="ui-badge" :class="[`ui-badge--${variant}`, `ui-badge--${size}`]">
    <slot />
  </span>
</template>

<style scoped>
.ui-badge {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
}

.ui-badge--sm {
  padding: 0 var(--spacing-2);
  font-size: var(--font-size-xs);
}

.ui-badge--md {
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-size-sm);
}

.ui-badge--default {
  background: var(--color-neutral-100);
  color: var(--color-neutral-700);
}

.ui-badge--success {
  background: #dcfce7;
  color: #166534;
}

.ui-badge--warning {
  background: #fef3c7;
  color: #92400e;
}

.ui-badge--error {
  background: #fee2e2;
  color: #991b1b;
}

.ui-badge--info {
  background: #dbeafe;
  color: #1e40af;
}
</style>
