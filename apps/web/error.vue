<script setup lang="ts">
import { UiButton, UiCard } from '@vue-team-starter/ui'

const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

function handleClearError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-page">
    <UiCard>
      <template #header>
        <span class="error-page__code">{{ error.statusCode }}</span>
      </template>

      <p class="error-page__message">
        {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </p>

      <template #footer>
        <UiButton variant="primary" @click="handleClearError">
          Back to home
        </UiButton>
      </template>
    </UiCard>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-neutral-50);
  font-family: var(--font-family-base);
  padding: var(--spacing-4);
}

.error-page__code {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-error);
}

.error-page__message {
  color: var(--color-neutral-600);
  margin: 0;
}
</style>
