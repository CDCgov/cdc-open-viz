import { useEffect, useRef, useCallback, useReducer } from 'react'

// IE11
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

// Third party
import { Tooltip as ReactTooltip } from 'react-tooltip'
import chroma from 'chroma-js'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Helpers
import { publish } from '@cdc/core/helpers/events'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'

// Data
import { countryCoordinates } from './data/country-coordinates'
import { supportedStates, supportedTerritories, supportedCountries, supportedCounties, supportedCities, supportedStatesFipsCodes, stateFipsToTwoDigit, supportedRegions } from './data/supported-geos'
import colorPalettes from '@cdc/core/data/colorPalettes'
import initialState from './data/initial-state'
import { MapConfig } from './types/MapConfig'

// Assets
import ExternalIcon from './images/external-link.svg'

// TODO: combine scss.
import './scss/main.scss'
import './scss/btn.scss'

// Core
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import MediaControls from '@cdc/core/components/MediaControls'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import getViewport from '@cdc/core/helpers/getViewport'
import numberFromString from '@cdc/core/helpers/numberFromString'
import DataTable from '@cdc/core/components/DataTable' // Future: Lazy
import Title from '@cdc/core/components/ui/Title'

// Child Components
import ConfigContext from './context'
import Filters, { useFilters } from '@cdc/core/components/Filters'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

import CountyMap from './components/CountyMap' // Future: Lazy
import EditorPanel from './components/EditorPanel' // Future: Lazy
import NavigationMenu from './components/NavigationMenu' // Future: Lazy
import SingleStateMap from './components/SingleStateMap' // Future: Lazy
import UsaMap from './components/UsaMap' // Future: Lazy
import UsaRegionMap from './components/UsaRegionMap' // Future: Lazy
import WorldMap from './components/WorldMap' // Future: Lazy
import useTooltip from './hooks/useTooltip'
import mapReducer from './store/map.reducer'
import { hashObj } from './helpers/hashObj'
import { generateRuntimeLegend } from './helpers/generateRuntimeLegend'

// Data props
const stateKeys = Object.keys(supportedStates)
const territoryKeys = Object.keys(supportedTerritories)
const regionKeys = Object.keys(supportedRegions)
const countryKeys = Object.keys(supportedCountries)
const countyKeys = Object.keys(supportedCounties)
const cityKeys = Object.keys(supportedCities)

const generateColorsArray = (color = '#000000', special = false) => {
  let colorObj = chroma(color)
  let hoverColor = special ? colorObj.brighten(0.5).hex() : colorObj.saturate(1.3).hex()

  return [color, hoverColor, colorObj.darken(0.3).hex()]
}

const getUniqueValues = (data, columnName): string[] => {
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

type CdcMapProperties = {
  configUrl?: string
  className?: string
  config?: MapConfig
  isDashboard?: boolean
  isEditor?: boolean
  hostname: string
  link?: string
  navigationHandler?: Function
  isDebug?: boolean
  logo?: string
  setConfig?: Function
  setSharedFilter?: Function
  setSharedFilterValue?: Function
}

const CdcMap = (props: CdcMapProperties) => {
  // prettier-ignore
  const {
    className,
    config: configObj,
    configUrl,
    hostname = 'localhost:8080',
    isDashboard = false,
    isDebug = false,
    isEditor = false,
    link,
    logo = '',
    navigationHandler: customNavigationHandler,
    setConfig: setParentConfig,
    setSharedFilter,
    setSharedFilterValue,
  } = props

  const mapInitialState = {
    accessibleStatus: '',
    config: configObj ?? initialState,
    container: null,
    coveLoadedHasRan: false,
    currentViewport: null,
    dimensions: null,
    filteredCountryCode: null,
    loading: true,
    modal: null,
    position: configObj?.mapPosition ?? initialState.mapPosition,
    runtimeData: {},
    runtimeFilters: [],
    runtimeLegend: [],
    runtime: {}
  }

  const [state, dispatch] = useReducer(mapReducer, mapInitialState)

  // prettier-ignore
  const {
    accessibleStatus,
    config,
    currentViewport,
    loading,
    runtimeFilters,
    runtimeLegend,
    modal,
    filteredCountryCode,
    runtimeData,
    position,
    coveLoadedHasRan,
    container,
    dimensions
  } = state

  // TODO: move these into context later on.
  const setConfig = payload => {
    dispatch({ type: 'SET_CONFIG', payload })
  }

  const setRuntimeFilters = payload => {
    dispatch({ type: 'SET_RUNTIME_FILTERS', payload })
  }

  const setRuntimeLegend = payload => {
    dispatch({ type: 'SET_RUNTIME_LEGEND', payload })
  }

  const setAccessibleStatus = payload => {
    dispatch({ type: 'SET_ACCESSIBLE_STATUS', payload })
  }

  const setFilteredCountryCode = payload => {
    dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload })
  }

  const setRuntimeData = (payload: Record<string, Object>) => {
    dispatch({ type: 'SET_RUNTIME_DATA', payload })
  }

  const setPosition = payload => {
    dispatch({ type: 'SET_POSITION', payload })
  }

  const setContainer = payload => {
    dispatch({ type: 'SET_CONTAINER', payload })
  }

  const setDimensions = payload => {
    dispatch({ type: 'SET_DIMENSIONS', payload })
  }

  const setErrorMessage = (payload: string) => {
    dispatch({ type: 'SET_ERROR_MESSAGE', payload })
  }

  const transform = new DataTransform()

  const { handleSorting } = useFilters({ config: config, setConfig: setConfig })
  let legendMemo = useRef(new Map())
  let innerContainerRef = useRef()
  const imageId = `cove-${Math.random().toString(16).slice(-4)}`

  useEffect(() => {
    try {
      if (filteredCountryCode) {
        const coordinates = countryCoordinates[filteredCountryCode]
        const long = coordinates[1]
        const lat = coordinates[0]
        const reversedCoordinates = [long, lat]

        // setConfig({
        //   ...state.config,
        //   mapPosition: { coordinates: reversedCoordinates, zoom: 3 }
        // })
        dispatch({
          type: 'SET_CONFIG',
          payload: {
            ...state.config,
            mapPosition: {
              ...state.config.mapPosition,
              coordinates: reversedCoordinates,
              zoom: 3
            }
          }
        })

        dispatch({ type: 'SET_POSITION', payload: { coordinates: reversedCoordinates, zoom: 3 } })
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

  const generateRuntimeLegendHash = () => {
    return hashObj({
      unified: config.legend.unified ?? false,
      equalNumberOptIn: config.general.equalNumberOptIn ?? false,
      specialClassesLast: config.legend.showSpecialClassesLast ?? false,
      color: config.color,
      customColors: config.customColors,
      numberOfItems: config.legend.numberOfItems,
      type: config.legend.type,
      separateZero: config.legend.separateZero ?? false,
      primary: config.columns.primary.name,
      categoryValuesOrder: config.legend.categoryValuesOrder,
      specialClasses: config.legend.specialClasses,
      geoType: config.general.geoType,
      data: config.data,
      ...runtimeFilters,
      filters: {
        ...config.filters
      }
    })
  }

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = getViewport(entry.contentRect.width)
      let editorWidth = 350

      dispatch({ type: 'SET_CURRENT_VIEWPORT', payload: newViewport })

      if (isEditor) {
        width = width - editorWidth
      }
      setDimensions([width, height])
    }
  })

  // Tag each row with a UID. Helps with filtering/placing geos. Not enumerable so doesn't show up in loops/console logs except when directly addressed ex row.uid
  // We are mutating state in place here (depending on where called) - but it's okay, this isn't used for rerender
  // eslint-disable-next-line
  const addUIDs = (obj, fromColumn) => {
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
        if (!uid) {
          uid = cityKeys.find(key => key === geoName)
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
        if (!uid && 'world-geocode' === config.general.type) {
          uid = cityKeys.find(key => key === geoName?.toUpperCase())
        }
      }

      // County Check
      if (('us-county' === obj.general.geoType || 'single-state' === obj.general.geoType) && 'us-geocode' !== obj.general.type) {
        const fips = row[obj.columns.geo.name]
        uid = countyKeys.find(key => key === fips)
      }

      if ('us-geocode' === config.general.type) {
        uid = row[config.columns.geo.name]
      }

      if (uid) {
        Object.defineProperty(row, 'uid', {
          value: uid,
          writable: true
        })
      }
    })

    obj.data.fromColumn = fromColumn
  }

  // eslint-disable-next-line
  const generateRuntimeFilters = (obj, hash, runtimeFilters) => {
    if (typeof obj === 'undefined' || undefined === obj.filters || obj.filters.length === 0) return []

    let filters = []

    if (hash) filters['fromHash'] = hash

    obj?.filters.forEach(({ columnName, label, labels, queryParameter, orderedValues, active, values, type, showDropdown }, idx) => {
      let newFilter = runtimeFilters[idx]

      const sortAsc = (a, b) => {
        return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
      }

      const sortDesc = (a, b) => {
        return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
      }

      if (type !== 'url') {
        values = getUniqueValues(config.data, columnName)
        switch (obj.filters[idx].order) {
          case 'asc': {
            values = values.sort(sortAsc)
          }
          case 'desc': {
            values = values.sort(sortDesc)
          }
          case 'cust': {
            if (obj.filters[idx]?.values.length > 0) {
              values = obj.filters[idx].values
            }
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
      handleSorting(newFilter)
      newFilter.active = active ?? values[0] // Default to first found value
      newFilter.filterStyle = obj.filters[idx].filterStyle ? obj.filters[idx].filterStyle : 'dropdown'
      newFilter.showDropdown = showDropdown

      filters.push(newFilter)
    })

    return filters
  }

  // Calculates what's going to be displayed on the map and data table at render.
  // eslint-disable-next-line
  const generateRuntimeData = (obj, filters?, hash?, test?) => {
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

        // When on a single state map filter runtime data by state
        if (!(String(row[obj.columns.geo.name]).substring(0, 2) === obj.general?.statePicked?.fipsCode) && obj.general.geoType === 'single-state' && obj.general.type !== 'us-geocode') {
          return false
        }

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
  }

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    setContainer(node)
  }, []) // eslint-disable-line

  const mapSvg = useRef(null)

  const closeModal = ({ target }) => {
    if ('string' === typeof target.className && (target.className.includes('modal-close') || target.className.includes('modal-background')) && null !== modal) {
      dispatch({ type: 'SET_MODAL', payload: null })
    }
  }

  const displayDataAsText = (value, columnName) => {
    if (value === null || value === '' || value === undefined) {
      return ''
    }

    // if string of letters like 'Home' then dont need to format as a number
    if (typeof value === 'string' && value.length > 0 && config.legend.type === 'equalnumber') {
      return value
    }

    let formattedValue = value

    let columnObj = config.columns[columnName]

    if (columnObj === undefined) {
      // then use left axis config
      columnObj = config.columns.primary
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
      if (false === (config.legend.specialClasses as unknown as string[]).includes(String(value))) {
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
      if ('navigation' === config.general.type) {
        let mapColorPalette = colorPalettes[config.color] || colorPalettes['bluegreenreverse']
        return generateColorsArray(mapColorPalette[3])
      }

      let hash = hashObj(rowObj)

      if (legendMemo.current.has(hash)) {
        let idx = legendMemo.current.get(hash)
        if (runtimeLegend[idx]?.disabled) return false

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

    dispatch({ type: 'SET_RUNTIME_LEGEND', payload: newLegend })
  }

  const formatLegendLocation = key => {
    let value = key
    let formattedName = ''
    let stateName = stateFipsToTwoDigit[key.substring(0, 2)]

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
    if (!config.general.convertFipsCodes) return key
    let value = key
    // Map to first item in values array which is the preferred label
    if (stateKeys.includes(value)) {
      value = titleCase(supportedStates[key][0])
    }

    if (territoryKeys.includes(value)) {
      value = titleCase(supportedTerritories[key][0])
    }

    if (countryKeys.includes(value)) {
      value = titleCase(supportedCountries[key][0])
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
  const { buildTooltip } = useTooltip({ config, displayGeoName, displayDataAsText, supportedStatesFipsCodes })

  const applyTooltipsToGeo = (geoName?, row?, returnType = 'string') => {
    let toolTipText = buildTooltip(row, geoName, '')

    // We convert the markup into JSX and add a navigation link if it's going into a modal.
    if ('jsx' === returnType) {
      toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]

      if (config.columns.hasOwnProperty('navigate') && row[config.columns.navigate.name]) {
        toolTipText.push(
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <ul className='navigation-link' key='modal-navigation-link' onClick={() => navigationHandler(row[config.columns.navigate.name])}>
            {config.tooltips.linkLabel}
            <ExternalIcon className='inline-icon ml-1' />
          </ul>
        )
      }
    }

    return toolTipText
  }

  const navigationHandler = urlString => {
    // Call custom navigation method if passed
    if (customNavigationHandler) {
      customNavigationHandler(urlString)
      return
    }

    // Abort if value is blank
    if (0 === urlString.length) {
      throw Error('Blank string passed as URL. Navigation aborted.')
    }

    const urlObj = new URL(urlString, window.location.origin)

    // Open constructed link in new tab/window
    window.open(urlObj.toString(), '_blank')
  }

  const geoClickHandler = (key, value) => {
    if (setSharedFilter) {
      setSharedFilter(config.uid, value)
    }

    // If world-geocode map zoom to geo point
    if ('world-geocode' === config.general.type) {
      let lat = value[config.columns.latitude.name]
      let long = value[config.columns.longitude.name]

      setConfig({
        ...state.config,
        mapPosition: { coordinates: [long, lat], zoom: 3 }
      })
    }

    // If modals are set or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === config.tooltips.appearanceType) {
      dispatch({
        type: 'SET_MODAL',
        payload: {
          geoName: key,
          keyedData: value
        }
      })

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (config.columns.navigate && value[config.columns.navigate.name]) {
      navigationHandler(value[config.columns.navigate.name])
    }
  }

  const validateFipsCodeLength = newState => {
    if (newState.general.geoType === 'us-county' || newState.general.geoType === 'single-state' || (newState.general.geoType === 'us' && newState?.data)) {
      newState?.data.forEach(dataPiece => {
        if (dataPiece[newState.columns.geo.name]) {
          if (!isNaN(parseInt(dataPiece[newState.columns.geo.name])) && dataPiece[newState.columns.geo.name].length === 4) {
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
      if (!config.general.geoType) throw Error('handleMapAriaLabels: no geoType found in state')
      let ariaLabel = ''
      switch (config.general.geoType) {
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
          ariaLabel += `${config.general.statePicked.stateName} county map`
          break
        case 'us-region':
          ariaLabel += `United States HHS Region map`
          break
        default:
          ariaLabel = 'Data visualization container'
          break
      }

      if (config.general.title) {
        ariaLabel += ` with the title: ${config.general.title}`
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
      config.filters.forEach(filter => {
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
        if ('csv' === ext) {
          data = await fetch(dataUrlFinal)
            .then(response => response.text())
            .then(responseText => {
              const parsedCsv = Papa.parse(responseText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true
              })
              return parsedCsv.data
            })
        } else if ('json' === ext) {
          data = await fetch(dataUrlFinal).then(response => response.json())
        } else {
          data = []
        }
      } catch (e) {
        console.error(`Cannot parse URL: ${dataUrlFinal}`) // eslint-disable-line
        console.log(e) // eslint-disable-line
        data = []
      }

      if (config.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, config.dataDescription)
      }

      setConfig({ ...state, runtimeDataUrl: dataUrlFinal, data })
    }
  }

  const loadConfig = async configObj => {
    // Set loading flag
    if (!loading) {
      dispatch({ type: 'SET_LOADING', payload: true })
    }

    // Create new config object the same way each time no matter when this method is called.
    let newState = {
      ...initialState,
      ...configObj
    }

    const urlFilters = newState.filters ? (newState.filters.filter(filter => filter.type === 'url').length > 0 ? true : false) : false

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
    const processedConfig = { ...(await coveUpdateWorker(newState)) }

    setConfig(processedConfig)
    dispatch({ type: 'SET_LOADING', payload: false })
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
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: state })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    }
  }, [config, container]) // eslint-disable-line

  useEffect(() => {
    if (config.data) {
      let newData = generateRuntimeData(config)
      dispatch({ type: 'SET_RUNTIME_DATA', payload: newData })
    }
  }, [config.general.statePicked]) // eslint-disable-line

  useEffect(() => {
    // When geotype changes - add UID
    if (config.data && config.columns.geo.name) {
      addUIDs(config, config.columns.geo.name)
    }
  }, [config]) // eslint-disable-line

  // DEV-769 make "Data Table" both a required field and default value
  useEffect(() => {
    if (config.table?.label === '' || config.table?.label === undefined) {
      let newState = {
        ...config,
        table: {
          ...config.table,
          title: 'Data Table'
        }
      }

      dispatch({
        type: 'SET_CONFIG',
        payload: newState
      })
    }
  }, [config.table])

  // When geo label override changes
  // - redo the tooltips
  useEffect(() => {
    applyTooltipsToGeo()
  }, [config.general.geoLabelOverride]) // eslint-disable-line

  useEffect(() => {
    // UID
    if (config.data && config.columns.geo.name && config.columns.geo.name !== config.data.fromColumn) {
      addUIDs(config, config.columns.geo.name)
    }

    // Filters
    const hashFilters = hashObj(config.filters)
    let filters

    if (config.filters && hashFilters !== (runtimeFilters as unknown as { fromHash }).fromHash) {
      filters = generateRuntimeFilters(config, hashFilters, runtimeFilters)

      if (filters) {
        dispatch({ type: 'SET_RUNTIME_FILTERS', payload: filters })
      }
    }

    const hashLegend = generateRuntimeLegendHash()

    const hashData = hashObj({
      data: config.data,
      columns: config.columns,
      geoType: config.general.geoType,
      type: config.general.type,
      geo: config.columns.geo.name,
      primary: config.columns.primary.name,
      mapPosition: config.mapPosition,
      ...runtimeFilters
    })

    // Data
    if (hashData !== runtimeData.fromHash && config.data?.fromColumn) {
      const newRuntimeData = generateRuntimeData(config, filters || runtimeFilters, hashData)
      setRuntimeData(newRuntimeData)
    } else {
      if (hashLegend !== (runtimeLegend as unknown as { fromHash }).fromHash && undefined === runtimeData.init) {
        const legend = generateRuntimeLegend(config, runtimeData, hashLegend, legendMemo, setErrorMessage)
        dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legend })
      }
    }
  }, [config]) // eslint-disable-line

  useEffect(() => {
    const hashLegend = generateRuntimeLegendHash()

    // Legend - Update when runtimeData does
    const legend = generateRuntimeLegend(config, runtimeData, hashLegend, legendMemo, setErrorMessage)
    dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legend })
  }, [runtimeData, config.legend.unified, config.legend.showSpecialClassesLast, config.legend.separateZero, config.general.equalNumberOptIn, config.legend.numberOfItems, config.legend.specialClasses]) // eslint-disable-line

  useEffect(() => {
    reloadURLData()
  }, [JSON.stringify(config.filters)])

  if (config) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      loadConfig(config)
    }, [config.data]) // eslint-disable-line
  }

  // Destructuring for more readable JSX
  const { general, tooltips, table } = config
  let { title, subtext = '', geoType } = general

  // if no title AND in editor then set a default
  if (isEditor) {
    if (!title || title === '') title = 'Map Title'
  }
  if (!table.label || table.label === '') table.label = 'Data Table'

  // Outer container classes
  let outerContainerClasses = ['cdc-open-viz-module', 'cdc-map-outer-container', currentViewport]

  if (className) {
    outerContainerClasses.push(className)
  }

  // Map container classes
  let mapContainerClasses = ['map-container', config.legend.position, config.general.type, config.general.geoType, 'outline-none']

  if (modal) {
    mapContainerClasses.push('modal-background')
  }

  if (general.type === 'navigation' && true === general.fullBorder) {
    mapContainerClasses.push('full-border')
  }

  // Props passed to all map types
  const mapProps = {
    applyLegendToRow,
    applyTooltipsToGeo,
    closeModal,
    columnsInData: config?.data?.[0] ? Object.keys(config.data[0]) : [],
    currentViewport,
    data: runtimeData,
    displayDataAsText,
    displayGeoName,
    filteredCountryCode,
    generateColorsArray,
    generateRuntimeData,
    geoClickHandler,
    handleMapAriaLabels,
    hasZoom: config.general.allowMapZoom,
    innerContainerRef,
    isDashboard,
    isDebug,
    isEditor,
    loadConfig,
    navigationHandler,
    position,
    resetLegendToggles,
    runtimeFilters,
    runtimeLegend,
    setAccessibleStatus,
    setFilteredCountryCode,
    setParentConfig: setParentConfig,
    setPosition,
    setRuntimeData,
    setRuntimeFilters,
    setRuntimeLegend,
    setSharedFilterValue,
    setConfig,
    state: config,
    supportedCities,
    supportedCounties,
    supportedCountries,
    supportedTerritories,
    titleCase,
    viewport: currentViewport,
    dispatch
  }

  if (!mapProps.data || !config.data) return <></>

  const hasDataTable = config.runtime.editorErrorMessage.length === 0 && true === table.forceDisplay && general.type !== 'navigation' && false === loading

  const handleMapTabbing = () => {
    let tabbingID

    // 1) skip to legend
    if (general.showSidebar) {
      tabbingID = '#legend'
    }

    // 2) skip to data table if it exists and not a navigation map
    if (hasDataTable && !general.showSidebar) {
      tabbingID = `#dataTableSection__${Date.now()}`
    }

    // 3) if it's a navigation map skip to the dropdown.
    if (config.general.type === 'navigation') {
      tabbingID = `#dropdown-${Date.now()}`
    }

    // 4) handle other options
    return tabbingID || '#!'
  }

  const tabId = handleMapTabbing()

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a href={`#data-table-${config.general.dataKey}`} className='margin-left-href'>
      {config.general.dataKey} (Go to Table)
    </a>
  )

  return (
    <ConfigContext.Provider value={mapProps}>
      <div className={outerContainerClasses.join(' ')} ref={outerContainerRef} data-download-id={imageId}>
        {isEditor && <EditorPanel />}
        {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
          <section className={`cdc-map-inner-container ${currentViewport}`} aria-label={'Map: ' + title} ref={innerContainerRef}>
            {!window.matchMedia('(any-hover: none)').matches && 'hover' === tooltips.appearanceType && (
              <ReactTooltip id='tooltip' float={true} className={`${tooltips.capitalizeLabels ? 'capitalize tooltip' : 'tooltip'}`} style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }} />
            )}

            {/* prettier-ignore */}
            <Title
              title={title}
              superTitle={general.superTitle}
              config={config}
              classes={['map-title', general.showTitle === true ? 'visible' : 'hidden', `${general.headerColor}`]}
            />

            {general.introText && <section className='introText'>{parse(general.introText)}</section>}

            {/* prettier-ignore */}
            {config?.filters?.length > 0 && <Filters config={config} setConfig={setConfig} filteredData={runtimeFilters} setFilteredData={setRuntimeFilters} dimensions={dimensions} />}

            <div
              role='button'
              tabIndex={0}
              className={mapContainerClasses.join(' ')}
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              onClick={e => closeModal(e)}
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  closeModal(e)
                }
              }}
            >
              <a id='skip-geo-container' className='cdcdataviz-sr-only-focusable' href={tabId}>
                Skip Over Map Container
              </a>

              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
              <section className='outline-none geography-container' ref={mapSvg} tabIndex={0} style={{ width: '100%' }}>
                {currentViewport && (
                  <>
                    {modal && <Modal content={modal} />}
                    {'single-state' === geoType && <SingleStateMap />}
                    {'us' === geoType && 'us-geocode' !== config.general.type && <UsaMap />}
                    {'us-region' === geoType && <UsaRegionMap />}
                    {'world' === geoType && <WorldMap />}
                    {'us-county' === geoType && <CountyMap />}
                    {'data' === general.type && logo && <img src={logo} alt='' className='map-logo' />}
                  </>
                )}
              </section>

              {general.showSidebar && 'navigation' !== general.type && <Sidebar />}
            </div>

            {'navigation' === general.type && <NavigationMenu mapTabbingID={tabId} displayGeoName={displayGeoName} data={runtimeData} options={general} columns={config.columns} navigationHandler={val => navigationHandler(val)} />}

            {/* Link */}
            {isDashboard && config.table?.forceDisplay && config.table.showDataTableLink ? tableLink : link && link}

            {subtext.length > 0 && <p className='subtext'>{parse(subtext)}</p>}

            <MediaControls.Section classes={['download-buttons']}>
              {config.general.showDownloadImgButton && <MediaControls.Button text='Download Image' title='Download Chart as Image' type='image' state={state} elementToCapture={imageId} />}
              {config.general.showDownloadPdfButton && <MediaControls.Button text='Download PDF' title='Download Chart as PDF' type='pdf' state={state} elementToCapture={imageId} />}
            </MediaControls.Section>

            {config.runtime.editorErrorMessage.length === 0 && true === table.forceDisplay && general.type !== 'navigation' && false === loading && (
              <DataTable
                config={config}
                rawData={config.data}
                navigationHandler={navigationHandler}
                expandDataTable={general.expandDataTable ? general.expandDataTable : table.expanded ? table.expanded : false}
                headerColor={general.headerColor}
                columns={config.columns}
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
                showDownloadImgButton={config.general.showDownloadImgButton}
                showDownloadPdfButton={config.general.showDownloadPdfButton}
                innerContainerRef={innerContainerRef}
                outerContainerRef={outerContainerRef}
                imageRef={imageId}
                isDebug={isDebug}
              />
            )}

            {general.footnotes && <section className='footnotes'>{parse(general.footnotes)}</section>}
          </section>
        )}

        <div aria-live='assertive' className='cdcdataviz-sr-only'>
          {accessibleStatus}
        </div>
      </div>
    </ConfigContext.Provider>
  )
}

export default CdcMap
