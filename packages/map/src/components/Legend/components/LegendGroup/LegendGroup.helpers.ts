import { sortAutomaticCategoryValues, sortByConfiguredCategoryOrder } from '../../../../helpers/categorySortHelpers'

export interface LegendItem {
  color: string
  label: string
  rawLabel?: string
  disabled?: boolean
  special: boolean
  runtimeIndex?: number
}

interface GroupedData {
  [key: string]: LegendItem[]
}

export const sortGroupedLegendItems = (items: LegendItem[], categoryValuesOrder: unknown[] = []) => {
  if (categoryValuesOrder.length) {
    return sortByConfiguredCategoryOrder(items, categoryValuesOrder, {
      getValue: item => item.rawLabel ?? item.label
    })
  }

  return sortAutomaticCategoryValues(items, item => item.rawLabel ?? item.label)
}

export const groupLegendItems = (
  items: LegendItem[],
  data: object[],
  groupByKey: string,
  columnKey: string,
  categoryValuesOrder: unknown[] = []
): GroupedData => {
  if (!groupByKey || !data || !items) return {}

  const result: GroupedData = {}
  const itemsByLabel = new Map<LegendItem['label'], LegendItem>()

  items.forEach(item => {
    if (!itemsByLabel.has(item.label)) {
      itemsByLabel.set(item.label, item)
    }
  })

  for (const row of data) {
    const groupValue = row[groupByKey]
    if (!groupValue) continue

    const label = row[columnKey]
    const match = itemsByLabel.get(label)
    if (!match) continue

    result[groupValue] ||= []
    if (!result[groupValue].some(i => i.label === label)) {
      result[groupValue].push(match)
    }
  }

  Object.entries(result).forEach(([group, items]) => {
    result[group] = sortGroupedLegendItems(items, categoryValuesOrder)
  })

  return result
}
