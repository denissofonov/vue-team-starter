<script setup lang="ts">
import { ref } from 'vue'
import {
  UiButton,
  UiInput,
  UiCard,
  UiModal,
  UiBadge,
  UiSelect,
  UiTabs,
  UiTooltip,
  UiDropdownMenu,
  UiSwitch,
  UiCheckbox,
  UiRadioGroup,
  UiAccordion,
  UiProgress,
  UiAvatar,
  UiSeparator,
  UiSlider,
  UiPopover,
  UiToggleGroup,
} from '@vue-team-starter/ui'
import { TooltipProvider } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'

// Input
const inputValue = ref('')
const inputError = ref('')
function validateInput() {
  inputError.value = inputValue.value.length < 3 ? 'Minimum 3 characters' : ''
}

// Modal
const modalOpen = ref(false)

// Button loading
const loading = ref(false)
function simulateLoading() {
  loading.value = true
  setTimeout(() => { loading.value = false }, 2000)
}

// Select
const selectedFruit = ref('')
const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape', disabled: true },
  { value: 'mango', label: 'Mango' },
]

// Checkbox
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)

// Radio
const radioValue = ref('option1')
const radioOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
]

// Tabs
const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'features', label: 'Features' },
  { value: 'setup', label: 'Setup' },
]

// Dropdown
const menuItems = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Archive', value: 'archive' },
  { label: '', value: 'sep', separator: true },
  { label: 'Delete', value: 'delete', danger: true },
]
const menuAction = ref('')

// Switch
const darkMode = ref(false)
const notifications = ref(true)

// Accordion
const accordionItems = [
  { value: 'q1', title: 'How do I add a new package to the monorepo?', content: 'Create a folder in packages/, add a package.json with the workspace name, and run pnpm install. Turborepo will pick it up automatically.' },
  { value: 'q2', title: 'Can I swap the design tokens for Tailwind?', content: 'Yes, but you\'d need to restyle every component. The tokens are intentionally decoupled — check docs/adr/006 for the reasoning.' },
  { value: 'q3', title: 'Why are some component styles not scoped?', content: 'Components that use Reka UI portals (Modal, Select, Dropdown, Tooltip, Popover) render content in document body via Teleport, so scoped styles don\'t reach them.' },
]

// Progress
const progress = ref(65)

// Slider
const sliderValue = ref([40])
const rangeValue = ref([20, 80])

// Toggle Group
const toggleValue = ref('center')
const toggleOptions = [
  { value: 'left', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'right', label: 'Right' },
]
</script>

<template>
  <TooltipProvider>
    <div class="playground">
      <header class="playground__header">
        <div class="playground__title-row">
          <h1>Playground</h1>
          <UiBadge variant="info">19 components</UiBadge>
        </div>
        <p class="playground__subtitle">
          All components built on Reka UI primitives, styled with design tokens
        </p>
      </header>

      <!-- Buttons -->
      <section class="playground__section">
        <h2>UiButton</h2>
        <div class="playground__group">
          <h3>Variants</h3>
          <div class="playground__row">
            <UiButton variant="primary">Primary</UiButton>
            <UiButton variant="secondary">Secondary</UiButton>
            <UiButton variant="ghost">Ghost</UiButton>
            <UiButton variant="danger">Danger</UiButton>
          </div>
        </div>
        <div class="playground__group">
          <h3>Sizes</h3>
          <div class="playground__row playground__row--center">
            <UiButton size="sm">Small</UiButton>
            <UiButton size="md">Medium</UiButton>
            <UiButton size="lg">Large</UiButton>
          </div>
        </div>
        <div class="playground__group">
          <h3>States</h3>
          <div class="playground__row">
            <UiButton :loading="loading" @click="simulateLoading">
              {{ loading ? 'Loading...' : 'Click to load' }}
            </UiButton>
            <UiButton :disabled="true">Disabled</UiButton>
          </div>
        </div>
      </section>

      <!-- Input -->
      <section class="playground__section">
        <h2>UiInput</h2>
        <div class="playground__grid">
          <UiInput v-model="inputValue" label="With validation" placeholder="Type at least 3 chars..." :error="inputError" @update:model-value="validateInput" />
          <UiInput label="Password" type="password" placeholder="Enter password" />
          <UiInput label="Disabled" model-value="Can't edit this" :disabled="true" />
          <UiInput label="With error" error="This field is required" placeholder="Something wrong" />
        </div>
      </section>

      <!-- Select -->
      <section class="playground__section">
        <h2>UiSelect</h2>
        <div class="playground__row playground__row--center">
          <UiSelect v-model="selectedFruit" :options="fruitOptions" placeholder="Pick a fruit..." />
          <UiBadge v-if="selectedFruit" variant="success">Selected: {{ selectedFruit }}</UiBadge>
        </div>
      </section>

      <!-- Checkbox -->
      <section class="playground__section">
        <h2>UiCheckbox</h2>
        <div class="playground__column">
          <UiCheckbox v-model="checked1" label="Accept terms and conditions" />
          <UiCheckbox v-model="checked2" label="Subscribe to newsletter" />
          <UiCheckbox v-model="checked3" label="Disabled option" :disabled="true" />
        </div>
      </section>

      <!-- Radio Group -->
      <section class="playground__section">
        <h2>UiRadioGroup</h2>
        <div class="playground__grid">
          <div>
            <h3 class="playground__label">Vertical</h3>
            <UiRadioGroup v-model="radioValue" :options="radioOptions" orientation="vertical" />
          </div>
          <div>
            <h3 class="playground__label">Horizontal</h3>
            <UiRadioGroup v-model="radioValue" :options="radioOptions" orientation="horizontal" />
          </div>
        </div>
      </section>

      <!-- Switch -->
      <section class="playground__section">
        <h2>UiSwitch</h2>
        <div class="playground__column">
          <UiSwitch v-model="darkMode" label="Dark mode" />
          <UiSwitch v-model="notifications" label="Notifications" />
          <UiSwitch :disabled="true" label="Disabled switch" />
        </div>
      </section>

      <!-- Slider -->
      <section class="playground__section">
        <h2>UiSlider</h2>
        <div class="playground__column" style="max-width: 400px">
          <div>
            <h3 class="playground__label">Single: {{ sliderValue[0] }}</h3>
            <UiSlider v-model="sliderValue" />
          </div>
          <div>
            <h3 class="playground__label">Range: {{ rangeValue[0] }} – {{ rangeValue[1] }}</h3>
            <UiSlider v-model="rangeValue" />
          </div>
        </div>
      </section>

      <!-- Toggle Group -->
      <section class="playground__section">
        <h2>UiToggleGroup</h2>
        <div class="playground__row playground__row--center">
          <UiToggleGroup v-model="toggleValue" :options="toggleOptions" />
          <UiBadge v-if="toggleValue">{{ toggleValue }}</UiBadge>
        </div>
      </section>

      <!-- Tabs -->
      <section class="playground__section">
        <h2>UiTabs</h2>
        <UiCard>
          <UiTabs :tabs="tabs">
            <template #overview>
              <p>Tabs use Reka UI primitives with full keyboard navigation (arrow keys, Home, End).</p>
            </template>
            <template #features>
              <ul>
                <li>Accessible by default (WAI-ARIA Tabs pattern)</li>
                <li>Keyboard navigation built-in</li>
                <li>Animated indicator</li>
                <li>Disabled tab support</li>
              </ul>
            </template>
            <template #setup>
              <pre class="playground__code">pnpm add @vue-team-starter/ui</pre>
            </template>
          </UiTabs>
        </UiCard>
      </section>

      <!-- Accordion -->
      <section class="playground__section">
        <h2>UiAccordion</h2>
        <UiAccordion :items="accordionItems" />
      </section>

      <!-- Progress -->
      <section class="playground__section">
        <h2>UiProgress</h2>
        <div class="playground__column" style="max-width: 400px; gap: var(--spacing-4)">
          <div>
            <h3 class="playground__label">Default ({{ progress }}%)</h3>
            <UiProgress :value="progress" />
          </div>
          <div>
            <h3 class="playground__label">Success</h3>
            <UiProgress :value="100" variant="success" />
          </div>
          <div>
            <h3 class="playground__label">Warning</h3>
            <UiProgress :value="45" variant="warning" />
          </div>
          <div>
            <h3 class="playground__label">Error</h3>
            <UiProgress :value="20" variant="error" />
          </div>
        </div>
      </section>

      <!-- Avatar -->
      <section class="playground__section">
        <h2>UiAvatar</h2>
        <div class="playground__row playground__row--center">
          <UiAvatar fallback="JD" size="sm" />
          <UiAvatar fallback="AB" size="md" />
          <UiAvatar fallback="XY" size="lg" />
        </div>
      </section>

      <!-- Tooltip -->
      <section class="playground__section">
        <h2>UiTooltip</h2>
        <div class="playground__row">
          <UiTooltip content="Top tooltip" side="top">
            <UiButton variant="secondary">Top</UiButton>
          </UiTooltip>
          <UiTooltip content="Right tooltip" side="right">
            <UiButton variant="secondary">Right</UiButton>
          </UiTooltip>
          <UiTooltip content="Bottom tooltip" side="bottom">
            <UiButton variant="secondary">Bottom</UiButton>
          </UiTooltip>
          <UiTooltip content="Left tooltip" side="left">
            <UiButton variant="secondary">Left</UiButton>
          </UiTooltip>
        </div>
      </section>

      <!-- Popover -->
      <section class="playground__section">
        <h2>UiPopover</h2>
        <UiPopover>
          <template #trigger>
            <UiButton variant="secondary">Open Popover</UiButton>
          </template>
          <div style="display: flex; flex-direction: column; gap: var(--spacing-3)">
            <p style="font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin: 0">Settings</p>
            <UiInput label="Name" placeholder="Your name" />
            <UiInput label="Email" placeholder="you@example.com" type="email" />
          </div>
        </UiPopover>
      </section>

      <!-- Dropdown Menu -->
      <section class="playground__section">
        <h2>UiDropdownMenu</h2>
        <div class="playground__row playground__row--center">
          <UiDropdownMenu :items="menuItems" @select="menuAction = $event">
            <UiButton variant="secondary">Open menu <ChevronDown :size="14" /></UiButton>
          </UiDropdownMenu>
          <UiBadge v-if="menuAction">Action: {{ menuAction }}</UiBadge>
        </div>
      </section>

      <!-- Badges -->
      <section class="playground__section">
        <h2>UiBadge</h2>
        <div class="playground__group">
          <h3>Variants</h3>
          <div class="playground__row">
            <UiBadge variant="default">Default</UiBadge>
            <UiBadge variant="success">Success</UiBadge>
            <UiBadge variant="warning">Warning</UiBadge>
            <UiBadge variant="error">Error</UiBadge>
            <UiBadge variant="info">Info</UiBadge>
          </div>
        </div>
        <div class="playground__group">
          <h3>Sizes</h3>
          <div class="playground__row playground__row--center">
            <UiBadge size="sm">Small</UiBadge>
            <UiBadge size="md">Medium</UiBadge>
          </div>
        </div>
      </section>

      <!-- Card -->
      <section class="playground__section">
        <h2>UiCard</h2>
        <div class="playground__grid playground__grid--cards">
          <UiCard>
            <template #header>Simple Card</template>
            <p>Basic card with header and body content.</p>
          </UiCard>
          <UiCard>
            <template #header>With Footer</template>
            <p>Card with all three sections.</p>
            <template #footer>
              <div class="playground__card-footer">
                <UiButton variant="ghost" size="sm">Cancel</UiButton>
                <UiButton variant="primary" size="sm">Save</UiButton>
              </div>
            </template>
          </UiCard>
          <UiCard padding="lg">
            <template #header>
              <div class="playground__card-header">
                Large Padding
                <UiBadge variant="success" size="sm">New</UiBadge>
              </div>
            </template>
            <p>This card has larger padding.</p>
          </UiCard>
        </div>
      </section>

      <!-- Separator -->
      <section class="playground__section">
        <h2>UiSeparator</h2>
        <div class="playground__column">
          <p style="font-size: var(--font-size-sm); color: var(--color-neutral-500)">Content above</p>
          <UiSeparator />
          <p style="font-size: var(--font-size-sm); color: var(--color-neutral-500)">Content below</p>
        </div>
      </section>

      <!-- Modal -->
      <section class="playground__section">
        <h2>UiModal</h2>
        <UiButton @click="modalOpen = true">Open Modal</UiButton>
        <UiModal
          :open="modalOpen"
          title="Example Modal"
          description="This dialog uses Reka UI Dialog with focus trapping and Escape to close."
          @update:open="modalOpen = $event"
        >
          <UiInput label="Name" placeholder="Enter your name" />
          <template #footer>
            <UiButton variant="ghost" @click="modalOpen = false">Cancel</UiButton>
            <UiButton variant="primary" @click="modalOpen = false">Confirm</UiButton>
          </template>
        </UiModal>
      </section>

      <!-- Tokens -->
      <section class="playground__section">
        <h2>Design Tokens</h2>
        <div class="playground__group">
          <h3>Primary Colors</h3>
          <div class="playground__colors">
            <div v-for="n in 9" :key="n" class="playground__color-swatch">
              <div class="playground__color-box" :style="{ background: `var(--color-primary-${n}00)` }" />
              <span>{{ n }}00</span>
            </div>
          </div>
        </div>
        <div class="playground__group">
          <h3>Typography</h3>
          <div class="playground__typography">
            <p style="font-size: var(--font-size-xs)">Extra Small (0.75rem)</p>
            <p style="font-size: var(--font-size-sm)">Small (0.875rem)</p>
            <p style="font-size: var(--font-size-base)">Base (1rem)</p>
            <p style="font-size: var(--font-size-lg)">Large (1.125rem)</p>
            <p style="font-size: var(--font-size-xl)">Extra Large (1.25rem)</p>
            <p style="font-size: var(--font-size-2xl)">2XL (1.5rem)</p>
            <p style="font-size: var(--font-size-3xl)">3XL (1.875rem)</p>
          </div>
        </div>
        <div class="playground__group">
          <h3>Spacing</h3>
          <div class="playground__spacing">
            <div v-for="s in [1, 2, 3, 4, 6, 8, 12, 16]" :key="s" class="playground__spacing-item">
              <div class="playground__spacing-bar" :style="{ width: `var(--spacing-${s})` }" />
              <span>--spacing-{{ s }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </TooltipProvider>
</template>

<style scoped>
.playground {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--spacing-4) var(--spacing-4) var(--spacing-16);
  font-family: var(--font-family-base);
  color: var(--color-neutral-900);
}

.playground__header {
  margin-bottom: var(--spacing-10);
}

.playground__title-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-1);
}

.playground__title-row h1 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin: 0;
}

.playground__subtitle {
  color: var(--color-neutral-500);
  margin: 0;
}

.playground__section {
  margin-bottom: var(--spacing-10);
}

.playground__section h2 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin: 0 0 var(--spacing-4);
  padding-bottom: var(--spacing-2);
  border-bottom: 1px solid var(--color-neutral-200);
}

.playground__group {
  margin-bottom: var(--spacing-4);
}

.playground__group h3 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 var(--spacing-2);
}

.playground__label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-500);
  margin: 0 0 var(--spacing-2);
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.playground__row--center {
  align-items: center;
}

.playground__column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.playground__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4);
}

.playground__grid--cards {
  grid-template-columns: repeat(3, 1fr);
}

.playground__card-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-2);
}

.playground__card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.playground__code {
  background: var(--color-neutral-100);
  padding: var(--spacing-3);
  border-radius: var(--radius-md);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  overflow-x: auto;
}

.playground__colors {
  display: flex;
  gap: var(--spacing-2);
}

.playground__color-swatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-1);
}

.playground__color-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-neutral-200);
}

.playground__color-swatch span {
  font-size: var(--font-size-xs);
  color: var(--color-neutral-500);
  font-family: var(--font-family-mono);
}

.playground__typography p {
  margin: 0 0 var(--spacing-1);
  color: var(--color-neutral-800);
}

.playground__spacing {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.playground__spacing-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.playground__spacing-bar {
  height: 12px;
  background: var(--color-primary-400);
  border-radius: var(--radius-sm);
  min-width: 4px;
}

.playground__spacing-item span {
  font-size: var(--font-size-xs);
  color: var(--color-neutral-500);
  font-family: var(--font-family-mono);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .playground__grid,
  .playground__grid--cards {
    grid-template-columns: 1fr;
  }
}
</style>
