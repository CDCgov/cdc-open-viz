import { useContext } from 'react'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import ConfigContext from './../../../../context'
import { type MapContext } from '../../../../types/MapContext'
import { patternSizes } from '../../helpers/patternSizes'
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'
import { type TerritoryShape } from './TerritoryShape'

const TerritoryRectangle: React.FC<TerritoryShape> = ({
  dataTooltipId,
  dataTooltipHtml,
  handleShapeClick,
  hasPattern,
  label,
  stroke,
  strokeColor,
  strokeWidth,
  territory,
  textColor,
  backgroundColor,
  ...props
}) => {
  const { config } = useContext<MapContext>(ConfigContext)
  const { territoryData, ...otherProps } = props
  const rectanglePath =
    'M42,0.5 C42.8284271,0.5 43.5,1.17157288 43.5,2 L43.5,2 L43.5,26 C43.5,26.8284271 42.8284271,27.5 42,27.5 L42,27.5 L3,27.5 C2.17157288,27.5 1.5,26.8284271 1.5,26 L1.5,26 L1.5,2 C1.5,1.17157288 2.17157288,0.5 3,0.5 L3,0.5 Z'

  return (
    <svg viewBox='0 0 45 29' key={territory} className={territory}>
      <g
        {...otherProps}
        strokeLinejoin='round'
        tabIndex={-1}
        onClick={handleShapeClick}
        data-tooltip-id={dataTooltipId}
        data-tooltip-html={dataTooltipHtml}
      >
        <path stroke={stroke} strokeWidth={strokeWidth} d={rectanglePath} {...otherProps} />
        <text
          textAnchor='middle'
          dominantBaseline='middle'
          x='50%'
          y='54%'
          fill={textColor}
          stroke={strokeColor}
          className='territory-text'
          paintOrder='stroke'
          onClick={handleShapeClick}
          data-tooltip-id={dataTooltipId}
          data-tooltip-html={dataTooltipHtml}
        >
          {label}
        </text>

        {config.map.patterns.map((patternData, patternIndex) => {
          const patternColor = patternData.color || getContrastColor('#FFF', backgroundColor)
          const hasMatchingValues = patternData.dataValue === territoryData?.[patternData.dataKey]

          if (!hasMatchingValues) return null
          if (!patternData.pattern) return null

          return (
            <>
              {patternData?.pattern === 'waves' && (
                <PatternWaves
                  id={`territory-${territory}-${patternData?.dataKey}--${patternIndex}`}
                  height={patternSizes[patternData?.size] ?? 10}
                  width={patternSizes[patternData?.size] ?? 10}
                  fill={patternColor}
                  strokeWidth={0.25}
                  complement
                />
              )}
              {patternData?.pattern === 'circles' && (
                <PatternCircles
                  id={`territory-${territory}-${patternData?.dataKey}--${patternIndex}`}
                  height={patternSizes[patternData?.size] ?? 10}
                  width={patternSizes[patternData?.size] ?? 10}
                  fill={patternColor}
                  strokeWidth={0.5}
                  complement
                />
              )}
              {patternData?.pattern === 'lines' && (
                <PatternLines
                  id={`territory-${territory}-${patternData?.dataKey}--${patternIndex}`}
                  height={patternSizes[patternData?.size] ?? 6}
                  width={patternSizes[patternData?.size] ?? 6}
                  stroke={patternColor}
                  strokeWidth={0.75}
                  orientation={['diagonalRightToLeft']}
                />
              )}
              <path
                stroke={stroke}
                strokeWidth={strokeWidth}
                d={rectanglePath}
                fill={`url(#territory-${territory}-${patternData?.dataKey}--${patternIndex})`}
                className={[
                  `territory-pattern-${patternData?.dataKey}`,
                  `territory-pattern-${patternData?.dataKey}--${patternData.dataValue}`
                ].join(' ')}
              />
              <text
                textAnchor='middle'
                dominantBaseline='middle'
                x='50%'
                y='54%'
                fill={textColor}
                stroke={strokeColor}
                className='territory-text'
                paintOrder='stroke'
                onClick={handleShapeClick}
                data-tooltip-id={dataTooltipId}
                data-tooltip-html={dataTooltipHtml}
              >
                {label}
              </text>
            </>
          )
        })}
      </g>
    </svg>
  )
}

export default TerritoryRectangle
