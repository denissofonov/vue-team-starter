<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'

interface Props {
  side?: 'top' | 'right' | 'bottom' | 'left'
}

withDefaults(defineProps<Props>(), {
  side: 'bottom',
})
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="ui-popover" :side="side" :side-offset="6">
        <slot />
        <PopoverClose class="ui-popover__close" aria-label="Close"> &times; </PopoverClose>
        <PopoverArrow class="ui-popover__arrow" :width="12" :height="6" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style>
.ui-popover {
  background: var(--color-surface-overlay);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-4);
  min-width: 220px;
  max-width: 320px;
  z-index: 1000;
  animation: popover-show var(--transition-fast);
  position: relative;
  font-family: var(--font-family-base);
}

.ui-popover__close {
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-2);
  background: none;
  border: none;
  font-size: var(--font-size-lg);
  color: var(--color-neutral-400);
  cursor: pointer;
  padding: var(--spacing-1);
  line-height: 1;
  border-radius: var(--radius-sm);
}

.ui-popover__close:hover {
  color: var(--color-neutral-700);
  background: var(--color-neutral-100);
}

.ui-popover__arrow {
  fill: var(--color-surface-overlay);
  stroke: var(--color-neutral-200);
  stroke-width: 1;
}

@keyframes popover-show {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
