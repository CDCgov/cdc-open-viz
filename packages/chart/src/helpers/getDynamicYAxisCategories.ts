import { Axis } from '@cdc/core/types/Axis'

export type DynamicYAxisCategory = {
  label: string
  upperBoundKey: string
  color?: string
}

export type DynamicYAxisCategoriesConfig = {
  categories: DynamicYAxisCategory[]
}

type DynamicYAxisCategoriesParams = {
  config?: DynamicYAxisCategoriesConfig
  data?: Record<string, any>[]
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
  data = []
}: DynamicYAxisCategoriesParams): DynamicYAxisCategoriesResult => {
  if (!config || !data.length || !config.categories?.length) return null

  const currentRow = data.find(row =>
    config.categories.every(category => toFiniteNumber(row?.[category.upperBoundKey]) !== null)
  )
  if (!currentRow) return null

  const upperBounds = config.categories.map(category => toFiniteNumber(currentRow[category.upperBoundKey]))
  const lastUpperBound = upperBounds[upperBounds.length - 1]
  const axisMax = lastUpperBound

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
