import { Axis } from '@cdc/core/types/Axis'

export type DynamicYAxisCategory = {
  label: string
  upperBoundKey: string
  color?: string
}

export type DynamicYAxisCategoriesConfig = {
  lookupDataKey: string
  geographyKey: string
  lookupGeographyKey?: string
  categories: DynamicYAxisCategory[]
  axisMaxKey?: string
}

type DynamicYAxisCategoriesParams = {
  config?: DynamicYAxisCategoriesConfig
  data?: Record<string, any>[]
  lookupData?: Record<string, any>[]
}

type DynamicYAxisCategoriesResult = {
  categories: NonNullable<Axis['categories']>
  axisMax: number
} | null

const toFiniteNumber = value => {
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

export const getDynamicYAxisCategories = ({
  config,
  data = [],
  lookupData = []
}: DynamicYAxisCategoriesParams): DynamicYAxisCategoriesResult => {
  if (!config || !Array.isArray(lookupData) || lookupData.length === 0) return null

  const geography = data.find(row => row?.[config.geographyKey])?.[config.geographyKey]
  if (geography === undefined || geography === null) return null

  const lookupGeographyKey = config.lookupGeographyKey || config.geographyKey
  const lookupRow = lookupData.find(row => row?.[lookupGeographyKey] === geography)
  if (!lookupRow || !config.categories?.length) return null

  const upperBounds = config.categories.map(category => toFiniteNumber(lookupRow[category.upperBoundKey]))
  const lastUpperBound = upperBounds[upperBounds.length - 1]
  const axisMax = toFiniteNumber(config.axisMaxKey ? lookupRow[config.axisMaxKey] : lastUpperBound)

  if (axisMax === null || axisMax <= 0 || upperBounds.some(bound => bound === null)) return null

  const numericUpperBounds = upperBounds as number[]
  if (
    numericUpperBounds.some((bound, index) => index > 0 && bound <= numericUpperBounds[index - 1]) ||
    numericUpperBounds[numericUpperBounds.length - 1] !== axisMax
  ) {
    return null
  }

  const categories = config.categories.map((category, index) => ({
    label: category.label,
    height: String(numericUpperBounds[index] - (numericUpperBounds[index - 1] || 0)),
    color: category.color || '#f1f1f1'
  }))

  return { categories, axisMax }
}
