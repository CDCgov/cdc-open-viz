import { ChartConfig } from '../types/ChartConfig'

type DataRow = Record<string, any>

export const isCustomCategoryOrderActive = (config: Pick<ChartConfig, 'xAxis'>) => {
  return (
    config.xAxis?.type === 'categorical' &&
    config.xAxis?.categoryOrderType === 'custom' &&
    Array.isArray(config.xAxis?.categoryOrder) &&
    config.xAxis.categoryOrder.length > 0 &&
    Boolean(config.xAxis?.dataKey)
  )
}

export const getCategoryValues = (data: DataRow[] = [], dataKey?: string): string[] => {
  if (!dataKey || !Array.isArray(data)) return []

  const values = data.map(row => String(row?.[dataKey] ?? '')).filter(value => value !== '')
  return Array.from(new Set(values))
}

export const getOrderedCategoryValues = (
  data: DataRow[] = [],
  dataKey?: string,
  categoryOrder: string[] = []
): string[] => {
  const values = getCategoryValues(data, dataKey)
  if (!categoryOrder?.length) return values

  const configuredValues = categoryOrder.map(String)
  const extras = values.filter(value => !configuredValues.includes(value))

  return [...configuredValues.filter(value => values.includes(value)), ...extras]
}

export const sortByCategoryOrder = (data: DataRow[] = [], config: Pick<ChartConfig, 'xAxis'>): DataRow[] => {
  if (!Array.isArray(data) || !isCustomCategoryOrderActive(config)) return data

  const dataKey = config.xAxis.dataKey
  const categoryOrder = config.xAxis.categoryOrder || []
  const indexByValue = new Map(categoryOrder.map((value, index) => [String(value), index]))

  return data
    .map((row, originalIndex) => ({ row, originalIndex }))
    .sort((a, b) => {
      const indexA = indexByValue.get(String(a.row?.[dataKey] ?? ''))
      const indexB = indexByValue.get(String(b.row?.[dataKey] ?? ''))
      const rankA = indexA ?? Number.MAX_SAFE_INTEGER
      const rankB = indexB ?? Number.MAX_SAFE_INTEGER

      return rankA === rankB ? a.originalIndex - b.originalIndex : rankA - rankB
    })
    .map(({ row }) => row)
}
