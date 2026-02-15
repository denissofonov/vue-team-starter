import { ref, onMounted, onUnmounted } from 'vue'

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

type BreakpointKey = keyof typeof BREAKPOINTS

export function useBreakpoints() {
  const width = ref(0)
  const current = ref<BreakpointKey | 'xs'>('xs')

  function update() {
    width.value = window.innerWidth

    if (width.value >= BREAKPOINTS.xl) current.value = 'xl'
    else if (width.value >= BREAKPOINTS.lg) current.value = 'lg'
    else if (width.value >= BREAKPOINTS.md) current.value = 'md'
    else if (width.value >= BREAKPOINTS.sm) current.value = 'sm'
    else current.value = 'xs'
  }

  function isAbove(bp: BreakpointKey) {
    return width.value >= BREAKPOINTS[bp]
  }

  function isBelow(bp: BreakpointKey) {
    return width.value < BREAKPOINTS[bp]
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { width, current, isAbove, isBelow }
}
