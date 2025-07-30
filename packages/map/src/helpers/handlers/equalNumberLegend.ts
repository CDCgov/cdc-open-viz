import { hashObj, applyColorToLegend } from '../index'
import { LegendState } from '../../types/legendTypes'
import * as d3 from 'd3'
import _ from 'lodash'
import colorPalettes from '@cdc/core/data/colorPalettes'
import { MapConfig } from '../../types/MapConfig'

export const generateEqualNumberLegend = (
    state: LegendState,
    configObj: MapConfig,
    domainNums: number[]
): void => {
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name

    // start work on changing legend functionality
    // FALSE === ignore old version for now.
    if (!general.equalNumberOptIn) {
        generateOldEqualNumberLegend(state, configObj)
    } else {
        generateNewEqualNumberLegend(state, configObj, domainNums)
    }
}

const generateOldEqualNumberLegend = (
    state: LegendState,
    configObj: MapConfig
): void => {
    const primaryColName = configObj.columns.primary.name
    let numberOfRows = state.dataSet.length
    let changingNumber = state.legendNumber
    let remainder
    let chunkAmt

    // Loop through the array until it has been split into equal subarrays
    while (numberOfRows > 0) {
        remainder = numberOfRows % changingNumber
        chunkAmt = Math.floor(numberOfRows / changingNumber)

        if (remainder > 0) {
            chunkAmt += 1
        }

        let removedRows = state.dataSet.splice(0, chunkAmt)

        let min = removedRows[0][primaryColName],
            max = removedRows[removedRows.length - 1][primaryColName]

        // eslint-disable-next-line
        removedRows.forEach(row => {
            state.newLegendMemo.set(hashObj(row), state.result.items.length)
        })

        state.result.items.push({
            min,
            max
        })

        state.result.items[state.result.items.length - 1].color = applyColorToLegend(
            state.result.items.length - 1,
            configObj,
            state.result.items
        )

        changingNumber -= 1
        numberOfRows -= chunkAmt
    }
}

const generateNewEqualNumberLegend = (
    state: LegendState,
    configObj: MapConfig,
    domainNums: number[]
): void => {
    const { legend, columns } = configObj
    const primaryColName = columns.primary.name

    let colors = colorPalettes[configObj.color]
    let colorRange = colors.slice(0, legend.numberOfItems)

    const getDomain = () => {
        // backwards compatibility
        if (columns?.primary?.roundToPlace !== undefined && configObj.general?.equalNumberOptIn) {
            return _.uniq(
                state.dataSet.map(item => Number(item[columns.primary.name]).toFixed(Number(columns?.primary?.roundToPlace)))
            )
        }
        return _.uniq(state.dataSet.map(item => Math.round(Number(item[columns.primary.name]))))
    }

    const getBreaks = scale => {
        // backwards compatibility
        if (columns?.primary?.roundToPlace !== undefined && configObj.general?.equalNumberOptIn) {
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

        state.result.items.push({
            min,
            max
        })
        state.result.items[state.result.items.length - 1].color = applyColorToLegend(
            state.result.items.length - 1,
            configObj,
            state.result.items
        )

        state.dataSet.forEach(row => {
            let number = row[columns.primary.name]
            let updated = state.result.items.length - 1

            if (state.result.items?.[updated]?.min === undefined || state.result.items?.[updated]?.max === undefined) return

            // Check if this row hasn't been assigned yet to prevent double assignment
            if (!state.newLegendMemo.has(hashObj(row))) {
                if (number >= state.result.items[updated].min && number <= state.result.items[updated].max) {
                    state.newLegendMemo.set(hashObj(row), updated)
                }
            }
        })
    })

    // Final pass: handle any unassigned rows
    state.dataSet.forEach(row => {
        if (!state.newLegendMemo.has(hashObj(row))) {
            let number = row[columns.primary.name]
            let assigned = false

            // Find the correct range for this value - check both boundaries
            for (let itemIndex = 0; itemIndex < state.result.items.length; itemIndex++) {
                const item = state.result.items[itemIndex]

                if (item.min === undefined || item.max === undefined) continue

                // Check if value falls within range (inclusive of both min and max)
                if (number >= item.min && number <= item.max) {
                    state.newLegendMemo.set(hashObj(row), itemIndex)
                    assigned = true
                    break
                }
            }

            // Fallback: if still not assigned, assign to closest range
            if (!assigned) {
                console.warn('Value not assigned to any range:', number, 'assigning to closest range')
                let closestIndex = 0
                let minDistance = Math.abs(number - (state.result.items[0].min + state.result.items[0].max) / 2)

                for (let i = 1; i < state.result.items.length; i++) {
                    const midpoint = (state.result.items[i].min + state.result.items[i].max) / 2
                    const distance = Math.abs(number - midpoint)
                    if (distance < minDistance) {
                        minDistance = distance
                        closestIndex = i
                    }
                }

                state.newLegendMemo.set(hashObj(row), closestIndex)
            }
        }
    })
}