<script setup lang="ts">
import { Separator } from 'reka-ui'

interface Props {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}

withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  decorative: true,
})
</script>

<template>
  <Separator
    :orientation="orientation"
    :decorative="decorative"
    class="ui-separator"
    :class="[`ui-separator--${orientation}`]"
  />
</template>

<style scoped>
.ui-separator--horizontal {
  width: 100%;
  height: 1px;
  background: var(--color-neutral-200);
}

.ui-separator--vertical {
  width: 1px;
  height: 100%;
  background: var(--color-neutral-200);
}
</style>
