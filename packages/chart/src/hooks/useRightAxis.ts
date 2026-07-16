import { scaleLinear } from '@visx/scale'
import { TOP_PADDING } from './useScales'
import { getCleanTopTickMax } from '../helpers/getCleanTopTickMax'
import { getAxisMaxOverride } from '../helpers/getAxisMaxOverride'

const cleanRightAxisValue = value => (typeof value === 'string' ? value.replace(/[,$]/g, '').trim() : value)

export default function useRightAxis({ config, yMax = 0, data = [] }) {
  const rightSeriesKeys =
    config.series && config.series.filter(series => series.axis === 'Right').map(key => key.dataKey)
  const hasRightAxis =
    config.visualizationType === 'Combo' && config.orientation === 'vertical' && Boolean(rightSeriesKeys?.length)

  const rightAxisValues = (rightSeriesKeys ?? [])
    .flatMap(key => data.map(item => item[key]))
    .filter(value => value !== null && value !== undefined && String(value).trim() !== '')
    .map(cleanRightAxisValue)
    .filter(value => String(value).trim() !== '')
    .map(Number)
    .filter(Number.isFinite)
  const rawRightMin = rightAxisValues.length ? Math.min(...rightAxisValues) : 0
  const rawRightMax = rightAxisValues.length ? Math.max(...rightAxisValues) : 0
  let max = rawRightMax
  const { hasValidMax: hasValidExplicitRightMax, maxNumber: rightMaxNumber } = getAxisMaxOverride({
    value: config.yAxis.rightMax,
    minimumValidMax: max
  })
  const rightMinRaw = config.yAxis.rightMin
  const rightMinNumber = Number(rightMinRaw)
  const hasValidExplicitRightMin =
    rightMinRaw !== undefined &&
    rightMinRaw !== null &&
    rightMinRaw !== '' &&
    Number.isFinite(rightMinNumber) &&
    rightMinNumber <= rawRightMin

  if (hasValidExplicitRightMax && rightMaxNumber > max) {
    max = rightMaxNumber
  }

  const minValue = hasValidExplicitRightMin ? rightMinNumber : rawRightMin > 0 ? 0 : rawRightMin

  if (config.yAxis.autoMaxStrategy === 'clean-top-tick' && !hasValidExplicitRightMax) {
    max = getCleanTopTickMax(max)
  }

  // Enforce smallest right axis max so small-data charts don't show misleading decimal ticks
  const smallestRightAxisMaxRaw = config.yAxis.smallestRightAxisMax
  let smallestRightAxisMax: number | null = null

  if (smallestRightAxisMaxRaw !== null && smallestRightAxisMaxRaw !== undefined && smallestRightAxisMaxRaw !== '') {
    const coercedSmallestRightAxisMax = Number(smallestRightAxisMaxRaw)
    if (!Number.isNaN(coercedSmallestRightAxisMax)) {
      smallestRightAxisMax = coercedSmallestRightAxisMax
    }
  }

  if (smallestRightAxisMax !== null && max < smallestRightAxisMax) {
    max = smallestRightAxisMax
  }

  const yScaleRight = scaleLinear({
    domain: [minValue, max],
    range: [yMax, TOP_PADDING]
  })

  return { yScaleRight, hasRightAxis, rightTickValues: undefined }
}
