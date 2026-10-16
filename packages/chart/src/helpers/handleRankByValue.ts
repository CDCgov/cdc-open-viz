import { ChartConfig } from '../types/ChartConfig'

const getNumericValue = number => {
  if (typeof number === 'string') return parseFloat(number.replace(/,/g, ''))
  return Number(number)
}

export const handleRankByValue = (data, passedConfig: ChartConfig) => {
  if (passedConfig.rankByValue) {
    const series = passedConfig.series[0].dataKey
    const sorted = data.sort((a, b) => getNumericValue(a[series]) - getNumericValue(b[series]))
    return passedConfig.rankByValue === 'asc' ? sorted : sorted.reverse()
  }
  return data
}
