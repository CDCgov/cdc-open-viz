import { addUIDs, getGeoFillColor } from '.'

// Cdc
import { supportedCountries } from '../data/supported-geos'
import { MapConfig } from '../types/MapConfig'

// Legend helper imports
import { initializeLegendResult, finalizeLegend } from './legendUtils'
import { processSpecialClasses, processSeparateZero, prepareNumericData } from './legendDataProcessing'
import { generateCategoryLegend } from './legendCategoryHandler'
import { generateEqualNumberLegendOld, generateEqualNumberLegendNew } from './legendEqualNumberHandler'
import { generateEqualIntervalLegend } from './legendEqualIntervalHandler'

export type LegendItem = {
  special?: boolean
  value?: string | number
  label?: string
  color?: string
  min?: number | null
  max?: number | null
  bin?: number
}

export type GeneratedLegend = {
  fromHash: number | null
  runtimeDataHash: number | null
  items: LegendItem[]
}

export const generateRuntimeLegend = (
  configObj: MapConfig,
  runtimeData: object[],
  hash: string,
  setConfig: Function,
  runtimeFilters: object[],
  legendMemo: React.MutableRefObject<Map<string, number>>,
  legendSpecialClassLastMemo: React.MutableRefObject<Map<string, number>>
): GeneratedLegend | [] => {
  try {
    // Throw errors if args missing
    if (!runtimeData) Error('No runtime data provided')
    if (!hash) Error('No hash provided')
    if (!configObj) Error('No config object provided')
    if (!legendMemo) Error('No legend memo provided')
    if (!legendSpecialClassLastMemo) Error('No legend special class last memo provided')

    // Define variables..
    const newLegendMemo = new Map() // Reset memoization
    const newLegendSpecialClassLastMemo = new Map() // Reset bin memoization
    const countryKeys = Object.keys(supportedCountries)
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name
    const isBubble = general.type === 'bubble'
    const categoricalCol = columns.categorical ? columns.categorical.name : undefined

    // filter out rows without a geo column
    addUIDs(configObj, configObj.columns.geo.name)
    const data = configObj.data.filter((row: any) => row.uid) // Filter out rows without UIDs

    // Initialize legend result
    const result = initializeLegendResult(hash, runtimeFilters)

    // Unified will base the legend off ALL the data maps received. Otherwise, it will use
    let dataSet = legend.unified ? data : Object?.values(runtimeData)

    let domainNums = Array.from(new Set(dataSet?.map(item => item[configObj.columns.primary.name])))
      .filter(d => typeof d === 'number' && !isNaN(d))
      .sort((a, b) => a - b)

    // Process special classes
    const { filteredDataSet } = processSpecialClasses(legend, dataSet, result, newLegendMemo, configObj)

    dataSet = filteredDataSet

    // Category
    if (legend.type === 'category') {
      generateCategoryLegend(
        dataSet,
        result,
        legend,
        primaryColName,
        categoricalCol,
        isBubble,
        newLegendMemo,
        configObj,
        data
      )

      finalizeLegend(
        result,
        legend,
        newLegendMemo,
        newLegendSpecialClassLastMemo,
        legendMemo,
        legendSpecialClassLastMemo
      )

      return result
    }

    let uniqueValues = {}
    dataSet.forEach(datum => {
      uniqueValues[datum[primaryColName]] = true
    })

    let legendNumber = Math.min(legend.numberOfItems, Object.keys(uniqueValues).length)

    // Handle separate zero
    const separateZeroResult = processSeparateZero(
      dataSet,
      legend,
      general,
      primaryColName,
      result,
      newLegendMemo,
      configObj,
      legendNumber
    )
    dataSet = separateZeroResult.dataSet
    legendNumber = separateZeroResult.legendNumber

    // Sort data for use in equalnumber or equalinterval
    dataSet = prepareNumericData(dataSet, general, primaryColName)

    // Equal Number
    if (legend.type === 'equalnumber') {
      if (!general.equalNumberOptIn) {
        generateEqualNumberLegendOld(dataSet, legendNumber, primaryColName, result, newLegendMemo, configObj)
      } else {
        generateEqualNumberLegendNew(dataSet, columns, general, legend, domainNums, result, newLegendMemo, configObj)
      }
    }

    // Equal Interval
    if (legend.type === 'equalinterval' && dataSet?.length !== 0) {
      if (!dataSet || dataSet.length === 0) {
        setConfig({
          ...configObj,
          runtime: {
            ...configObj.runtime,
            editorErrorMessage: 'Error setting equal interval legend type'
          }
        })
        return
      }

      generateEqualIntervalLegend(dataSet, legendNumber, primaryColName, result, newLegendMemo, configObj)
    }

    // Handle world map countries with no data
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

    // Finalize legend
    finalizeLegend(result, legend, newLegendMemo, newLegendSpecialClassLastMemo, legendMemo, legendSpecialClassLastMemo)

    return result
  } catch (e) {
    console.error(e)
    return []
  }
}

export default generateRuntimeLegend
