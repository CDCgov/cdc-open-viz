import _ from 'lodash'
import * as d3 from 'd3'
import colorPalettes from '@cdc/core/data/colorPalettes'
import { hashObj } from './hashObj'

// Helper function to convert and round values consistently
const convertAndRoundValue = (value: any, roundToPlace: number): number => {
    const num = Number(value)
    if (isNaN(num)) return NaN

    // Apply rounding to handle floating-point precision issues
    const factor = Math.pow(10, roundToPlace)
    return Math.round(num * factor) / factor
}

export const generateEqualNumberLegend = (
    configObj,
    dataSet: any[],
    result: any,
    newLegendMemo: Map<string, number>,
    legendNumber: number
) => {
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name

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
                    newLegendMemo.set(String(hashObj(row)), result.items.length)
                })

                result.items.push({
                    min,
                    max
                })

                changingNumber -= 1
                numberOfRows -= chunkAmt
            }
        } else {
            // Use the appropriate rounding precision
            const roundToPlace = Number(columns?.primary?.roundToPlace) || 1
            const roundingPrecision =
                general?.equalNumberOptIn && columns?.primary?.roundToPlace !== undefined
                    ? Number(columns.primary.roundToPlace)
                    : roundToPlace

            let colors = colorPalettes[configObj.color]
            let colorRange = colors.slice(0, legend.numberOfItems)

            const getDomain = () => {
                return _.uniq(dataSet.map(item => convertAndRoundValue(item[columns.primary.name], roundingPrecision)))
            }

            const getBreaks = scale => {
                return scale.quantiles().map(b => convertAndRoundValue(b, roundingPrecision))
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

            // Handle separateZero logic: if separating zero and it's not already included, add it
            if (legend.separateZero) {
                // Add zero bucket first if separating zero
                result.items.push({
                    min: 0,
                    max: 0
                })

                // Assign all zero values to this bucket
                dataSet.forEach(row => {
                    let number = convertAndRoundValue(row[columns.primary.name], roundingPrecision)
                    if (number === 0) {
                        newLegendMemo.set(String(hashObj(row)), 0)
                    }
                })
            }

            // Create quantile breaks for non-zero values (or all values if not separating zero)
            const dataForBreaks = legend.separateZero
                ? dataSet.filter(row => convertAndRoundValue(row[columns.primary.name], roundingPrecision) !== 0)
                : dataSet

            if (dataForBreaks.length > 0) {
                // Recalculate scale and breaks for non-zero data
                const getNonZeroDomain = () => {
                    return _.uniq(
                        dataForBreaks.map(item => convertAndRoundValue(item[columns.primary.name], roundingPrecision))
                    ).sort((a: number, b: number) => a - b)
                }

                const nonZeroDomain = getNonZeroDomain()
                const numberOfBuckets = legend.separateZero ? legend.numberOfItems - 1 : legend.numberOfItems

                if (nonZeroDomain.length > 0 && numberOfBuckets > 0) {
                    let nonZeroScale = d3
                        .scaleQuantile()
                        .domain(nonZeroDomain)
                        .range(colorPalettes[configObj.color].slice(0, numberOfBuckets))

                    const quantileBreaks = nonZeroScale.quantiles().map(b => convertAndRoundValue(b, roundingPrecision))

                    // Create buckets based on quantile breaks
                    const createBuckets = () => {
                        const buckets = []
                        const sortedDomain = nonZeroDomain.sort((a: number, b: number) => a - b)

                        if (quantileBreaks.length === 0) {
                            // Single bucket case
                            buckets.push({
                                min: sortedDomain[0],
                                max: sortedDomain[sortedDomain.length - 1]
                            })
                        } else {
                            // First bucket: min value to first break
                            buckets.push({
                                min: sortedDomain[0],
                                max: quantileBreaks[0]
                            })

                            // Middle buckets: previous break + increment to current break
                            for (let i = 1; i < quantileBreaks.length; i++) {
                                const increment = Math.pow(10, -roundingPrecision)
                                buckets.push({
                                    min: convertAndRoundValue(quantileBreaks[i - 1] + increment, roundingPrecision),
                                    max: quantileBreaks[i]
                                })
                            }

                            // Last bucket: last break + increment to max value
                            if (quantileBreaks.length > 0) {
                                const increment = Math.pow(10, -roundingPrecision)
                                buckets.push({
                                    min: convertAndRoundValue(quantileBreaks[quantileBreaks.length - 1] + increment, roundingPrecision),
                                    max: sortedDomain[sortedDomain.length - 1]
                                })
                            }
                        }

                        return buckets
                    }

                    const buckets = createBuckets()

                    // Add buckets to result
                    buckets.forEach(bucket => {
                        result.items.push(bucket)
                    })

                    // Assign non-zero values to appropriate buckets
                    dataForBreaks.forEach(row => {
                        let number = convertAndRoundValue(row[columns.primary.name], roundingPrecision)
                        let assigned = false

                        for (let itemIndex = legend.separateZero ? 1 : 0; itemIndex < result.items.length; itemIndex++) {
                            const item = result.items[itemIndex]

                            if (item.min === undefined || item.max === undefined) continue

                            if (number >= item.min && number <= item.max) {
                                newLegendMemo.set(String(hashObj(row)), itemIndex)
                                assigned = true
                                break
                            }
                        }

                        // Fallback assignment if not assigned
                        if (!assigned) {
                            console.warn('Non-zero value not assigned to any range:', number)
                            const fallbackIndex = legend.separateZero ? 1 : 0
                            newLegendMemo.set(String(hashObj(row)), fallbackIndex)
                        }
                    })
                }
            }

            // Final pass: handle any unassigned rows
            dataSet.forEach(row => {
                if (!newLegendMemo.has(String(hashObj(row)))) {
                    let number = convertAndRoundValue(row[columns.primary.name], roundingPrecision)
                    let assigned = false

                    // Find the correct range for this value - check both boundaries
                    for (let itemIndex = 0; itemIndex < result.items.length; itemIndex++) {
                        const item = result.items[itemIndex]

                        if (item.min === undefined || item.max === undefined) continue

                        // Check if value falls within range (inclusive of both min and max)
                        if (number >= item.min && number <= item.max) {
                            newLegendMemo.set(String(hashObj(row)), itemIndex)
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

                        newLegendMemo.set(String(hashObj(row)), closestIndex)
                    }
                }
            })
        }
    }

    return result
}
