<script setup lang="ts">
import { useTheme } from '@vue-team-starter/composables'
import { UiButton } from '@vue-team-starter/ui'
import { Github, Home, Moon, Puzzle, Sun } from 'lucide-vue-next'

const { isDark, toggle } = useTheme()

const navItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Playground', to: '/playground', icon: Puzzle },
]
</script>

<template>
  <div class="layout">
    <nav class="layout__nav">
      <span class="layout__logo">vue-team-starter</span>
      <div class="layout__links">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="layout__link">
          <component :is="item.icon" :size="16" />
          {{ item.label }}
        </NuxtLink>
      </div>
      <a
        href="https://github.com/denissofonov/vue-team-starter"
        target="_blank"
        rel="noopener"
        class="layout__icon-link"
        aria-label="GitHub"
      >
        <Github :size="20" />
      </a>
      <UiButton variant="ghost" size="sm" @click="toggle">
        <Sun v-if="isDark" :size="16" />
        <Moon v-else :size="16" />
      </UiButton>
    </nav>
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  font-family: var(--font-family-base);
  color: var(--color-neutral-900);
  background: var(--color-neutral-50);
}

.layout__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-3) var(--spacing-6);
  border-bottom: 1px solid var(--color-neutral-200);
  background: var(--color-surface);
}

.layout__logo {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  font-family: var(--font-family-mono);
}

.layout__links {
  display: flex;
  gap: var(--spacing-1);
  margin-left: var(--spacing-4);
  flex: 1;
}

.layout__link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-neutral-600);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
}

.layout__link:hover {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

.layout__link.router-link-active {
  background: #dbeafe;
  color: #1d4ed8;
}

[data-theme='dark'] .layout__link.router-link-active {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.layout__icon-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-neutral-500);
  transition: color var(--transition-fast);
}

.layout__icon-link:hover {
  color: var(--color-neutral-900);
}

.layout__main {
  padding: var(--spacing-6);
}
</style>
