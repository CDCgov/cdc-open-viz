import React, { useContext } from 'react'
import { scaleLinear } from 'd3-scale'
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'
import ConfigContext, { MapDispatchContext } from '../context'
import { type Coordinate, DataRow } from '../types/MapConfig'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import useApplyLegendToRow from '../hooks/useApplyLegendToRow'
import { displayGeoName, SVG_HEIGHT, SVG_WIDTH } from '../helpers'
import { geoMercator, geoAlbersUsa, type GeoProjection } from 'd3-geo'
import { getColumnNames } from '../helpers/getColumnNames'

type BubbleListProps = {
  runtimeData: Object[]
  customProjection?: GeoProjection
}

export const BubbleList: React.FC<BubbleListProps> = ({ customProjection }) => {
  const { config, tooltipId, legendMemo, legendSpecialClassLastMemo, setRuntimeData, runtimeData } = useContext(ConfigContext)
  const { columns, data, general, visual } = config
  const { geoType, allowMapZoom } = general
  const { minBubbleSize, maxBubbleSize, showBubbleZeros, extraBubbleBorder } = visual
  const hasBubblesWithZeroOnMap = showBubbleZeros ? 0 : 1
  const clickTolerance = 10
  const dispatch = useContext(MapDispatchContext);

  // hooks
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const { primaryColumnName, geoColumnName } = getColumnNames(columns)

  const maxDataValue = Math.max(...data.map(d => d[primaryColumnName]))
  const size = scaleLinear().domain([hasBubblesWithZeroOnMap, maxDataValue]).range([minBubbleSize, maxBubbleSize])

  const getProjection = () => {
    try {
      if (geoType === 'world') return geoMercator()
      if (geoType === 'us') return geoAlbersUsa().translate([SVG_WIDTH / 2 + 15, SVG_HEIGHT / 2]) // translate is half of each svg x/y viewbox values
      if (customProjection) return customProjection
      throw new Error('No projection found in BubbleList component')
    } catch (e) {
      console.error(e)
    }
  }

  const projection = getProjection()

  const handleBubbleClick = country => {
    if (!allowMapZoom) return
    const newRuntimeData = data.filter(item => item[geoColumnName] === country[geoColumnName])
    const _filteredCountryCode = newRuntimeData[0]?.uid
    const coordinates = countryCoordinates[_filteredCountryCode]
    const long = coordinates[1]
    const lat = coordinates[0]
    const reversedCoordinates: Coordinate = [long, lat]
    const filteredCountryObj = runtimeData[_filteredCountryCode]
    const _tempRuntimeData = {
      [_filteredCountryCode]: filteredCountryObj
    }

    // Zoom the map in...
    dispatch({ type: 'SET_POSITION', payload: { coordinates: reversedCoordinates, zoom: 3 } })

    // ...and show the data for the clicked country
    setRuntimeData(_tempRuntimeData)
  }

  const sortedRuntimeData: DataRow = Object.values(runtimeData).sort((a, b) =>
    a[primaryColumnName] < b[primaryColumnName] ? 1 : -1
  )

  if (!sortedRuntimeData) return

  if (geoType === 'world') {
    return (
      sortedRuntimeData &&
      sortedRuntimeData.map(country => {
        let coordinates = countryCoordinates[country.uid]

        if (!coordinates) return true

        const countryName = displayGeoName(country[geoColumnName])
        const toolTip = applyTooltipsToGeo(countryName, country)
        const legendColors = applyLegendToRow(country)

        if (
          (Math.floor(Number(country[primaryColumnName])) === 0 || country[primaryColumnName] === '') &&
          !showBubbleZeros
        )
          return

        let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

        let pointerX, pointerY

        if (!projection(coordinates)) return true

        const circle = (
          <>
            <circle
              tabIndex={-1}
              key={`circle-${countryName.replace(' ', '')}`}
              className={`bubble country--${countryName}`}
              cx={Number(projection(coordinates[1], coordinates[0])[0]) || 0}
              cy={Number(projection(coordinates[1], coordinates[0])[1]) || 0}
              r={Number(size(country[primaryColumnName]))}
              fill={legendColors[0]}
              stroke={legendColors[0]}
              strokeWidth={1.25}
              fillOpacity={0.4}
              onPointerDown={e => {
                pointerX = e.clientX
                pointerY = e.clientY
              }}
              onPointerUp={e => {
                if (
                  pointerX &&
                  pointerY &&
                  e.clientX > pointerX - clickTolerance &&
                  e.clientX < pointerX + clickTolerance &&
                  e.clientY > pointerY - clickTolerance &&
                  e.clientY < pointerY + clickTolerance
                ) {
                  handleBubbleClick(country)
                  pointerX = undefined
                  pointerY = undefined
                }
              }}
              transform={transform}
              style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={toolTip}
            />

            {extraBubbleBorder && (
              <circle
                tabIndex={-1}
                key={`circle-${countryName.replace(' ', '')}`}
                className='bubble'
                cx={Number(projection(coordinates[1], coordinates[0])[0]) || 0}
                cy={Number(projection(coordinates[1], coordinates[0])[1]) || 0}
                r={Number(size(country[primaryColumnName])) + 1}
                fill={'transparent'}
                stroke={'white'}
                strokeWidth={0.5}
                onPointerDown={e => {
                  pointerX = e.clientX
                  pointerY = e.clientY
                }}
                onPointerUp={e => {
                  if (
                    pointerX &&
                    pointerY &&
                    e.clientX > pointerX - clickTolerance &&
                    e.clientX < pointerX + clickTolerance &&
                    e.clientY > pointerY - clickTolerance &&
                    e.clientY < pointerY + clickTolerance
                  ) {
                    handleBubbleClick(country)
                    pointerX = undefined
                    pointerY = undefined
                  }
                }}
                transform={transform}
                style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                data-tooltip-id={`tooltip__${tooltipId}`}
                data-tooltip-html={toolTip}
              />
            )}
          </>
        )

        return (
          <g key={`group-${countryName.replace(' ', '')}`} tabIndex={-1}>
            {circle}
          </g>
        )
      })
    )
  }

  if (geoType === 'us') {
    return (
      sortedRuntimeData &&
      sortedRuntimeData.map(item => {
        let stateData = stateCoordinates[item.uid]
        if (Number(size(item[primaryColumnName])) === 0) return

        if (item[primaryColumnName] === null) item[primaryColumnName] = ''

        if ((Math.floor(Number(item[primaryColumnName])) === 0 || item[primaryColumnName] === '') && !showBubbleZeros)
          return

        if (!stateData) return true
        let longitude = Number(stateData.Longitude)
        let latitude = Number(stateData.Latitude)
        let coordinates = [longitude, latitude]
        let stateName = stateData.Name
        if (!coordinates) return true

        stateName = displayGeoName(stateName)
        const toolTip = applyTooltipsToGeo(stateName, item)
        const legendColors = applyLegendToRow(item, config)

        let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

        if (!projection(coordinates)) return true

        let pointerX, pointerY
        const circle = (
          <>
            <circle
              tabIndex={-1}
              key={`circle-${stateName.replace(' ', '')}`}
              className='bubble'
              cx={projection(coordinates)[0] || 0}
              cy={projection(coordinates)[1] || 0}
              r={Number(size(item[primaryColumnName]))}
              fill={legendColors[0]}
              stroke={legendColors[0]}
              strokeWidth={1.25}
              fillOpacity={0.4}
              onPointerDown={e => {
                pointerX = e.clientX
                pointerY = e.clientY
              }}
              onPointerUp={e => {
                if (
                  pointerX &&
                  pointerY &&
                  e.clientX > pointerX - clickTolerance &&
                  e.clientX < pointerX + clickTolerance &&
                  e.clientY > pointerY - clickTolerance &&
                  e.clientY < pointerY + clickTolerance
                ) {
                  handleBubbleClick(config)
                  pointerX = undefined
                  pointerY = undefined
                }
              }}
              transform={transform}
              style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={toolTip}
            />
            {extraBubbleBorder && (
              <circle
                tabIndex={-1}
                key={`circle-${stateName.replace(' ', '')}`}
                className='bubble'
                cx={projection(coordinates)[0] || 0}
                cy={projection(coordinates)[1] || 0}
                r={Number(size(item[primaryColumnName])) + 1}
                fill={'transparent'}
                stroke={'white'}
                strokeWidth={0.5}
                fillOpacity={0.4}
                onPointerDown={e => {
                  pointerX = e.clientX
                  pointerY = e.clientY
                }}
                onPointerUp={e => {
                  if (
                    pointerX &&
                    pointerY &&
                    e.clientX > pointerX - clickTolerance &&
                    e.clientX < pointerX + clickTolerance &&
                    e.clientY > pointerY - clickTolerance &&
                    e.clientY < pointerY + clickTolerance
                  ) {
                    handleBubbleClick(config)
                    pointerX = undefined
                    pointerY = undefined
                  }
                }}
                transform={transform}
                style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                data-tooltip-id={`tooltip__${tooltipId}`}
                data-tooltip-html={toolTip}
              />
            )}
          </>
        )

        return <g key={`group-${stateName.replace(' ', '')}`}>{circle}</g>
      })
    )
  }
}
export default BubbleList
