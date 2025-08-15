import React, { useContext } from 'react'
import ConfigContext from '../../../../context'
import { MapContext } from '../../../../types/MapContext'
import { getGeoFillColor, displayGeoName } from '../../../../helpers'
import useApplyTooltipsToGeo from '../../../../hooks/useApplyTooltipsToGeo'
import { applyLegendToRow } from '../../../../helpers/applyLegendToRow'
import useGeoClickHandler, { geoClickHandler } from '././../../../../hooks/useGeoClickHandler'

interface CountyOutputProps {
  counties: any[]
  scale: number
  geoStrokeColor: string
  tooltipId: string
  path: any
}

const CountyOutput: React.FC<CountyOutputProps> = ({ path, counties, scale, geoStrokeColor, tooltipId }) => {
  const { config, runtimeData, legendMemo, legendSpecialClassLastMemo, runtimeLegend } =
    useContext<MapContext>(ConfigContext)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const geoFillColor = getGeoFillColor(config)
  const { geoClickHandler } = useGeoClickHandler()

  return (
    <>
      {counties.map(county => {
        // Map the name from the geo data with the appropriate key for the processed data
        const geoKey = county.id

        if (!geoKey) return null

        const countyPath = path(county)

        const geoData = runtimeData[county.id]
        let legendColors

        // Once we receive data for this geographic item, setup variables.
        if (geoData !== undefined) {
          legendColors = applyLegendToRow(geoData, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
        }

        const geoDisplayName = displayGeoName(geoKey)

        // For some reason, these two geos are breaking the display.
        if (geoDisplayName === 'Franklin City' || geoDisplayName === 'Waynesboro') return null

        const toolTip = applyTooltipsToGeo(geoDisplayName, geoData)

        if (legendColors && legendColors[0] !== '#000000') {
          const styles = {
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
          if (
            (config.columns.navigate && geoData[config.columns.navigate.name]) ||
            config.tooltips.appearanceType === 'hover'
          ) {
            styles.cursor = 'pointer'
          }

          return (
            <g
              key={`key--${county.id}`}
              className={`county county--${geoDisplayName.split(' ').join('')} county--${
                geoData[config.columns.geo.name]
              }`}
              style={styles}
              onClick={() => geoClickHandler(geoDisplayName, geoData)}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={toolTip}
            >
              <path
                tabIndex={-1}
                className={`county`}
                stroke={geoStrokeColor}
                d={countyPath}
                strokeWidth={0.75 / scale}
              />
            </g>
          )
        } else {
          return (
            <g
              key={`key--${county.id}`}
              className={`county county--${geoDisplayName.split(' ').join('')}`}
              style={{ fill: geoFillColor }}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={toolTip}
            >
              <path
                tabIndex={-1}
                className={`county`}
                stroke={geoStrokeColor}
                d={countyPath}
                strokeWidth={0.75 / scale}
              />
            </g>
          )
        }
      })}
    </>
  )
}

export default CountyOutput
