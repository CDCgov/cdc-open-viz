import {
  addUIDs,
  applyColorToLegend,
  getGeoFillColor,
  hashObj,
  setBinNumbers,
  sortSpecialClassesLast
} from '.'

import _ from 'lodash'

// Cdc
import { supportedCountries } from '../data/supported-geos'
import { generateCategoryLegend } from './generateCategoryLegend'
import { generateEqualNumberLegend } from './generateEqualNumberLegend'
import { generateEqualIntervalLegend } from './generateEqualIntervalLegend'
import { generateSpecialClasses } from './generateSpecialClasses'

type LegendItem = {
  special?: boolean
  value: string | number
  label?: string
  color?: string
  min?: number
  max?: number
  bin?: number
}

export type GeneratedLegend = {
  fromHash: number
  runtimeDataHash: number
  items: LegendItem[] | []
}

// Helper function to convert and round values consistently
const convertAndRoundValue = (value: any, roundToPlace: number): number => {
  const num = Number(value)
  if (isNaN(num)) return NaN

  // Apply rounding to handle floating-point precision issues
  const factor = Math.pow(10, roundToPlace)
  return Math.round(num * factor) / factor
}

/**
 * Validates the required inputs for legend generation
 * @param inputs Required inputs for legend generation
 * @throws Logs error messages if any required input is missing
 */
const validateLegendInputs = (inputs: {
  runtimeData: any,
  hash: string,
  configObj: any,
  legendMemo: any,
  legendSpecialClassLastMemo: any
}): void => {
  const { runtimeData, hash, configObj, legendMemo, legendSpecialClassLastMemo } = inputs

  const required = {
    'runtime data': runtimeData,
    'hash': hash,
    'config object': configObj,
    'legend memo': legendMemo,
    'legend special class last memo': legendSpecialClassLastMemo
  }

  Object.entries(required).forEach(([name, value]) => {
    if (!value) console.error(`No ${name} provided`)
  })
}

/**
 * Checks if two legend items match based on their properties
 * @param item1 First legend item to compare
 * @param item2 Second legend item to compare
 * @returns True if items match according to their type
 */
const isMatchingLegendItem = (item1: LegendItem, item2: LegendItem): boolean => {
  if (item1.special) {
    return item2.special && item2.value === item1.value;
  }
  return !item2.special && item2.min === item1.min && item2.max === item2.max;
};

/**
 * Updates legend memo with special class indices
 * @param item Legend item to process
 * @param idx Current index in legend
 * @param data Source data
 * @param legend Legend configuration
 * @param primaryColName Primary column name
 * @param legendMemo Legend memo to update
 */
const updateSpecialClassMemo = (
  item: LegendItem,
  idx: number,
  data: any[],
  legend: any,
  primaryColName: string,
  legendMemo: Map<string, number>
): void => {
  if (!item.special) return;

  const specialRows = data.filter(row => {
    const key = legend.specialClasses.find(sc =>
      String(sc.value) === String(item.value))?.key || primaryColName;
    return String(row[key]) === String(item.value);
  });

  specialRows.forEach(row => {
    legendMemo.set(String(hashObj(row)), idx);
  });
};

/**
 * Gets a clamped index within valid range
 * @param originalIndex Original index to clamp
 * @param maxLength Maximum valid index
 * @returns Clamped index value
 */
const getClampedIndex = (originalIndex: number, maxLength: number): number => {
  return Math.min(originalIndex, maxLength - 1);
};

/**
 * Sorts and filters dataset by primary column values
 * @param dataSet The dataset to sort and filter
 * @param primaryColName The name of the primary column
 * @param geoType The type of geography being processed
 * @returns Sorted and filtered dataset
 */
const sortDatasetByPrimaryColumn = (
  dataSet: any[],
  primaryColName: string,
  geoType: string
): any[] => {
  if (geoType === 'us-geocode') {
    return dataSet;
  }

  return dataSet
    .filter(row => typeof row[primaryColName] === 'number')
    .sort((a, b) => a[primaryColName] - b[primaryColName]);
}

/**
 * Processes zero values in the dataset and adds them to a separate bucket
 * @param dataSet The dataset to process
 * @param result The legend result object to update
 * @param primaryColName The name of the primary column
 * @param newLegendMemo Memoization map for legend indices
 * @returns The number of legend items to decrement (1 if zero bucket was added, 0 otherwise)
 */
const processZeroBucket = (
  dataSet: any[],
  result: { items: LegendItem[] },
  primaryColName: string,
  newLegendMemo: Map<string, number>
): number => {
  let addLegendItem = false

  // First, add the zero bucket
  result.items.push({
    min: 0,
    max: 0,
    value: 0
  })

  // Then process zero values and assign them to the zero bucket (index 0)
  for (let i = 0; i < dataSet.length; i++) {
    if (dataSet[i][primaryColName] === 0) {
      addLegendItem = true
      let row = dataSet.splice(i, 1)[0]
      newLegendMemo.set(String(hashObj(row)), 0)
      i--
    }
  }

  return addLegendItem ? 1 : 0
}

// Helper function to apply colors to legend items
const applyLegendColors = (
  result: GeneratedLegend,
  configObj: any,
  originalItems?: Array<{ item: any; originalIndex: number }>
) => {
  for (let i = 0; i < result.items.length; i++) {
    let contextArray: any[]
    let colorIndex: number

    if (originalItems) {
      // Complex logic for when items have been reordered
      const currentItem = result.items[i]

      // Find the original position of this item
      const originalData = originalItems.find(({ item }) => isMatchingLegendItem(currentItem, item))

      if (originalData) {
        // Use the original index for color calculation to maintain proper color sequence
        contextArray = originalItems.slice(0, originalData.originalIndex + 1).map(o => o.item)
        colorIndex = originalData.originalIndex
      } else {
        // Fallback: apply color normally
        contextArray = result.items.slice(0, i + 1)
        colorIndex = i
      }
    } else {
      // Simple logic for normal order
      contextArray = result.items.slice(0, i + 1)
      colorIndex = i
    }

    const appliedColor = applyColorToLegend(colorIndex, configObj, contextArray)
    result.items[i].color = appliedColor
  }
}


export const generateRuntimeLegend = (
  configObj,
  runtimeData: object[],
  hash: string,
  setConfig: Function,
  runtimeFilters: object[],
  legendMemo: React.MutableRefObject<Map<string, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<string, number>>
): GeneratedLegend | [] => {
  try {

    validateLegendInputs({
      runtimeData,
      hash,
      configObj,
      legendMemo,
      legendSpecialClassLastMemo
    })

    // Define variables..
    const newLegendMemo = new Map<string, number>() // Reset memoization
    const newLegendSpecialClassLastMemo = new Map<string, number>() // Reset bin memoization
    const countryKeys = Object.keys(supportedCountries)
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name

    // filter out rows without a geo column
    addUIDs(configObj, configObj.columns.geo.name)
    const data = configObj.data.filter(row => row.uid) // Filter out rows without UIDs

    const result = {
      fromHash: null,
      runtimeDataHash: null,
      items: []
    }

    // Add a hash for what we're working from if passed
    if (hash) {
      result.fromHash = hash
    }

    result.runtimeDataHash = runtimeFilters?.fromHash

    // Unified will base the legend off ALL the data maps received. Otherwise, it will use
    let dataSet = legend.unified ? data : Object?.values(runtimeData)

    const roundToPlace = Number(columns?.primary?.roundToPlace) || 1
    let domainNums = Array.from(
      new Set(dataSet?.map(item => convertAndRoundValue(item[configObj.columns.primary.name], roundToPlace)))
    )
      .filter(d => typeof d === 'number' && !isNaN(d))
      .sort((a, b) => (a as number) - (b as number))

    let specialClasses = 0
    let specialClassesHash = {}

    // Process special classes
    const specialClassResult = generateSpecialClasses(configObj, dataSet, result, newLegendMemo)
    dataSet = specialClassResult.dataSet
    specialClasses = specialClassResult.specialClasses
    specialClassesHash = specialClassResult.specialClassesHash

    let uniqueValues = {}
    dataSet.forEach(datum => {
      uniqueValues[datum[primaryColName]] = true
    })

    let legendNumber = Math.min(legend.numberOfItems, Object.keys(uniqueValues).length)

    // Separate zero
    if (true === legend.separateZero && !general.equalNumberOptIn) {
      const decrementAmount = processZeroBucket(dataSet, result, primaryColName, newLegendMemo)
      legendNumber -= decrementAmount
    }

    // Sort data for use in equalnumber or equalinterval
    dataSet = sortDatasetByPrimaryColumn(dataSet, primaryColName, general.type)

    // Equal Number
    if (legend.type === 'equalnumber') {
      generateEqualNumberLegend(configObj, dataSet, result, newLegendMemo, legendNumber)
    }

    // Equal Interval
    if (legend.type === 'equalinterval') {
      generateEqualIntervalLegend(configObj, dataSet, result, newLegendMemo, legendNumber, setConfig)
    }

    setBinNumbers(result)

    if (general.geoType === 'world') {
      const runtimeDataKeys = Object.keys(runtimeData)
      const isCountriesWithNoDataState =
        data === undefined ? false : !countryKeys.every(countryKey => runtimeDataKeys.includes(countryKey))

      if (result.items.length > 0 && isCountriesWithNoDataState) {
        result.items.push({
          min: null,
          max: null,
          color: getGeoFillColor(configObj)
        })
      }
    }


    // Only do complex sorting and color mapping if showSpecialClassesLast is enabled
    if (legend.showSpecialClassesLast) {
      // Store original legend items with their indices before sorting
      const originalItems = result.items.map((item, index) => ({
        item: { ...item }, // Create a copy to avoid reference issues
        originalIndex: index
      }))

      sortSpecialClassesLast(result, legend)

      // Update legend memo to reflect new positions after sorting
      const updatedLegendMemo = new Map()

      // Create a mapping from old index to new index
      const indexMapping = new Map()

      // For each item in the new sorted order, find its original position
      result.items.forEach((newItem, newIndex) => {
        const originalData = originalItems.find(({ item }) => {
          if (newItem.special) {
            return item.special && item.value === newItem.value
          } else {
            return !item.special && item.min === newItem.min && item.max === newItem.max
          }
        })

        if (originalData) {
          indexMapping.set(originalData.originalIndex, newIndex)
        }
      })

      // Update all memo entries using the index mapping
      newLegendMemo.forEach((originalIndex, rowHash) => {
        const newIndex = indexMapping.get(originalIndex)
        if (newIndex !== undefined) {
          updatedLegendMemo.set(rowHash, newIndex)
        } else {
          // For unmapped entries, check if it was originally a special class
          const originalItem = originalItems[originalIndex]?.item
          if (originalItem?.special) {
            // Find the special class in its new position
            const specialIndex = result.items.findIndex(item => item.special && item.value === originalItem.value)
            if (specialIndex !== -1) {
              updatedLegendMemo.set(rowHash, specialIndex)
            } else {
              // Fallback: clamp to valid range
              const clampedIndex = getClampedIndex(originalIndex, result.items.length)
              updatedLegendMemo.set(rowHash, clampedIndex)
            }
          } else {
            // Fallback: clamp to valid range
            const clampedIndex = Math.min(originalIndex, result.items.length - 1)
            updatedLegendMemo.set(rowHash, clampedIndex)
          }
        }
      })

      legendMemo.current = updatedLegendMemo

      // Apply colors using the helper function
      applyLegendColors(result, configObj, originalItems)

      // Final step: Ensure special class rows are correctly mapped to their legend items
      result.items.forEach((item, idx) => {
        updateSpecialClassMemo(item, idx, data, legend, primaryColName, legendMemo.current)
      })
    } else {
      legendMemo.current = newLegendMemo

      applyLegendColors(result, configObj)
    }

    const assignSpecialClassLastIndex = (value, key) => {
      const newIndex = result.items.findIndex(d => d.bin === value)
      newLegendSpecialClassLastMemo.set(key, newIndex)
    }

    if (legend.type === 'category') {
      return generateCategoryLegend(configObj, runtimeData, result, legendMemo, legendSpecialClassLastMemo)
    }

    // Use the current legend memo (which might have been updated after sorting)
    legendMemo.current.forEach(assignSpecialClassLastIndex)
    legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

    return result
  } catch (e) {
    console.error(e)
    return []
  }
}

export default generateRuntimeLegend
