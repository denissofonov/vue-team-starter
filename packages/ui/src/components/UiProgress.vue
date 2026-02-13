<script setup lang="ts">
import { ProgressRoot, ProgressIndicator } from 'reka-ui'

interface Props {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'warning' | 'error'
}

withDefaults(defineProps<Props>(), {
  max: 100,
  variant: 'default',
})
</script>

<template>
  <ProgressRoot
    :model-value="value"
    :max="max"
    class="ui-progress"
    :class="`ui-progress--${variant}`"
  >
    <ProgressIndicator
      class="ui-progress__indicator"
      :style="{ width: `${(value / max) * 100}%` }"
    />
  </ProgressRoot>
</template>

<style scoped>
.ui-progress {
  width: 100%;
  height: 8px;
  background: var(--color-neutral-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.ui-progress__indicator {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}

.ui-progress--default .ui-progress__indicator {
  background: var(--color-primary-600);
}

.ui-progress--success .ui-progress__indicator {
  background: var(--color-success);
}

.ui-progress--warning .ui-progress__indicator {
  background: var(--color-warning);
}

.ui-progress--error .ui-progress__indicator {
  background: var(--color-error);
}
</style>
