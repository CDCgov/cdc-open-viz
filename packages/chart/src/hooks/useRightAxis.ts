import { scaleLinear } from '@visx/scale'
import useReduceData from './useReduceData'
import { TOP_PADDING } from './useScales'
import { getCleanTopTickMax, getFinalTopTickMax } from '../helpers/getCleanTopTickMax'
import { getAxisMaxOverride } from '../helpers/getAxisMaxOverride'

export default function useRightAxis({ config, yMax = 0, data = [] }) {
  const hasRightAxis = config.visualizationType === 'Combo' && config.orientation === 'vertical'
  const rightSeriesKeys =
    config.series && config.series.filter(series => series.axis === 'Right').map(key => key.dataKey)
  let { minValue } = useReduceData(config, data)

  const allRightAxisData = rightSeriesKeys => {
    if (!rightSeriesKeys) return [0]
    let rightAxisData = []
    rightSeriesKeys.map((key, index) => {
      return (rightAxisData = [...rightAxisData, ...data.map(item => Number(item[key]))])
    })
    return rightAxisData
  }

  const rightAxisValues = allRightAxisData(rightSeriesKeys).map(Number).filter(Number.isFinite)
  const rawRightMax = rightAxisValues.length ? Math.max(...rightAxisValues) : 0
  let max = rawRightMax
  const { hasValidMax: hasValidExplicitRightMax, maxNumber: rightMaxNumber } = getAxisMaxOverride({
    value: config.yAxis.rightMax,
    minimumValidMax: max
  })
  const rightMinRaw = config.yAxis.rightMin
  const rightMinNumber = Number(rightMinRaw)
  const hasExplicitRightMin =
    rightMinRaw !== undefined && rightMinRaw !== null && rightMinRaw !== '' && Number.isFinite(rightMinNumber)

  if (hasValidExplicitRightMax && rightMaxNumber > max) {
    max = rightMaxNumber
  }

  if (hasExplicitRightMin && rightMinNumber < minValue) {
    minValue = rightMinNumber
  }

  // if there is a bar series & the right axis doesn't include a negative number, default to zero
  const hasBarSeries = config.runtime?.barSeriesKeys?.length > 0
  const hasLineSeries = config.runtime?.lineSeriesKeys?.length > 0

  if ((hasBarSeries || hasLineSeries) && minValue > 0) {
    minValue = 0
  }

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

  let rightTickValues: number[] | undefined
  if (config.yAxis.autoMaxStrategy === 'clean-top-tick' && !hasValidExplicitRightMax) {
    const rightAxisNumTicks = config.runtime?.yAxis?.rightNumTicks || 4
    const yScaleRightForTicks = scaleLinear({
      domain: [minValue, max],
      range: [yMax, TOP_PADDING]
    })

    const finalizedRightAxis = getFinalTopTickMax({
      currentMax: max,
      rawMax: rawRightMax,
      ticks: yScaleRightForTicks.ticks(rightAxisNumTicks),
      shouldUseCleanTopTick: true
    })

    max = finalizedRightAxis.max
    rightTickValues = finalizedRightAxis.tickValues
  }

  const yScaleRight = scaleLinear({
    domain: [minValue, max],
    range: [yMax, TOP_PADDING]
  })

  return { yScaleRight, hasRightAxis, rightTickValues }
}
