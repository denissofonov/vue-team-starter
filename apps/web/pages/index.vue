<script setup lang="ts">
import { UiBadge, UiButton, UiCard, UiSeparator } from '@vue-team-starter/ui'
import {
  ArrowRight,
  ExternalLink,
  FileText,
  GitBranch,
  Layers,
  Package,
  Paintbrush,
  Shield,
  Terminal,
  TestTube,
} from 'lucide-vue-next'

const features = [
  {
    icon: Layers,
    title: 'Monorepo',
    desc: 'Turborepo + pnpm workspaces. Smart caching, strict deps, scales from 1 to 10+ packages.',
  },
  {
    icon: Package,
    title: '19 UI Components',
    desc: 'Built on Reka UI headless primitives. Accessible by default, styled with design tokens.',
  },
  {
    icon: Shield,
    title: 'Accessible',
    desc: 'WAI-ARIA compliant. Keyboard navigation, focus trapping, screen reader support — all built in.',
  },
  {
    icon: Paintbrush,
    title: 'Design Tokens',
    desc: 'CSS custom properties for colors, typography, spacing. Dark theme included. Zero runtime.',
  },
  {
    icon: TestTube,
    title: '30+ Tests',
    desc: 'Vitest unit tests for composables and components. Playwright E2E ready.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD',
    desc: 'GitHub Actions: lint, typecheck, test, build, bundle size check. Vercel deploy with PR previews.',
  },
  {
    icon: FileText,
    title: '9 ADRs',
    desc: 'Architecture Decision Records documenting every major choice — why, not just what.',
  },
  {
    icon: Terminal,
    title: 'DX',
    desc: 'Conventional commits, commitlint, husky, lint-staged, PR templates, code review guidelines.',
  },
]

const packages = [
  { name: '@vue-team-starter/ui', desc: '19 Vue components on Reka UI', badge: 'ui' },
  { name: '@vue-team-starter/composables', desc: '6 shared composables', badge: 'logic' },
  { name: '@vue-team-starter/tokens', desc: 'Design tokens + CSS reset', badge: 'style' },
  { name: '@vue-team-starter/eslint-config', desc: 'Shared ESLint rules', badge: 'dx' },
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <UiBadge variant="info"> Open Source Template </UiBadge>
      <h1 class="hero__title">vue-team-starter</h1>
      <p class="hero__desc">
        Production-ready Nuxt 3 monorepo template with UI kit, design tokens, tests, CI/CD, and team
        processes built in.
      </p>
      <div class="hero__actions">
        <NuxtLink to="/playground">
          <UiButton variant="primary" size="lg">
            Open Playground
            <ArrowRight :size="18" />
          </UiButton>
        </NuxtLink>
        <a href="https://github.com/denissofonov/vue-team-starter" target="_blank" rel="noopener">
          <UiButton variant="secondary" size="lg">
            GitHub
            <ExternalLink :size="16" />
          </UiButton>
        </a>
      </div>
      <div class="hero__code">
        <code>npx degit denissofonov/vue-team-starter my-project</code>
      </div>
    </section>

    <UiSeparator />

    <!-- Features -->
    <section class="section">
      <h2 class="section__title">What's Inside</h2>
      <p class="section__desc">Everything a team needs on day one — no setup fatigue.</p>
      <div class="features">
        <UiCard v-for="feature in features" :key="feature.title" padding="md">
          <div class="feature">
            <div class="feature__icon">
              <component :is="feature.icon" :size="22" />
            </div>
            <h3 class="feature__title">
              {{ feature.title }}
            </h3>
            <p class="feature__desc">
              {{ feature.desc }}
            </p>
          </div>
        </UiCard>
      </div>
    </section>

    <UiSeparator />

    <!-- Packages -->
    <section class="section">
      <h2 class="section__title">Packages</h2>
      <p class="section__desc">Monorepo workspace structure.</p>
      <div class="packages">
        <div v-for="pkg in packages" :key="pkg.name" class="package">
          <div class="package__info">
            <code class="package__name">{{ pkg.name }}</code>
            <span class="package__desc">{{ pkg.desc }}</span>
          </div>
          <UiBadge variant="default" size="sm">
            {{ pkg.badge }}
          </UiBadge>
        </div>
      </div>
    </section>

    <UiSeparator />

    <!-- Quick Start -->
    <section class="section">
      <h2 class="section__title">Quick Start</h2>
      <UiCard padding="lg">
        <pre class="quickstart"><code>git clone https://github.com/denissofonov/vue-team-starter.git
cd vue-team-starter
pnpm install
pnpm dev</code></pre>
      </UiCard>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>Built with Nuxt 3, Reka UI, and design tokens.</p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--spacing-4) var(--spacing-16);
}

/* Hero */
.hero {
  text-align: center;
  padding: var(--spacing-16) 0 var(--spacing-12);
}

.hero__title {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  margin: var(--spacing-4) 0 var(--spacing-3);
  font-family: var(--font-family-mono);
  letter-spacing: -0.02em;
}

.hero__desc {
  font-size: var(--font-size-lg);
  color: var(--color-neutral-500);
  max-width: 600px;
  margin: 0 auto var(--spacing-6);
  line-height: var(--line-height-relaxed);
}

.hero__actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
}

.hero__actions a {
  text-decoration: none;
}

.hero__code {
  display: inline-block;
  background: var(--color-neutral-100);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-600);
}

/* Sections */
.section {
  padding: var(--spacing-12) 0;
}

.section__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin: 0 0 var(--spacing-2);
}

.section__desc {
  color: var(--color-neutral-500);
  margin: 0 0 var(--spacing-6);
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4);
}

.feature {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.feature__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-50);
  color: var(--color-primary-600);
  border-radius: var(--radius-md);
}

.feature__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.feature__desc {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

/* Packages */
.packages {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.package {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-md);
}

.package__info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.package__name {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-900);
}

.package__desc {
  font-size: var(--font-size-xs);
  color: var(--color-neutral-500);
}

/* Quick Start */
.quickstart {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-neutral-800);
  margin: 0;
  white-space: pre;
}

/* Footer */
.footer {
  text-align: center;
  padding: var(--spacing-8) 0;
  color: var(--color-neutral-400);
  font-size: var(--font-size-sm);
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }

  .hero__title {
    font-size: 2rem;
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
