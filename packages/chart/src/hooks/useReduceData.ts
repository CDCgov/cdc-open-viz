import isNumber from '@cdc/core/helpers/isNumber'
import { useMemo } from 'react'

function useReduceData(config, data) {
  return useMemo(() => {
    if (!data || !config?.runtime?.seriesKeys) {
      return { minValue: 0, maxValue: 0, existPositiveValue: false, isAllLine: false }
    }

    const isBar = config.series.every(({ type }) => type === 'Bar')
    const isAllLine = config.series.every(({ type }) => ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg'].includes(type))

    const cleanChars = value => {
      if (value === null || value === '') {
        return ''
      }
      return typeof value === 'string' ? value.replace(/[,$]/g, '') : value
    }

    const getSeriesKey = seriesKey => {
      const series = config.runtime.series.find(item => item.dataKey === seriesKey)
      return series?.dynamicCategory ? series.originalDataKey : seriesKey
    }

    const seriesKeysMap = new Map()
    config.runtime.seriesKeys.forEach(key => {
      seriesKeysMap.set(key, getSeriesKey(key))
    })

    let minValue = Infinity
    let maxValue = -Infinity
    let existPositiveValue = false
    const stackedTotals = []

    for (let i = 0; i < data.length; i++) {
      const row = data[i]
      let rowMax = -Infinity
      let rowMin = Infinity
      let stackedSum = 0

      for (const key of config.runtime.seriesKeys) {
        const seriesKey = seriesKeysMap.get(key)
        const cleanValue = cleanChars(row[seriesKey])

        if (isNumber(cleanValue)) {
          const numValue = Number(cleanValue)

          if (numValue > rowMax) rowMax = numValue
          if (numValue < rowMin) rowMin = numValue

          if (numValue >= 0) existPositiveValue = true

          if (!isNaN(numValue)) stackedSum += numValue
        }
      }

      if (rowMax > maxValue) maxValue = rowMax
      if (rowMin < minValue) minValue = rowMin

      if (!isNaN(stackedSum)) stackedTotals.push(stackedSum)
    }

    if (
      (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && isBar)) &&
      config.visualizationSubType === 'stacked'
    ) {
      maxValue = Math.max(...stackedTotals)
    }

    if (config.visualizationSubType === 'stacked' && config.visualizationType === 'Area Chart') {
      maxValue = Math.max(...stackedTotals)
    }

    if (
      (config.visualizationType === 'Bar' || config.visualizationType === 'Deviation Bar') &&
      config.series &&
      config.series.dataKey
    ) {
      let specialMax = -Infinity
      for (const row of data) {
        const cleanValue = cleanChars(row[config.series.dataKey])
        if (isNumber(cleanValue)) {
          const numValue = Number(cleanValue)
          if (numValue > specialMax) specialMax = numValue
        }
      }
      maxValue = specialMax
    }

    if (config.visualizationType === 'Combo' && config.visualizationSubType === 'stacked' && !isBar) {
      if (config.runtime.barSeriesKeys && config.runtime.lineSeriesKeys) {
        let barMax = -Infinity
        let lineMax = -Infinity

        for (const row of data) {
          let barSum = 0
          let rowLineMax = -Infinity

          for (const key of config.runtime.barSeriesKeys) {
            const cleanValue = cleanChars(row[key])
            if (isNumber(cleanValue)) {
              const numValue = Number(cleanValue)
              if (!isNaN(numValue)) barSum += numValue
            }
          }

          for (const key of config.runtime.lineSeriesKeys) {
            const cleanValue = cleanChars(row[key])
            if (isNumber(cleanValue)) {
              const numValue = Number(cleanValue)
              if (numValue > rowLineMax) rowLineMax = numValue
            }
          }

          if (barSum > barMax) barMax = barSum
          if (rowLineMax > lineMax) lineMax = rowLineMax
        }

        maxValue = Math.max(barMax, lineMax)
      }
    }

    if (minValue === Infinity) minValue = 0
    if (maxValue === -Infinity) maxValue = 0

    return {
      minValue: Number(minValue),
      maxValue: Number(maxValue),
      existPositiveValue,
      isAllLine
    }
  }, [config, data])
}

export default useReduceData
