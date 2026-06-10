export const normalizeBreakpoints = (breakpoints: unknown): number[] => {
  if (!Array.isArray(breakpoints)) return []
  return Array.from(
    new Set(
      breakpoints
        .map(value => Number(value))
        .filter(value => Number.isFinite(value))
        .sort((a, b) => a - b)
    )
  )
}

export const parseBreakpointString = (value: string): number[] =>
  normalizeBreakpoints(value.split(',').map(item => Number(item.trim())))

export const formatBreakpointInputs = (breakpoints?: number[]): string[] =>
  Array.isArray(breakpoints) && breakpoints.length ? breakpoints.map(value => String(value)) : ['']

export const parseBreakpointInputValue = (value: string): number | null => {
  if (value === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}
