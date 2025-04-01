import { useState, useEffect, memo, useContext } from 'react'

// 3rd party
import { geoCentroid } from 'd3-geo'
import { feature } from 'topojson-client'
import { Mercator } from '@visx/geo'

// Cdc Components
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../../context'
import Annotation from '../../Annotation'

// Data
import { supportedTerritories } from '../../../data/supported-geos'

// Helpers
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { displayGeoName, handleMapAriaLabels, getGeoStrokeColor, getGeoFillColor } from '../../../helpers'
import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import useApplyLegendToRow from '../../../hooks/useApplyLegendToRow'
import useApplyTooltipsToGeo from '../../../hooks/useApplyTooltipsToGeo'
import { APP_FONT_COLOR } from '@cdc/core/helpers/cove/fontSettings'

const Rect = ({ label, text, stroke, strokeWidth, ...props }) => {
  return (
    <svg viewBox='0 0 45 28'>
      <g {...props} strokeLinejoin='round'>
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d='M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z'
        />
        <text textAnchor='middle' dominantBaseline='middle' x='50%' y='54%' fill={text}>
          {label}
        </text>
      </g>
    </svg>
  )
}

const UsaRegionMap = props => {
  // prettier-ignore
  const {
    data,
    state,
    tooltipId,
    legendMemo,
    legendSpecialClassLastMemo
  } = useContext(ConfigContext)

  // "Choose State" options
  const [extent, setExtent] = useState(null)
  const [focusedStates, setFocusedStates] = useState(null)
  const [translate, setTranslate] = useState([455, 200])
  const { geoClickHandler } = useGeoClickHandler()
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()

  useEffect(() => {
    const fetchData = async () => {
      import(/* webpackChunkName: "us-regions-topo-2" */ '../data/us-regions-topo-2.json').then(topoJSON => {
        setFocusedStates(feature(topoJSON, topoJSON.objects.regions).features)
      })
    }
    fetchData()
  }, [])

  // When returning from another map we want to reset the state
  useEffect(() => {
    setTranslate([455, 250])
    setExtent(null)
  }, [state.general.geoType])

  const isHex = state.general.displayAsHex

  const [territoriesData, setTerritoriesData] = useState([])

  const territoriesKeys = Object.keys(supportedTerritories) // data will have already mapped abbreviated territories to their full names

  useEffect(() => {
    // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
    const territoriesList = territoriesKeys.filter(key => data[key])

    setTerritoriesData(territoriesList)
  }, [data])

  if (!focusedStates) {
    return <></>
  }

  const geoStrokeColor = getGeoStrokeColor(state)
  const geoFillColor = getGeoFillColor(state)

  const territories = territoriesData.map(territory => {
    const Shape = Rect

    const territoryData = data[territory]

    let toolTip

    let styles: React.CSSProperties = {
      fill: geoFillColor
    }

    const label = supportedTerritories[territory][1]

    if (!territoryData) return <Shape key={label} label={label} style={styles} text={styles.color} />

    toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData)

    const legendColors = applyLegendToRow(territoryData, state)

    if (legendColors) {
      const textColor = getContrastColor('#FFF', legendColors[0])

      let needsPointer = false

      // If we need to add a pointer cursor
      if (
        (state.columns.navigate && territoryData[state.columns.navigate.name]) ||
        state.tooltips.appearanceType === 'click'
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

      return (
        <Shape
          key={label}
          label={label}
          css={styles}
          text={styles.color}
          stroke={geoStrokeColor}
          strokeWidth={1}
          onClick={() => geoClickHandler(territory, territoryData)}
          data-tooltip-id={`tooltip__${tooltipId}`}
          data-tooltip-html={toolTip}
        />
      )
    }
  })

  const geoLabel = (geo, bgColor = '#FFFFFF', projection) => {
    let centroid = projection(geoCentroid(geo))
    let abbr = geo.properties.iso

    if (undefined === abbr) return null

    const textColor = getContrastColor('#FFF', bgColor)

    let x = 0,
      y = 5

    return (
      <g>
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={centroid[0] + x}
          y2={centroid[1] + y}
          stroke='rgba(0,0,0,.5)'
          strokeWidth={1}
        />
        <text
          x={4}
          strokeWidth='0'
          fontSize={13}
          style={{ fill: APP_FONT_COLOR }}
          alignmentBaseline='middle'
          transform={`translate(${centroid[0] + x}, ${centroid[1] + y})`}
        >
          {abbr.substring(3)}
        </text>
      </g>
    )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    let showLabel = state.general.displayStateLabels

    const geosJsx = geographies.map(({ feature: geo, path = '', index }) => {
      const key = isHex ? geo.properties.iso + '-hex-group' : geo.properties.iso + '-group'

      let styles = {
        fill: geoFillColor,
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.properties.iso

      // Manually add Washington D.C. in for Hex maps

      if (!geoKey) return

      const geoData = data[geoKey]

      let legendColors
      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData, state)
      }

      const geoDisplayName = displayGeoName(geoKey)

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const toolTip = applyTooltipsToGeo(geoDisplayName, geoData)

        styles = {
          fill: state.general.type !== 'bubble' ? legendColors[0] : geoFillColor,
          cursor: 'default',
          '&:hover': {
            fill: state.general.type !== 'bubble' ? legendColors[1] : geoFillColor
          },
          '&:active': {
            fill: state.general.type !== 'bubble' ? legendColors[2] : geoFillColor
          }
        }

        // When to add pointer cursor
        if (
          (state.columns.navigate && geoData[state.columns.navigate.name]) ||
          state.tooltips.appearanceType === 'click'
        ) {
          styles.cursor = 'pointer'
        }

        const TerratoryRect = props => {
          const { posX = 0, tName } = props
          const textColor = getContrastColor('#FFF', legendColors[0])
          const geoStrokeColor = getGeoStrokeColor(state)
          return (
            <>
              <rect x={posX} width='36' height='24' rx='2' stroke={geoStrokeColor} strokeWidth='1' />
              <text textAnchor='middle' x={36 / 2 + posX} y='17' fill={textColor}>
                {tName}
              </text>
            </>
          )
        }

        const circleRadius = 15

        return (
          <g
            key={key}
            className='geo-group'
            style={styles}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
            data-tooltip-id={`tooltip__${tooltipId}`}
            data-tooltip-html={toolTip}
            tabIndex={-1}
          >
            <path tabIndex={-1} className='single-geo' stroke={geoStrokeColor} strokeWidth={1} d={path} />
            <g id={`region-${index + 1}-label`}>
              <circle fill='#fff' stroke='#999' cx={circleRadius} cy={circleRadius} r={circleRadius} />
              <text fill='#333' x='15px' y='20px' textAnchor='middle'>
                {index + 1}
              </text>
            </g>
            {geoKey === 'region 2' && (
              <g id='region-2-territories'>
                <TerratoryRect tName='PR' />
                <TerratoryRect posX={45} tName='VI' />
              </g>
            )}

            {geoKey === 'region 9' && (
              <g id='region-9-territories'>
                <g className='region-9-row1'>
                  <TerratoryRect tName='AS' />
                  <TerratoryRect posX={45} tName='GU' />
                  <TerratoryRect posX={90} tName='MP' />
                </g>
                <g className='region-9-row2'>
                  <TerratoryRect tName='FM' />
                  <TerratoryRect posX={45} tName='PW' />
                  <TerratoryRect posX={90} tName='MH' />
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
          {(isHex || showLabel) && geoLabel(geo, styles.fill, projection)}
        </g>
      )
    })
    return geosJsx
  }

  return (
    <ErrorBoundary component='UsaRegionMap'>
      <svg viewBox='0 0 880 500' role='img' aria-label={handleMapAriaLabels(state)}>
        <Mercator data={focusedStates} scale={620} translate={[1500, 735]}>
          {({ features, projection }) => constructGeoJsx(features, projection)}
        </Mercator>
        {state.annotations.length > 0 && <Annotation.Draggable />}
      </svg>
      {territories.length > 0 && (
        <section className='territories'>
          <span className='label'>{state.general.territoriesLabel}</span>
          {territories}
        </section>
      )}
    </ErrorBoundary>
  )
}

export default memo(UsaRegionMap)
