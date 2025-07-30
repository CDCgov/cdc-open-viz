import { setBinNumbers, sortSpecialClassesLast } from '.'

// Types
import { GeneratedLegend, LegendConfig, LegendState } from './../types/legendTypes'

// Utilities
import { validateInputs } from './utils/validateInputs'
import { prepareDataSet, getDomainNumbers, sortDataSet } from './utils/dataProcessing'
import { finalizeLegendItems, addWorldGeoLegendItem } from './utils/legendItems'

// Handlers
import { processSpecialClasses } from './handlers/specialClasses'
import { generateCategoryLegend } from './handlers/categoryLegend'
import { generateEqualNumberLegend } from './handlers/equalNumberLegend'
import { generateEqualIntervalLegend } from './handlers/equalIntervalLegend'
import { processSeparateZero } from './handlers/separateZero'

import { supportedCountries } from '../data/supported-geos'
import { MapConfig } from '../types/MapConfig'

const initializeLegendState = (
  configObj: MapConfig,
  runtimeData: object[],
  hash: string,
  runtimeFilters: object[]
): LegendState => {
  const { legend, columns, general } = configObj
  const primaryColName = columns.primary.name

  // Define variables..
  const newLegendMemo = new Map() // Reset memoization
  const newLegendSpecialClassLastMemo = new Map() // Reset bin memoization

  const dataSet = prepareDataSet(configObj, runtimeData)

  const result: GeneratedLegend = {
    fromHash: null,
    runtimeDataHash: null,
    items: []
  }

  // Add a hash for what we're working from if passed
  if (hash) {
    result.fromHash = hash
  }

  result.runtimeDataHash = runtimeFilters?.fromHash

  let uniqueValues = {}
  dataSet.forEach(datum => {
    uniqueValues[datum[primaryColName]] = true
  })

  let legendNumber = Math.min(legend.numberOfItems, Object.keys(uniqueValues).length)

  return {
    newLegendMemo,
    newLegendSpecialClassLastMemo,
    dataSet,
    result,
    legendNumber,
    specialClasses: 0,
    specialClassesHash: {}
  }
}

const finalizeState = (
  state: LegendState,
  configObj: LegendConfig,
  runtimeData: object[],
  data: any[],
  legendMemo: React.MutableRefObject<Map<string, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<string, number>>
): void => {
  const { legend } = configObj

  legendMemo.current = state.newLegendMemo

  setBinNumbers(state.result)

  // Handle world geo legend item
  addWorldGeoLegendItem(state.result, configObj, runtimeData, data)

  setBinNumbers(state.result)
  sortSpecialClassesLast(state.result, legend)

  const assignSpecialClassLastIndex = (value, key) => {
    const newIndex = state.result.items.findIndex(d => d.bin === value)
    state.newLegendSpecialClassLastMemo.set(key, newIndex)
  }

  state.newLegendMemo.forEach(assignSpecialClassLastIndex)
  legendSpecialClassLastMemo.current = state.newLegendSpecialClassLastMemo
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
    // 1. Validation
    validateInputs({
      configObj,
      runtimeData,
      hash,
      legendMemo,
      legendSpecialClassLastMemo
    })

    debugger

    // 2. Initialize state
    const state = initializeLegendState(configObj, runtimeData, hash, runtimeFilters)

    // 3. Get data references
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name
    const data = configObj.data.filter(row => row.uid) // Filtered data with UIDs

    // 4. Get domain numbers for later use
    const domainNums = getDomainNumbers(state.dataSet, primaryColName)

    // 5. Process special classes first
    processSpecialClasses(state, configObj, data)

    // 6. Handle legend generation by type
    if (legend.type === 'category') {
      generateCategoryLegend(state, configObj, data)

      legendMemo.current = state.newLegendMemo
      finalizeLegendItems(state.result, legend)

      const assignSpecialClassLastIndex = (value, key) => {
        const newIndex = state.result.items.findIndex(d => d.bin === value)
        state.newLegendSpecialClassLastMemo.set(key, newIndex)
      }

      state.newLegendMemo.forEach(assignSpecialClassLastIndex)
      legendSpecialClassLastMemo.current = state.newLegendSpecialClassLastMemo

      return state.result
    }

    // 7. Handle separate zero for non-category legends
    processSeparateZero(state, configObj)

    // 8. Sort dataset for equal number/interval processing
    state.dataSet = sortDataSet(state.dataSet, primaryColName, general.type)

    // 9. Generate legend based on type
    if (legend.type === 'equalnumber') {
      generateEqualNumberLegend(state, configObj, domainNums)
    } else if (legend.type === 'equalinterval') {
      generateEqualIntervalLegend(state, configObj, setConfig)
    }

    // 10. Finalize and return
    finalizeState(state, configObj, runtimeData, data, legendMemo, legendSpecialClassLastMemo)

    return state.result
  } catch (e) {
    console.error(e)
    return []
  }
}

export default generateRuntimeLegend