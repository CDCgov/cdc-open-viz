// Vendor
import React, { useState, useEffect, useRef, useCallback, useId } from 'react'
import * as d3 from 'd3'
import _ from 'lodash'
import 'whatwg-fetch'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Core Components
import DataTable from '@cdc/core/components/DataTable'
import Filters, { useFilters } from '@cdc/core/components/Filters'
import Layout from '@cdc/core/components/Layout'
import MediaControls from '@cdc/core/components/MediaControls'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import Title from '@cdc/core/components/ui/Title'
import Waiting from '@cdc/core/components/Waiting'

// types
import { type Coordinate, type MapConfig } from './types/MapConfig'

// Data
import { countryCoordinates } from './data/country-coordinates'
import {
  stateFipsToTwoDigit,
  supportedCities,
  supportedCounties,
  supportedCountries,
  supportedRegions,
  supportedStates,
  supportedStatesFipsCodes,
  supportedTerritories
} from './data/supported-geos'
import colorPalettes from '@cdc/core/data/colorPalettes'
import initialState from './data/initial-state'

// Assets
import ExternalIcon from './images/external-link.svg'

// Sass
import './scss/main.scss'
import './scss/btn.scss'

// Core Helpers
import { displayGeoName } from './helpers/displayGeoName'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import numberFromString from '@cdc/core/helpers/numberFromString'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { publish } from '@cdc/core/helpers/events'

// Map Helpers
import { applyColorToLegend } from './helpers/applyColorToLegend'
import { closeModal } from './helpers/closeModal'
import { generateColorsArray } from './helpers/generateColorsArray'
import { generateRuntimeLegendHash } from './helpers/generateRuntimeLegendHash'
import { getGeoFillColor } from './helpers/colors'
import { getUniqueValues } from './helpers/getUniqueValues'
import { hashObj } from './helpers/hashObj'
import { navigationHandler } from './helpers/navigationHandler'
import { validateFipsCodeLength } from './helpers/validateFipsCodeLength'
import { titleCase } from './helpers/titleCase'
import { indexOfIgnoreType } from './helpers/indexOfIgnoreType'

// Child Components
import Annotation from './components/Annotation'
import ConfigContext from './context'
import EditorPanel from './components/EditorPanel'
import Error from './components/EditorPanel/components/Error'
import Legend from './components/Legend'
import Modal from './components/Modal'
import NavigationMenu from './components/NavigationMenu'
import UsaMap from './components/UsaMap'
import WorldMap from './components/WorldMap'

// Hooks
import useTooltip from './hooks/useTooltip'
import useResizeObserver from './hooks/useResizeObserver'

// Data props
const stateKeys = Object.keys(supportedStates)
const territoryKeys = Object.keys(supportedTerritories)
const regionKeys = Object.keys(supportedRegions)
const countryKeys = Object.keys(supportedCountries)
const countyKeys = Object.keys(supportedCounties)
const cityKeys = Object.keys(supportedCities)

const CdcMap = ({
  config,
  navigationHandler: customNavigationHandler,
  isDashboard = false,
  isEditor = false,
  isDebug = false,
  configUrl,
  logo = '',
  setConfig,
  setSharedFilter,
  setSharedFilterValue,
  link
}) => {
  const transform = new DataTransform()
  const [translate, setTranslate] = useState([0, 0])
  const [scale, setScale] = useState(1)
  const [state, setState] = useState<MapConfig>({ ...initialState })
  const [isDraggingAnnotation, setIsDraggingAnnotation] = useState(false)
  const [loading, setLoading] = useState(true)
  const [displayPanel, setDisplayPanel] = useState(true)
  const [topoData, setTopoData] = useState<{}>({})
  const [runtimeFilters, setRuntimeFilters] = useState([])
  const [runtimeLegend, setRuntimeLegend] = useState([])
  const [runtimeData, setRuntimeData] = useState({ init: true })
  const [stateToShow, setStateToShow] = useState(null)
  const [modal, setModal] = useState(null)
  const [accessibleStatus, setAccessibleStatus] = useState('')
  const [filteredCountryCode, setFilteredCountryCode] = useState()
  const [position, setPosition] = useState(state.mapPosition)
  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState(false)
  const [requiredColumns, setRequiredColumns] = useState(null) // Simple state so we know if we need more information before parsing the map
  const [projection, setProjection] = useState(null)
  const { currentViewport, dimensions, container, outerContainerRef } = useResizeObserver(isEditor)

  // Refs
  const mapSvg = useRef<HTMLElement>(null)
  const legendRef = useRef<HTMLElement>(null)
  const tooltipRef = useRef<HTMLElement>(null)
  const legendMemo = useRef(new Map())
  const legendSpecialClassLastMemo = useRef(new Map())
  const innerContainerRef = useRef()

  // Ids
  const tooltipId = `${Math.random().toString(16).slice(-4)}`
  const imageId = `cove-${Math.random().toString(16).slice(-4)}`
  const mapId = useId()
  const legendId = useId()

  const { handleSorting } = useFilters({ config: state, setConfig: setState })

  const handleDragStateChange = isDragging => {
    setIsDraggingAnnotation(isDragging)
  }

  const columnsRequiredChecker = useCallback(() => {
    let columnList = []

    // Geo is always required
    if ('' === state.columns.geo.name) {
      columnList.push('Geography')
    }

    // Primary is required if we're on a data map or a point map
    if ('navigation' !== state.general.type && '' === state.columns.primary.name) {
      columnList.push('Primary')
    }

    // Navigate is required for navigation maps
    if ('navigation' === state.general.type && '' === state.columns.navigate.name) {
      columnList.push('Navigation')
    }

    if (
      ('us-geocode' === state.general.type || 'world-geocode' === state.general.type) &&
      '' === state.columns.latitude.name
    ) {
      columnList.push('Latitude')
    }

    if (
      ('us-geocode' === state.general.type || 'world-geocode' === state.general.type) &&
      '' === state.columns.longitude.name
    ) {
      columnList.push('Longitude')
    }

    if (columnList.length === 0) columnList = null

    setRequiredColumns(columnList)
  }, [state.columns, state.general.type])

  useEffect(() => {
    try {
      if (filteredCountryCode) {
        const coordinates = countryCoordinates[filteredCountryCode]
        const long = coordinates[1]
        const lat = coordinates[0]
        const reversedCoordinates: Coordinate = [long, lat]

        setState({
          ...state,
          mapPosition: { coordinates: reversedCoordinates, zoom: 3 }
        })
      }
    } catch (e) {
      console.error('COVE: Failed to set world map zoom.') // eslint-disable-line
    }
  }, [filteredCountryCode]) // eslint-disable-line

  useEffect(() => {
    setTimeout(() => {
      if (filteredCountryCode) {
        const filteredCountryObj = runtimeData[filteredCountryCode]
        const tmpData = {
          [filteredCountryCode]: filteredCountryObj
        }
        setRuntimeData(tmpData)
      }
    }, 100)
  }, [filteredCountryCode]) // eslint-disable-line

  useEffect(() => {
    if (state.mapPosition) {
      setPosition(state.mapPosition)
    }
  }, [state.mapPosition, setPosition])

  // Tag each row with a UID. Helps with filtering/placing geos. Not enumerable so doesn't show up in loops/console logs except when directly addressed ex row.uid
  // We are mutating state in place here (depending on where called) - but it's okay, this isn't used for rerender
  // eslint-disable-next-line
  const addUIDs = useCallback((obj, fromColumn) => {
    obj.data.forEach(row => {
      let uid = null

      if (row.uid) row.uid = null // Wipe existing UIDs

      // United States check
      if ('us' === obj.general.geoType && obj.columns.geo.name) {
        // const geoName = row[obj.columns.geo.name] && typeof row[obj.columns.geo.name] === "string" ? row[obj.columns.geo.name].toUpperCase() : '';
        let geoName = ''

        if (row[obj.columns.geo.name] !== undefined && row[obj.columns.geo.name] !== null) {
          geoName = String(row[obj.columns.geo.name])
          geoName = geoName.toUpperCase()
        }

        // States
        uid = stateKeys.find(key => supportedStates[key].includes(geoName))

        // Territories
        if (!uid) {
          uid = territoryKeys.find(key => supportedTerritories[key].includes(geoName))
        }

        // Cities
        if (!uid && geoName) {
          uid = cityKeys.find(key => key === geoName.toUpperCase())
        }

        if (state.general.displayAsHex) {
          const upperCaseKey = geoName.toUpperCase()
          const supportedDc = [
            'WASHINGTON D.C.',
            'DISTRICT OF COLUMBIA',
            'WASHINGTON DC',
            'DC',
            'WASHINGTON DC.',
            'D.C.',
            'D.C'
          ]
          if (supportedDc.includes(upperCaseKey)) {
            uid = 'US-DC'
          }
        }
      }

      if ('us-region' === obj.general.geoType && obj.columns.geo.name) {
        // const geoName = row[obj.columns.geo.name] && typeof row[obj.columns.geo.name] === "string" ? row[obj.columns.geo.name].toUpperCase() : '';
        let geoName = ''

        if (row[obj.columns.geo.name] !== undefined && row[obj.columns.geo.name] !== null) {
          geoName = String(row[obj.columns.geo.name])
          geoName = geoName.toUpperCase()
        }

        // Regions
        uid = regionKeys.find(key => supportedRegions[key].includes(geoName))
      }

      // World Check
      if ('world' === obj.general.geoType) {
        const geoName = row[obj.columns.geo.name]

        uid = countryKeys.find(key => supportedCountries[key].includes(geoName))

        // Cities
        if (!uid && 'world-geocode' === state.general.type) {
          uid = cityKeys.find(key => key === geoName?.toUpperCase())
        }

        // Cities
        if (!uid && geoName) {
          uid = cityKeys.find(key => key === geoName.toUpperCase())
        }
      }

      // County Check
      if (
        ('us-county' === obj.general.geoType || 'single-state' === obj.general.geoType) &&
        'us-geocode' !== obj.general.type
      ) {
        const fips = row[obj.columns.geo.name]
        uid = countyKeys.find(key => key === fips)
      }

      if ('us-geocode' === state.general.type) {
        uid = row[state.columns.geo.name]
      }

      if (
        !uid &&
        state.columns.latitude?.name &&
        state.columns.longitude?.name &&
        row[state.columns.latitude?.name] &&
        row[state.columns.longitude?.name]
      ) {
        uid = `${row[state.columns.geo.name]}`
      }

      if (uid) {
        Object.defineProperty(row, 'uid', {
          value: uid,
          writable: true
        })
      }
    })

    obj.data.fromColumn = fromColumn
  })

  const generateRuntimeLegend = useCallback((obj, runtimeData, hash) => {
    const newLegendMemo = new Map() // Reset memoization
    const newLegendSpecialClassLastMemo = new Map() // Reset bin memoization
    let primaryCol = obj.columns.primary.name,
      isBubble = obj.general.type === 'bubble',
      categoricalCol = obj.columns.categorical ? obj.columns.categorical.name : undefined,
      type = obj.legend.type,
      number = obj.legend.numberOfItems

    let result = {
      items: [],
      description: '',
      fromHash: '',
      runtimeDataHash: ''
    }

    // Add a hash for what we're working from if passed
    if (hash) {
      result.fromHash = hash
    }

    result.runtimeDataHash = runtimeData.fromHash

    // Unified will base the legend off ALL of the data maps received. Otherwise, it will use
    let dataSet = obj.legend.unified ? obj.data : Object.values(runtimeData)
    let specialClasses = 0
    let specialClassesHash = {}

    // Special classes
    if (obj.legend.specialClasses.length) {
      if (typeof obj.legend.specialClasses[0] === 'object') {
        obj.legend.specialClasses.forEach(specialClass => {
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

                result['items'][result.items.length - 1].color = applyColorToLegend(
                  result.items.length - 1,
                  state,
                  result
                )

                specialClasses += 1
              }

              let specialColor: number

              // color the state if val is in row
              specialColor = result.items.findIndex(p => p.value === val)

              newLegendMemo.set(hashObj(row), specialColor)

              return false
            }

            return true
          })
        })
      } else {
        dataSet = dataSet.filter(row => {
          const val = row[primaryCol]

          if (obj.legend.specialClasses.includes(val)) {
            // apply the special color to the legend
            if (undefined === specialClassesHash[val]) {
              specialClassesHash[val] = true

              result.items.push({
                special: true,
                value: val
              })

              result['items'][result.items.length - 1].color = applyColorToLegend(
                result.items.length - 1,
                state,
                result
              )

              specialClasses += 1
            }

            let specialColor: number

            // color the state if val is in row
            if (Object.values(row).includes(val)) {
              specialColor = result.items.findIndex(p => p.value === val)
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
      }

      let sorted = [...uniqueValues.keys()]

      if (obj.legend.additionalCategories) {
        obj.legend.additionalCategories.forEach(additionalCategory => {
          if (additionalCategory && indexOfIgnoreType(sorted, additionalCategory) === -1) {
            sorted.push(additionalCategory)
          }
        })
      }

      // Apply custom sorting or regular sorting
      let configuredOrder = obj.legend.categoryValuesOrder ?? []

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
        result.items.push({
          value: val
        })

        let lastIdx = result.items.length - 1
        let arr = uniqueValues.get(val)

        if (arr) {
          arr.forEach(hashedRow => newLegendMemo.set(hashedRow, lastIdx))
        }
      })

      // Add color to new legend item
      for (let i = 0; i < result.items.length; i++) {
        result['items'][i].color = applyColorToLegend(i, state, result)
      }

      legendMemo.current = newLegendMemo

      // before returning the legend result
      // add property for bin number and set to index location
      result.items.forEach((row, i) => {
        row.bin = i // set bin number to index
      })

      // Move all special legend items from "Special Classes"  to the end of the legend
      if (state.legend.showSpecialClassesLast) {
        let specialRows = result.items.filter(d => d.special === true)
        let otherRows = result.items.filter(d => !d.special)
        result['items'] = [...otherRows, ...specialRows]
      }

      const assignSpecialClassLastIndex = (value, key) => {
        const newIndex = result.items.findIndex(d => d.bin === value)
        newLegendSpecialClassLastMemo.set(key, newIndex)
      }
      newLegendMemo.forEach(assignSpecialClassLastIndex)
      legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

      // filter special classes from results
      const specialValues = result.items.filter(d => d.special).map(d => d.value)
      return result.items.filter(d => d.special || !specialValues.includes(d.value))
    }

    let uniqueValues = {}
    dataSet.forEach(datum => {
      uniqueValues[datum[primaryCol]] = true
    })

    let legendNumber = Math.min(number, Object.keys(uniqueValues).length)

    // Separate zero
    if (true === obj.legend.separateZero && !state.general.equalNumberOptIn) {
      let addLegendItem = false

      for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i][primaryCol] === 0) {
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
        result['items'][lastIdx].color = applyColorToLegend(lastIdx, state, result)
      }
    }

    // Sort data for use in equalnumber or equalinterval
    if (state.general.type !== 'us-geocode') {
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
      if (!state.general.equalNumberOptIn) {
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
            newLegendMemo.set(hashObj(row), result.items.length)
          })

          result.items.push({
            min,
            max
          })

          result['items'][result.items.length - 1].color = applyColorToLegend(result.items.length - 1, state, result)

          changingNumber -= 1
          numberOfRows -= chunkAmt
        }
      } else {
        // get nums
        let domainNums = new Set(dataSet.map(item => item[state.columns.primary.name]))

        domainNums = d3.extent(domainNums)

        let colors = colorPalettes[state.color]
        let colorRange = colors.slice(0, state.legend.numberOfItems)

        const getDomain = () => {
          // backwards compatibility
          if (state?.columns?.primary?.roundToPlace !== undefined && state?.general?.equalNumberOptIn) {
            return _.uniq(
              dataSet.map(item =>
                Number(item[state.columns.primary.name]).toFixed(Number(state?.columns?.primary?.roundToPlace))
              )
            )
          }
          return _.uniq(dataSet.map(item => Math.round(Number(item[state.columns.primary.name]))))
        }

        const getBreaks = scale => {
          // backwards compatibility
          if (state?.columns?.primary?.roundToPlace !== undefined && state?.general?.equalNumberOptIn) {
            return scale.quantiles().map(b => Number(b)?.toFixed(Number(state?.columns?.primary?.roundToPlace)))
          }
          return scale.quantiles().map(item => Number(Math.round(item)))
        }

        let scale = d3
          .scaleQuantile()
          .domain(getDomain()) // min/max values
          .range(colorRange) // set range to our colors array

        const breaks = getBreaks(scale)

        // if separating zero force it into breaks
        if (breaks[0] !== 0) {
          breaks.unshift(0)
        }

        breaks.map((item, index) => {
          const setMin = index => {
            let min = breaks[index]

            // if first break is a seperated zero, min is zero
            if (index === 0 && state.legend.separateZero) {
              min = 0
            }

            // if we're on the second break, and separating out zero, increment min to 1.
            if (index === 1 && state.legend.separateZero) {
              min = 1
            }

            // // in starting position and zero in the data
            // if((index === state.legend.specialClasses?.length ) && (state.legend.specialClasses.length !== 0)) {
            //     min = breaks[index]
            // }
            return min
          }

          const getDecimalPlace = n => {
            return Math.pow(10, -n)
          }

          const setMax = index => {
            let max = Number(breaks[index + 1]) - getDecimalPlace(Number(state?.columns?.primary?.roundToPlace))

            if (index === 0 && state.legend.separateZero) {
              max = 0
            }

            if (index + 1 === breaks.length) {
              max = domainNums[1]
            }

            return max
          }

          let min = setMin(index)
          let max = setMax(index, min)

          result.items.push({
            min,
            max,
            color: scale(item)
          })

          dataSet.forEach(row => {
            let number = row[state.columns.primary.name]
            let updated = result.items.length - 1

            if (result['items'][updated]?.min === undefined || result['items'][updated]?.max === undefined) return

            if (number >= result['items'][updated].min && number <= result['items'][updated].max) {
              newLegendMemo.set(hashObj(row), updated)
            }
          })
        })
      }
    }

    // Equal Interval
    if (type === 'equalinterval' && dataSet?.length !== 0) {
      if (!dataSet || dataSet.length === 0) {
        setState({
          ...state,
          runtime: {
            ...state.runtime,
            editorErrorMessage: 'Error setting equal interval legend type'
          }
        })
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
          newLegendMemo.set(hashObj(dataSet[pointer]), result.items.length)
          pointer += 1
        }

        let range = {
          min: Math.round(min * 100) / 100,
          max: Math.round(max * 100) / 100
        }

        result.items.push(range)

        result['items'][result.items.length - 1].color = applyColorToLegend(result.items.length - 1, state, result)
      }
    }

    result.items.forEach((legendItem, idx) => {
      legendItem.color = applyColorToLegend(idx, state, result)
    })

    legendMemo.current = newLegendMemo

    if (state.general.geoType === 'world') {
      const runtimeDataKeys = Object.keys(runtimeData)
      const isCountriesWithNoDataState =
        obj.data === undefined ? false : !countryKeys.every(countryKey => runtimeDataKeys.includes(countryKey))

      if (result.items.length > 0 && isCountriesWithNoDataState) {
        result.items.push({
          min: null,
          max: null,
          color: getGeoFillColor(state)
        })
      }
    }

    result.items.forEach((row, i) => {
      row.bin = i // set bin number to index
    })

    // Move all special legend items from "Special Classes"  to the end of the legend
    if (state.legend.showSpecialClassesLast) {
      let specialRows = result.items.filter(d => d.special === true)
      let otherRows = result.items.filter(d => !d.special)
      result['items'] = [...otherRows, ...specialRows]
    }

    const assignSpecialClassLastIndex = (value, key) => {
      const newIndex = result.items.findIndex(d => d.bin === value)
      newLegendSpecialClassLastMemo.set(key, newIndex)
    }

    newLegendMemo.forEach(assignSpecialClassLastIndex)
    legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

    return result.items
  })

  const generateRuntimeFilters = useCallback((obj, hash, runtimeFilters) => {
    if (typeof obj === 'undefined' || undefined === obj.filters || obj.filters.length === 0) return []

    let filters = []

    if (hash) filters.fromHash = hash

    obj?.filters.forEach(
      (
        {
          columnName,
          label,
          labels,
          queryParameter,
          orderedValues,
          active,
          values,
          type,
          showDropdown,
          setByQueryParameter
        },
        idx
      ) => {
        let newFilter = runtimeFilters[idx]

        const sortAsc = (a, b) => {
          return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
        }

        const sortDesc = (a, b) => {
          return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
        }

        if (type !== 'url') {
          values = getUniqueValues(state.data, columnName)

          if (obj.filters[idx].order === 'asc') {
            values = values.sort(sortAsc)
          }

          if (obj.filters[idx].order === 'desc') {
            values = values.sort(sortDesc)
          }

          if (obj.filters[idx].order === 'cust') {
            if (obj.filters[idx]?.values.length > 0) {
              values = obj.filters[idx].values
            }
          }
        }

        if (undefined === newFilter) {
          newFilter = {}
        }

        newFilter.order = obj.filters[idx].order ? obj.filters[idx].order : 'asc'
        newFilter.type = type
        newFilter.label = label ?? ''
        newFilter.columnName = columnName
        newFilter.orderedValues = orderedValues
        newFilter.queryParameter = queryParameter
        newFilter.labels = labels
        newFilter.values = values
        newFilter.setByQueryParameter = setByQueryParameter
        handleSorting(newFilter)
        newFilter.active = active ?? values[0] // Default to first found value
        newFilter.filterStyle = obj.filters[idx].filterStyle ? obj.filters[idx].filterStyle : 'dropdown'
        newFilter.showDropdown = showDropdown

        filters.push(newFilter)
      }
    )

    return filters
  })

  // Calculates what's going to be displayed on the map and data table at render.
  // eslint-disable-next-line
  const generateRuntimeData = useCallback((obj, filters, hash, test) => {
    try {
      const result = {}

      // Adding property this way prevents it from being enumerated
      Object.defineProperty(result, 'fromHash', {
        value: hash
      })

      addUIDs(obj, obj.columns.geo.name)
      obj.data.forEach(row => {
        if (test) {
          console.log('object', obj) // eslint-disable-line
          console.log('row', row) // eslint-disable-line
        }

        if (undefined === row.uid) return false // No UID for this row, we can't use for mapping

        if (row[obj.columns.primary.name]) {
          row[obj.columns.primary.name] = numberFromString(row[obj.columns.primary.name], state)
        }

        // If this is a navigation only map, skip if it doesn't have a URL
        if ('navigation' === obj.general.type) {
          let navigateUrl = row[obj.columns.navigate.name] || ''

          if (undefined !== navigateUrl && typeof navigateUrl === 'string') {
            // Strip hidden characters before we check length
            navigateUrl = navigateUrl.replace(/(\r\n|\n|\r)/gm, '')
          }
          if (0 === navigateUrl?.length) {
            return false
          }
        }

        // Filters
        if (filters?.length) {
          for (let i = 0; i < filters.length; i++) {
            const { columnName, active, type } = filters[i]
            if (type !== 'url' && String(row[columnName]) !== String(active)) return false // Bail out, not part of filter
          }
        }

        // Don't add additional rows with same UID
        if (undefined === result[row.uid]) {
          result[row.uid] = row
        }
      })

      return result
    } catch (e) {
      console.error('COVE: ', e) // eslint-disable-line
    }
  })

  // this is passed DOWN into the various components
  // then they do a lookup based on the bin number as index into here
  const applyLegendToRow = rowObj => {
    try {
      if (!rowObj) throw new Error('COVE: No rowObj in applyLegendToRow')
      // Navigation map changed
      if ('navigation' === state.general.type) {
        let mapColorPalette = colorPalettes[state.color] || colorPalettes['bluegreenreverse']
        return generateColorsArray(mapColorPalette[3])
      }

      let hash = hashObj(rowObj)

      if (legendMemo.current.has(hash)) {
        let idx = legendMemo.current.get(hash)
        let disabledIdx = idx

        if (state.legend.showSpecialClassesLast) {
          disabledIdx = legendSpecialClassLastMemo.current.get(hash)
        }

        if (runtimeLegend[disabledIdx]?.disabled) return false

        // changed to use bin prop to get color instead of idx
        // bc we re-order legend when showSpecialClassesLast is checked
        let legendBinColor = runtimeLegend.find(o => o.bin === idx)?.color
        return generateColorsArray(legendBinColor, runtimeLegend[idx]?.special)
      }

      // Fail state
      return generateColorsArray()
    } catch (e) {
      console.error('COVE: ', e) // eslint-disable-line
    }
  }

  // This resets all active legend toggles.
  const resetLegendToggles = async () => {
    let newLegend = [...runtimeLegend]

    newLegend.forEach(legendItem => {
      delete legendItem.disabled
    })

    newLegend.runtimeDataHash = runtimeLegend.runtimeDataHash

    setRuntimeLegend(newLegend)
  }

  const formatLegendLocation = key => {
    let value = key
    let formattedName = ''
    let stateName = stateFipsToTwoDigit[key?.substring(0, 2)]
      ? stateFipsToTwoDigit[key?.substring(0, 2)]
      : key
      ? runtimeData?.[key]?.[state.columns.geo.name]
      : ''

    if (stateName) {
      formattedName += stateName
    }

    if (countyKeys.includes(value)) {
      formattedName += ', ' + titleCase(supportedCounties[key])
    }

    return formattedName
  }

  // todo: convert to store or context eventually.
  const { buildTooltip } = useTooltip({ state, displayGeoName, supportedStatesFipsCodes })

  const applyTooltipsToGeo = (geoName, row, returnType = 'string') => {
    let toolTipText = buildTooltip(row, geoName, '')

    // We convert the markup into JSX and add a navigation link if it's going into a modal.
    if ('jsx' === returnType) {
      toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]

      if (state.columns.hasOwnProperty('navigate') && row[state.columns.navigate.name]) {
        toolTipText.push(
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/anchor-is-valid
          <a
            href='#'
            className='navigation-link'
            key='modal-navigation-link'
            onClick={e => {
              e.preventDefault()
              navigationHandler(
                state.general.navigationTarget,
                row[state.columns.navigate.name],
                customNavigationHandler
              )
            }}
          >
            {state.tooltips.linkLabel}
            {isDomainExternal(row[state.columns.navigate.name]) && <ExternalIcon className='inline-icon ms-1' />}
          </a>
        )
      }
    }

    return toolTipText
  }

  const geoClickHandler = (key, value) => {
    if (setSharedFilter) {
      setSharedFilter(state.uid, value)
    }

    // If world-geocode map zoom to geo point
    if (['world-geocode'].includes(state.general.type)) {
      const lat = value[state.columns.latitude.name]
      const long = value[state.columns.longitude.name]

      setState({
        ...state,
        mapPosition: { coordinates: [long, lat], zoom: 3 }
      })
    }

    // If modals are set, or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === state.tooltips.appearanceType) {
      setModal({
        geoName: key,
        keyedData: value
      })

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && value[state.columns.navigate.name]) {
      navigationHandler(state.general.navigationTarget, value[state.columns.navigate.name], customNavigationHandler)
    }
  }

  const reloadURLData = async () => {
    if (state.dataUrl) {
      const dataUrl = new URL(state.runtimeDataUrl || state.dataUrl, window.location.origin)
      let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

      let isUpdateNeeded = false
      state.filters.forEach(filter => {
        if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
          qsParams[filter.queryParameter] = filter.active
          isUpdateNeeded = true
        }
      })

      if (!isUpdateNeeded) return

      let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${Object.keys(qsParams)
        .map((param, i) => {
          let qs = i === 0 ? '?' : '&'
          qs += param + '='
          qs += qsParams[param]
          return qs
        })
        .join('')}`

      let data

      try {
        const regex = /(?:\.([^.]+))?$/

        const ext = regex.exec(dataUrl.pathname)[1]
        if ('csv' === ext || isSolrCsv(dataUrlFinal)) {
          data = await fetch(dataUrlFinal)
            .then(response => response.text())
            .then(responseText => {
              const parsedCsv = Papa.parse(responseText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                encoding: 'utf-8'
              })
              return parsedCsv.data
            })
        } else if ('json' === ext || isSolrJson(dataUrlFinal)) {
          data = await fetch(dataUrlFinal).then(response => response.json())
        } else {
          data = []
        }
      } catch (e) {
        console.error(`Cannot parse URL: ${dataUrlFinal}`) // eslint-disable-line
        console.log(e) // eslint-disable-line
        data = []
      }

      if (state.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, state.dataDescription)
      }

      setState({ ...state, runtimeDataUrl: dataUrlFinal, data })
    }
  }

  const loadConfig = async (configObj: MapConfig) => {
    // Set loading flag
    if (!loading) setLoading(true)

    // Create new config object the same way each time no matter when this method is called.
    let newState = {
      ...initialState,
      ...configObj
    }

    const urlFilters = newState.filters
      ? newState.filters.filter(filter => filter.type === 'url').length > 0
        ? true
        : false
      : false

    if (newState.dataUrl && !urlFilters) {
      // handle urls with spaces in the name.
      if (newState.dataUrl) newState.dataUrl = `${newState.dataUrl}`
      let newData = await fetchRemoteData(newState.dataUrl, 'map')

      if (newData && newState.dataDescription) {
        newData = transform.autoStandardize(newData)
        newData = transform.developerStandardize(newData, newState.dataDescription)
      }

      if (newData) {
        newState.data = newData
      }
    } else if (newState.formattedData) {
      newState.data = newState.formattedData
    } else if (newState.dataDescription) {
      newState.data = transform.autoStandardize(newState.data)
      newState.data = transform.developerStandardize(newState.data, newState.dataDescription)
    }

    // This code goes through and adds the defaults for every property declaring in the initial state at the top.
    // This allows you to easily add new properties to the config without having to worry about accounting for backwards compatibility.
    // Right now this does not work recursively -- only on first and second level properties. So state -> prop1 -> childPropOne
    Object.keys(newState).forEach(key => {
      if ('object' === typeof newState[key] && false === Array.isArray(newState[key])) {
        if (initialState[key]) {
          Object.keys(initialState[key]).forEach(property => {
            if (undefined === newState[key][property]) {
              newState[key][property] = initialState[key][property]
            }
          })
        }
      }
    })

    // If there's a name for the geo, add UIDs
    if (newState.columns.geo.name || newState.columns.geo.fips) {
      addUIDs(newState, newState.columns.geo.name || newState.columns.geo.fips)
    }

    if (newState.table.forceDisplay === undefined) {
      newState.table.forceDisplay = !isDashboard
    }

    validateFipsCodeLength(newState)

    // add ability to rename state properties over time.
    const processedConfig = { ...coveUpdateWorker(newState) }

    setTimeout(() => {
      setState(processedConfig)
      setLoading(false)
    }, 10)
  }

  const init = async () => {
    let configData = null

    // Load the configuration data passed to this component if it exists
    if (config) {
      configData = config
    }

    // If the config passed is a string, try to load it as an ajax
    if (configUrl) {
      configData = await fetchRemoteData(configUrl)
    }

    // Once we have a config verify that it is an object and load it
    if ('object' === typeof configData) {
      await loadConfig(configData)
    }
  }

  // Initial load
  useEffect(() => {
    init()
  }, []) // eslint-disable-line

  useEffect(() => {
    if (state && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: state })
      setCoveLoadedHasRan(true)
    }
  }, [state, container]) // eslint-disable-line

  useEffect(() => {
    // When geotype changes - add UID
    if (state.data && state.columns.geo.name) {
      addUIDs(state, state.columns.geo.name)
    }
  }, [state]) // eslint-disable-line

  useEffect(() => {
    // UID
    if (state.data && state.columns.geo.name && state.columns.geo.name !== state.data.fromColumn) {
      addUIDs(state, state.columns.geo.name)
    }

    // Filters
    const hashFilters = hashObj(state.filters)
    let filters

    if (state.filters && hashFilters !== runtimeFilters.fromHash) {
      filters = generateRuntimeFilters(state, hashFilters, runtimeFilters)

      if (filters) {
        filters.forEach((filter, index) => {
          const queryStringFilterValue = getQueryStringFilterValue(filter)
          if (queryStringFilterValue) {
            filters[index].active = queryStringFilterValue
          }
        })
        setRuntimeFilters(filters)
      }
    }

    const hashLegend = generateRuntimeLegendHash(state, runtimeFilters)

    const hashData = hashObj({
      data: state.data,
      columns: state.columns,
      geoType: state.general.geoType,
      type: state.general.type,
      geo: state.columns.geo.name,
      primary: state.columns.primary.name,
      mapPosition: state.mapPosition,
      map: state.map,
      ...runtimeFilters
    })

    // Data
    if (hashData !== runtimeData.fromHash && state.data?.fromColumn) {
      const newRuntimeData = generateRuntimeData(state, filters || runtimeFilters, hashData)

      setRuntimeData(newRuntimeData)
    } else {
      if (hashLegend !== runtimeLegend.fromHash && undefined === runtimeData.init) {
        const legend = generateRuntimeLegend(state, runtimeData, hashLegend)
        setRuntimeLegend(legend)
      }
    }
  }, [state]) // eslint-disable-line

  useEffect(() => {
    const hashLegend = generateRuntimeLegendHash(state, runtimeFilters)

    // Legend - Update when runtimeData does
    const legend = generateRuntimeLegend(state, runtimeData, hashLegend)
    setRuntimeLegend(legend)
  }, [
    runtimeData,
    state.legend.unified,
    state.legend.showSpecialClassesLast,
    state.legend.separateZero,
    state.general.equalNumberOptIn,
    state.legend.numberOfItems,
    state.legend.specialClasses,
    state.legend.additionalCategories
  ]) // eslint-disable-line

  useEffect(() => {
    reloadURLData()
  }, [JSON.stringify(state.filters)])

  if (config) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      loadConfig(config)
    }, [config.data]) // eslint-disable-line
  }

  // Destructuring for more readable JSX
  const { general, tooltips, table } = state
  let { title, subtext = '', geoType } = general

  // if no title AND in editor then set a default
  if (isEditor) {
    if (!title || title === '') title = 'Map Title'
  }
  if (!table.label || table.label === '') table.label = 'Data Table'

  // Map container classes
  let mapContainerClasses = [
    'map-container',
    state.legend?.position,
    state.general.type,
    state.general.geoType,
    'outline-none'
  ]

  if (modal) {
    mapContainerClasses.push('modal-background')
  }

  if (general.type === 'navigation' && true === general.fullBorder) {
    mapContainerClasses.push('full-border')
  }

  // Props passed to all map types
  const mapProps = {
    projection,
    setProjection,
    stateToShow,
    setStateToShow,
    setScale,
    setTranslate,
    scale,
    translate,
    isDraggingAnnotation,
    handleDragStateChange,
    applyLegendToRow,
    applyTooltipsToGeo,
    container,
    content: modal,
    data: runtimeData,
    displayGeoName,
    filteredCountryCode,
    generateColorsArray,
    generateRuntimeData,
    geoClickHandler,
    hasZoom: state.general.allowMapZoom,
    innerContainerRef,
    isDashboard,
    isDebug,
    isEditor,
    loadConfig,
    logo,
    position,
    resetLegendToggles,
    runtimeFilters,
    runtimeLegend,
    runtimeData,
    setAccessibleStatus,
    setFilteredCountryCode,
    setParentConfig: setConfig,
    setPosition,
    setRuntimeData,
    setRuntimeFilters,
    setRuntimeLegend,
    setSharedFilterValue,
    setState,
    state,
    tooltipId,
    tooltipRef,
    topoData,
    setTopoData,
    mapId,
    outerContainerRef,
    dimensions,
    currentViewport
  }

  if (!mapProps.data || !state.data) return <></>

  const hasDataTable =
    state.runtime.editorErrorMessage.length === 0 &&
    true === table.forceDisplay &&
    general.type !== 'navigation' &&
    false === loading

  const handleMapTabbing = () => {
    let tabbingID = ''

    // 1) skip to legend
    if (general.showSidebar) {
      tabbingID = legendId
    }

    // 2) skip to data table if it exists and not a navigation map
    if (hasDataTable && !general.showSidebar) {
      tabbingID = `dataTableSection__${Date.now()}`
    }

    // 3) if it's a navigation map skip to the dropdown.
    if (state.general.type === 'navigation') {
      tabbingID = `dropdown-${Date.now()}`
    }

    // 4) handle other options
    return tabbingID || '!'
  }

  const tabId = handleMapTabbing()

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a href={`#data-table-${state.dataKey}`} className='margin-left-href'>
      {state.dataKey} (Go to Table)
    </a>
  )

  const sectionClassNames = () => {
    const classes = ['cove-component__content', 'cdc-map-inner-container', `${currentViewport}`]
    if (config?.runtime?.editorErrorMessage.length > 0) classes.push('type-map--has-error')
    return classes.join(' ')
  }

  return (
    <ConfigContext.Provider value={mapProps}>
      <Layout.VisualizationWrapper
        config={state}
        isEditor={isEditor}
        ref={outerContainerRef}
        imageId={imageId}
        showEditorPanel={state.showEditorPanel}
      >
        {isEditor && <EditorPanel columnsRequiredChecker={columnsRequiredChecker} />}
        <Layout.Responsive isEditor={isEditor}>
          {requiredColumns && (
            <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
          )}
          {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
            <section className={sectionClassNames()} aria-label={'Map: ' + title} ref={innerContainerRef}>
              {state?.runtime?.editorErrorMessage.length > 0 && <Error state={state} />}
              {/* prettier-ignore */}
              <Title
                title={title}
                superTitle={general.superTitle}
                config={config}
                classes={['map-title', general.showTitle === true ? 'visible' : 'hidden', `${general.headerColor}`]}
              />
              <SkipTo skipId={tabId} skipMessage='Skip Over Map Container' />
              {state?.annotations?.length > 0 && (
                <SkipTo skipId={tabId} skipMessage={`Skip over annotations`} key={`skip-annotations`} />
              )}

              {general.introText && <section className='introText mb-4'>{parse(general.introText)}</section>}

              {state?.filters?.length > 0 && (
                <Filters
                  config={state}
                  setConfig={setState}
                  filteredData={runtimeFilters}
                  setFilteredData={setRuntimeFilters}
                  dimensions={dimensions}
                  standaloneMap={!config}
                />
              )}

              <div
                role='region'
                tabIndex='0'
                className={mapContainerClasses.join(' ')}
                onClick={e => closeModal(e, modal, setModal)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    closeModal(e, modal, setModal)
                  }
                }}
                style={{ padding: '15px 0px', margin: '0px' }}
              >
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                <section className='outline-none geography-container w-100' ref={mapSvg} tabIndex={0}>
                  {currentViewport && (
                    <>
                      {modal && <Modal />}
                      {'single-state' === geoType && <UsaMap.SingleState />}
                      {'us' === geoType && 'us-geocode' !== state.general.type && <UsaMap.State />}
                      {'us-region' === geoType && <UsaMap.Region />}
                      {'us-county' === geoType && <UsaMap.County />}
                      {'world' === geoType && <WorldMap />}
                      {/* logo is handled in UsaMap.State when applicable */}
                      {'data' === general.type && logo && ('us' !== geoType || 'us-geocode' === state.general.type) && (
                        <img src={logo} alt='' className='map-logo' style={{ maxWidth: '50px' }} />
                      )}
                    </>
                  )}
                </section>

                {general.showSidebar && 'navigation' !== general.type && (
                  <Legend
                    dimensions={dimensions}
                    ref={legendRef}
                    skipId={tabId}
                    containerWidthPadding={0}
                    currentViewport={currentViewport}
                  />
                )}
              </div>

              {'navigation' === general.type && (
                <NavigationMenu
                  mapTabbingID={tabId}
                  displayGeoName={displayGeoName}
                  data={runtimeData}
                  options={general}
                  columns={state.columns}
                  navigationHandler={(urlString: string) =>
                    navigationHandler(state.general.navigationBehavior, urlString, customNavigationHandler)
                  }
                />
              )}

              {/* Link */}
              {isDashboard && config.table?.forceDisplay && config.table.showDataTableLink ? tableLink : link && link}

              {subtext.length > 0 && <p className='subtext mt-4'>{parse(subtext)}</p>}

              <MediaControls.Section classes={['download-buttons']}>
                {state.general.showDownloadImgButton && (
                  <MediaControls.Button
                    text='Download Image'
                    title='Download Chart as Image'
                    type='image'
                    state={state}
                    elementToCapture={imageId}
                  />
                )}
                {state.general.showDownloadPdfButton && (
                  <MediaControls.Button
                    text='Download PDF'
                    title='Download Chart as PDF'
                    type='pdf'
                    state={state}
                    elementToCapture={imageId}
                  />
                )}
              </MediaControls.Section>

              {state.runtime.editorErrorMessage.length === 0 &&
                true === table.forceDisplay &&
                general.type !== 'navigation' &&
                false === loading && (
                  <DataTable
                    config={state}
                    rawData={state.data}
                    navigationHandler={navigationHandler}
                    expandDataTable={table.expanded}
                    headerColor={general.headerColor}
                    columns={state.columns}
                    showDownloadButton={general.showDownloadButton}
                    showFullGeoNameInCSV={table.showFullGeoNameInCSV}
                    runtimeLegend={runtimeLegend}
                    runtimeData={runtimeData}
                    displayGeoName={displayGeoName}
                    applyLegendToRow={applyLegendToRow}
                    tableTitle={table.label}
                    indexTitle={table.indexLabel}
                    vizTitle={general.title}
                    viewport={currentViewport}
                    formatLegendLocation={formatLegendLocation}
                    setFilteredCountryCode={setFilteredCountryCode}
                    tabbingId={tabId}
                    showDownloadImgButton={state.general.showDownloadImgButton}
                    showDownloadPdfButton={state.general.showDownloadPdfButton}
                    innerContainerRef={innerContainerRef}
                    outerContainerRef={outerContainerRef}
                    imageRef={imageId}
                    isDebug={isDebug}
                    wrapColumns={table.wrapColumns}
                  />
                )}

              {state.annotations.length > 0 && <Annotation.Dropdown />}

              {general.footnotes && <section className='footnotes pt-2 mt-4'>{parse(general.footnotes)}</section>}
            </section>
          )}

          <div aria-live='assertive' className='cdcdataviz-sr-only'>
            {accessibleStatus}
          </div>

          {!isDraggingAnnotation &&
            !window.matchMedia('(any-hover: none)').matches &&
            'hover' === tooltips.appearanceType && (
              <ReactTooltip
                id={`tooltip__${tooltipId}`}
                float={true}
                className={`${tooltips.capitalizeLabels ? 'capitalize tooltip tooltip-test' : 'tooltip tooltip-test'}`}
                style={{ background: `rgba(255,255,255, ${state.tooltips.opacity / 100})`, color: 'black' }}
              />
            )}
          <div
            ref={tooltipRef}
            id={`tooltip__${tooltipId}-canvas`}
            className='tooltip'
            style={{
              background: `rgba(255,255,255,${state.tooltips.opacity / 100})`,
              position: 'absolute',
              whiteSpace: 'nowrap',
              display: 'none' // can't use d-none here
            }}
          ></div>
        </Layout.Responsive>
      </Layout.VisualizationWrapper>
    </ConfigContext.Provider>
  )
}

export default CdcMap
