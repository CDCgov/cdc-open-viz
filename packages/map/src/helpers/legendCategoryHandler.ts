import { applyColorToLegend, hashObj, indexOfIgnoreType } from '.'
import { GeneratedLegend } from './generateRuntimeLegend'
import { MapConfig } from '../types/MapConfig'

/**
 * Generates a category-based legend
 */
export const generateCategoryLegend = (
  dataSet: any[],
  result: GeneratedLegend,
  legend: any,
  primaryColName: string,
  categoricalCol: string | undefined,
  isBubble: boolean,
  newLegendMemo: Map<string, number>,
  configObj: MapConfig,
  data: any[]
): void => {
  let uniqueValues = new Map()
  let count = 0

  for (let i = 0; i < dataSet.length; i++) {
    let row = dataSet[i]
    let value = isBubble && categoricalCol && row[categoricalCol] ? row[categoricalCol] : row[primaryColName]
    if (undefined === value) continue

    if (false === uniqueValues.has(value)) {
      uniqueValues.set(value, [hashObj(row)])
      count++
    } else {
      uniqueValues.get(value).push(hashObj(row))
    }
  }

  let sorted = [...uniqueValues.keys()]

  if (legend.additionalCategories) {
    legend.additionalCategories.forEach((additionalCategory: any) => {
      if (additionalCategory && indexOfIgnoreType(sorted, additionalCategory) === -1) {
        sorted.push(additionalCategory)
      }
    })
  }

  // Apply custom sorting or regular sorting
  let configuredOrder = legend.categoryValuesOrder ?? []

  if (configuredOrder.length) {
    sorted.sort((a, b) => {
      let aVal = configuredOrder.indexOf(a)
      let bVal = configuredOrder.indexOf(b)
      if (aVal === bVal) return 0
      if (aVal === -1) return 1
      if (bVal === -1) return -1
      return aVal - bVal
    })
  } else {
    sorted.sort((a, b) => a - b)
  }

  // Add legend item for each
  sorted.forEach(val => {
    // Skip if this value is already a special class
    if (result?.items?.some(item => item.value === val && item.special)) return
    result.items.push({
      value: val
    })

    let lastIdx = result.items.length - 1
    let arr = uniqueValues.get(val)

    if (arr) {
      arr.forEach((hashedRow: any) => newLegendMemo.set(hashedRow, lastIdx))
    }
  })

  // Add color to new legend item (normal items only, not special classes)
  for (let i = 0; i < result.items.length; i++) {
    if (!result.items[i].special) {
      result.items[i].color = applyColorToLegend(i, configObj, result.items as any)
    }
  }

  // Now apply special class colors last, to overwrite if needed
  for (let i = 0; i < result.items.length; i++) {
    if (result.items[i].special) {
      result.items[i].color = applyColorToLegend(i, configObj, result.items as any)
    }
  }

  // Overwrite legendMemo for special class rows to ensure correct color lookup
  result.items.forEach((item, idx) => {
    if (item.special) {
      // Find all rows in the data that match this special class value
      let specialRows = data.filter(row => {
        // If special class has a key, use it, otherwise use primaryColName
        const key =
          legend.specialClasses.find((sc: any) => String(sc.value) === String(item.value))?.key || primaryColName
        return String(row[key]) === String(item.value)
      })
      specialRows.forEach(row => {
        newLegendMemo.set(hashObj(row), idx)
      })
    }
  })
}
