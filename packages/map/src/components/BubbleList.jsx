import React, { useEffect } from 'react'
import { scaleLinear } from 'd3-scale'
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'

export const BubbleList = ({ data: dataImport, state, projection, applyLegendToRow, applyTooltipsToGeo, handleCircleClick, runtimeData, displayGeoName }) => {
  const maxDataValue = Math.max(...dataImport.map(d => d[state.columns.primary.name]))
  const hasBubblesWithZeroOnMap = state.visual.showBubbleZeros ? 0 : 1
  // sort runtime data. Smaller bubbles should appear on top.
  const sortedRuntimeData = Object.values(runtimeData).sort((a, b) => (a[state.columns.primary.name] < b[state.columns.primary.name] ? 1 : -1))
  if (!sortedRuntimeData) return

  const clickTolerance = 10
  // Set bubble sizes
  var size = scaleLinear().domain([hasBubblesWithZeroOnMap, maxDataValue]).range([state.visual.minBubbleSize, state.visual.maxBubbleSize])

  // Start looping through the countries to create the bubbles.
  if (state.general.geoType === 'world') {
    const countries =
      sortedRuntimeData &&
      sortedRuntimeData.map((country, index) => {
        let coordinates = countryCoordinates[country.uid]

        if (!coordinates) return true

        const countryName = displayGeoName(country[state.columns.geo.name])
        const toolTip = applyTooltipsToGeo(countryName, country)
        const legendColors = applyLegendToRow(country)

        let primaryKey = state.columns.primary.name
        if ((Math.floor(Number(country[primaryKey])) === 0 || country[primaryKey] === '') && !state.visual.showBubbleZeros) return

        let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

        let pointerX, pointerY

        if (!projection(coordinates)) return true

        const circle = (
          <>
            <circle
              tabIndex={-1}
              key={`circle-${countryName.replace(' ', '')}`}
              className={`bubble country--${countryName}`}
              cx={Number(projection(coordinates[1], coordinates[0])[0]) || 0} // || 0 handles error on loads where the data isn't ready
              cy={Number(projection(coordinates[1], coordinates[0])[1]) || 0}
              r={Number(size(country[primaryKey]))}
              fill={legendColors[0]}
              stroke={legendColors[0]}
              strokeWidth={1.25}
              fillOpacity={0.4}
              onPointerDown={e => {
                pointerX = e.clientX
                pointerY = e.clientY
              }}
              onPointerUp={e => {
                if (pointerX && pointerY && e.clientX > pointerX - clickTolerance && e.clientX < pointerX + clickTolerance && e.clientY > pointerY - clickTolerance && e.clientY < pointerY + clickTolerance) {
                  handleCircleClick(country)
                  pointerX = undefined
                  pointerY = undefined
                }
              }}
              transform={transform}
              style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
              data-tooltip-id='tooltip'
              data-tooltip-html={toolTip}
            />

            {state.visual.extraBubbleBorder && (
              <circle
                tabIndex={-1}
                key={`circle-${countryName.replace(' ', '')}`}
                className='bubble'
                cx={Number(projection(coordinates[1], coordinates[0])[0]) || 0} // || 0 handles error on loads where the data isn't ready
                cy={Number(projection(coordinates[1], coordinates[0])[1]) || 0}
                r={Number(size(country[primaryKey])) + 1}
                fill={'transparent'}
                stroke={'white'}
                strokeWidth={0.5}
                onPointerDown={e => {
                  pointerX = e.clientX
                  pointerY = e.clientY
                }}
                onPointerUp={e => {
                  if (pointerX && pointerY && e.clientX > pointerX - clickTolerance && e.clientX < pointerX + clickTolerance && e.clientY > pointerY - clickTolerance && e.clientY < pointerY + clickTolerance) {
                    handleCircleClick(country)
                    pointerX = undefined
                    pointerY = undefined
                  }
                }}
                transform={transform}
                style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                data-tooltip-id='tooltip'
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
    return countries
  }

  if (state.general.geoType === 'us') {
    const bubbles =
      sortedRuntimeData &&
      sortedRuntimeData.map((item, index) => {
        let stateData = stateCoordinates[item.uid]
        let primaryKey = state?.columns?.primary?.name
        if (Number(size(item[primaryKey])) === 0) return

        if (item[primaryKey] === null) item[primaryKey] = ''

        // Return if hiding zeros on the map
        if ((Math.floor(Number(item[primaryKey])) === 0 || item[primaryKey] === '') && !state.visual.showBubbleZeros) return

        if (!stateData) return true
        let longitude = Number(stateData.Longitude)
        let latitude = Number(stateData.Latitude)
        let coordinates = [longitude, latitude]
        let stateName = stateData.Name
        if (!coordinates) return true

        stateName = displayGeoName(stateName)
        const toolTip = applyTooltipsToGeo(stateName, item)
        const legendColors = applyLegendToRow(item)

        let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

        if (!projection(coordinates)) return true

        let pointerX, pointerY
        const circle = (
          <>
            <circle
              tabIndex={-1}
              key={`circle-${stateName.replace(' ', '')}`}
              className='bubble'
              cx={projection(coordinates)[0] || 0} // || 0 handles error on loads where the data isn't ready
              cy={projection(coordinates)[1] || 0}
              r={Number(size(item[primaryKey]))}
              fill={legendColors[0]}
              stroke={legendColors[0]}
              strokeWidth={1.25}
              fillOpacity={0.4}
              onPointerDown={e => {
                pointerX = e.clientX
                pointerY = e.clientY
              }}
              onPointerUp={e => {
                if (pointerX && pointerY && e.clientX > pointerX - clickTolerance && e.clientX < pointerX + clickTolerance && e.clientY > pointerY - clickTolerance && e.clientY < pointerY + clickTolerance) {
                  handleCircleClick(state)
                  pointerX = undefined
                  pointerY = undefined
                }
              }}
              transform={transform}
              style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
              data-tooltip-id='tooltip'
              data-tooltip-html={toolTip}
            />
            {state.visual.extraBubbleBorder && (
              <circle
                tabIndex={-1}
                key={`circle-${stateName.replace(' ', '')}`}
                className='bubble'
                cx={projection(coordinates)[0] || 0} // || 0 handles error on loads where the data isn't ready
                cy={projection(coordinates)[1] || 0}
                r={Number(size(item[primaryKey])) + 1}
                fill={'transparent'}
                stroke={'white'}
                strokeWidth={0.5}
                fillOpacity={0.4}
                onPointerDown={e => {
                  pointerX = e.clientX
                  pointerY = e.clientY
                }}
                onPointerUp={e => {
                  if (pointerX && pointerY && e.clientX > pointerX - clickTolerance && e.clientX < pointerX + clickTolerance && e.clientY > pointerY - clickTolerance && e.clientY < pointerY + clickTolerance) {
                    handleCircleClick(state)
                    pointerX = undefined
                    pointerY = undefined
                  }
                }}
                transform={transform}
                style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                data-tooltip-id='tooltip'
                data-tooltip-html={toolTip}
              />
            )}
          </>
        )

        return <g key={`group-${stateName.replace(' ', '')}`}>{circle}</g>
      })
    return bubbles
  }
}
export default BubbleList
