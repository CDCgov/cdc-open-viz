import { useCallback, useContext } from 'react'
import ConfigContext from '../context'
import { addUIDs } from './addUIDs'
import { applyColorToLegend } from './applyColorToLegend'
import { getGeoFillColor } from './colors'
import { indexOfIgnoreType } from './indexOfIgnoreType'
import { setBinNumbers } from './setBinNumbers'
import { sortSpecialClassesLast } from './sortSpecialClassesLast'
import { hashObj } from '@cdc/core/helpers/hashObj'
import { filterVizData } from '@cdc/core/helpers/filterVizData'
import numberFromString from '@cdc/core/helpers/numberFromString'
import { normalizeBreakpoints } from './breakpointHelpers'
import { sortAutomaticCategoryValues, sortByConfiguredCategoryOrder } from './categorySortHelpers'

import uniq from 'lodash/uniq'
import * as d3 from 'd3'

// Cdc
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { supportedCountries } from '../data/supported-geos'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { v2ColorDistribution } from '@cdc/core/helpers/palettes/colorDistributions'

// Types
import { MapConfig, DataRow, RuntimeFilters } from '../types/MapConfig'

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
  valueSuffix?: string
}

const CURRENCY_SYMBOLS = ['$', '\u20ac', '\u00a3', '\u00a5']
const NUMERIC_STRING_PATTERN = /^[+-]?(?:(?:\d{1,3}(?:,\d{3})+)|(?:\d+))(?:\.\d+)?$/

const stripAffix = (input: string, affix: unknown, side: 'start' | 'end') => {
  if (typeof affix !== 'string' || affix.trim() === '') return input

  const trimmedAffix = affix.trim()
  const trimmedInput = input.trim()

  if (side === 'start' && trimmedInput.startsWith(trimmedAffix)) {
    return trimmedInput.slice(trimmedAffix.length)
  }

  if (side === 'end' && trimmedInput.endsWith(trimmedAffix)) {
    return trimmedInput.slice(0, -trimmedAffix.length)
  }

  return input
}

const parseLegendNumber = (value: unknown, primaryColumn: MapConfig['columns']['primary']): number | null => {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null
  }

  if (typeof value !== 'string') return null

  const parsedValue = numberFromString(value)
  if (typeof parsedValue === 'number' && Number.isFinite(parsedValue)) return parsedValue

  let normalized = value.trim()
  if (!normalized) return null

  normalized = stripAffix(normalized, primaryColumn?.prefix, 'start').trim()
  normalized = stripAffix(normalized, primaryColumn?.suffix, 'end').trim()

  if (CURRENCY_SYMBOLS.includes(normalized[0])) {
    normalized = normalized.slice(1).trim()
  }

  if (normalized.endsWith('%')) {
    normalized = normalized.slice(0, -1).trim()
  }

  if (!NUMERIC_STRING_PATTERN.test(normalized)) {
    return null
  }

  const parsedNumber = Number(normalized.replace(/,/g, ''))
  return Number.isFinite(parsedNumber) ? parsedNumber : null
}

const inferNumericLegendValueSuffix = (
  dataSet: DataRow[],
  primaryColumnName: string,
  primaryColumn: MapConfig['columns']['primary']
): string | undefined => {
  if (primaryColumn?.suffix) return undefined

  const numericValues = dataSet
    .map(row => row?.[primaryColumnName])
    .filter(value => parseLegendNumber(value, primaryColumn) !== null)

  if (numericValues.length === 0) return undefined

  return numericValues.every(value => typeof value === 'string' && value.trim().endsWith('%')) ? '%' : undefined
}

export const generateRuntimeLegend = (
  configObj: MapConfig,
  runtimeData: DataRow[],
  hash: string,
  setConfig: (newMapConfig: MapConfig) => void,
  runtimeFilters: RuntimeFilters,
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
    const geoColName = columns.geo.name
    const getPrimaryNumber = (row: DataRow) => {
      return parseLegendNumber(row?.[primaryColName], columns.primary)
    }
    const isPrimaryZero = (row: DataRow) => getPrimaryNumber(row) === 0
    const isBubble = general.type === 'bubble'
    const categoricalCol = columns.categorical ? columns.categorical.name : undefined
    const getCategoryValue = (row: DataRow) =>
      isBubble && categoricalCol && row[categoricalCol] ? row[categoricalCol] : row[primaryColName]

    // filter out rows without a geo column
    addUIDs(configObj, geoColName)
    const data = configObj.data.filter(row => row.uid) // Filter out rows without UIDs

    const result = {
      fromHash: null,
      runtimeDataHash: null,
      items: [],
      valueSuffix: undefined as string | undefined
    }

    // Add a hash for what we're working from if passed
    if (hash) {
      result.fromHash = hash
    }

    result.runtimeDataHash = runtimeFilters?.fromHash

    // Unified will base the legend off ALL the data maps received. Otherwise, it will use
    let dataSet = legend.unified ? data : Object.values(runtimeData ?? {})

    let domainNums = Array.from(new Set(dataSet?.map(item => getPrimaryNumber(item))))
      .filter((d): d is number => typeof d === 'number' && !isNaN(d))
      .sort((a, b) => a - b)

    let specialClasses = 0
    let specialClassesHash = {}

    // Special classes
    if (legend.specialClasses.length) {
      if (typeof legend.specialClasses[0] === 'object') {
        legend.specialClasses.forEach(specialClass => {
          dataSet = dataSet.filter(row => {
            const val = String(row[specialClass.key])

            if (specialClass.value === val) {
              if (undefined === specialClassesHash[val]) {
                specialClassesHash[val] = true

                result.items.push({
                  special: true,
                  value: val,
                  label: specialClass.label
                })

                result.items[result.items.length - 1].color = applyColorToLegend(
                  result.items.length - 1,
                  configObj,
                  result.items
                )

                specialClasses += 1
              }

              let specialColor: number

              // color the configObj if val is in row
              specialColor = result.items.findIndex(p => p.value === val)

              newLegendMemo.set(hashObj(row), specialColor)

              return false
            }

            return true
          })
        })
      }
    }

    result.valueSuffix = inferNumericLegendValueSuffix(dataSet, primaryColName, columns.primary)

    // Category
    if (legend.type === 'category') {
      let uniqueValues = new Map()
      let count = 0
      const specialValues = new Set(result.items.filter(item => item.special).map(item => String(item.value)))
      const addCategoryValue = (row: DataRow, includeMemo = true) => {
        let value = getCategoryValue(row)
        if (undefined === value) return
        if (specialValues.has(String(value))) return

        if (false === uniqueValues.has(value)) {
          uniqueValues.set(value, includeMemo ? [hashObj(row)] : [])
          count++
        } else if (includeMemo) {
          uniqueValues.get(value).push(hashObj(row))
        }
      }

      for (let i = 0; i < dataSet.length; i++) {
        addCategoryValue(dataSet[i])
      }

      if (legend.includeNonGeoDataInDomain) {
        const noUidRows = configObj.data.filter(row => !row.uid)
        const domainOnlyRows =
          legend.unified || !Array.isArray(runtimeFilters) ? noUidRows : filterVizData(runtimeFilters, noUidRows)

        domainOnlyRows.forEach(row => addCategoryValue(row, false))
      }

      let sorted = [...uniqueValues.keys()]

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
        sorted = sortByConfiguredCategoryOrder(sorted, configuredOrder)
      } else {
        sorted = sortAutomaticCategoryValues(sorted)
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
          arr.forEach(hashedRow => newLegendMemo.set(hashedRow, lastIdx))
        }
      })

      // Add color to new legend item (normal items only, not special classes)
      for (let i = 0; i < result.items.length; i++) {
        if (!result.items[i].special) {
          result.items[i].color = applyColorToLegend(i, configObj, result.items)
        }
      }

      // Now apply special class colors last, to overwrite if needed
      for (let i = 0; i < result.items.length; i++) {
        if (result.items[i].special) {
          result.items[i].color = applyColorToLegend(i, configObj, result.items)
        }
      }

      // Overwrite legendMemo for special class rows to ensure correct color lookup
      result.items.forEach((item, idx) => {
        if (item.special) {
          // Find all rows in the data that match this special class value
          let specialRows = data.filter(row => {
            // If special class has a key, use it, otherwise use primaryColName
            const key = legend.specialClasses.find(sc => String(sc.value) === String(item.value))?.key || primaryColName
            return String(row[key]) === String(item.value)
          })
          specialRows.forEach(row => {
            newLegendMemo.set(hashObj(row), idx)
          })
        }
      })

      legendMemo.current = newLegendMemo

      // before returning the legend result
      // add property for bin number and set to index location
      setBinNumbers(result)

      // Move all special legend items from "Special Classes"  to the end of the legend
      sortSpecialClassesLast(result, legend)

      const assignSpecialClassLastIndex = (value, key) => {
        const newIndex = result.items.findIndex(d => d.bin === value)
        newLegendSpecialClassLastMemo.set(key, newIndex)
      }

      newLegendMemo.forEach(assignSpecialClassLastIndex)
      legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

      return result
    }

    let uniqueValues = {}
    dataSet.forEach(datum => {
      const primaryNumber = getPrimaryNumber(datum)
      if (primaryNumber !== null) {
        uniqueValues[primaryNumber] = true
      }
    })

    let legendNumber = Math.min(legend.numberOfItems, Object.keys(uniqueValues).length)
    const numericLegendTypes = ['equalnumber', 'equalinterval', 'manual']
    const canSeparateZero = true === legend.separateZero && numericLegendTypes.includes(legend.type)
    let hasSeparatedZero = false

    // Separate zero
    if (canSeparateZero) {
      const zeroRows = dataSet.filter(row => isPrimaryZero(row))
      const shouldSeparateZeroBaseline = legend.type === 'equalnumber' && domainNums.length > 0 && domainNums[0] > 0

      if (zeroRows.length > 0 || shouldSeparateZeroBaseline) {
        const zeroLegendIndex = result.items.length
        const nonZeroRows = dataSet.filter(row => !isPrimaryZero(row))
        hasSeparatedZero = true
        dataSet = nonZeroRows

        if (legend.type !== 'manual') {
          legendNumber = nonZeroRows.length > 0 ? Math.max(legendNumber - 1, 1) : 0
        }

        result.items.push({
          min: 0,
          max: 0
        })

        zeroRows.forEach(row => {
          newLegendMemo.set(hashObj(row), zeroLegendIndex)
        })

        // Add color to new legend item
        result.items[zeroLegendIndex].color = applyColorToLegend(zeroLegendIndex, configObj, result.items)
      }
    }

    // Sort data for use in equalnumber or equalinterval
    if (general.type !== 'us-geocode') {
      dataSet = dataSet
        .filter(row => getPrimaryNumber(row) !== null)
        .sort((a, b) => {
          let aNum = getPrimaryNumber(a)
          let bNum = getPrimaryNumber(b)

          return (aNum ?? 0) - (bNum ?? 0)
        })
    }

    // Equal Number
    if (legend.type === 'equalnumber') {
      const paletteName = configObj.general?.palette?.name || configObj.color
      const version = getColorPaletteVersion(configObj)
      let colors = colorPalettes?.[`v${version}`]?.[paletteName]
      // Fallback to a default palette if none is selected or found
      if (!colors) {
        const defaultPalette = version === 1 ? 'sequential_blue_green' : 'sequential_blue'
        colors = colorPalettes?.[`v${version}`]?.[defaultPalette]
      }

      if (!colors) {
        console.warn('No color palette found, using fallback colors')
        colors = ['#d3d3d3', '#a0a0a0', '#707070', '#404040'] // Gray fallback
      }

      const scaleDataSet = dataSet
      const legendItemCount = hasSeparatedZero ? legendNumber : legend.numberOfItems

      // Check if we should use v2 distribution logic for better contrast
      const isSequentialOrDivergent =
        paletteName && (paletteName.includes('sequential') || paletteName.includes('divergent'))
      const useV2Distribution = version === 2 && isSequentialOrDivergent && colors.length === 9 && legendItemCount <= 9

      let colorRange
      if (useV2Distribution && v2ColorDistribution[legendItemCount]) {
        // Use strategic color distribution for v2 sequential/divergent palettes
        const distributionIndices = v2ColorDistribution[legendItemCount]
        colorRange = distributionIndices.map(index => colors[index])
      } else {
        // Use existing logic for v1 palettes and other cases
        colorRange = colors.slice(0, legendItemCount)
      }

      const getDomain = () => {
        if (columns?.primary?.roundToPlace !== undefined) {
          return uniq(
            scaleDataSet.map(item => Number(getPrimaryNumber(item)).toFixed(Number(columns?.primary?.roundToPlace)))
          )
        }
        return uniq(scaleDataSet.map(item => Math.round(Number(getPrimaryNumber(item)))))
      }

      const getBreaks = scale => {
        if (columns?.primary?.roundToPlace !== undefined) {
          return scale.quantiles().map(b => Number(b)?.toFixed(Number(columns?.primary?.roundToPlace)))
        }
        return scale.quantiles().map(item => Number(Math.round(item)))
      }

      if (scaleDataSet.length !== 0 && legendItemCount > 0) {
        let scale = d3
          .scaleQuantile()
          .domain(getDomain()) // min/max values
          .range(colorRange) // set range to our colors array

        const breaks = getBreaks(scale).map(Number).filter(Number.isFinite)
        const cachedBreaks = [...breaks]
        const lowerBound = hasSeparatedZero ? 0 : Number(domainNums[0])

        if (Number.isFinite(lowerBound) && cachedBreaks[0] !== lowerBound) {
          cachedBreaks.unshift(lowerBound)
        }

        const max = Number(domainNums[domainNums.length - 1])
        const decimalPlace = Number(configObj?.columns?.primary?.roundToPlace) || 1
        const nextBoundaryIncrement = Math.pow(10, -decimalPlace)
        const zeroBoundaryIncrement =
          Number(configObj?.columns?.primary?.roundToPlace) > 0
            ? Math.pow(10, -Number(configObj?.columns?.primary?.roundToPlace))
            : 1
        const upperBounds = [...cachedBreaks.slice(1), max]

        upperBounds.forEach((upperBound, index) => {
          let min =
            hasSeparatedZero && index === 0
              ? zeroBoundaryIncrement
              : index === 0
              ? cachedBreaks[index]
              : Number(cachedBreaks[index]) + nextBoundaryIncrement
          let max = Number(upperBound)

          result.items.push({
            min,
            max
          })
          result.items[result.items.length - 1].color = applyColorToLegend(
            result.items.length - 1,
            configObj,
            result.items
          )

          scaleDataSet.forEach(row => {
            let number = getPrimaryNumber(row)
            let updated = result.items.length - 1

            if (result.items?.[updated]?.min === undefined || result.items?.[updated]?.max === undefined) return

            // Check if this row hasn't been assigned yet to prevent double assignment
            if (!newLegendMemo.has(hashObj(row))) {
              if (number >= result.items[updated].min && number <= result.items[updated].max) {
                newLegendMemo.set(hashObj(row), updated)
              }
            }
          })
        })
      }

      // Final pass: handle any unassigned rows
      scaleDataSet.forEach(row => {
        if (!newLegendMemo.has(hashObj(row))) {
          let number = getPrimaryNumber(row)
          let assigned = false

          // Find the correct range for this value - check both boundaries
          for (let itemIndex = 0; itemIndex < result.items.length; itemIndex++) {
            const item = result.items[itemIndex]

            if (item.min === undefined || item.max === undefined) continue

            // Check if value falls within range (inclusive of both min and max)
            if (number >= item.min && number <= item.max) {
              newLegendMemo.set(hashObj(row), itemIndex)
              assigned = true
              break
            }
          }

          // Fallback: if still not assigned, assign to closest range
          if (!assigned) {
            console.warn('Value not assigned to any range:', number, 'assigning to closest range')
            let closestIndex = 0
            let minDistance = Math.abs(number - (result.items[0].min + result.items[0].max) / 2)

            for (let i = 1; i < result.items.length; i++) {
              const midpoint = (result.items[i].min + result.items[i].max) / 2
              const distance = Math.abs(number - midpoint)
              if (distance < minDistance) {
                minDistance = distance
                closestIndex = i
              }
            }

            newLegendMemo.set(hashObj(row), closestIndex)
          }
        }
      })
    }

    if (legend.type === 'manual' && dataSet?.length !== 0) {
      const dataMin = getPrimaryNumber(dataSet[0])
      const dataMax = getPrimaryNumber(dataSet[dataSet.length - 1])
      const breakpoints = normalizeBreakpoints(legend.breakpoints).filter(
        breakpoint => breakpoint > dataMin && breakpoint < dataMax
      )
      const boundaries = [dataMin, ...breakpoints, dataMax]
      let pointer = 0

      for (let i = 0; i < boundaries.length - 1; i++) {
        const min = boundaries[i]
        const max = boundaries[i + 1]

        while (pointer < dataSet.length) {
          const value = getPrimaryNumber(dataSet[pointer])
          const withinUpperBound = i === boundaries.length - 2 ? value <= max : value <= max

          if (withinUpperBound) {
            newLegendMemo.set(hashObj(dataSet[pointer]), result.items.length)
            pointer += 1
            continue
          }

          break
        }

        result.items.push({ min, max })
        result.items[result.items.length - 1].color = applyColorToLegend(
          result.items.length - 1,
          configObj,
          result.items
        )
      }
    }

    // Equal Interval
    if (legend.type === 'equalinterval' && dataSet?.length !== 0 && legendNumber > 0) {
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
      dataSet = dataSet.filter(row => getPrimaryNumber(row) !== null)
      let dataMin = getPrimaryNumber(dataSet[0])
      let dataMax = getPrimaryNumber(dataSet[dataSet.length - 1])

      let pointer = 0 // Start at beginning of dataSet

      for (let i = 0; i < legendNumber; i++) {
        let interval = Math.abs(dataMax - dataMin) / legendNumber

        let min = dataMin + interval * i
        let max = min + interval

        // If this is the last loop, assign actual max of data as the end point
        if (i === legendNumber - 1) max = dataMax

        // Add rows in dataSet that belong to this new legend item since we've got the data sorted
        while (pointer < dataSet.length && getPrimaryNumber(dataSet[pointer]) <= max) {
          newLegendMemo.set(hashObj(dataSet[pointer]), result.items.length)
          pointer += 1
        }

        let range = {
          min: Math.round(min * 100) / 100,
          max: Math.round(max * 100) / 100
        }

        result.items.push(range)

        result.items[result.items.length - 1].color = applyColorToLegend(
          result.items.length - 1,
          configObj,
          result.items
        )
      }
    }

    setBinNumbers(result)

    legendMemo.current = newLegendMemo

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

    setBinNumbers(result)
    sortSpecialClassesLast(result, legend)

    const assignSpecialClassLastIndex = (value, key) => {
      const newIndex = result.items.findIndex(d => d.bin === value)
      newLegendSpecialClassLastMemo.set(key, newIndex)
    }
    newLegendMemo.forEach(assignSpecialClassLastIndex)
    legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

    return result
  } catch (e) {
    console.error(e)
    return {
      fromHash: null,
      runtimeDataHash: null,
      items: []
    }
  }
}
