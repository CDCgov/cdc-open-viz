import React, { useState, useEffect, useRef, useCallback, useId } from 'react'
import * as d3 from 'd3'
import Layout from '@cdc/core/components/Layout'
import Waiting from '@cdc/core/components/Waiting'
import Annotation from './components/Annotation'
import Error from './components/EditorPanel/components/Error'
import _ from 'lodash'
import { applyColorToLegend } from './helpers/applyColorToLegend'

// types
import { type ViewportSize } from './types/MapConfig'
import { type DimensionsType } from '@cdc/core/types/Dimensions'

// IE11
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

// Third party
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Helpers
import { navigationHandler } from './helpers/navigationHandler'
import { hashObj } from './helpers/hashObj'
import { generateRuntimeLegendHash } from './helpers/generateRuntimeLegendHash'
import { generateColorsArray } from './helpers/generateColorsArray'
import { getUniqueValues } from './helpers/getUniqueValues'
import { publish } from '@cdc/core/helpers/events'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import Title from '@cdc/core/components/ui/Title'

// Data
import { countryCoordinates } from './data/country-coordinates'
import {
  supportedStates,
  supportedTerritories,
  supportedCountries,
  supportedCounties,
  supportedCities,
  supportedStatesFipsCodes,
  stateFipsToTwoDigit,
  supportedRegions
} from './data/supported-geos'
import colorPalettes from '@cdc/core/data/colorPalettes'
import initialState from './data/initial-state'

// Assets
import ExternalIcon from './images/external-link.svg'

// Sass
import './scss/main.scss'

// TODO: combine in scss.
import './scss/btn.scss'

// Core
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import MediaControls from '@cdc/core/components/MediaControls'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import getViewport from '@cdc/core/helpers/getViewport'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import numberFromString from '@cdc/core/helpers/numberFromString'
import DataTable from '@cdc/core/components/DataTable' // Future: Lazy

// Child Components
import ConfigContext from './context'
import Filters, { useFilters } from '@cdc/core/components/Filters'
import Modal from './components/Modal'
import Legend from './components/Legend'

import EditorPanel from './components/EditorPanel' // Future: Lazy
import NavigationMenu from './components/NavigationMenu' // Future: Lazy
import UsaMap from './components/UsaMap' // Future: Lazy
import WorldMap from './components/WorldMap' // Future: Lazy
import useTooltip from './hooks/useTooltip'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import { getGeoFillColor } from './helpers/colors'

// Data props
const stateKeys = Object.keys(supportedStates)
const territoryKeys = Object.keys(supportedTerritories)
const regionKeys = Object.keys(supportedRegions)
const countryKeys = Object.keys(supportedCountries)
const countyKeys = Object.keys(supportedCounties)
const cityKeys = Object.keys(supportedCities)

const indexOfIgnoreType = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return i
    }
  }
  return -1
}

const CdcMap = ({
  className,
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
  const [state, setState] = useState({ ...initialState })
  const [isDraggingAnnotation, setIsDraggingAnnotation] = useState(false)
  const [loading, setLoading] = useState(true)
  const [displayPanel, setDisplayPanel] = useState(true)
  const [currentViewport, setCurrentViewport] = useState<ViewportSize>('lg')
  const [topoData, setTopoData] = useState<Topology | {}>({})
  const [runtimeFilters, setRuntimeFilters] = useState([])
  const [runtimeLegend, setRuntimeLegend] = useState([])
  const [runtimeData, setRuntimeData] = useState({ init: true })
  const [stateToShow, setStateToShow] = useState(null)
  const [modal, setModal] = useState(null)
  const [accessibleStatus, setAccessibleStatus] = useState('')
  const [filteredCountryCode, setFilteredCountryCode] = useState()
  const [position, setPosition] = useState(state.mapPosition)
  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState(false)
  const [container, setContainer] = useState()
  const [imageId, setImageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`) // eslint-disable-line
  const [dimensions, setDimensions] = useState<DimensionsType>([0, 0])
  const [requiredColumns, setRequiredColumns] = useState(null) // Simple state so we know if we need more information before parsing the map
  const [projection, setProjection] = useState(null)

  const legendRef = useRef(null)
  const tooltipRef = useRef(null)
  const legendId = useId()
  // create random tooltipId
  const tooltipId = `${Math.random().toString(16).slice(-4)}`
  const mapId = useId()

  const { changeFilterActive, handleSorting } = useFilters({ config: state, setConfig: setState })
  let legendMemo = useRef(new Map())
  let legendSpecialClassLastMemo = useRef(new Map())
  let innerContainerRef = useRef()

  if (isDebug) console.log('CdcMap state=', state) // <eslint-disable-line></eslint-disable-line>

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
    if (
      'navigation' === state.general.type &&
      ('' === state.columns.navigate.name || undefined === state.columns.navigate)
    ) {
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
        const reversedCoordinates = [long, lat]

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

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = getViewport(entry.contentRect.width)

      let editorWidth = 350

      setCurrentViewport(newViewport)

      if (isEditor) {
        width = width - editorWidth
      }
      setDimensions([width, height])
    }
  })

  // Tag each row with a UID. Helps with filtering/placing geos. Not enumerable so doesn't show up in loops/console logs except when directly addressed ex row.uid
  // We are mutating state in place here (depending on where called) - but it's okay, this isn't used for rerender
  // eslint-disable-next-line
  const addUIDs = useCallback((obj, fromColumn) => {
    obj.data.forEach((row, index) => {
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

  // eslint-disable-next-line
  const generateRuntimeLegend = useCallback((obj, runtimeData, hash) => {
    const newLegendMemo = new Map() // Reset memoization
    const newLegendSpecialClassLastMemo = new Map() // Reset bin memoization
    let primaryCol = obj.columns.primary.name,
      isBubble = obj.general.type === 'bubble',
      categoricalCol = obj.columns.categorical ? obj.columns.categorical.name : undefined,
      type = obj.legend.type,
      number = obj.legend.numberOfItems,
      result = []

    // Add a hash for what we're working from if passed
    if (hash) {
      result.fromHash = hash
    }

    result.runtimeDataHash = runtimeData.fromHash

    // Unified will based the legend off ALL of the data maps received. Otherwise, it will use
    let dataSet = obj.legend.unified ? obj.data : Object.values(runtimeData)

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

                result.push({
                  special: true,
                  value: val,
                  label: specialClass.label
                })

                result[result.length - 1].color = applyColorToLegend(result.length - 1, state, result)

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

          if (obj.legend.specialClasses.includes(val)) {
            // apply the special color to the legend
            if (undefined === specialClassesHash[val]) {
              specialClassesHash[val] = true

              result.push({
                special: true,
                value: val
              })

              result[result.length - 1].color = applyColorToLegend(result.length - 1, state, result)

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
        result[i].color = applyColorToLegend(i, state, result)
      }

      legendMemo.current = newLegendMemo

      // before returning the legend result
      // add property for bin number and set to index location
      result.forEach((row, i) => {
        row.bin = i // set bin number to index
      })

      // Move all special legend items from "Special Classes"  to the end of the legend
      if (state.legend.showSpecialClassesLast) {
        let specialRows = result.filter(d => d.special === true)
        let otherRows = result.filter(d => !d.special)
        result = [...otherRows, ...specialRows]
      }

      const assignSpecialClassLastIndex = (value, key) => {
        const newIndex = result.findIndex(d => d.bin === value)
        newLegendSpecialClassLastMemo.set(key, newIndex)
      }
      newLegendMemo.forEach(assignSpecialClassLastIndex)
      legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

      // filter special classes from results
      const specialValues = result.filter(d => d.special).map(d => d.value)
      return result.filter(d => d.special || !specialValues.includes(d.value))
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
        result[lastIdx].color = applyColorToLegend(lastIdx, state, result)
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

          // eslint-disable-next-line
          removedRows.forEach(row => {
            newLegendMemo.set(hashObj(row), result.length)
          })

          result.push({
            min,
            max
          })

          result[result.length - 1].color = applyColorToLegend(result.length - 1, state, result)

          changingNumber -= 1
          numberOfRows -= chunkAmt
        }
      } else {
        // get nums
        let hasZeroInData = dataSet.filter(obj => obj[state.columns.primary.name] === 0).length > 0
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

        // if seperating zero force it into breaks
        if (breaks[0] !== 0) {
          breaks.unshift(0)
        }

        // eslint-disable-next-line array-callback-return
        breaks.map((item, index) => {
          const setMin = index => {
            let min = breaks[index]

            // if first break is a seperated zero, min is zero
            if (index === 0 && state.legend.separateZero) {
              min = 0
            }

            // if we're on the second break, and seperating out zero, increment min to 1.
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

          const setMax = (index, min) => {
            let max = Number(breaks[index + 1]) - getDecimalPlace(Number(state?.columns?.primary?.roundToPlace))

            // check if min and max range are the same
            // if (min === max + 1) {
            //     max = breaks[index + 1]
            // }

            if (index === 0 && state.legend.separateZero) {
              max = 0
            }
            // if ((index === state.legend.specialClasses.length && state.legend.specialClasses.length !== 0) && !state.legend.separateZero && hasZeroInData) {
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
            let number = row[state.columns.primary.name]
            let updated = result.length - 1

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
          newLegendMemo.set(hashObj(dataSet[pointer]), result.length)
          pointer += 1
        }

        let range = {
          min: Math.round(min * 100) / 100,
          max: Math.round(max * 100) / 100
        }

        result.push(range)

        result[result.length - 1].color = applyColorToLegend(result.length - 1, state, result)
      }
    }

    result.forEach((legendItem, idx) => {
      legendItem.color = applyColorToLegend(idx, state, result)
    })

    legendMemo.current = newLegendMemo

    if (state.general.geoType === 'world') {
      const runtimeDataKeys = Object.keys(runtimeData)
      const isCountriesWithNoDataState =
        obj.data === undefined ? false : !countryKeys.every(countryKey => runtimeDataKeys.includes(countryKey))

      if (result.length > 0 && isCountriesWithNoDataState) {
        result.push({
          min: null,
          max: null,
          color: getGeoFillColor(state)
        })
      }
    }

    //----------
    // DEV-784
    // before returning the legend result
    // add property for bin number and set to index location
    result.forEach((row, i) => {
      row.bin = i // set bin number to index
    })

    // Move all special legend items from "Special Classes"  to the end of the legend
    if (state.legend.showSpecialClassesLast) {
      let specialRows = result.filter(d => d.special === true)
      let otherRows = result.filter(d => !d.special)
      result = [...otherRows, ...specialRows]
    }
    //-----------

    const assignSpecialClassLastIndex = (value, key) => {
      const newIndex = result.findIndex(d => d.bin === value)
      newLegendSpecialClassLastMemo.set(key, newIndex)
    }
    newLegendMemo.forEach(assignSpecialClassLastIndex)
    legendSpecialClassLastMemo.current = newLegendSpecialClassLastMemo

    return result
  })

  // eslint-disable-next-line
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
        } else {
          values = values
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
          if (0 === navigateUrl.length) {
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

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    setContainer(node)
  }, []) // eslint-disable-line

  const mapSvg = useRef(null)

  const closeModal = ({ target }) => {
    if (
      'string' === typeof target.className &&
      (target.className.includes('modal-close') || target.className.includes('modal-background')) &&
      null !== modal
    ) {
      setModal(null)
    }
  }

  const displayDataAsText = (value, columnName) => {
    if (value === null || value === '' || value === undefined) {
      return ''
    }

    // if string of letters like 'Home' then dont need to format as a number
    if (
      typeof value === 'string' &&
      value.length > 0 &&
      /[a-zA-Z]/.test(value) &&
      state.legend.type === 'equalnumber'
    ) {
      return value
    }

    let formattedValue = value

    let columnObj = state.columns[columnName]

    if (columnObj === undefined) {
      // then use left axis config
      columnObj = state.columns.primary
      // NOTE: Left Value Axis uses different names
      // so map them below so the code below works
      // - copy commas to useCommas to work below
      columnObj['useCommas'] = columnObj.commas
      // - copy roundTo to roundToPlace to work below
      columnObj['roundToPlace'] = columnObj.roundTo ? columnObj.roundTo : ''
    }

    if (columnObj) {
      // If value is a number, apply specific formattings
      if (Number(value)) {
        const hasDecimal = columnObj.roundToPlace && (columnObj.roundToPlace !== '' || columnObj.roundToPlace !== null)
        const decimalPoint = columnObj.roundToPlace ? Number(columnObj.roundToPlace) : 0

        // Rounding
        if (columnObj.hasOwnProperty('roundToPlace') && hasDecimal) {
          formattedValue = Number(value).toFixed(decimalPoint)
        }

        if (columnObj.hasOwnProperty('useCommas') && columnObj.useCommas === true) {
          // Formats number to string with commas - allows up to 5 decimal places, if rounding is not defined.
          // Otherwise, uses the rounding value set at 'columnObj.roundToPlace'.
          formattedValue = Number(value).toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: hasDecimal ? decimalPoint : 0,
            maximumFractionDigits: hasDecimal ? decimalPoint : 5
          })
        }
      }

      // Check if it's a special value. If it is not, apply the designated prefix and suffix
      if (false === state.legend.specialClasses.includes(String(value))) {
        formattedValue = (columnObj.prefix || '') + formattedValue + (columnObj.suffix || '')
      }
    }

    return formattedValue
  }

  // this is passed DOWN into the various components
  // then they do a lookup based on the bin number as index into here
  const applyLegendToRow = rowObj => {
    try {
      if (!rowObj) throw new Error('COVE: No rowObj in applyLegendToRow')
      // Navigation mapchanged
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

  // if city has a hyphen then in tooltip it ends up UPPER CASE instead of just regular Upper Case
  // - this function is used to prevent that and instead give the formatting that is wanted
  // Example:  Desired city display in tooltip on map: "Inter-Tribal Indian Reservation"
  const titleCase = string => {
    // guard clause else error in editor
    if (!string) return
    if (string !== undefined) {
      const toTitleCase = word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()

      if (string.toUpperCase().includes('U.S.') || string.toUpperCase().includes('US')) {
        return string
          .split(' ')
          .map(word => {
            if (word.toUpperCase() === 'U.S.' || word.toUpperCase() === 'US') {
              return word.toUpperCase()
            } else {
              return toTitleCase(word)
            }
          })
          .join(' ')
      }
      // if hyphen found, then split, uppercase each word, and put back together
      if (string.includes('–') || string.includes('-')) {
        let dashSplit = string.includes('–') ? string.split('–') : string.split('-') // determine hyphen or en dash to split on
        let splitCharacter = string.includes('–') ? '–' : '-' // print hyphen or en dash later on.
        let frontSplit = dashSplit[0]
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
          .join(' ')
        let backSplit = dashSplit[1]
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
          .join(' ')
        return frontSplit + splitCharacter + backSplit
      } else {
        // just return with each word uppercase
        return string
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
          .join(' ')
      }
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

  // Attempts to find the corresponding value
  const displayGeoName = key => {
    if (!state.general.convertFipsCodes) return key

    // World Map
    // If we're returning a city name instead of a country ISO code, capitalize it for the data table.
    if (state.type === 'map' && state.general.geoType === 'world') {
      if (String(key).length > 3) return titleCase(key)
    }
    let value = key
    // Map to first item in values array which is the preferred label
    if (stateKeys.includes(value)) {
      value = titleCase(supportedStates[key][0])
    }

    if (territoryKeys.includes(value)) {
      value = titleCase(supportedTerritories[key][0])
    }

    if (countryKeys.includes(value)) {
      value = supportedCountries[key][0]
    }

    if (countyKeys.includes(value)) {
      value = titleCase(supportedCounties[key])
    }

    const dict = {
      'Washington D.C.': 'District of Columbia',
      'WASHINGTON DC': 'District of Columbia',
      DC: 'District of Columbia',
      'WASHINGTON DC.': 'District of Columbia',
      Congo: 'Republic of the Congo'
    }

    if (true === Object.keys(dict).includes(value)) {
      value = dict[value]
    }

    // if you get here and it's 2 letters then DONT titleCase state abbreviations like "AL"
    if (value.length === 2) {
      return value
    } else {
      return titleCase(value)
    }
  }

  // todo: convert to store or context eventually.
  const { buildTooltip } = useTooltip({ state, displayGeoName, displayDataAsText, supportedStatesFipsCodes })

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
              navigationHandler(row[state.columns.navigate.name], customNavigationHandler)
            }}
          >
            {state.tooltips.linkLabel}
            {isDomainExternal(row[state.columns.navigate.name]) && <ExternalIcon className='inline-icon ml-1' />}
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

    // If modals are set or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === state.tooltips.appearanceType) {
      setModal({
        geoName: key,
        keyedData: value
      })

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && value[state.columns.navigate.name]) {
      navigationHandler(value[state.columns.navigate.name], customNavigationHandler)
    }
  }

  const validateFipsCodeLength = newState => {
    if (
      newState.general.geoType === 'us-county' ||
      newState.general.geoType === 'single-state' ||
      (newState.general.geoType === 'us' && newState?.data)
    ) {
      newState?.data.forEach(dataPiece => {
        if (dataPiece[newState.columns.geo.name]) {
          if (
            !isNaN(parseInt(dataPiece[newState.columns.geo.name])) &&
            dataPiece[newState.columns.geo.name].length === 4
          ) {
            dataPiece[newState.columns.geo.name] = 0 + dataPiece[newState.columns.geo.name]
          }
          dataPiece[newState.columns.geo.name] = dataPiece[newState.columns.geo.name].toString()
        }
      })
    }
    return newState
  }

  const handleMapAriaLabels = (state = '', testing = false) => {
    if (testing) console.log(`handleMapAriaLabels Testing On: ${state}`) // eslint-disable-line
    try {
      if (!state.general.geoType) throw Error('handleMapAriaLabels: no geoType found in state')
      let ariaLabel = ''
      switch (state.general.geoType) {
        case 'world':
          ariaLabel += 'World map'
          break
        case 'us':
          ariaLabel += 'United States map'
          break
        case 'us-county':
          ariaLabel += `United States county map`
          break
        case 'single-state':
          ariaLabel += `${state.general.statePicked.stateName} county map`
          break
        case 'us-region':
          ariaLabel += `United States HHS Region map`
          break
        default:
          ariaLabel = 'Data visualization container'
          break
      }

      if (state.general.title) {
        ariaLabel += ` with the title: ${state.general.title}`
      }

      return ariaLabel
    } catch (e) {
      console.error('COVE: ', e.message) // eslint-disable-line
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

  const loadConfig = async configObj => {
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
    // Right now this does not work recursively -- only on first and second level properties. So state -> prop1 -> childprop1
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
      loadConfig(configData)
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

  // DEV-769 make "Data Table" both a required field and default value
  useEffect(() => {
    if (state.table?.label === '' || state.table?.label === undefined) {
      setState({
        ...state,
        table: {
          ...state.table,
          title: 'Data Table'
        }
      })
    }
  }, [state.table]) // eslint-disable-line

  // When geo label override changes
  // - redo the tooltips
  useEffect(() => {
    applyTooltipsToGeo()
  }, [state.general.geoLabelOverride]) // eslint-disable-line

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
    capitalize: state.tooltips?.capitalizeLabels,
    closeModal,
    columnsInData: state?.data?.[0] ? Object.keys(state.data[0]) : [],
    container,
    content: modal,
    currentViewport,
    data: runtimeData,
    dimensions,
    displayDataAsText,
    displayGeoName,
    filteredCountryCode,
    generateColorsArray,
    generateRuntimeData,
    geoClickHandler,
    handleMapAriaLabels,
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
    supportedCities,
    supportedCounties,
    supportedCountries,
    supportedTerritories,
    titleCase,
    type: general.type,
    viewport: currentViewport,
    tooltipId,
    tooltipRef,
    topoData,
    setTopoData,
    mapId
  }

  if (!mapProps.data || !state.data) return <></>

  const hasDataTable =
    state.runtime.editorErrorMessage.length === 0 &&
    true === table.forceDisplay &&
    general.type !== 'navigation' &&
    false === loading

  const handleMapTabbing = () => {
    let tabbingID

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

              {general.introText && (
                <section className='introText' style={{ padding: '15px', margin: '0px' }}>
                  {parse(general.introText)}
                </section>
              )}

              {state?.filters?.length > 0 && (
                <Filters
                  config={state}
                  setConfig={setState}
                  getUniqueValues={getUniqueValues}
                  filteredData={runtimeFilters}
                  setFilteredData={setRuntimeFilters}
                  dimensions={dimensions}
                />
              )}

              <div
                role='region'
                tabIndex='0'
                className={mapContainerClasses.join(' ')}
                onClick={e => closeModal(e)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    closeModal(e)
                  }
                }}
                style={{ padding: '15px 0px', margin: '0px' }}
              >
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                <section className='outline-none geography-container w-100' ref={mapSvg} tabIndex='0'>
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
                  navigationHandler={val => navigationHandler(val, customNavigationHandler)}
                />
              )}

              {/* Link */}
              {isDashboard && config.table?.forceDisplay && config.table.showDataTableLink ? tableLink : link && link}

              {subtext.length > 0 && <p className='subtext'>{parse(subtext)}</p>}

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
                    displayDataAsText={displayDataAsText}
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

              {general.footnotes && <section className='footnotes'>{parse(general.footnotes)}</section>}
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
