import { useCallback, useContext } from 'react'
import ConfigContext from '../context'
import {
  addUIDs,
  applyColorToLegend,
  getGeoFillColor,
  hashObj,
  indexOfIgnoreType,
  setBinNumbers,
  sortSpecialClassesLast
} from '.'

import _ from 'lodash'
import * as d3 from 'd3'

// Cdc
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { supportedCountries } from '../data/supported-geos'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'

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

    let domainNums = Array.from(new Set(dataSet?.map(item => item[configObj.columns.primary.name])))
      .filter(d => typeof d === 'number' && !isNaN(d))
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

    // Category
    if (legend.type === 'category') {
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
      uniqueValues[datum[primaryColName]] = true
    })

    let legendNumber = Math.min(legend.numberOfItems, Object.keys(uniqueValues).length)

    // Separate zero
    if (true === legend.separateZero && !general.equalNumberOptIn) {
      let addLegendItem = false

      for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i][primaryColName] === 0) {
          addLegendItem = true

          let row = dataSet.splice(i, 1)[0]

          newLegendMemo.set(hashObj(row), result.items.length)
          i--
        }
      }

      if (addLegendItem) {
        legendNumber -= 1 // This zero takes up one legend item

        // Add new legend item
        result.items.push({
          min: 0,
          max: 0
        })

        let lastIdx = result.items.length - 1

        // Add color to new legend item
        result.items[lastIdx].color = applyColorToLegend(lastIdx, configObj, result.items)
      }
    }

    // Sort data for use in equalnumber or equalinterval
    if (general.type !== 'us-geocode') {
      dataSet = dataSet
        .filter(row => typeof row[primaryColName] === 'number')
        .sort((a, b) => {
          let aNum = a[primaryColName]
          let bNum = b[primaryColName]

          return aNum - bNum
        })
    }

    // Equal Number
    if (legend.type === 'equalnumber') {
      // start work on changing legend functionality
      // FALSE === ignore old version for now.
      if (!general.equalNumberOptIn) {
        let numberOfRows = dataSet.length
        let changingNumber = legendNumber
        let remainder
        let chunkAmt

        // Loop through the array until it has been split into equal subarrays
        while (numberOfRows > 0) {
          remainder = numberOfRows % changingNumber
          chunkAmt = Math.floor(numberOfRows / changingNumber)

          if (remainder > 0) {
            chunkAmt += 1
          }

          let removedRows = dataSet.splice(0, chunkAmt)

          let min = removedRows[0][primaryColName],
            max = removedRows[removedRows.length - 1][primaryColName]

          // eslint-disable-next-line
          removedRows.forEach(row => {
            newLegendMemo.set(hashObj(row), result.items.length)
          })

          result.items.push({
            min,
            max
          })

          result.items[result.items.length - 1].color = applyColorToLegend(
            result.items.length - 1,
            configObj,
            result.items
          )

          changingNumber -= 1
          numberOfRows -= chunkAmt
        }
      } else {
        let colors = colorPalettes?.[`v${getColorPaletteVersion(configObj)}`]?.[configObj.color]
        let colorRange = colors.slice(0, legend.numberOfItems)

        const getDomain = () => {
          // backwards compatibility
          if (columns?.primary?.roundToPlace !== undefined && general?.equalNumberOptIn) {
            return _.uniq(
              dataSet.map(item => Number(item[columns.primary.name]).toFixed(Number(columns?.primary?.roundToPlace)))
            )
          }
          return _.uniq(dataSet.map(item => Math.round(Number(item[columns.primary.name]))))
        }

        const getBreaks = scale => {
          // backwards compatibility
          if (columns?.primary?.roundToPlace !== undefined && general?.equalNumberOptIn) {
            return scale.quantiles().map(b => Number(b)?.toFixed(Number(columns?.primary?.roundToPlace)))
          }
          return scale.quantiles().map(item => Number(Math.round(item)))
        }

        let scale = d3
          .scaleQuantile()
          .domain(getDomain()) // min/max values
          .range(colorRange) // set range to our colors array

        const breaks = getBreaks(scale)
        let cachedBreaks = null
        if (!cachedBreaks) {
          cachedBreaks = breaks
        }

        // if separating zero force it into breaks
        if (cachedBreaks[0] !== 0) {
          cachedBreaks.unshift(0)
        }

        // eslint-disable-next-line array-callback-return
        cachedBreaks.map((item, index) => {
          const setMin = index => {
            let min = cachedBreaks[index]

            // if first break is a seperated zero, min is zero
            if (index === 0 && legend.separateZero) {
              min = 0
            }

            // if we're on the second break, and separating out zero, increment min to 1.
            if (index === 1 && legend.separateZero) {
              min = 1
            }

            // For non-first ranges, add small increment to prevent overlap
            if (index > 0 && !legend.separateZero) {
              const decimalPlace = Number(configObj?.columns?.primary?.roundToPlace) || 1
              min = Number(cachedBreaks[index]) + Math.pow(10, -decimalPlace)
            }

            return min
          }

          const getDecimalPlace = n => {
            return Math.pow(10, -n)
          }

          const setMax = index => {
            let max = Number(breaks[index + 1])

            if (index === 0 && legend.separateZero) {
              max = 0
            }

            if (index + 1 === breaks.length) {
              max = Number(domainNums[domainNums.length - 1])
            }

            return max
          }

          let min = setMin(index)
          let max = setMax(index)

          result.items.push({
            min,
            max
          })
          result.items[result.items.length - 1].color = applyColorToLegend(
            result.items.length - 1,
            configObj,
            result.items
          )

          dataSet.forEach(row => {
            let number = row[columns.primary.name]
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

        // Final pass: handle any unassigned rows
        dataSet.forEach(row => {
          if (!newLegendMemo.has(hashObj(row))) {
            let number = row[columns.primary.name]
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
      dataSet = dataSet.filter(row => row[primaryColName] !== undefined)
      let dataMin = dataSet[0][primaryColName]
      let dataMax = dataSet[dataSet.length - 1][primaryColName]

      let pointer = 0 // Start at beginning of dataSet

      for (let i = 0; i < legendNumber; i++) {
        let interval = Math.abs(dataMax - dataMin) / legendNumber

        let min = dataMin + interval * i
        let max = min + interval

        // If this is the last loop, assign actual max of data as the end point
        if (i === legendNumber - 1) max = dataMax

        // Add rows in dataSet that belong to this new legend item since we've got the data sorted
        while (pointer < dataSet.length && dataSet[pointer][primaryColName] <= max) {
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
    return []
  }
}

export default generateRuntimeLegend
