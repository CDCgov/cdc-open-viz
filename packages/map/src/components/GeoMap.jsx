import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import produce from 'immer'

// Third party
import chroma from 'chroma-js'
import parse from 'html-react-parser'
import { Tooltip as ReactTooltip } from 'react-tooltip'

// IE11
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

// Child Components
import Filters from './Filters'
import Modal from './Modal'
import Sidebar from './Sidebar'

import CountyMap from './CountyMap' // Future: Lazy
import DataTable from './DataTable' // Future: Lazy
import NavigationMenu from './NavigationMenu' // Future: Lazy
import SingleStateMap from './SingleStateMap' // Future: Lazy
import UsaMap from './UsaMap' // Future: Lazy
import UsaRegionMap from './UsaRegionMap' // Future: Lazy
import WorldMap from './WorldMap' // Future: Lazy

// Data
import { dictionary as dict, countryCoordinates } from '../data/utils'

import colorPalettes from '@cdc/core/data/colorPalettes'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'
import MediaControls from '@cdc/core/components/ui/MediaControls'
import { convertToTitleCase } from '@cdc/core/helpers/cove/string'

// Components - Core

// Components - Local

// Assets
import ExternalIcon from '../images/external-link.svg'

// Styles

import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

import { addUIDs, stateKeys, countryKeys, countyKeys, territoryKeys, hashObj, generateRuntimeData } from '../runtime'
import { supportedStates, supportedTerritories, supportedCountries, supportedCounties, supportedStatesFipsCodes, stateFipsToTwoDigit } from '../data/supported-geos'

// Data props

const generateColorsArray = (color = '#000000', special = false) => {
  let colorObj = chroma(color)
  let hoverColor = special ? colorObj.brighten(0.5).hex() : colorObj.saturate(1.3).hex()

  return [color, hoverColor, colorObj.darken(0.3).hex()]
}

const GeoMap = ({
  className, // not needed
  navigationHandler: customNavigationHandler,
  logo = null,
  setSharedFilter,
  setSharedFilterValue,
  link
}) => {
  const { config, updateVisConfig } = useVisConfig()
  const [currentViewport, setCurrentViewport] = useState()
  const [modal, setModal] = useState(null)
  const [accessibleStatus, setAccessibleStatus] = useState('')
  const [filteredCountryCode, setFilteredCountryCode] = useState()
  const { filters } = config

  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState(false)
  const [container, setContainer] = useState()
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`) // eslint-disable-line
  let legendMemo = useRef(new Map())
  let innerContainerRef = useRef()

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = CoveHelper.General.getViewport(entry.contentRect.width)

      setCurrentViewport(newViewport)
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    setContainer(node)
  }, [])

  const mapSvg = useRef(null)

  const closeModal = ({ target }) => {
    if ('string' === typeof target.className && (target.className.includes('modal-close') || target.className.includes('modal-background')) && null !== modal) {
      setModal(null)
    }
  }

  const changeFilterActive = async (idx, activeValue) => {
    // Reset active legend toggles
    resetLegendToggles()

    updateVisConfig({
      filters: produce(filters, draft => {
        draft[idx].active = activeValue
      })
    })
  }

  const applyLegendToRow = rowObj => {
    try {
      if (!rowObj) throw new Error('COVE: No rowObj in applyLegendToRow')
      // Navigation map
      if ('navigation' === config.general.type) {
        let mapColorPalette = colorPalettes[config.color] || colorPalettes['bluegreenreverse']
        return generateColorsArray(mapColorPalette[3])
      }

      let hash = hashObj(rowObj)
      let colors

      if (legendMemo.current.has(hash)) {
        let idx = legendMemo.current.get(hash)
        if (config.runtimeLegend[idx]?.disabled) return false
        colors = generateColorsArray(config.runtimeLegend[idx]?.color, config.runtimeLegend[idx]?.special)
        return colors
      }

      // Fail state
      colors = generateColorsArray()
      return colors
    } catch (e) {
      console.error(e)
    }
  }

  // This resets all active legend toggles.
  const resetLegendToggles = async () => {
    updateVisConfig(
      produce(config, draft => {
        draft.forEach(legendItem => {
          delete legendItem.disabled
        })
      })
    )
  }

  const formatLegendLocation = key => {
    let value = key
    let formattedName = ''
    let stateName = stateFipsToTwoDigit[key.substring(0, 2)]

    if (stateName) {
      formattedName += stateName
    }

    if (countyKeys.includes(value)) {
      formattedName += ', ' + convertToTitleCase(supportedCounties[key])
    }

    return formattedName
  }

  const navigationHandler = useCallback(
    urlString => {
      // Call custom navigation method if passed
      if (customNavigationHandler) {
        customNavigationHandler(urlString)
        return
      }

      // Abort if value is blank
      if (0 === urlString.length) {
        throw Error('Blank string passed as URL. Navigation aborted.')
      }

      const urlObj = new URL(urlString)

      // Open constructed link in new tab/window
      window.open(urlObj.toString(), '_blank')
    },
    [customNavigationHandler]
  )

  const geoClickHandler = (key, value) => {
    if (setSharedFilter) {
      setSharedFilter(config.uid, value)
    }

    // If modals are set or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === config.tooltips.appearanceType) {
      setModal({
        geoName: key,
        keyedData: value
      })

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (config.columns.navigate && value[config.columns.navigate.name]) {
      navigationHandler(value[config.columns.navigate.name])
    }
  }

  const handleMapAriaLabels = (state = '', testing = false) => {
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
      console.error(e.message)
    }
  }

  // Attempts to find the corresponding value
  const displayGeoName = useCallback(key => {
    let value = key
    // Map to first item in values array which is the preferred label
    if (stateKeys.includes(value)) {
      value = convertToTitleCase(supportedStates[key][0])
    }

    if (territoryKeys.includes(value)) {
      value = convertToTitleCase(supportedTerritories[key][0])
    }

    if (countryKeys.includes(value)) {
      value = convertToTitleCase(supportedCountries[key][0])
    }

    if (countyKeys.includes(value)) {
      value = convertToTitleCase(supportedCounties[key])
    }

    if (true === Object.keys(dict).includes(value)) {
      value = dict[value]
    }
    return convertToTitleCase(value)
  }, [])

  const displayDataAsText = useCallback(
    (value, columnName) => {
      if (value === null || value === '' || value === undefined) {
        return ''
      }

      if (typeof value === 'string' && value.length > 0 && config.legend.type === 'equalnumber') {
        return value
      }

      let formattedValue = value

      let columnObj = config.columns[columnName]

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
        if (false === config.legend.specialClasses.includes(String(value))) {
          formattedValue = (columnObj.prefix || '') + formattedValue + (columnObj.suffix || '')
        }
      }

      return formattedValue
    },
    [config.columns, config.legend.specialClasses, config.legend.type]
  )

  const applyTooltipsToGeo = useCallback(
    (geoName, row, returnType = 'string') => {
      if (!row) return
      let toolTipText = ''

      // Adds geo label, ie State: Georgia
      let stateOrCounty = config.general.geoType === 'us' ? 'State: ' : config.general.geoType === 'us-county' || config.general.geoType === 'single-state' ? 'County: ' : ''
      // check the override
      stateOrCounty = config.general.geoLabelOverride !== '' ? config.general.geoLabelOverride + ': ' : stateOrCounty

      if (config.general.geoType === 'us-county' && config.general.type !== 'us-geocode') {
        let stateFipsCode = row[config.columns.geo.name].substring(0, 2)
        const stateName = supportedStatesFipsCodes[stateFipsCode]

        toolTipText += !config.general.hideGeoColumnInTooltip ? `<strong>Location:  ${stateName}</strong><br/>` : `<strong>${stateName}</strong><br/>`
      }

      toolTipText += !config.general.hideGeoColumnInTooltip ? `<strong>${stateOrCounty}${displayGeoName(geoName)}</strong>` : `<strong>${displayGeoName(geoName)}</strong>`

      if (('data' === config.general.type || config.general.type === 'bubble' || config.general.type === 'us-geocode') && undefined !== row) {
        toolTipText += `<dl>`

        Object.keys(config.columns).forEach(columnKey => {
          const column = config.columns[columnKey]

          if (true === column.tooltip) {
            let label = column.label.length > 0 ? column.label : ''

            let value

            if (config.legend.specialClasses && config.legend.specialClasses.length && typeof config.legend.specialClasses[0] === 'object') {
              for (let i = 0; i < config.legend.specialClasses.length; i++) {
                if (String(row[config.legend.specialClasses[i].key]) === config.legend.specialClasses[i].value) {
                  value = displayDataAsText(config.legend.specialClasses[i].label, columnKey)
                  break
                }
              }
            }

            if (!value) {
              value = displayDataAsText(row[column.name], columnKey)
            }

            if (0 < value.length) {
              // Only spit out the tooltip if there's a value there
              toolTipText += config.general.hidePrimaryColumnInTooltip ? `<div><dd>${value}</dd></div>` : `<div><dt>${label}</dt><dd>${value}</dd></div>`
            }
          }
        })
        toolTipText += `</dl>`
      }

      // We convert the markup into JSX and add a navigation link if it's going into a modal.
      if ('jsx' === returnType) {
        toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]

        if (config.columns.hasOwnProperty('navigate') && row[config.columns.navigate.name]) {
          toolTipText.push(
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <span className='navigation-link' key='modal-navigation-link' onClick={() => navigationHandler(row[config.columns.navigate.name])}>
              {config.tooltips.linkLabel}
              <ExternalIcon className='inline-icon ml-1' />
            </span>
          )
        }
      }

      return toolTipText
    },
    [config.columns, config.general.geoLabelOverride, config.general.geoType, config.general.hideGeoColumnInTooltip, config.general.hidePrimaryColumnInTooltip, config.general.type, config.legend.specialClasses, config.tooltips.linkLabel, displayDataAsText, displayGeoName, navigationHandler]
  )

  useEffect(() => {
    applyTooltipsToGeo()
  }, [config.general.geoLabelOverride])

  useEffect(() => {
    updateVisConfig({ mapPosition: { coordinates: [0, 30], zoom: 3 } })
  }, [])

  useEffect(() => {
    try {
      if (filteredCountryCode) {
        const coordinates = countryCoordinates[filteredCountryCode]
        const long = coordinates[1]
        const lat = coordinates[0]
        const reversedCoordinates = [long, lat]

        updateVisConfig({ mapPosition: { coordinates: reversedCoordinates, zoom: 3 } })
      }
    } catch (e) {
      console.error('Failed to set world map zoom.')
    }
  }, [filteredCountryCode, updateVisConfig])

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      CoveHelper.Event.publish('cove_loaded', config)
      setCoveLoadedHasRan(true)
    }
  }, [config, container])

  // Destructuring for more readable JSX
  const { general, tooltips, dataTable } = config
  const { title = '', subtext = '' } = general

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
    applyTooltipsToGeo,
    closeModal,
    navigationHandler,
    geoClickHandler,
    applyLegendToRow,
    displayGeoName,
    generateColorsArray,
    convertToTitleCase,
    generateRuntimeData,
    setFilteredCountryCode,
    filteredCountryCode,
    setSharedFilterValue,
    hasZoom: config.general.allowMapZoom,
    handleMapAriaLabels,
    innerContainerRef,
    data: config.data
  }

  const hasDataTable = config.runtime.editorErrorMessage.length === 0 && true === dataTable.forceDisplay && general.type !== 'navigation'

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

  return (
    <div className={outerContainerClasses.join(' ')} ref={outerContainerRef} data-download-id={imageId}>
      {(general.type === 'navigation' || config.legend) && (
        <section className={`cdc-map-inner-container ${currentViewport}`} aria-label={'Map: ' + title} ref={innerContainerRef}>
          {!window.matchMedia('(any-hover: none)').matches && 'hover' === tooltips.appearanceType && <ReactTooltip id='tooltip' variant='light' float={true} className={`${tooltips.capitalizeLabels ? 'capitalize tooltip' : 'tooltip'}`} />}
          {general.title && (
            <header className={general.showTitle === true ? 'visible' : 'hidden'} {...(!general.showTitle || !config.general.title ? { 'aria-hidden': true } : { 'aria-hidden': false })}>
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
              <div role='heading' className={`map-title${general.headerColor ? ' theme-' + general.headerColor : ''}`} tabIndex='0' aria-level='2'>
                <sup>{general.superTitle}</sup>
                <div>{parse(title)}</div>
              </div>
            </header>
          )}
          {general.introText && <section className='introText'>{parse(general.introText)}</section>}

          <Filters />

          <div
            role='button'
            tabIndex='0'
            className={mapContainerClasses.join(' ')}
            onClick={e => closeModal(e)}
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
            <section className='geography-container outline-none' ref={mapSvg} tabIndex='0'>
              {currentViewport && (
                <section className='geography-container' ref={mapSvg}>
                  {modal && <Modal type={general.type} viewport={currentViewport} applyTooltipsToGeo={applyTooltipsToGeo} applyLegendToRow={applyLegendToRow} capitalize={config.tooltips.capitalizeLabels} content={modal} />}
                  {'single-state' === general.geoType && <SingleStateMap supportedTerritories={supportedTerritories} {...mapProps} />}
                  {'us' === general.geoType && 'us-geocode' !== config.general.type && <UsaMap supportedTerritories={supportedTerritories} {...mapProps} />}
                  {'us-region' === general.geoType && <UsaRegionMap supportedTerritories={supportedTerritories} {...mapProps} />}
                  {'world' === general.geoType && <WorldMap supportedCountries={supportedCountries} {...mapProps} />}
                  {'us-county' === general.geoType && <CountyMap supportedCountries={supportedCountries} {...mapProps} />}
                  {'data' === general.type && logo && <img src={logo} alt='' className='map-logo' />}
                </section>
              )}
            </section>

            {general.showSidebar && 'navigation' !== general.type && (
              <Sidebar
                viewport={currentViewport}
                legend={config.legend}
                columns={config.columns}
                sharing={config.sharing}
                prefix={config.columns.primary.prefix}
                suffix={config.columns.primary.suffix}
                resetLegendToggles={resetLegendToggles}
                changeFilterActive={changeFilterActive}
                setAccessibleStatus={setAccessibleStatus}
                displayDataAsText={displayDataAsText}
              />
            )}
          </div>

          {'navigation' === general.type && <NavigationMenu mapTabbingID={tabId} displayGeoName={displayGeoName} options={general} columns={config.columns} navigationHandler={val => navigationHandler(val)} />}

          {link && link}

          {subtext.length > 0 && <p className='subtext'>{parse(subtext)}</p>}

          <MediaControls.Section classes={['download-buttons']}>
            {config.general.showDownloadImgButton && <MediaControls.Button text='Download Image' title='Download Chart as Image' type='image' state={config} elementToCapture={imageId} />}
            {config.general.showDownloadPdfButton && <MediaControls.Button text='Download PDF' title='Download Chart as PDF' type='pdf' state={config} elementToCapture={imageId} />}
          </MediaControls.Section>

          {config.runtime.editorErrorMessage.length === 0 && true === dataTable.forceDisplay && general.type !== 'navigation' && (
            <DataTable
              rawData={config.data}
              navigationHandler={navigationHandler}
              expandDataTable={general.expandDataTable}
              headerColor={general.headerColor}
              columns={config.columns}
              showDownloadButton={general.showDownloadButton}
              displayDataAsText={displayDataAsText}
              displayGeoName={displayGeoName}
              applyLegendToRow={applyLegendToRow}
              tableTitle={dataTable.title}
              indexTitle={dataTable.indexLabel}
              mapTitle={general.title}
              viewport={currentViewport}
              formatLegendLocation={formatLegendLocation}
              setFilteredCountryCode={setFilteredCountryCode}
              tabbingId={tabId}
              showDownloadImgButton={config.general.showDownloadImgButton}
              showDownloadPdfButton={config.general.showDownloadPdfButton}
              innerContainerRef={innerContainerRef}
              outerContainerRef={outerContainerRef}
              imageRef={imageId}
            />
          )}

          {general.footnotes && <section className='footnotes'>{parse(general.footnotes)}</section>}
        </section>
      )}

      <div aria-live='assertive' className='cdcdataviz-sr-only'>
        {accessibleStatus}
      </div>
    </div>
  )
}

export default GeoMap
