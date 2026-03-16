<script setup lang="ts">
interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
})
</script>

<template>
  <div class="ui-card" :class="[`ui-card--padding-${padding}`]">
    <div v-if="$slots.header" class="ui-card__header">
      <slot name="header" />
    </div>
    <div class="ui-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ui-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.ui-card {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.ui-card--padding-none .ui-card__body {
  padding: 0;
}

.ui-card--padding-sm .ui-card__body {
  padding: var(--spacing-3);
}

.ui-card--padding-md .ui-card__body {
  padding: var(--spacing-4);
}

.ui-card--padding-lg .ui-card__body {
  padding: var(--spacing-6);
}

.ui-card__header {
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-neutral-200);
  font-weight: var(--font-weight-semibold);
}

.ui-card__footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--color-neutral-200);
}
</style>
