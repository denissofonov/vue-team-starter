<script setup lang="ts">
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'

interface Props {
  modelValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: () => [50],
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
})

defineEmits<{
  'update:modelValue': [value: number[]]
}>()
</script>

<template>
  <SliderRoot
    :model-value="modelValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    class="ui-slider"
    @update:model-value="$emit('update:modelValue', $event ?? [0])"
  >
    <SliderTrack class="ui-slider__track">
      <SliderRange class="ui-slider__range" />
    </SliderTrack>
    <SliderThumb v-for="(_, i) in modelValue" :key="i" class="ui-slider__thumb" />
  </SliderRoot>
</template>

<style scoped>
.ui-slider {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  cursor: pointer;
}

.ui-slider[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-slider__track {
  position: relative;
  flex: 1;
  height: 6px;
  background: var(--color-neutral-200);
  border-radius: var(--radius-full);
}

.ui-slider__range {
  position: absolute;
  height: 100%;
  background: var(--color-primary-600);
  border-radius: var(--radius-full);
}

.ui-slider__thumb {
  display: block;
  width: 20px;
  height: 20px;
  background: var(--color-surface);
  border: 2px solid var(--color-primary-600);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  outline: none;
  transition: box-shadow var(--transition-fast);
}

.ui-slider__thumb:hover {
  box-shadow: 0 0 0 4px var(--color-primary-100);
}

.ui-slider__thumb:focus-visible {
  box-shadow: 0 0 0 4px var(--color-primary-100);
}
</style>
