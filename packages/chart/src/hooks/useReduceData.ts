import isNumber from '@cdc/core/helpers/isNumber'

function useReduceData(config, data) {
  const isBar = config.series.every(({ type }) => type === 'Bar')
  const isAllLine = config.series.every(({ type }) => ['Line', 'dashed-sm', 'dashed-md', 'dashed-lg'].includes(type))
  const sumYValues = seriesKeys => xValue =>
    seriesKeys.reduce((yTotal, k) => (isNaN(Number(xValue[k])) ? yTotal : yTotal + Number(xValue[k])), 0)
  const getSeriesKey = seriesKey => {
    const series = config.runtime.series.find(item => item.dataKey === seriesKey)
    return series?.dynamicCategory ? series.originalDataKey : seriesKey
  }
  const getMaxValueFromData = () => {
    let max = Math.max(
      ...data.map(d =>
        Math.max(
          ...config.runtime.seriesKeys.map(key => {
            const seriesKey = getSeriesKey(key)
            return isNumber(d[seriesKey]) ? Number(cleanChars(d[seriesKey])) : 0
          })
        )
      )
    )

    if (
      (config.visualizationType === 'Bar' || (config.visualizationType === 'Combo' && isBar)) &&
      config.visualizationSubType === 'stacked'
    ) {
      const yTotals = data.map(sumYValues(config.runtime.seriesKeys)).filter(num => !isNaN(num))
      max = Math.max(...yTotals)
    }

    if (config.visualizationSubType === 'stacked' && config.visualizationType === 'Area Chart') {
      const yTotals = data.map(sumYValues(config.runtime.seriesKeys))
      max = Math.max(...yTotals)
    }

    if (
      (config.visualizationType === 'Bar' || config.visualizationType === 'Deviation Bar') &&
      config.series &&
      config.series.dataKey
    ) {
      max = Math.max(
        ...data.map(d => (isNumber(d[config.series.dataKey]) ? Number(cleanChars(d[config.series.dataKey])) : 0))
      )
    }

    if (config.visualizationType === 'Combo' && config.visualizationSubType === 'stacked' && !isBar) {
      if (config.runtime.barSeriesKeys && config.runtime.lineSeriesKeys) {
        const yTotals = data.map(sumYValues(config.runtime.barSeriesKeys))

        const lineMax = Math.max(
          ...data.map(d => Math.max(...config.runtime.lineSeriesKeys.map(key => Number(cleanChars(d[key])))))
        )
        const barMax = Math.max(...yTotals)

        max = Math.max(barMax, lineMax)
      }
    }

    return max
  }

  const getMinValueFromData = () => {
    const minNumberFromData = Math.min(
      ...data.map(d =>
        Math.min(
          ...config.runtime.seriesKeys.map(key => {
            const seriesKey = getSeriesKey(key)
            return isNumber(d[seriesKey]) ? Number(cleanChars(d[seriesKey])) : Infinity
          })
        )
      )
    )

    return String(minNumberFromData)
  }

  const findPositiveNum = () => {
    if (!config.runtime.seriesKeys) {
      return false
    }
    return config.runtime.seriesKeys.some(key => data.some(d => d[getSeriesKey(key)] >= 0))
  }

  const cleanChars = value => {
    if (value === null || value === '') {
      return ''
    }

    return typeof value === 'string' ? value.replace(/[,$]/g, '') : value
  }

  const maxValue = Number(getMaxValueFromData())
  const minValue = Number(getMinValueFromData())
  const existPositiveValue = findPositiveNum()

  return { minValue, maxValue, existPositiveValue, isAllLine }
}

export default useReduceData
