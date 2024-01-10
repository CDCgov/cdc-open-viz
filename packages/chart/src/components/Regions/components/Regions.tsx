import React, { useContext } from 'react'
import { ChartConfig } from '../../../types/ChartConfig'
import ConfigContext from '../../../ConfigContext'
import { ChartContext } from '../../../types/ChartContext'
import { Text } from '@visx/text'
import { Group } from '@visx/group'

type RegionsProps = {
  xScale: Function
  barWidth: number
  totalBarsInGroup: number
  yMax: number
  barWidth?: number
  totalBarsInGroup?: number
}

const Regions = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, handleTooltipMouseOff, handleTooltipMouseOver, handleTooltipClick, tooltipData, showTooltip, hideTooltip }: RegionsProps) => {
  const { parseDate, config } = useContext<ChartContext>(ConfigContext)

  const { runtime, regions, visualizationType } = config

  let from
  let to
  let width

  if (regions && config.orientation === 'vertical') {
    return regions.map(region => {
      if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null

      if (config.xAxis.type === 'date') {
        from = xScale(parseDate(region.from).getTime())
        to = xScale(parseDate(region.to).getTime())
        width = to - from
      }

      if (config.xAxis.type === 'categorical') {
        from = xScale(region.from)
        to = xScale(region.to)
        width = to - from
      }

      if ((visualizationType === 'Bar' || config.visualizationType === 'Combo') && config.xAxis.type === 'date') {
        from = xScale(parseDate(region.from).getTime()) - (barWidth * totalBarsInGroup) / 2
        to = xScale(parseDate(region.to).getTime()) + (barWidth * totalBarsInGroup) / 2

        width = to - from
      }

      if ((visualizationType === 'Bar' || config.visualizationType === 'Combo') && config.xAxis.type === 'categorical') {
        from = xScale(region.from)
        to = xScale(region.to)
        width = to - from
      }

      if (!from) return null
      if (!to) return null

      const TopRegionBorderShape = () => {
        return (
          <path
            stroke='#333'
            d={`M${from} -5
                L${from} 5
                M${from} 0
                L${to} 0
                M${to} -5
                L${to} 5`}
          />
        )
      }

      const HighlightedArea = () => {
        return <rect x={from} y={0} width={width} height={yMax} fill={region.background} opacity={0.3} />
      }

      return (
        <Group
          className='regions regions-group--line'
          // left={config.visualizationType === 'Bar' || config.visualizationType === 'Combo' ? 0 : Number(runtime.yAxis.size)}
          key={region.label}
          onMouseMove={handleTooltipMouseOver}
          onMouseLeave={handleTooltipMouseOff}
          handleTooltipClick={handleTooltipClick}
          tooltipData={JSON.stringify(tooltipData)}
          showTooltip={showTooltip}
        >
          <TopRegionBorderShape />
          <HighlightedArea />
          <Text x={from + width / 2} y={5} fill={region.color} verticalAnchor='start' textAnchor='middle'>
            {region.label}
          </Text>
        </Group>
      )
    })
  }
}

export default Regions
