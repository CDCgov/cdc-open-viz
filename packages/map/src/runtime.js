import { produce, current } from 'immer'
import CoveHelper from '@cdc/core/helpers/cove'
import useStore from '@cdc/core/store/store'
import * as d3 from 'd3'

import colorPalettes from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { supportedStates, supportedTerritories, supportedCountries, supportedCounties, supportedCities, supportedRegions } from './data/supported-geos'

export const stateKeys = Object.keys(supportedStates)
export const territoryKeys = Object.keys(supportedTerritories)
export const regionKeys = Object.keys(supportedRegions)
export const countryKeys = Object.keys(supportedCountries)
export const countyKeys = Object.keys(supportedCounties)
export const cityKeys = Object.keys(supportedCities)

// returns string[]
const getUniqueValues = (data, columnName) => {
  let result = {}

  for (let i = 0; i < data.length; i++) {
    let val = data[i][columnName]

    if (undefined === val) continue

    if (undefined === result[val]) {
      result[val] = true
    }
  }

  return Object.keys(result)
}

const validateFipsCodeLength = config => {
  return produce(config, draft => {
    if (draft.general.geoType === 'us-county' || draft.general.geoType === 'single-state' || (draft.general.geoType === 'us' && draft.data)) {
      draft.data.forEach(dataPiece => {
        if (dataPiece[draft.columns.geo.name]) {
          if (!isNaN(parseInt(dataPiece[draft.columns.geo.name])) && dataPiece[draft.columns.geo.name].length === 4) {
            dataPiece[draft.columns.geo.name] = 0 + dataPiece[draft.columns.geo.name]
          }
          dataPiece[draft.columns.geo.name] = dataPiece[draft.columns.geo.name].toString()
        }
      })
    }
  })
}

export const hashObj = row => {
  try {
    if (!row) throw new Error('No row supplied to hashObj')

    let str = JSON.stringify(row)
    let hash = 0

    if (str.length === 0) return hash

    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }

    return hash
  } catch (e) {
    console.error(e)
  }
}

const indexOfIgnoreType = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (item == arr[i]) {
      return i
    }
  }
  return -1
}

export const generateRuntimeLegend = (config, runtimeData) => {
  return produce(config, draft => {
    const newLegendMemo = new Map() // Reset memoization
    const primaryCol = config.columns.primary.name,
      isBubble = config.general.type === 'bubble',
      categoricalCol = config.columns.categorical ? config.columns.categorical.name : undefined,
      type = config.legend.type,
      number = config.legend.numberOfItems,
      result = []

    // Unified will based the legend off ALL of the data maps received. Otherwise, it will use
    let dataSet = config.legend.unified ? config.data : Object.values(runtimeData)

    const colorDistributions = {
      1: [1],
      2: [1, 3],
      3: [1, 3, 5],
      4: [0, 2, 4, 6],
      5: [0, 2, 4, 6, 7],
      6: [0, 2, 3, 4, 5, 7],
      7: [0, 2, 3, 4, 5, 6, 7],
      8: [0, 2, 3, 4, 5, 6, 7, 8],
      9: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    const applyColorToLegend = legendIdx => {
      // Default to "bluegreen" color scheme if the passed color isn't valid
      let mapColorPalette = config.customColors || colorPalettes[config.color] || colorPalettes['bluegreen']

      // Handle Region Maps need for a 10th color
      if (config.general.geoType === 'us-region' && mapColorPalette.length < 10 && mapColorPalette.length > 8) {
        if (!config.general.palette.isReversed) {
          mapColorPalette.push(chroma(mapColorPalette[8]).darken(0.75).hex())
        } else {
          mapColorPalette.unshift(chroma(mapColorPalette[0]).darken(0.75).hex())
        }
      }

      let colorIdx = legendIdx - specialClasses

      // Special Classes (No Data)
      if (result[legendIdx].special) {
        const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses)

        return specialClassColors[legendIdx]
      }

      if (config.color.includes('qualitative')) return mapColorPalette[colorIdx]

      let amt = Math.max(result.length - specialClasses, 1)
      let distributionArray = colorDistributions[amt]

      let specificColor
      if (distributionArray) {
        specificColor = distributionArray[colorIdx]
      } else if (mapColorPalette[colorIdx]) {
        specificColor = colorIdx
      } else {
        specificColor = mapColorPalette.length - 1
      }

      return mapColorPalette[specificColor]
    }

    let specialClasses = 0
    let specialClassesHash = {}

    // Special classes
    if (config.legend.specialClasses.length) {
      if (typeof config.legend.specialClasses[0] === 'object') {
        config.legend.specialClasses.forEach(specialClass => {
          dataSet = dataSet.filter(row => {
            const val = String(row[specialClass.key])

            if (specialClass.value === val) {
              if (undefined === specialClassesHash[val]) {
                specialClassesHash[val] = true

                result.push({
                  special: true,
                  value: val,
                  label: specialClass.label
                })

                result[result.length - 1].color = applyColorToLegend(result.length - 1)

                specialClasses += 1
              }

              let specialColor = ''

              // color the state if val is in row
              specialColor = result.findIndex(p => p.value === val)

              newLegendMemo.set(hashObj(row), specialColor)

              return false
            }

            return true
          })
        })
      } else {
        dataSet = dataSet.filter(row => {
          const val = row[primaryCol]

          if (config.legend.specialClasses.includes(val)) {
            // apply the special color to the legend
            if (undefined === specialClassesHash[val]) {
              specialClassesHash[val] = true

              result.push({
                special: true,
                value: val
              })

              result[result.length - 1].color = applyColorToLegend(result.length - 1)

              specialClasses += 1
            }

            let specialColor = ''

            // color the state if val is in row
            if (Object.values(row).includes(val)) {
              specialColor = result.findIndex(p => p.value === val)
            }

            newLegendMemo.set(hashObj(row), specialColor)

            return false
          }

          return true
        })
      }
    }

    // Category
    if ('category' === type) {
      let uniqueValues = new Map()
      let count = 0

      for (let i = 0; i < dataSet.length; i++) {
        let row = dataSet[i]
        let value = isBubble && categoricalCol && row[categoricalCol] ? row[categoricalCol] : row[primaryCol]
        if (undefined === value) continue

        if (false === uniqueValues.has(value)) {
          uniqueValues.set(value, [hashObj(row)])
          count++
        } else {
          uniqueValues.get(value).push(hashObj(row))
        }

        if (count === 10) break // Can only have 10 categorical items for now
      }

      let sorted = [...uniqueValues.keys()]

      if (config.legend.additionalCategories) {
        config.legend.additionalCategories.forEach(additionalCategory => {
          if (additionalCategory && indexOfIgnoreType(sorted, additionalCategory) === -1) {
            sorted.push(additionalCategory)
          }
        })
      }

      // Apply custom sorting or regular sorting
      let configuredOrder = config.legend.categoryValuesOrder ?? []

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
        result.push({
          value: val
        })

        let lastIdx = result.length - 1
        let arr = uniqueValues.get(val)

        if (arr) {
          arr.forEach(hashedRow => newLegendMemo.set(hashedRow, lastIdx))
        }
      })

      // Add color to new legend item
      for (let i = 0; i < result.length; i++) {
        result[i].color = applyColorToLegend(i)
      }

      return result
    }

    let uniqueValues = {}
    dataSet.forEach(datum => {
      uniqueValues[datum[primaryCol]] = true
    })

    let legendNumber = Math.min(number, Object.keys(uniqueValues).length)

    // Separate zero
    if (true === config.legend.separateZero && !config.general.equalNumberOptIn) {
      let addLegendItem = false

      for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i][primaryCol] === 0) {
          addLegendItem = true

          let row = dataSet.splice(i, 1)[0]

          newLegendMemo.set(hashObj(row), result.length)
          i--
        }
      }

      if (addLegendItem) {
        legendNumber -= 1 // This zero takes up one legend item

        // Add new legend item
        result.push({
          min: 0,
          max: 0
        })

        let lastIdx = result.length - 1

        // Add color to new legend item
        result[lastIdx].color = applyColorToLegend(lastIdx)
      }
    }

    // Sort data for use in equalnumber or equalinterval
    if (config.general.type !== 'us-geocode') {
      dataSet = dataSet
        .filter(row => typeof row[primaryCol] === 'number')
        .sort((a, b) => {
          let aNum = a[primaryCol]
          let bNum = b[primaryCol]

          return aNum - bNum
        })
    }

    // Equal Number
    if (type === 'equalnumber') {
      // start work on changing legend functionality
      // FALSE === ignore old version for now.
      if (!config.general.equalNumberOptIn) {
        let numberOfRows = dataSet.length

        let remainder
        let changingNumber = legendNumber

        let chunkAmt

        // Loop through the array until it has been split into equal subarrays
        while (numberOfRows > 0) {
          remainder = numberOfRows % changingNumber
          chunkAmt = Math.floor(numberOfRows / changingNumber)

          if (remainder > 0) {
            chunkAmt += 1
          }

          let removedRows = dataSet.splice(0, chunkAmt)

          let min = removedRows[0][primaryCol],
            max = removedRows[removedRows.length - 1][primaryCol]

          removedRows.forEach(row => {
            newLegendMemo.set(hashObj(row), result.length)
          })

          result.push({
            min,
            max
          })

          result[result.length - 1].color = applyColorToLegend(result.length - 1)

          changingNumber -= 1
          numberOfRows -= chunkAmt
        }
      } else {
        // get nums
        let hasZeroInData = dataSet.filter(obj => obj[config.columns.primary.name] === 0).length > 0
        let domainNums = new Set(dataSet.map(item => item[config.columns.primary.name]))

        domainNums = d3.extent(domainNums)

        let colors = colorPalettes[config.color]
        let colorRange = colors.slice(0, config.legend.numberOfItems)

        let scale = d3
          .scaleQuantile()
          .domain([...new Set(dataSet.map(item => Math.round(item[config.columns.primary.name])))]) // min/max values
          .range(colorRange) // set range to our colors array

        let breaks = scale.quantiles()

        breaks = breaks.map(item => Math.round(item))

        // if seperating zero force it into breaks
        if (breaks[0] !== 0) {
          breaks.unshift(0)
        }

        breaks.map((item, index) => {
          const setMin = index => {
            let min = breaks[index]

            // if first break is a seperated zero, min is zero
            if (index === 0 && config.legend.separateZero) {
              min = 0
            }

            // if we're on the second break, and seperating out zero, increment min to 1.
            if (index === 1 && config.legend.separateZero) {
              min = 1
            }

            // // in starting position and zero in the data
            // if((index === config.legend.specialClasses?.length ) && (config.legend.specialClasses.length !== 0)) {
            //     min = breaks[index]
            // }
            return min
          }

          const setMax = (index, min) => {
            let max = breaks[index + 1] - 1

            // check if min and max range are the same
            // if (min === max + 1) {
            //     max = breaks[index + 1]
            // }

            if (index === 0 && config.legend.separateZero) {
              max = 0
            }
            // if ((index === config.legend.specialClasses.length && config.legend.specialClasses.length !== 0) && !config.legend.separateZero && hasZeroInData) {
            //     max = 0;
            // }

            if (index + 1 === breaks.length) {
              max = domainNums[1]
            }

            return max
          }

          let min = setMin(index)
          let max = setMax(index, min)

          result.push({
            min,
            max,
            color: scale(item)
          })

          dataSet.forEach((row, dataIndex) => {
            let number = row[config.columns.primary.name]
            let updated = 0

            // check if we're seperating zero out
            updated = config.legend.separateZero && hasZeroInData ? index : index
            // check for special classes
            updated = config.legend.specialClasses ? updated + config.legend.specialClasses.length : index

            if (result[updated]?.min === (null || undefined) || result[updated]?.max === (null || undefined)) return

            if (number >= result[updated].min && number <= result[updated].max) {
              newLegendMemo.set(hashObj(row), updated)
            }
          })
        })
      }
    }

    // Equal Interval

    if (type === 'equalinterval' && dataSet?.length !== 0) {
      if (!dataSet || dataSet.length === 0) {
        config.runtime.editorErrorMessage = 'Error setting equal interval legend type'
        return
      }
      dataSet = dataSet.filter(row => row[primaryCol] !== undefined)
      let dataMin = dataSet[0][primaryCol]
      let dataMax = dataSet[dataSet.length - 1][primaryCol]

      let pointer = 0 // Start at beginning of dataSet

      for (let i = 0; i < legendNumber; i++) {
        let interval = Math.abs(dataMax - dataMin) / legendNumber

        let min = dataMin + interval * i
        let max = min + interval

        // If this is the last loop, assign actual max of data as the end point
        if (i === legendNumber - 1) max = dataMax

        // Add rows in dataSet that belong to this new legend item since we've got the data sorted
        while (pointer < dataSet.length && dataSet[pointer][primaryCol] <= max) {
          newLegendMemo.set(hashObj(dataSet[pointer]), result.length)
          pointer += 1
        }

        let range = {
          min: Math.round(min * 100) / 100,
          max: Math.round(max * 100) / 100
        }

        result.push(range)

        result[result.length - 1].color = applyColorToLegend(result.length - 1)
      }
    }

    result.forEach((legendItem, idx) => {
      legendItem.color = applyColorToLegend(idx, specialClasses, result)
    })

    draft.legend = result
  })
}

// Tag each row with a UID. Helps with filtering/placing geos. Not enumerable so doesn't show up in loops/console logs except when directly addressed ex row.uid
// We are mutating state in place here (depending on where called) - but it's okay, this isn't used for rerender
export const addUIDs = (config, fromColumn, debug = false) => {
  const newConfig = produce(config, draft => {
    draft.data.forEach(row => {
      let uid = null

      if (row.uid) row.uid = null // Wipe existing UIDs

      // United States check
      if ('us' === draft.general.geoType && draft.columns.geo.name) {
        // const geoName = row[draft.columns.geo.name] && typeof row[draft.columns.geo.name] === "string" ? row[draft.columns.geo.name].toUpperCase() : '';
        let geoName = ''

        if (row[draft.columns.geo.name] !== undefined && row[draft.columns.geo.name] !== null) {
          geoName = String(row[draft.columns.geo.name])
          geoName = geoName.toUpperCase()
        }

        // States
        uid = stateKeys.find(key => supportedStates[key].includes(geoName))

        // Territories
        if (!uid) {
          uid = territoryKeys.find(key => supportedTerritories[key].includes(geoName))
        }

        // Cities
        if (!uid) {
          uid = cityKeys.find(key => key === geoName)
        }
      }

      if ('us-region' === draft.general.geoType && draft.columns.geo.name) {
        // const geoName = row[draft.columns.geo.name] && typeof row[draft.columns.geo.name] === "string" ? row[draft.columns.geo.name].toUpperCase() : '';
        let geoName = ''

        if (row[draft.columns.geo.name] !== undefined && row[draft.columns.geo.name] !== null) {
          geoName = String(row[draft.columns.geo.name])
          geoName = geoName.toUpperCase()
        }

        // Regions
        uid = regionKeys.find(key => supportedRegions[key].includes(geoName))
      }

      // World Check
      if ('world' === draft.general.geoType) {
        const geoName = row[draft.columns.geo.name]

        uid = countryKeys.find(key => supportedCountries[key].includes(geoName))
      }

      // County Check
      if (('us-county' === draft.general.geoType || 'single-state' === draft.general.geoType) && 'us-geocode' !== draft.general.type) {
        const fips = row[draft.columns.geo.name]
        uid = countyKeys.find(key => key === fips)
      }

      if ('us-geocode' === draft.general.type) {
        uid = row[draft.columns.geo.name]
      }

      if (uid) {
        draft.data[uid] = row
      }
      // return row
    })
    draft.data = { ...draft.data }
    draft.data['fromColumn'] = fromColumn
  })

  if (debug) {
    console.log('ADDING UIDS', newConfig)
  }

  return newConfig
}

// Calculates what's going to be displayed on the map and data table at render.
export const generateRuntimeData = (config, filters, hash) => {
  return produce(config, draft => {
    try {
      const result = {}

      if (hash) {
        // Adding property this way prevents it from being enumerated
        Object.defineProperty(result, 'fromHash', {
          value: hash
        })
      }

      draft.data.forEach(row => {
        if (undefined === row.uid) return false // No UID for this row, we can't use for mapping

        // When on a single state map filter runtime data by state
        if (!(String(row[draft.columns.geo.name]).substring(0, 2) === draft.general?.statePicked?.fipsCode) && draft.general.geoType === 'single-state' && draft.general.type !== 'us-geocode') {
          return false
        }

        if (row[draft.columns.primary.name]) {
          // converted pure functions into new format CoveHelper.[String|Math|Number].<method>
          // implemented inside of core
          // ex. string to title case
          row[draft.columns.primary.name] = CoveHelper.String.convertStringToNumber(row[draft.columns.primary.name], config)
        }

        // If this is a navigation only map, skip if it doesn't have a URL
        if ('navigation' === draft.general.type) {
          let navigateUrl = row[draft.columns.navigate.name] || ''

          if (undefined !== navigateUrl && typeof navigateUrl === 'string') {
            // Strip hidden characters before we check length
            navigateUrl = navigateUrl.replace(/(\r\n|\n|\r)/gm, '')
          }
          if (0 === navigateUrl.length) {
            return false
          }
        }

        // Filters
        if (filters?.length) {
          for (let i = 0; i < filters.length; i++) {
            const { columnName, active } = filters[i]
            if (String(row[columnName]) !== String(active)) return false // Bail out, not part of filter
          }
        }

        // Don't add additional rows with same UID
        if (undefined === result[row.uid]) {
          result[row.uid] = row
        }
      })
      return result
    } catch (e) {
      console.error(e)
    }

    return draft
  })
}

export const generateRuntimeFilters = (config, hash) => {
  const runtimeFilters = produce(config, draft => {
    // console.log('what is draft even', draft)
    // if (draft.filters && hash) draft.filters.fromHash = hash

    draft.filters = (draft.filters ?? []).map(({ columnName, label, active, values }, idx) => {
      if (undefined === columnName) return

      let newFilter = runtimeFilters[idx]

      const sortAsc = (a, b) => {
        return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
      }

      const sortDesc = (a, b) => {
        return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
      }

      values = getUniqueValues(draft.data, columnName)

      if (draft.filters[idx].order === 'asc') {
        values = values.sort(sortAsc)
      }

      if (draft.filters[idx].order === 'desc') {
        values = values.sort(sortDesc)
      }

      if (draft.filters[idx].order === 'cust') {
        if (draft.filters[idx]?.values.length > 0) {
          values = draft.filters[idx].values
        }
      }

      if (undefined === newFilter) {
        newFilter = {}
      }

      newFilter.label = label ?? ''
      newFilter.columnName = columnName
      newFilter.values = values
      newFilter.active = active || values[0] // Default to first found value

      draft.filters[idx] = newFilter
    })
  })

  return runtimeFilters
}

export const transformCdcMapConfig = config => {
  let transformedConfig = { ...config }

  generateRuntimeFilters(transformedConfig)
  validateFipsCodeLength(transformedConfig)

  const runtimeData = generateRuntimeData(transformedConfig, transformedConfig.filters)
  generateRuntimeLegend(transformedConfig, runtimeData)

  // If there's a name for the geo, add UIDs
  if (transformedConfig.columns.geo.name || transformedConfig.columns.geo.fips) {
    transformedConfig = addUIDs(transformedConfig, transformedConfig.columns.geo.name || transformedConfig.columns.geo.fips)
  }

  if (transformedConfig.dataTable.forceDisplay === undefined) {
    transformedConfig = {
      ...transformedConfig,
      dataTable: {
        ...transformedConfig.dataTable,
        forceDisplay: !useStore.getState().viewMode.isDashboard
      }
    }
  }

  if (transformedConfig.dataTable && (transformedConfig.dataTable?.title === '' || transformedConfig.dataTable?.title === undefined)) {
    transformedConfig = {
      ...transformedConfig,
      dataTable: {
        ...transformedConfig.dataTable,
        title: 'Data Table'
      }
    }
  }

  return transformedConfig
}
