import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'
import { scaleLinear } from '@visx/scale'
import useReduceData from '../hooks/useReduceData'

export default function useRightAxis({ yMax = 0 }) {
  const { config } = useVisConfig()
  const hasRightAxis = config.visualizationType === 'Combo' && config.orientation === 'vertical'
  const rightSeriesKeys = config.series && config.series.filter(series => series.axis === 'Right').map(key => key.dataKey)
  const { minValue } = useReduceData()

  const allRightAxisData = rightSeriesKeys => {
    if (!rightSeriesKeys) return [0]
    let rightAxisData = []
    rightSeriesKeys.map((key, index) => {
      return (rightAxisData = [...rightAxisData, ...config.data.map(item => Number(item[key]))])
    })
    return rightAxisData
  }

  const min = Math.min.apply(null, allRightAxisData(rightSeriesKeys))
  const max = Math.max.apply(null, allRightAxisData(rightSeriesKeys))

  const yScaleRight = scaleLinear({
    domain: [minValue, max],
    range: [yMax, 0]
  })

  return { yScaleRight, hasRightAxis }
}
