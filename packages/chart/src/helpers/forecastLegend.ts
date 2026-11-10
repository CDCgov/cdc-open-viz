export type ForecastConfidenceInterval = {
  high?: string | number
  low?: string | number
}

export type ForecastConfidenceIntervalGroup = {
  intervalIndexes: number[]
  key: string
  label: string
  opacity: number
}

const FORECAST_CI_KEY_PREFIX = 'forecast-ci:'

const getSharedPercentage = ({ high, low }: ForecastConfidenceInterval): number | undefined => {
  const highMatches = String(high).match(/\d+(?:\.\d+)?/g)
  const lowMatches = String(low).match(/\d+(?:\.\d+)?/g)

  if (highMatches?.length !== 1 || lowMatches?.length !== 1) return

  const highPercentage = Number(highMatches[0])
  const lowPercentage = Number(lowMatches[0])

  return highPercentage === lowPercentage && highPercentage >= 0 && highPercentage <= 100 ? highPercentage : undefined
}

export const getForecastConfidenceIntervalGroups = (
  confidenceIntervals: ForecastConfidenceInterval[] = []
): ForecastConfidenceIntervalGroup[] => {
  const completeIntervals = confidenceIntervals
    .map((interval, configIndex) => ({ interval, configIndex, percentage: getSharedPercentage(interval) }))
    .filter(({ interval }) => String(interval.high ?? '').trim() && String(interval.low ?? '').trim())

  if (completeIntervals.length <= 1) return []

  const orderedIntervals = completeIntervals.sort((a, b) => {
    if (a.percentage !== undefined && b.percentage !== undefined) return a.percentage - b.percentage
    if (a.percentage !== undefined) return -1
    if (b.percentage !== undefined) return 1
    return a.configIndex - b.configIndex
  })
  const groups: ForecastConfidenceIntervalGroup[] = []
  const percentageGroups = new Map<number, ForecastConfidenceIntervalGroup>()
  let fallbackIndex = 0

  orderedIntervals.forEach((interval, displayIndex) => {
    if (interval.percentage !== undefined) {
      const existingGroup = percentageGroups.get(interval.percentage)
      if (existingGroup) {
        existingGroup.intervalIndexes.push(interval.configIndex)
        return
      }
    }

    const fallbackNumber = interval.percentage === undefined ? ++fallbackIndex : undefined
    const group = {
      intervalIndexes: [interval.configIndex],
      key: interval.percentage !== undefined ? `percentage:${interval.percentage}` : `interval:${interval.configIndex}`,
      label: interval.percentage !== undefined ? `${interval.percentage}% CI` : `CI ${fallbackNumber}`,
      opacity: 1 - Math.pow(1 - 0.5, completeIntervals.length - displayIndex)
    }

    groups.push(group)
    if (interval.percentage !== undefined) percentageGroups.set(interval.percentage, group)
  })

  return groups
}

export const getForecastLegendKey = (stageKey: string, intervalKey: string): string =>
  `${FORECAST_CI_KEY_PREFIX}${encodeURIComponent(stageKey)}:${encodeURIComponent(intervalKey)}`

export const getForecastConfidenceIntervalKey = (
  confidenceIntervals: ForecastConfidenceInterval[] = [],
  intervalIndex: number
): string | undefined =>
  getForecastConfidenceIntervalGroups(confidenceIntervals).find(group => group.intervalIndexes.includes(intervalIndex))
    ?.key

export const isForecastLegendSelectionActive = (
  seriesHighlight: string[],
  stageKey: string,
  intervalKey?: string
): boolean => {
  if (!seriesHighlight.length) return true
  if (seriesHighlight.includes(stageKey)) return true
  return intervalKey ? seriesHighlight.includes(getForecastLegendKey(stageKey, intervalKey)) : false
}
