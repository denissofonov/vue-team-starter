<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui'

interface AccordionItemData {
  value: string
  title: string
  content: string
}

interface Props {
  items: AccordionItemData[]
  type?: 'single' | 'multiple'
  collapsible?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'single',
  collapsible: true,
})
</script>

<template>
  <AccordionRoot :type="type" :collapsible="collapsible" class="ui-accordion">
    <AccordionItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      class="ui-accordion__item"
    >
      <AccordionHeader>
        <AccordionTrigger class="ui-accordion__trigger">
          {{ item.title }}
          <span class="ui-accordion__chevron" aria-hidden="true">&#9662;</span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="ui-accordion__content">
        <div class="ui-accordion__content-inner">
          {{ item.content }}
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style>
.ui-accordion {
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.ui-accordion__item {
  border-bottom: 1px solid var(--color-neutral-200);
}

.ui-accordion__item:last-child {
  border-bottom: none;
}

.ui-accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  background: none;
  border: none;
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-800);
  cursor: pointer;
  outline: none;
  transition: background var(--transition-fast);
}

.ui-accordion__trigger:hover {
  background: var(--color-neutral-50);
}

.ui-accordion__trigger:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}

.ui-accordion__chevron {
  font-size: var(--font-size-xs);
  color: var(--color-neutral-500);
  transition: transform var(--transition-base);
}

.ui-accordion__item[data-state='open'] .ui-accordion__chevron {
  transform: rotate(180deg);
}

.ui-accordion__content {
  overflow: hidden;
}

.ui-accordion__content[data-state='open'] {
  animation: accordion-open var(--transition-base);
}

.ui-accordion__content[data-state='closed'] {
  animation: accordion-close var(--transition-base);
}

.ui-accordion__content-inner {
  padding: 0 var(--spacing-4) var(--spacing-3);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-600);
  line-height: var(--line-height-relaxed);
}

@keyframes accordion-open {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes accordion-close {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
