import React, { useContext } from 'react'
import { geoMercator } from 'd3-geo'
import { scaleLinear } from 'd3-scale'

// data
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'

// hooks
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import useApplyLegendToRow from '../hooks/useApplyLegendToRow'
import { displayGeoName } from '../helpers'

// context
import ConfigContext from '../context'

type BubbleListProps = {
  runtimeData: Object
}

export const BubbleList: React.FC<BubbleListProps> = ({ runtimeData }) => {
  const { state, tooltipId, legendMemo, legendSpecialClassLastMemo, setFilteredCountryCode } = useContext(ConfigContext)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const { data } = state
  const { geoType } = state.general
  const { minBubbleSize, maxBubbleSize, showBubbleZeros } = state.visual
  const geoColumnName = state.columns.geo.name
  const primaryColumnName = state.columns.primary.name
  const hasBubblesWithZeroOnMap = showBubbleZeros ? 0 : 1
  const clickTolerance = 10
  const maxDataValue = Math.max(...data.map(d => d[primaryColumnName]))
  const projection = geoMercator()
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)

  const handleBubbleClick = country => {
    if (!state.general.allowMapZoom) return
    let newRuntimeData = data.filter(item => item[geoColumnName] === country[geoColumnName])
    setFilteredCountryCode(newRuntimeData[0].uid)
  }

  // sort runtime data. Smaller bubbles should appear on top.
  const sortedRuntimeData = Object.values(runtimeData).sort((a, b) =>
    a[primaryColumnName] < b[primaryColumnName] ? 1 : -1
  )
  if (!sortedRuntimeData) return

  // Set bubble sizes
  const size = scaleLinear().domain([hasBubblesWithZeroOnMap, maxDataValue]).range([minBubbleSize, maxBubbleSize])

  // Start looping through the countries to create the bubbles.
  if (geoType === 'world') {
    return (
      sortedRuntimeData &&
      sortedRuntimeData.map((country, index) => {
        let coordinates = countryCoordinates[country.uid]

        if (!coordinates) return true

        const countryName = displayGeoName(country[geoColumnName])
        const toolTip = applyTooltipsToGeo(countryName, country)
        const legendColors = applyLegendToRow(country)

        if (
          (Math.floor(Number(country[primaryColumnName])) === 0 || country[primaryColumnName] === '') &&
          !state.visual.showBubbleZeros
        )
          return <></>

        let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

        let pointerX, pointerY

        if (!projection(coordinates)) return true

        const circle = (
          <React.Fragment key={index}>
            <circle
              tabIndex={-1}
              key={`circle-${countryName.replace(' ', '')}`}
              className={`bubble country--${countryName}`}
              cx={Number(projection(coordinates[1], coordinates[0])[0]) || 0} // || 0 handles error on loads where the data isn't ready
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

            {state.visual.extraBubbleBorder && (
              <circle
                tabIndex={-1}
                key={`circle-${countryName.replace(' ', '')}`}
                className='bubble'
                cx={Number(projection(coordinates[1], coordinates[0])[0]) || 0} // || 0 handles error on loads where the data isn't ready
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
          </React.Fragment>
        )

        return (
          <g key={`group-${countryName.replace(' ', '')}-${index}`} tabIndex={-1}>
            {circle}
          </g>
        )
      })
    )
  }

  if (state.general.geoType === 'us') {
    return (
      sortedRuntimeData &&
      sortedRuntimeData.map((item, index) => {
        let stateData = stateCoordinates[item.uid]
        if (Number(size(item[primaryColumnName])) === 0) return

        if (item[primaryColumnName] === null) item[primaryColumnName] = ''

        // Return if hiding zeros on the map
        if (
          (Math.floor(Number(item[primaryColumnName])) === 0 || item[primaryColumnName] === '') &&
          !state.visual.showBubbleZeros
        )
          return <React.Fragment key={index}></React.Fragment>

        if (!stateData) return true
        let longitude = Number(stateData.Longitude)
        let latitude = Number(stateData.Latitude)
        let coordinates = [longitude, latitude]
        let stateName = stateData.Name
        if (!coordinates) return true

        stateName = displayGeoName(stateName)
        const toolTip = applyTooltipsToGeo(stateName, item)
        const legendColors = applyLegendToRow(item, state)

        let transform = `translate(${projection([coordinates[1], coordinates[0]])})`

        if (!projection(coordinates)) return true

        let pointerX, pointerY
        const circle = (
          <React.Fragment key={`random-${index}`}>
            <circle
              tabIndex={-1}
              key={`circle-inside-${index}`}
              className='bubble'
              cx={projection(coordinates)[0] || 0} // || 0 handles error on loads where the data isn't ready
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
                  handleBubbleClick(state)
                  pointerX = undefined
                  pointerY = undefined
                }
              }}
              transform={transform}
              style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={toolTip}
            />
            {state.visual.extraBubbleBorder && (
              <circle
                tabIndex={-1}
                key={`circle-outside-${index}`}
                className='bubble'
                cx={projection(coordinates)[0] || 0} // || 0 handles error on loads where the data isn't ready
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
                    handleBubbleClick(state)
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
          </React.Fragment>
        )

        return <g key={`group-${index}`}>{circle}</g>
      })
    )
  }
}
export default BubbleList
