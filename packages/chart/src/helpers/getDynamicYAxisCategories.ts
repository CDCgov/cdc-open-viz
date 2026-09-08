import { Axis } from '@cdc/core/types/Axis'

export type DynamicYAxisCategory = {
  label: string
  upperBoundKey?: string
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
  axisMax: number | null
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
    config.categories.every(
      (category, index) =>
        (index === config.categories.length - 1 && !category.upperBoundKey) ||
        toFiniteNumber(row?.[category.upperBoundKey]) !== null
    )
  )
  if (!currentRow) return null

  const upperBounds = config.categories.map(category =>
    category.upperBoundKey ? toFiniteNumber(currentRow[category.upperBoundKey]) : null
  )
  const lastCategory = config.categories[config.categories.length - 1]
  const hasOpenEndedFinalCategory = !lastCategory.upperBoundKey
  const axisMax = hasOpenEndedFinalCategory ? null : upperBounds[upperBounds.length - 1]
  const resolvedUpperBounds = hasOpenEndedFinalCategory ? upperBounds.slice(0, -1) : upperBounds

  if (resolvedUpperBounds.some(bound => bound === null)) return null
  if (!hasOpenEndedFinalCategory && (axisMax === null || axisMax <= 0)) return null

  const numericUpperBounds = resolvedUpperBounds as number[]
  if (numericUpperBounds.some((bound, index) => index > 0 && bound <= numericUpperBounds[index - 1])) {
    return null
  }

  const categories = config.categories.map((category, index) => ({
    label: category.label,
    height:
      hasOpenEndedFinalCategory && index === config.categories.length - 1
        ? ''
        : String(numericUpperBounds[index] - (numericUpperBounds[index - 1] || 0)),
    color: category.color || '#f1f1f1'
  }))

  return { categories, axisMax }
}
