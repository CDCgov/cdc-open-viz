import { useContext } from 'react'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import chroma from 'chroma-js'
import ConfigContext from './../../../../context'
import { type MapContext } from '../../../../types/MapContext'
// todo: move this somewhere that makes better sense for pattern sizes.
const sizes = {
  small: '8',
  medium: '10',
  large: '12'
}

const TerritoryRectangle = ({ label, text, stroke, strokeWidth, textColor, hasPattern, territory, ...props }) => {
  const { state, supportedTerritories } = useContext<MapContext>(ConfigContext)

  return (
    <svg viewBox='0 0 45 28'>
      <g {...props} strokeLinejoin='round'>
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d='M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z'
          {...props}
        />
        <text textAnchor='middle' dominantBaseline='middle' x='50%' y='54%' fill={text} style={{ stroke: textColor, strokeWidth: 1 }} className='territory-text' paint-order='stroke'>
          {label}
        </text>

        {state.map.patterns.map((patternData, patternIndex) => {
          let defaultPatternColor = 'black'

          const hasMatchingValues = supportedTerritories[territory].includes(patternData?.dataValue)
          console.log('has match', patternData)

          if (chroma.contrast(defaultPatternColor, props.style.fill) < 3.5) {
            defaultPatternColor = 'white'
          }

          if (!hasMatchingValues) return null
          if (!patternData.pattern) return null

          return (
            <>
              {patternData?.pattern === 'waves' && <PatternWaves id={`territory-${patternData?.dataKey}--${patternIndex}`} height={sizes[patternData?.size] ?? 10} width={sizes[patternData?.size] ?? 10} fill={defaultPatternColor} complement />}
              {patternData?.pattern === 'circles' && <PatternCircles id={`territory-${patternData?.dataKey}--${patternIndex}`} height={sizes[patternData?.size] ?? 10} width={sizes[patternData?.size] ?? 10} fill={defaultPatternColor} complement />}
              {patternData?.pattern === 'lines' && <PatternLines id={`territory-${patternData?.dataKey}--${patternIndex}`} height={sizes[patternData?.size] ?? 6} width={sizes[patternData?.size] ?? 6} stroke={defaultPatternColor} strokeWidth={1} orientation={['diagonalRightToLeft']} />}
              <path
                stroke={stroke}
                strokeWidth={strokeWidth}
                d='M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z'
                fill={`url(#territory-${patternData?.dataKey}--${patternIndex})`}
                color='white'
                className={[`territory-pattern-${patternData.dataKey}`, `territory-pattern-${patternData.dataKey}--${patternData.dataValue}`].join(' ')}
              />
              <text textAnchor='middle' dominantBaseline='middle' x='50%' y='54%' fill={text} style={{ stroke: patternData ? 'black' : textColor, strokeWidth: patternData ? 6 : 0 }} className='territory-text' paint-order='stroke'>
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
