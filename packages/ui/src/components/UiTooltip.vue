<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger } from 'reka-ui'

interface Props {
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  delayDuration?: number
}

withDefaults(defineProps<Props>(), {
  side: 'top',
  delayDuration: 300,
})
</script>

<template>
  <TooltipRoot :delay-duration="delayDuration">
    <TooltipTrigger as-child>
      <slot />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent class="ui-tooltip" :side="side" :side-offset="6">
        {{ content }}
        <TooltipArrow class="ui-tooltip__arrow" :width="8" :height="4" />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>

<style>
.ui-tooltip {
  background: var(--color-neutral-800);
  color: white;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-md);
  line-height: var(--line-height-tight);
  max-width: 240px;
  z-index: 1100;
  animation: tooltip-show var(--transition-fast);
  box-shadow: var(--shadow-md);
}

.ui-tooltip__arrow {
  fill: var(--color-neutral-800);
}

@keyframes tooltip-show {
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
