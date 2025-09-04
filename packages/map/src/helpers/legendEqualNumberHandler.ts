import _ from 'lodash'
import * as d3 from 'd3'
import colorPalettes from '@cdc/core/data/colorPalettes'
import { applyColorToLegend, hashObj } from '.'
import { GeneratedLegend } from './generateRuntimeLegend'
import { MapConfig } from '../types/MapConfig'

/**
 * Generates an equal number legend (old implementation)
 */
export const generateEqualNumberLegendOld = (
  dataSet: any[],
  legendNumber: number,
  primaryColName: string,
  result: GeneratedLegend,
  newLegendMemo: Map<string, number>,
  configObj: MapConfig
): void => {
  let numberOfRows = dataSet.length
  let changingNumber = legendNumber
  let remainder: any
  let chunkAmt: any

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
      result.items as any
    )

    changingNumber -= 1
    numberOfRows -= chunkAmt
  }
}

/**
 * Generates an equal number legend (new implementation using D3)
 */
export const generateEqualNumberLegendNew = (
  dataSet: any[],
  columns: any,
  general: any,
  legend: any,
  domainNums: number[],
  result: GeneratedLegend,
  newLegendMemo: Map<string, number>,
  configObj: MapConfig
): void => {
  let colors = colorPalettes[configObj.color]
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

  const getBreaks = (scale: any) => {
    // backwards compatibility
    if (columns?.primary?.roundToPlace !== undefined && general?.equalNumberOptIn) {
      return scale.quantiles().map((b: any) => Number(b)?.toFixed(Number(columns?.primary?.roundToPlace)))
    }
    return scale.quantiles().map((item: any) => Number(Math.round(item)))
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
  cachedBreaks.map((item: any, index: any) => {
    const setMin = (index: any) => {
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

    const getDecimalPlace = (n: any) => {
      return Math.pow(10, -n)
    }

    const setMax = (index: any) => {
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
      result.items as any
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
        let minDistance = Math.abs(number - (result.items[0].min! + result.items[0].max!) / 2)

        for (let i = 1; i < result.items.length; i++) {
          const midpoint = (result.items[i].min! + result.items[i].max!) / 2
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
