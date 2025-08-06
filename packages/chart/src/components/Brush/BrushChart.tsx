import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { Brush } from '@visx/brush'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import ConfigContext from '../../ConfigContext'
import { Text } from '@visx/text'
import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { BrushRef } from './types'
export interface BrushChartProps {
  xMax: number
  yMax: number
  brushPosition: { start: { x: number }; end: { x: number } }
  onBrushChange: (bounds: any) => void
  brushKey: number
  brushHandleProps: { startValue: string; endValue: string; endPos: number; startPos: number }
  brushRef: React.RefObject<BrushRef>
}

const BrushChart: FC<BrushChartProps> = ({
  xMax,
  yMax,
  brushPosition,
  onBrushChange,
  brushKey,
  brushHandleProps,
  brushRef
}) => {
  const { tableData, config, dashboardConfig } = useContext(ConfigContext)
  const dataKey = config.xAxis.dataKey
  const borderRadius = 15
  const mappedDates: string[] = tableData.map(row => row[dataKey])
  const brushheight = 25
  const DASHBOARD_MARGIN = 50
  const BRUSH_HEIGHT_MULTIPLIER = 1.5

  const xScale = scaleBand<string>({
    domain: mappedDates,
    range: [0, xMax],
    paddingInner: 0.1,
    paddingOuter: 0.1
  })
  const yScale = scaleLinear({ domain: [0, yMax], range: [0, yMax] })

  const calculateGroupTop = (): number => {
    if (dashboardConfig?.type === 'dashboard') {
      return Number(yMax) + config.xAxis.axisBBox + brushheight * BRUSH_HEIGHT_MULTIPLIER + DASHBOARD_MARGIN
    } else {
      return Number(yMax) + config.xAxis.axisBBox + brushheight * BRUSH_HEIGHT_MULTIPLIER
    }
  }

  const style = {
    fill: '#474747',
    stroke: 'blue',
    strokeOpacity: 0,
    rx: borderRadius
  }

  return (
    <Group left={config.yAxis.size} top={calculateGroupTop()}>
      <rect fill='#949494' width={xMax} height={25} rx={borderRadius} pointerEvents='none' />
      <Brush
        disableDraggingOverlay={false}
        renderBrushHandle={props => (
          <BrushHandle
            left={Number(config.runtime.yAxis.size)}
            pixelDistance={brushHandleProps.endPos - brushHandleProps.startPos}
            textProps={brushHandleProps}
            isBrushing={brushRef.current?.state.isBrushing}
            {...props}
          />
        )}
        innerRef={brushRef}
        key={brushKey}
        xScale={xScale}
        yScale={yScale}
        width={xMax}
        height={25}
        brushDirection='horizontal'
        handleSize={8}
        resizeTriggerAreas={['left', 'right']}
        initialBrushPosition={brushPosition}
        selectedBoxStyle={style}
        onChange={onBrushChange}
        useWindowMoveEvents={true}
      />
    </Group>
  )
}

export default BrushChart

const BrushHandle = props => {
  const { x, y, isBrushing, className, textProps } = props
  const pathWidth = 8

  // Flip the SVG path horizontally for the left handle
  const isLeft = className.includes('left')
  const transform = isLeft ? 'scale(-1, 1)' : 'translate(0,0)'
  const textAnchor = isLeft ? 'end' : 'start'
  const tooltipText = isLeft ? ` Drag edges to focus on a specific segment ` : ''
  const textFontSize = APP_FONT_SIZE / 1.4
  const textWidth = getTextWidth(textProps.startValue, `${textFontSize}px`)
  const textPosLeft = x > 0 ? 0 : 55
  const textPosRight = y < textProps.xMax ? 0 : -50
  return (
    <Group left={x + pathWidth / 2} top={-2}>
      <Text
        pointerEvents='visiblePainted'
        dominantBaseline='hanging'
        x={isLeft ? textPosLeft : textPosRight}
        y={25}
        verticalAnchor='start'
        textAnchor={textAnchor}
        fontSize={textFontSize}
      >
        {isLeft ? textProps.startValue : textProps.endValue}
      </Text>
      <path
        cursor='ew-resize'
        d='M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12'
        fill='#297EF1'
        strokeWidth='1'
        transform={transform}
      />
    </Group>
  )
}
