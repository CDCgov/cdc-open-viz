import { supportedCountries } from '../data/supported-geos'
import { hashObj } from './hashObj'
import { setBinNumbers } from './setBinNumbers'
import { sortSpecialClassesLast } from './sortSpecialClassesLast'
import { applyColorToLegend } from './applyColorToLegend'
import { indexOfIgnoreType } from './indexOfIgnoreType'

export const generateCategoryLegend = (configObj, runtimeData, result, legendMemo, legendSpecialClassLastMemo) => {
  // Define variables..
  const newLegendMemo = new Map<string, number>(legendMemo.current) // Start with existing memo to preserve special classes
  const newLegendSpecialClassLastMemo = new Map<string, number>() // Reset bin memoization
  const countryKeys = Object.keys(supportedCountries)
  const { legend, columns, general } = configObj || {}
  const primaryColName = columns.primary.name
  const isBubble = general.type === 'bubble'
  const categoricalCol = columns.categorical ? columns.categorical.name : undefined
  let dataSet = legend.unified ? configObj.data : Object?.values(runtimeData)

  let uniqueValues = new Map()
  let count = 0

  for (let i = 0; i < dataSet.length; i++) {
    let row = dataSet[i]
    let value = isBubble && categoricalCol && row[categoricalCol] ? row[categoricalCol] : row[primaryColName]
    if (undefined === value) continue

    if (false === uniqueValues.has(value)) {
      uniqueValues.set(value, [String(hashObj(row))])
      count++
    } else {
      uniqueValues.get(value).push(String(hashObj(row)))
    }
  }

  let sorted = Array.from(uniqueValues.keys())

  if (legend.additionalCategories) {
    legend.additionalCategories.forEach(additionalCategory => {
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
      arr.forEach(hashedRow => newLegendMemo.set(String(hashedRow), lastIdx))
    }
  })

  // before returning the legend result
  // add property for bin number and set to index location
  setBinNumbers(result)

  // Store original legend items with their indices before sorting
  const originalCategoricalItems = result.items.map((item, index) => ({
    item: { ...item }, // Create a copy to avoid reference issues
    originalIndex: index
  }))

  // Move all special legend items from "Special Classes"  to the end of the legend
  sortSpecialClassesLast(result, legend)

  // Update legend memo to reflect new positions after sorting for categorical legends
  if (legend.showSpecialClassesLast) {
    const updatedLegendMemo = new Map()

    // Create a mapping from old index to new index
    const indexMapping = new Map()

    // For each item in the new sorted order, find its original position
    result.items.forEach((newItem, newIndex) => {
      const originalData = originalCategoricalItems.find(({ item }) => {
        if (newItem.special) {
          return item.special && item.value === newItem.value
        } else {
          return !item.special && item.value === newItem.value
        }
      })

      if (originalData) {
        indexMapping.set(originalData.originalIndex, newIndex)
      }
    })

    // Update all memo entries using the index mapping
    legendMemo.current.forEach((originalIndex, rowHash) => {
      const newIndex = indexMapping.get(originalIndex)
      if (newIndex !== undefined) {
        updatedLegendMemo.set(rowHash, newIndex)
      } else {
        // Fallback: clamp to valid range
        const clampedIndex = Math.min(originalIndex, result.items.length - 1)
        updatedLegendMemo.set(rowHash, clampedIndex)
      }
    })

    // Also preserve any new category mappings
    newLegendMemo.forEach((index, rowHash) => {
      if (!updatedLegendMemo.has(rowHash)) {
        updatedLegendMemo.set(rowHash, index)
      }
    })

    legendMemo.current = updatedLegendMemo

    // Apply colors based on original positions before sorting for categorical legends
    for (let i = 0; i < result.items.length; i++) {
      const currentItem = result.items[i]

      // Find the original position of this item
      const originalData = originalCategoricalItems.find(({ item }) => {
        if (currentItem.special) {
          return item.special && item.value === currentItem.value
        } else {
          return !item.special && item.value === currentItem.value
        }
      })

      if (originalData) {
        // Use the original index for color calculation to maintain proper color sequence
        const contextArray = originalCategoricalItems.slice(0, originalData.originalIndex + 1).map(o => o.item)
        const appliedColor = applyColorToLegend(originalData.originalIndex, configObj, contextArray)
        result.items[i].color = appliedColor
      } else {
        // Fallback: apply color normally
        const contextArray = result.items.slice(0, i + 1)
        const appliedColor = applyColorToLegend(i, configObj, contextArray)
        result.items[i].color = appliedColor
      }
    }
  } else {
    // Simple case: no special sorting, just apply colors normally
    // Merge new category mappings with existing special class mappings
    newLegendMemo.forEach((index, rowHash) => {
      legendMemo.current.set(rowHash, index)
    })

    for (let i = 0; i < result.items.length; i++) {
      // Create a context array that simulates the original incremental state
      const contextArray = result.items.slice(0, i + 1)
      const appliedColor = applyColorToLegend(i, configObj, contextArray)
      result.items[i].color = appliedColor
    }
  }

  const assignSpecialClassLastIndex = (value, key) => {
    const newIndex = result.items.findIndex(d => d.bin === value)
    newLegendSpecialClassLastMemo.set(key, newIndex)
  }

  // Use the current legend memo (which might have been updated after sorting)
  legendMemo.current.forEach(assignSpecialClassLastIndex)
  legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

  return result
}
