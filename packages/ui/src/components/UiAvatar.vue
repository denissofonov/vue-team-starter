<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'

interface Props {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  fallback: '?',
  size: 'md',
})
</script>

<template>
  <AvatarRoot class="ui-avatar" :class="[`ui-avatar--${size}`]">
    <AvatarImage v-if="src" :src="src" :alt="alt" class="ui-avatar__image" />
    <AvatarFallback class="ui-avatar__fallback" :delay-ms="300">
      {{ fallback }}
    </AvatarFallback>
  </AvatarRoot>
</template>

<style scoped>
.ui-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-neutral-200);
  flex-shrink: 0;
}

.ui-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: var(--font-size-xs);
}

.ui-avatar--md {
  width: 40px;
  height: 40px;
  font-size: var(--font-size-sm);
}

.ui-avatar--lg {
  width: 56px;
  height: 56px;
  font-size: var(--font-size-lg);
}

.ui-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ui-avatar__fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-600);
  background: var(--color-neutral-200);
}
</style>
