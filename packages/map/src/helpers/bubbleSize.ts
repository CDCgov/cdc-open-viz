import { scaleLinear } from 'd3-scale'
import type { BubbleLayer, DataRow } from '../types/MapConfig'
import { sortAutomaticCategoryValues, sortByConfiguredCategoryOrder } from './categorySortHelpers'
import { getBubbleLayerLocationSource, getFiniteBubbleNumber } from './bubbleLayers'

export const getBubbleSizeType = (layer?: BubbleLayer): NonNullable<BubbleLayer['sizeType']> =>
  layer?.sizeType ?? 'numeric'

export const isCategoricalBubbleSize = (layer?: BubbleLayer): boolean => getBubbleSizeType(layer) === 'category'

export const shouldIncludeNonGeoDataInBubbleSizeDomain = (layer?: BubbleLayer): boolean =>
  isCategoricalBubbleSize(layer) &&
  layer?.includeNonGeoDataInSizeDomain === true &&
  getBubbleLayerLocationSource(layer) === 'data-column'

export const getBubbleSizeCategoryValue = (value: unknown): string | null => {
  if (value === null || value === undefined) return null
  const stringValue = String(value).trim()
  return stringValue === '' ? null : stringValue
}

export const getOrderedBubbleSizeCategories = (
  rows: DataRow[],
  sizeColumnName: string,
  sizeCategoryValuesOrder: string[] = [],
  showBubbleZeros = false
): string[] => {
  const values = rows.reduce<string[]>((categoryValues, row) => {
    const value = getBubbleSizeCategoryValue(row[sizeColumnName])
    if (value === null) return categoryValues
    if (value === '0' && !showBubbleZeros) return categoryValues
    if (!categoryValues.includes(value)) categoryValues.push(value)
    return categoryValues
  }, [])

  const automaticallySortedValues = sortAutomaticCategoryValues(values)
  return sizeCategoryValuesOrder.length
    ? sortByConfiguredCategoryOrder(automaticallySortedValues, sizeCategoryValuesOrder)
    : automaticallySortedValues
}

export const createCategoricalBubbleSizeScale = (
  categories: string[],
  minBubbleSize: number,
  maxBubbleSize: number
) => {
  const categoryCount = categories.length
  const categoryIndexByValue = new Map(categories.map((category, index) => [category, index]))

  return (value: unknown): number | null => {
    const categoryValue = getBubbleSizeCategoryValue(value)
    if (categoryValue === null) return null

    const categoryIndex = categoryIndexByValue.get(categoryValue)
    if (categoryIndex === undefined) return null
    if (categoryCount <= 1) return minBubbleSize

    return minBubbleSize + ((maxBubbleSize - minBubbleSize) * categoryIndex) / (categoryCount - 1)
  }
}

export const getNumericBubbleSizeValues = (
  rows: DataRow[],
  sizeColumnName: string,
  showBubbleZeros = false
): number[] => {
  const values = rows
    .map(row => getFiniteBubbleNumber(row[sizeColumnName]))
    .filter((value): value is number => value !== null && value >= 0)

  return showBubbleZeros ? values : values.filter(value => value > 0)
}

export const createNumericBubbleSizeScale = (
  values: number[],
  minBubbleSize: number,
  maxBubbleSize: number,
  showBubbleZeros = false
) => {
  const domainMin = showBubbleZeros ? 0 : 1
  const domainMax = Math.max(...values, domainMin)

  return domainMax === domainMin
    ? () => minBubbleSize
    : scaleLinear().domain([domainMin, domainMax]).range([minBubbleSize, maxBubbleSize])
}
