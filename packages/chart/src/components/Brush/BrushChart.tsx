import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { Brush } from '@visx/brush'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import ConfigContext from '../../ConfigContext'
import { Text } from '@visx/text'
import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { isDateScale } from '@cdc/core/helpers/cove/date'
export interface ZoomBrushProps {
  xMax: number
  yMax: number
  brushPosition: { start: { x: number }; end: { x: number } }
  onBrushChange: (bounds: any) => void
  brushKey: number
}

const ZoomBrush: FC<ZoomBrushProps> = ({ xMax, yMax, brushPosition, onBrushChange, brushKey }) => {
  const { tableData, config, parseDate, dashboardConfig } = useContext(ConfigContext)
  const brushRef = useRef(null)
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
        disableDraggingOverlay={true}
      />
    </Group>
  )
}

export default ZoomBrush
