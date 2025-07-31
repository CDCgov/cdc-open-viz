import { setBinNumbers, sortSpecialClassesLast } from '.'

// Types
import { GeneratedLegend, LegendConfig, LegendState } from './../types/legendTypes'
import { MapConfig } from '../types/MapConfig'

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

const initializeLegendState = (
  configObj: MapConfig,
  runtimeData: object[],
  hash: string,
  runtimeFilters: object[]
): LegendState => {
  const { legend, columns } = configObj
  const primaryColName = columns.primary.name
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
    // Run validation checks
    validateInputs({
      configObj,
      runtimeData,
      hash,
      legendMemo,
      legendSpecialClassLastMemo
    })

    // Iniialize the legend state & defined variables
    const legendState = initializeLegendState(configObj, runtimeData, hash, runtimeFilters)
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name
    const data = configObj.data.filter(row => row.uid) // Filtered data with UIDs
    const domainNums = getDomainNumbers(legendState.dataSet, primaryColName)

    processSpecialClasses(legendState, configObj, data)

    // Handle category legends
    if (legend.type === 'category') {
      generateCategoryLegend(legendState, configObj, data)
      legendMemo.current = legendState.newLegendMemo
      finalizeLegendItems(legendState.result, legend)
      const assignSpecialClassLastIndex = (value, key) => {
        const newIndex = legendState.result.items.findIndex(d => d.bin === value)
        legendState.newLegendSpecialClassLastMemo.set(key, newIndex)
      }
      legendState.newLegendMemo.forEach(assignSpecialClassLastIndex)
      legendSpecialClassLastMemo.current = legendState.newLegendSpecialClassLastMemo
      return legendState.result
    }

    // Separate zero for non-category legends
    processSeparateZero(legendState, configObj)

    // Sort dataset for equal number/interval processing
    legendState.dataSet = sortDataSet(legendState.dataSet, primaryColName, general.type)

    // Generate legend based on type
    if (legend.type === 'equalnumber') {
      generateEqualNumberLegend(legendState, configObj, domainNums)
    } else if (legend.type === 'equalinterval') {
      generateEqualIntervalLegend(legendState, configObj, setConfig)
    }

    // Finalize and return
    finalizeState(legendState, configObj, runtimeData, data, legendMemo, legendSpecialClassLastMemo)

    return legendState.result
  } catch (e) {
    console.error(e)
    return []
  }
}

export default generateRuntimeLegend