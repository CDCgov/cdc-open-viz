import { useState, useEffect, memo, useContext } from 'react'

import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoPath } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import { CustomProjection } from '@visx/geo'
import Loading from '@cdc/core/components/Loading'
import colorPalettes from '@cdc/core/data/colorPalettes'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import CityList from '../../CityList'
import ConfigContext from '../../../context'
import Annotation from '../../Annotation'

// SVG ITEMS
const WIDTH = 880
const HEIGHT = 500
const PADDING = 25

const getCountyTopoURL = year => {
  return `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${year}_us_county_20m.json`
}

const getTopoData = year => {
  return new Promise((resolve, reject) => {
    const resolveWithTopo = async response => {
      if (response.status !== 200) {
        response = await import('./../data/cb_2019_us_county_20m.json')
      } else {
        response = await response.json()
      }
      let topoData = {}

      topoData.year = year || 'default'
      topoData.fulljson = response
      topoData.counties = feature(response, response.objects.counties).features
      topoData.states = feature(response, response.objects.states).features

      resolve(topoData)
    }

    const numericYear = parseInt(year)

    if (isNaN(numericYear)) {
      fetch(getCountyTopoURL(2019)).then(resolveWithTopo)
    } else if (numericYear > 2022) {
      fetch(getCountyTopoURL(2022)).then(resolveWithTopo)
    } else if (numericYear < 2013) {
      fetch(getCountyTopoURL(2013)).then(resolveWithTopo)
    } else {
      switch (numericYear) {
        case 2022:
          fetch(getCountyTopoURL(2022)).then(resolveWithTopo)
          break
        case 2021:
          fetch(getCountyTopoURL(2021)).then(resolveWithTopo)
          break
        case 2020:
          fetch(getCountyTopoURL(2020)).then(resolveWithTopo)
          break
        case 2018:
        case 2017:
        case 2016:
        case 2015:
          fetch(getCountyTopoURL(2015)).then(resolveWithTopo)
          break
        case 2014:
          fetch(getCountyTopoURL(2014)).then(resolveWithTopo)
          break
        case 2013:
          fetch(getCountyTopoURL(2013)).then(resolveWithTopo)
          break
        default:
          fetch(getCountyTopoURL(2019)).then(resolveWithTopo)
          break
      }
    }
  })
}

const getCurrentTopoYear = (state, runtimeFilters) => {
  let currentYear = state.general.countyCensusYear

  if (state.general.filterControlsCountyYear && runtimeFilters && runtimeFilters.length > 0) {
    let yearFilter = runtimeFilters.filter(filter => filter.columnName === state.general.filterControlsCountyYear)
    if (yearFilter.length > 0 && yearFilter[0].active) {
      currentYear = yearFilter[0].active
    }
  }

  return currentYear || 'default'
}

const isTopoReady = (topoData, state, runtimeFilters) => {
  let currentYear = getCurrentTopoYear(state, runtimeFilters)

  return topoData.year && (!currentYear || currentYear === topoData.year)
}

const SingleStateMap = props => {
  // prettier-ignore
  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToRow,
    displayGeoName,
    supportedTerritories,
    runtimeLegend,
    generateColorsArray,
    handleMapAriaLabels,
    titleCase,
    setSharedFilterValue,
    isFilterValueSupported,
    runtimeFilters,
    tooltipId
  } = useContext(ConfigContext)

  const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
  const cityListProjection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
  const [stateToShow, setStateToShow] = useState(null)
  const [translate, setTranslate] = useState()
  const [scale, setScale] = useState()
  const [strokeWidth, setStrokeWidth] = useState(0.75)
  const [topoData, setTopoData] = useState({})
  let mapColorPalette = colorPalettes[state.color] || '#fff'
  let focusedBorderColor = mapColorPalette[3]

  const path = geoPath().projection(projection)

  useEffect(() => {
    let currentYear = getCurrentTopoYear(state, runtimeFilters)

    if (currentYear !== topoData.year) {
      getTopoData(currentYear).then(response => {
        setTopoData(response)
      })
    }
  }, [state.general.countyCensusYear, state.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  // When choosing a state changes...
  useEffect(() => {
    if (!isTopoReady(topoData, state, runtimeFilters)) return
    if (state.general.hasOwnProperty('statePicked')) {
      let statePicked = state.general.statePicked.stateName
      let statePickedData = topoData.states.find(s => s.properties.name === statePicked)
      setStateToShow(statePickedData)

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
  }, [state.general.statePicked, topoData.year])

  if (!isTopoReady(topoData, state, runtimeFilters)) {
    return (
      <div style={{ height: `${HEIGHT}px` }}>
        <Loading />
      </div>
    )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    const statePassed = geographies[0].feature.states
    const counties = geographies[0].feature.counties

    let geosJsx = []

    const StateOutput = () => {
      let geo = topoData.fulljson.objects.states.geometries.filter(s => {
        return s.id === statePassed.id
      })

      // const stateLine = path(mesh(testJSON, lines ))
      let stateLines = path(mesh(topoData.fulljson, geo[0]))
      return (
        <g key={'single-state'} className='single-state' style={{ fill: '#E6E6E6' }} stroke={geoStrokeColor} strokeWidth={0.95 / scale}>
          <path tabIndex={-1} className='state-path' d={stateLines} />
        </g>
      )
    }

    const countyOutput = counties.map(county => {
      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = county.id

      if (!geoKey) return

      let countyPath = path(county)

      let geoData = data[county.id]
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
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'hover') {
          styles.cursor = 'pointer'
        }

        return (
          <g key={`key--${county.id}`} className={`county county--${geoDisplayName.split(' ').join('')} county--${geoData[state.columns.geo.name]}`} style={styles} onClick={() => geoClickHandler(geoDisplayName, geoData)} data-tooltip-id={`tooltip__${tooltipId}`} data-tooltip-html={toolTip}>
            <path tabIndex={-1} className={`county`} stroke={geoStrokeColor} d={countyPath} strokeWidth={0.75 / scale} />
          </g>
        )
      } else {
        return (
          <g key={`key--${county.id}`} className={`county county--${geoDisplayName.split(' ').join('')}`} style={{ fill: '#e6e6e6' }} data-tooltip-id={`tooltip__${tooltipId}`} data-tooltip-html={toolTip}>
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
        key='cities'
        data={data}
        state={state}
        geoClickHandler={geoClickHandler}
        applyTooltipsToGeo={applyTooltipsToGeo}
        displayGeoName={displayGeoName}
        applyLegendToRow={applyLegendToRow}
        titleCase={titleCase}
        setSharedFilterValue={setSharedFilterValue}
        isFilterValueSupported={isFilterValueSupported}
        tooltipId={tooltipId}
      />
    )

    return geosJsx
  }

  return (
    <ErrorBoundary component='SingleStateMap'>
      {stateToShow && (
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio='xMinYMin' className='svg-container' role='img' aria-label={handleMapAriaLabels(state)}>
          <rect className='background center-container ocean' width={WIDTH} height={HEIGHT} fillOpacity={1} fill='white'></rect>
          <CustomProjection
            data={[{ states: stateToShow, counties: topoData.counties.filter(c => c.id.substring(0, 2) === state.general.statePicked.fipsCode) }]}
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
          {state.annotations.length > 0 && <Annotation.Draggable />}
        </svg>
      )}
      {!state.general.statePicked && 'No State Picked'}
    </ErrorBoundary>
  )
}

export default memo(SingleStateMap)
