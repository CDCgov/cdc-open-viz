import React from 'react'
import { BarStack } from '@visx/xychart'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { LegendOrdinal } from '@visx/legend'
import { timeParse, timeFormat } from 'd3-time-format'

// Define the scales
const xScale = scaleBand({
  domain: data.map(d => d.month),
  padding: 0.2
})
const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(d => d.apples + d.bananas + d.cherries))],
  nice: true
})
const colorScale = scaleOrdinal({
  domain: ['apples', 'bananas', 'cherries'],
  range: ['#ec524b', '#ffc658', '#a4de6c']
})

export default function StackedBarChart() {
  return (
    <svg width={400} height={300}>
      <BarStack data={data} keys={['apples', 'bananas', 'cherries']} x={d => d.month} xScale={xScale} yScale={yScale} color={colorScale}>
        {barStacks => barStacks.map(barStack => barStack.bars.map(bar => <rect key={`bar-stack-${barStack.index}-${bar.index}`} x={bar.x} y={bar.y} width={bar.width} height={bar.height} fill={bar.color} />))}
      </BarStack>
    </svg>
  )
}
