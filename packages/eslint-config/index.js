import antfu from '@antfu/eslint-config'

export default function createConfig(options = {}) {
  return antfu({
    vue: true,
    typescript: true,
    formatters: false,
    stylistic: {
      semi: false,
      quotes: 'single',
    },
    ...options,
  })
}
