import { useState, useEffect, memo } from 'react'

// Third Party
import { jsx } from '@emotion/react'
import { geoPath } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import { CustomProjection } from '@visx/geo'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'

// Store

// Context

// Data
import countyMapJSON from '../data/county-map.json'

// Constants
import { COUNTY_MAP } from '../data/constants'

// Hooks

// Helpers

// Components - Core
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import colorPalettes from '../../../core/data/colorPalettes'

// Components - Local
import CityList from './CityList'

// Styles

// DATA
let { features: counties } = feature(countyMapJSON, countyMapJSON.objects.counties)
let { features: states } = feature(countyMapJSON, countyMapJSON.objects.states)

const { WIDTH, HEIGHT, PADDING } = COUNTY_MAP

const SingleStateMap = props => {
  const { config, updateVisConfig } = useVisConfig()

  const { applyTooltipsToGeo, geoClickHandler, applyLegendToRow, displayGeoName, handleMapAriaLabels, titleCase, setSharedFilterValue, isFilterValueSupported } = props

  const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
  const cityListProjection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
  const geoStrokeColor = config.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
  const [stateToShow, setStateToShow] = useState(null)

  const [countiesToShow, setCountiesToShow] = useState(null)

  const [translate, setTranslate] = useState()
  const [scale, setScale] = useState()

  const pathGenerator = geoPath().projection(projection)

  // When choosing a state changes...
  useEffect(() => {
    if (config.general.statePicked) {
      let statePicked = config.general.statePicked.stateName
      let statePickedData = states.find(s => s.properties.name === statePicked)

      setStateToShow(statePickedData)

      let countiesFound = counties.filter(c => c.id.substring(0, 2) === config.general.statePicked.fipsCode)

      setCountiesToShow(countiesFound)

      const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
      const newProjection = projection.fitExtent(
        [
          [PADDING, PADDING],
          [WIDTH - PADDING, HEIGHT - PADDING]
        ],
        statePickedData
      )
      const newScale = newProjection.scale()
      const newScaleWithHypot = newScale / 1070

      let [x, y] = newProjection.translate()
      x = x - WIDTH / 2
      y = y - HEIGHT / 2

      setTranslate([x, y])
      setScale(newScaleWithHypot)
    }
  }, [config.general.statePicked, updateVisConfig])

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    const statePassed = geographies[0].feature.states
    const counties = geographies[0].feature.counties

    let geosJsx = []

    const StateOutput = () => {
      let geo = countyMapJSON.objects.states.geometries.filter(s => {
        return s.id === statePassed.id
      })

      let stateLines = pathGenerator(mesh(countyMapJSON, geo[0]))
      return (
        <g className='single-state' style={{ fill: '#E6E6E6' }} stroke={geoStrokeColor} strokeWidth={0.95 / scale}>
          <path tabIndex={-1} className='state-path' d={stateLines} />
        </g>
      )
    }

    const countyOutput = counties.forEach(county => {
      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = county.id

      if (!geoKey) return

      let countyPath = pathGenerator(county)

      let geoData = config.data[county.id]
      let legendColors

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData)
      }

      const geoDisplayName = displayGeoName(geoKey)

      // For some reason, these two geos are breaking the display.
      if (geoDisplayName === 'Franklin City' || geoDisplayName === 'Waynesboro') return null

      const toolTip = applyTooltipsToGeo(geoDisplayName, geoData)

      if (legendColors && legendColors[0] !== '#000000') {
        let styles = {
          fill: legendColors[0],
          cursor: 'default',
          '&:hover': {
            fill: legendColors[1]
          },
          '&:active': {
            fill: legendColors[2]
          }
        }

        // When to add pointer cursor
        if ((config.columns.navigate && geoData[config.columns.navigate.name]) || config.tooltips.appearanceType === 'hover') {
          styles.cursor = 'pointer'
        }

        return (
          <g key={`key--${county.id}`} className={`county county--${geoDisplayName.split(' ').join('')} county--${geoData[config.columns.geo.name]}`} css={styles} onClick={() => geoClickHandler(geoDisplayName, geoData)} data-tooltip-id='tooltip' data-tooltip-html={toolTip}>
            <path tabIndex={-1} className={`county`} stroke={geoStrokeColor} d={countyPath} strokeWidth={0.75 / scale} />
          </g>
        )
      } else {
        return (
          <g key={`key--${county.id}`} className={`county county--${geoDisplayName.split(' ').join('')}`} style={{ fill: '#e6e6e6' }} data-tooltip-id='tooltip' data-tooltip-html={toolTip}>
            <path tabIndex={-1} className={`county`} stroke={geoStrokeColor} d={countyPath} strokeWidth={0.75 / scale} />
          </g>
        )
      }
    })

    geosJsx.push(<StateOutput />)
    geosJsx.push(countyOutput)
    geosJsx.push(
      <CityList
        projection={cityListProjection}
        geoClickHandler={geoClickHandler}
        applyTooltipsToGeo={applyTooltipsToGeo}
        displayGeoName={displayGeoName}
        applyLegendToRow={applyLegendToRow}
        titleCase={titleCase}
        setSharedFilterValue={setSharedFilterValue}
        isFilterValueSupported={isFilterValueSupported}
        isGeoCodeMap={config.general.type === 'us-geocode'}
      />
    )

    return geosJsx
  }

  return (
    <ErrorBoundary component='SingleStateMap'>
      {stateToShow && (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio='xMinYMin' className='svg-container' role='img' aria-label={handleMapAriaLabels(config)}>
          <rect className='background center-container ocean' width={WIDTH} height={HEIGHT} fillOpacity={1} fill='white'></rect>
          <CustomProjection
            data={[{ states: stateToShow, counties: countiesToShow }]}
            projection={geoAlbersUsaTerritories}
            fitExtent={[
              [
                [PADDING, PADDING],
                [WIDTH - PADDING, HEIGHT - PADDING]
              ],
              stateToShow
            ]}
          >
            {({ features, projection }) => {
              return (
                <g id='mapGroup' className='countyMapGroup' transform={`translate(${translate}) scale(${scale})`} data-scale='' key='countyMapGroup'>
                  {constructGeoJsx(features, projection)}
                </g>
              )
            }}
          </CustomProjection>
        </svg>
      )}
      {!stateToShow && 'No State Picked'}
    </ErrorBoundary>
  )
}

export default memo(SingleStateMap)
