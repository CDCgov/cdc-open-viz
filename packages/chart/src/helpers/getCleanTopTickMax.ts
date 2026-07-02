const NICE_MANTISSAS = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] as const

type FinalizeTopTickMaxProps = {
  currentMax: number
  rawMax: number
  ticks: number[]
  shouldUseCleanTopTick: boolean
  headroomMode?: 'none' | 'inline-label'
}

const getTickComparisonEpsilon = (tickGap: number) => Math.abs(tickGap) * 1e-10

export const getCleanTopTickMax = (value: number) => {
  if (!Number.isFinite(value) || value <= 0) return value

  const powerOfTenStep = Math.pow(10, Math.floor(Math.log10(value)))
  const normalizedValue = value / powerOfTenStep
  const mantissa = NICE_MANTISSAS.find(candidate => normalizedValue <= candidate)

  return (mantissa ?? 10) * powerOfTenStep
}

export const getCleanTopTickMaxCandidates = () => [...NICE_MANTISSAS]

export const getFinalTopTickMax = ({
  currentMax,
  rawMax,
  ticks,
  shouldUseCleanTopTick,
  headroomMode = 'none'
}: FinalizeTopTickMaxProps) => {
  if (!shouldUseCleanTopTick || !Number.isFinite(currentMax)) return { max: currentMax }
  if (!Array.isArray(ticks) || ticks.length === 0) return { max: currentMax }

  const sortedTicks = Array.from(new Set(ticks.filter(Number.isFinite))).sort((a, b) => a - b)
  if (sortedTicks.length === 0) return { max: currentMax }

  const tickGap = sortedTicks.slice(1).reduce((smallestGap, tick, index) => {
    const gap = tick - sortedTicks[index]
    return gap > 0 ? Math.min(smallestGap, gap) : smallestGap
  }, Infinity)

  if (!Number.isFinite(tickGap) || tickGap <= 0) return { max: currentMax }

  const targetMax = Math.max(currentMax, Number.isFinite(rawMax) ? rawMax : currentMax)
  const tickComparisonEpsilon = getTickComparisonEpsilon(tickGap)
  let finalMax = sortedTicks[sortedTicks.length - 1]

  while (finalMax + tickComparisonEpsilon < targetMax) {
    finalMax = Number((finalMax + tickGap).toPrecision(15))
    sortedTicks.push(finalMax)
  }

  if (
    headroomMode === 'inline-label' &&
    Number.isFinite(rawMax) &&
    finalMax - rawMax <= tickGap * 0.25 + tickComparisonEpsilon
  ) {
    finalMax = Number((finalMax + tickGap).toPrecision(15))
    sortedTicks.push(finalMax)
  }

  return { max: finalMax, tickValues: sortedTicks }
}
