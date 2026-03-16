<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'reka-ui'

interface Props {
  open: boolean
  title?: string
  description?: string
}

defineProps<Props>()

defineEmits<{
  'update:open': [value: boolean]
}>()
</script>

<template>
  <DialogRoot :open="open" @update:open="$emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="ui-modal__overlay" />
      <DialogContent class="ui-modal">
        <div class="ui-modal__header">
          <DialogTitle class="ui-modal__title">
            {{ title }}
          </DialogTitle>
          <DialogClose class="ui-modal__close" aria-label="Close dialog"> &times; </DialogClose>
        </div>
        <DialogDescription v-if="description" class="ui-modal__description">
          {{ description }}
        </DialogDescription>
        <div class="ui-modal__body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="ui-modal__footer">
          <slot name="footer" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
.ui-modal__overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 0.5);
  z-index: 1000;
  animation: overlay-show var(--transition-base);
}

.ui-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-surface-overlay);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  min-width: 400px;
  max-width: 90vw;
  max-height: 85vh;
  overflow: auto;
  z-index: 1001;
  animation: content-show var(--transition-base);
}

.ui-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-neutral-200);
}

.ui-modal__title {
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  margin: 0;
}

.ui-modal__description {
  padding: var(--spacing-3) var(--spacing-4) 0;
  color: var(--color-neutral-500);
  font-size: var(--font-size-sm);
  margin: 0;
}

.ui-modal__close {
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  cursor: pointer;
  color: var(--color-neutral-500);
  padding: var(--spacing-1);
  line-height: 1;
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
}

.ui-modal__close:hover {
  background: var(--color-neutral-100);
}

.ui-modal__close:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.ui-modal__body {
  padding: var(--spacing-4);
}

.ui-modal__footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--color-neutral-200);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-2);
}

@keyframes overlay-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes content-show {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
