import React, { memo, useContext, useEffect, useState } from 'react'

// 3rd party
import { geoCentroid } from 'd3-geo'
import { feature } from 'topojson-client'
import { Mercator } from '@visx/geo'

// Cdc Components
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import ConfigContext from '../../../context'
import { useLegendMemoContext } from '../../../context/LegendMemoContext'
import Annotation from '../../Annotation'
import SmallMultiples from '../../SmallMultiples/SmallMultiples'

// Data
import { supportedTerritories } from '../../../data/supported-geos'

// Helpers
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { getGeoFillColor, getGeoStrokeColor } from '../../../helpers/colors'
import { SVG_VIEWBOX } from '../../../helpers/constants'
import { displayGeoName } from '../../../helpers/displayGeoName'
import { handleMapAriaLabels } from '../../../helpers/handleMapAriaLabels'
import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import useApplyTooltipsToGeo from '../../../hooks/useApplyTooltipsToGeo'
import './UsaMap.Region.styles.css'
import { applyLegendToRow } from '../../../helpers/applyLegendToRow'
import { createScopedKey } from '../../../helpers/createScopedKey'
import { useSynchronizedGeographies } from '../../../hooks/useSynchronizedGeographies'
import RegionTerritoryRect from './RegionTerritoryRect'

const UsaRegionMap = () => {
  const { runtimeData, config, mapId, tooltipId, runtimeLegend, interactionLabel } = useContext(ConfigContext)

  const a11y = handleMapAriaLabels(config)

  const { legendMemo, legendSpecialClassLastMemo } = useLegendMemoContext()
  const [focusedStates, setFocusedStates] = useState(null)
  const { geoClickHandler } = useGeoClickHandler()
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const { getSyncProps, syncHandlers } = useSynchronizedGeographies()
  const { general } = config
  const { displayStateLabels, territoriesLabel, displayAsHex, type } = general
  const tooltipInteractionType = config.tooltips.appearanceType
  const isHex = displayAsHex
  const [territoriesData, setTerritoriesData] = useState([])
  const CIRCLE_RADIUS = 15

  useEffect(() => {
    const fetchData = async () => {
      import(/* webpackChunkName: "us-regions-topo-2" */ '../data/us-regions-topo-2.json').then(topoJSON => {
        setFocusedStates(feature(topoJSON, topoJSON.objects.regions).features)
      })
    }
    fetchData()
  }, [])

  const territoriesKeys = Object.keys(supportedTerritories) // data will have already mapped abbreviated territories to their full names

  useEffect(() => {
    // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
    const territoriesList = territoriesKeys.filter(key => runtimeData[key])

    setTerritoriesData(territoriesList)
  }, [runtimeData])

  if (!focusedStates) {
    return <></>
  }

  // Early return for small multiples rendering
  if (config.smallMultiples?.mode) {
    return <SmallMultiples />
  }

  const geoStrokeColor = getGeoStrokeColor(config)
  const geoFillColor = getGeoFillColor(config)

  const territories = territoriesData.map(territory => {
    const territoryData = runtimeData[territory]

    let toolTip: string

    let styles: React.CSSProperties = {
      fill: geoFillColor
    }

    const label = supportedTerritories[territory][1]
    const territoryKey = createScopedKey(mapId, 'territory', territory)


    toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData)

    const legendColors = applyLegendToRow(territoryData, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)

    if (legendColors) {
      const textColor = getContrastColor('#FFF', legendColors[0])

      let needsPointer = false

      // If we need to add a pointer cursor
      if (
        (config.columns.navigate && territoryData[config.columns.navigate.name]) ||
        tooltipInteractionType === 'click'
      ) {
        needsPointer = true
      }

      styles = {
        color: textColor,
        fill: legendColors[0],
        cursor: needsPointer ? 'pointer' : 'default',
        '&:hover': {
          fill: legendColors[1]
        },
        '&:active': {
          fill: legendColors[2]
        }
      }

    }
  })

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    return geographies.map(({ feature: geo, path = '', index }) => {
      const key = createScopedKey(mapId, isHex ? 'hex-region' : 'region', geo.properties.iso)

      let styles = {
        fill: geoFillColor,
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.properties.iso

      if (!geoKey) return

      const geoData = runtimeData[geoKey]
      const { ref: syncRef, 'data-geo-id': syncGeoId } = getSyncProps(geoKey)

      let legendColors
      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
      }

      const geoDisplayName = displayGeoName(geoKey)

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const toolTip = applyTooltipsToGeo(geoDisplayName, geoData)

        styles = {
          fill: type !== 'bubble' ? legendColors[0] : geoFillColor,
          cursor: 'default',
          '&:hover': {
            fill: type !== 'bubble' ? legendColors[1] : geoFillColor
          },
          '&:active': {
            fill: type !== 'bubble' ? legendColors[2] : geoFillColor
          }
        }

        // When to add pointer cursor
        if ((config.columns.navigate && geoData[config.columns.navigate.name]) || tooltipInteractionType === 'click') {
          styles.cursor = 'pointer'
        }

        const territoryTextColor = getContrastColor('#FFF', legendColors[0])

        return (
          <g
            key={key}
            ref={syncRef}
            data-geo-id={syncGeoId}
            className='geo-group'
            style={styles}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
            data-tooltip-id={`tooltip__${tooltipId}`}
            data-tooltip-html={toolTip}
            tabIndex={-1}
            onMouseEnter={e => {
              // Track hover analytics event if this is a new location
              const locationName = geoDisplayName.replace(/[^a-zA-Z0-9]/g, '_')
              publishAnalyticsEvent({
                vizType: config.type,
                vizSubType: getVizSubType(config),
                eventType: `map_hover`,
                eventAction: 'hover',
                eventLabel: interactionLabel,
                vizTitle: getVizTitle(config),
                location: geoDisplayName,
                specifics: `location: ${locationName?.toLowerCase()}`
              })
              syncHandlers.onMouseEnter(geoKey, e.clientY)
            }}
            onMouseLeave={() => {
              syncHandlers.onMouseLeave()
            }}
          >
            <path tabIndex={-1} className='single-geo' stroke={geoStrokeColor} strokeWidth={1} d={path} />
            <g id={`region-${index + 1}-label`}>
              <circle fill='#fff' stroke='#999' cx={CIRCLE_RADIUS} cy={CIRCLE_RADIUS} r={CIRCLE_RADIUS} />
              <text fill='var(--baseColor)' x='15px' y='20px' textAnchor='middle'>
                {index + 1}
              </text>
            </g>
            {geoKey === 'region 2' && (
              <g id='region-2-territories'>
                <RegionTerritoryRect tName='PR' textColor={territoryTextColor} strokeColor={geoStrokeColor} />
                <RegionTerritoryRect posX={45} tName='VI' textColor={territoryTextColor} strokeColor={geoStrokeColor} />
              </g>
            )}

            {geoKey === 'region 9' && (
              <g id='region-9-territories'>
                <g className='region-9-row1'>
                  <RegionTerritoryRect tName='AS' textColor={territoryTextColor} strokeColor={geoStrokeColor} />
                  <RegionTerritoryRect
                    posX={45}
                    tName='GU'
                    textColor={territoryTextColor}
                    strokeColor={geoStrokeColor}
                  />
                  <RegionTerritoryRect
                    posX={90}
                    tName='MP'
                    textColor={territoryTextColor}
                    strokeColor={geoStrokeColor}
                  />
                </g>
                <g className='region-9-row2'>
                  <RegionTerritoryRect tName='FM' textColor={territoryTextColor} strokeColor={geoStrokeColor} />
                  <RegionTerritoryRect
                    posX={45}
                    tName='PW'
                    textColor={territoryTextColor}
                    strokeColor={geoStrokeColor}
                  />
                  <RegionTerritoryRect
                    posX={90}
                    tName='MH'
                    textColor={territoryTextColor}
                    strokeColor={geoStrokeColor}
                  />
                </g>
              </g>
            )}
          </g>
        )
      }

      // Default return state, just geo with no additional information
      return (
        <g key={key} className='geo-group' style={styles}>
          <path tabIndex={-1} className='single-geo' stroke={geoStrokeColor} strokeWidth={1} d={path} />
        </g>
      )
    })
  }

  return (
    <ErrorBoundary component='UsaRegionMap'>
      <svg viewBox={SVG_VIEWBOX} role='img' aria-label={a11y}>
        <Mercator data={focusedStates} scale={620} translate={[1500, 735]}>
          {({ features, projection }) => constructGeoJsx(features, projection)}
        </Mercator>
        {config.annotations.length > 0 && <Annotation.Draggable />}
      </svg>
      {territories.length > 0 && (
        <section className='territories'>
          <span className='label'>{territoriesLabel}</span>
          {territories}
        </section>
      )}
    </ErrorBoundary>
  )
}

export default memo(UsaRegionMap)
