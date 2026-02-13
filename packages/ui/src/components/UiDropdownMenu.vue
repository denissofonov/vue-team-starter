<script setup lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from 'reka-ui'

interface MenuItem {
  label: string
  value: string
  disabled?: boolean
  danger?: boolean
  separator?: boolean
}

interface Props {
  items: MenuItem[]
}

defineProps<Props>()

defineEmits<{
  select: [value: string]
}>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent class="ui-dropdown" :side-offset="4" align="start">
        <template v-for="item in items" :key="item.value">
          <DropdownMenuSeparator v-if="item.separator" class="ui-dropdown__separator" />
          <DropdownMenuItem
            v-else
            class="ui-dropdown__item"
            :class="{ 'ui-dropdown__item--danger': item.danger }"
            :disabled="item.disabled"
            @select="$emit('select', item.value)"
          >
            {{ item.label }}
          </DropdownMenuItem>
        </template>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<style>
.ui-dropdown {
  background: var(--color-surface-overlay);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-1);
  min-width: 160px;
  z-index: 1000;
  animation: dropdown-show var(--transition-fast);
}

.ui-dropdown__item {
  display: flex;
  align-items: center;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-800);
  cursor: pointer;
  outline: none;
  transition: background var(--transition-fast);
}

.ui-dropdown__item:hover,
.ui-dropdown__item[data-highlighted] {
  background: var(--color-primary-50);
  color: var(--color-primary-700);
}

.ui-dropdown__item--danger {
  color: var(--color-error);
}

.ui-dropdown__item--danger:hover,
.ui-dropdown__item--danger[data-highlighted] {
  background: #fee2e2;
  color: #991b1b;
}

.ui-dropdown__item[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-dropdown__separator {
  height: 1px;
  background: var(--color-neutral-200);
  margin: var(--spacing-1) 0;
}

@keyframes dropdown-show {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
