import React, { useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'

type HoverLineProps = {
  tooltipData?: any // same as @visx/tooltip TooltipData
  xMax?: number
  yMax?: number
  point: { x: number; y: number }
  orientation: 'horizontal' | 'vertical'
}

const HoverLine: React.FC<HoverLineProps> = ({ tooltipData, xMax, yMax, point, orientation }) => {
  const { config } = useContext(ConfigContext)
  const { verticalHoverLine, horizontalHoverLine } = config.visual
  const { visualizationType } = config
  const isScatterPlot = visualizationType === 'Scatter Plot'

  const isVertical = orientation === 'vertical'
  const isHorizontal = orientation === 'horizontal'
  const showVerticalHoverLine = verticalHoverLine || (verticalHoverLine && isScatterPlot)
  const showHorizontalHoverLine = horizontalHoverLine || (horizontalHoverLine && isScatterPlot)

  const getX = () => {
    if (point.x > xMax + Number(config.yAxis.size)) return xMax
    if (point.x < config.yAxis.size) return config.yAxis.size
    return point.x
  }

  const getY = () => {
    if (point.y > yMax) return yMax
    return point.y
  }
  if (isVertical) {
    return (
      showVerticalHoverLine && (
        <Group key={`tooltipLine-vertical${point.y}${point.x}`} className='vertical-tooltip-line'>
          <Line
            from={{ x: getX(), y: 0 }}
            to={{ x: getX(), y: yMax }}
            stroke={'black'}
            strokeWidth={1}
            pointerEvents='none'
            strokeDasharray='5,5'
            className='vertical-tooltip-line'
          />
        </Group>
      )
    )
  }
  if (isHorizontal) {
    return (
      showHorizontalHoverLine && (
        <Group
          key={`tooltipLine-horizontal${point.y}${point.x}`}
          className='horizontal-tooltip-line'
          left={config.yAxis.size ? config.yAxis.size : 0}
        >
          <Line
            from={{ x: 0, y: getY() }}
            to={{ x: xMax, y: getY() }}
            stroke={'black'}
            strokeWidth={1}
            pointerEvents='none'
            strokeDasharray='5,5'
            className='horizontal-tooltip-line'
          />
        </Group>
      )
    )
  }
}
export default HoverLine
