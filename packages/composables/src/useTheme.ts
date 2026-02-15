import { computed, ref } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  function set(value: Theme) {
    theme.value = value
    document.documentElement.setAttribute('data-theme', value)
  }

  return { theme, isDark, toggle, set }
}
