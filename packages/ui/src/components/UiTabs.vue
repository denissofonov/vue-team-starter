<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

interface Tab {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  tabs: Tab[]
  defaultValue?: string
  modelValue?: string
}

defineProps<Props>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <TabsRoot
    :default-value="defaultValue ?? tabs[0]?.value"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <TabsList class="ui-tabs__list">
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :disabled="tab.disabled"
        class="ui-tabs__trigger"
      >
        {{ tab.label }}
      </TabsTrigger>
      <TabsIndicator class="ui-tabs__indicator" />
    </TabsList>

    <div class="ui-tabs__content-wrapper">
      <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value" class="ui-tabs__content">
        <slot :name="tab.value" />
      </TabsContent>
    </div>
  </TabsRoot>
</template>

<style scoped>
.ui-tabs__list {
  display: flex;
  border-bottom: 1px solid var(--color-neutral-200);
  gap: var(--spacing-1);
  position: relative;
}

.ui-tabs__trigger {
  padding: var(--spacing-2) var(--spacing-4);
  background: none;
  border: none;
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-500);
  cursor: pointer;
  transition: color var(--transition-fast);
  outline: none;
  position: relative;
}

.ui-tabs__trigger:hover {
  color: var(--color-neutral-800);
}

.ui-tabs__trigger[data-state='active'] {
  color: var(--color-primary-600);
}

.ui-tabs__trigger:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
  border-radius: var(--radius-sm);
}

.ui-tabs__trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-tabs__indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: var(--color-primary-600);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
}

.ui-tabs__content-wrapper {
  padding-top: var(--spacing-4);
}

.ui-tabs__content {
  outline: none;
}

.ui-tabs__content:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
</style>
