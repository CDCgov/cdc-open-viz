import { useContext } from 'react'
import { geoCentroid } from 'd3-geo'
import ConfigContext from './../../../../context'
import { MapContext } from './../../../../types/MapContext'
import HexIcon from '../HexIcon'
import { Text } from '@visx/text'
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'

const offsets = {
  'US-VT': [50, -8],
  'US-NH': [34, 2],
  'US-MA': [30, -1],
  'US-RI': [28, 2],
  'US-CT': [35, 10],
  'US-NJ': [42, 1],
  'US-DE': [33, 0],
  'US-MD': [47, 10]
}

const nudges = {
  'US-FL': [15, 3],
  'US-AK': [0, -8],
  'US-CA': [-10, 0],
  'US-NY': [5, 0],
  'US-MI': [13, 20],
  'US-LA': [-10, -3],
  'US-HI': [-10, 10],
  'US-ID': [0, 10],
  'US-WV': [-2, 2]
}

// todo: combine hexagonLabel & geoLabel functions
// todo: move geoLabel functions outside of components for reusability
const TerritoryHexagon = ({
  dataTooltipHtml,
  dataTooltipId,
  handleShapeClick,
  label,
  stroke,
  strokeColor,
  strokeWidth,
  territory,
  territoryData,
  textColor,
  getSyncProps,
  syncHandlers,
  ...props
}) => {
  const { config } = useContext<MapContext>(ConfigContext)

  const isHex = config.general.displayAsHex

  // Construct geography key: use territory prop if available, otherwise construct from label
  const geoKey = territory || `US-${label}`

  // Labels
  const hexagonLabel = (geo, bgColor = '#FFFFFF', projection) => {
    let centroid = projection ? projection(geoCentroid(geo)) : [22, 17.5]

    let abbr = geo?.properties?.iso ? geo.properties.iso : geo?.uid ? geo.uid : `US-${label}`

    const getArrowDirection = (geoData, geo, isTerritory = false) => {
      if (!isTerritory) {
        centroid = projection(geoCentroid(geo))
      }

      return (
        <>
          {config.hexMap.shapeGroups.map((group, groupIndex) => {
            return group.items.map((item, itemIndex) => {
              if (!geoData) return
              switch (item.operator) {
                case '=':
                  if (geoData?.[item.key] === item.value || Number(geoData[item.key]) === Number(item.value)) {
                    return <HexIcon item={item} index={itemIndex} centroid={centroid} isTerritory />
                  }
                  break
                case '≠':
                  if (geoData?.[item.key] !== item.value && Number(geoData[item.key]) !== Number(item.value)) {
                    return <HexIcon item={item} index={itemIndex} centroid={centroid} isTerritory />
                  }
                  break
                case '<':
                  if (Number(geoData?.[item.key]) < Number(item.value)) {
                    return <HexIcon item={item} index={itemIndex} centroid={centroid} isTerritory />
                  }
                  break
                case '>':
                  if (Number(geoData[item.key]) > Number(item.value)) {
                    return <HexIcon item={item} index={itemIndex} centroid={centroid} isTerritory />
                  }
                  break
                case '<=':
                  if (Number(geoData[item.key]) <= Number(item.value)) {
                    return <HexIcon item={item} index={itemIndex} centroid={centroid} isTerritory />
                  }
                  break
                case '>=':
                  if (item.operator === '>=') {
                    if (Number(geoData[item.key]) >= Number(item.value)) {
                      return <HexIcon item={item} index={itemIndex} centroid={centroid} isTerritory />
                    }
                  }
                  break
                default:
                  break
              }
            })
          })}
        </>
      )
    }

    if (undefined === abbr) return null

    let textColor = getContrastColor('#FFF', bgColor)

    // always make HI black since it is off to the side
    if (abbr === 'US-HI') {
      textColor = '#000'
    }

    let x = 0,
      y = config.hexMap.type === 'shapes' ? -10 : 5

    // used to nudge/move some of the labels for better readability
    if (nudges[abbr] && false === isHex) {
      x += nudges[abbr][0]
      y += nudges[abbr][1]
    }

    if (undefined === offsets[abbr] || isHex) {
      let y = config.hexMap.type === 'shapes' ? '30%' : '50%'
      return (
        <>
          <Text
            fontSize={14}
            x={'50%'}
            y={y}
            style={{
              fill: 'currentColor',
              stroke: strokeColor,
              fontWeight: 900,
              opacity: 1,
              fillOpacity: 1,
              pointerEvents: 'none'
            }}
            paintOrder='stroke'
            textAnchor='middle'
            verticalAnchor='middle'
            onClick={handleShapeClick}
            data-tooltip-id={dataTooltipId}
            data-tooltip-html={dataTooltipHtml}
          >
            {abbr.substring(3)}
          </Text>
          {config.general.displayAsHex &&
            config.hexMap.type === 'shapes' &&
            getArrowDirection(territoryData, geo, true)}
        </>
      )
    }

    let [dx, dy] = offsets[abbr]

    return (
      <g style={{ pointerEvents: 'none' }}>
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={centroid[0] + dx}
          y2={centroid[1] + dy}
          stroke='rgba(0,0,0,.5)'
          strokeWidth={1}
        />
        <text
          x={4}
          strokeWidth='0'
          fontSize={13}
          style={{ fill: APP_FONT_COLOR }}
          alignmentBaseline='middle'
          transform={`translate(${centroid[0] + dx}, ${centroid[1] + dy})`}
          onClick={handleShapeClick}
          data-tooltip-id={dataTooltipId}
          data-tooltip-html={dataTooltipHtml}
        >
          {abbr.substring(3)}
        </text>
      </g>
    )
  }

  return (
    <svg viewBox='-1 -1 46 53' className='territory-wrapper--hex'>
      <g
        {...(getSyncProps ? getSyncProps(geoKey) : {})}
        {...props}
        data-tooltip-html={dataTooltipHtml}
        data-tooltip-id={dataTooltipId}
        onClick={handleShapeClick}
      >
        <polygon
          stroke={stroke}
          strokeWidth={strokeWidth}
          points='22 0 44 12.702 44 38.105 22 50.807 0 38.105 0 12.702'
          onMouseEnter={e => {
            syncHandlers?.onMouseEnter(geoKey, e.clientY)
          }}
          onMouseLeave={() => {
            syncHandlers?.onMouseLeave()
          }}
        />
        {config.general.displayAsHex && hexagonLabel(territoryData, stroke, false)}
      </g>
    </svg>
  )
}

export default TerritoryHexagon
