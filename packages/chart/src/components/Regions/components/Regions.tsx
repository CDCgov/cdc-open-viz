import React, { useContext } from 'react'
import { ChartConfig } from '../../../types/ChartConfig'
import ConfigContext from '../../../ConfigContext'
import { ChartContext } from '../../../types/ChartContext'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import * as d3 from 'd3'
import { formatDate } from '@cdc/core/helpers/cove/date.js'

type RegionsProps = {
  xScale: Function
  yMax: number
  barWidth?: number
  totalBarsInGroup?: number
}

const Regions = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, handleTooltipMouseOff, handleTooltipMouseOver, handleTooltipClick, tooltipData, showTooltip, hideTooltip }: RegionsProps) => {
  const { parseDate, config } = useContext<ChartContext>(ConfigContext)

  const { runtime, regions, visualizationType, orientation, xAxis } = config

  let from
  let to
  let width

  if (regions && orientation === 'vertical') {
    return regions.map(region => {
      if (xAxis.type === 'date' && region.fromType !== 'Previous Days') {
        from = xScale(parseDate(region.from).getTime())
        to = xScale(parseDate(region.to).getTime())
        width = to - from
      }

      if (xAxis.type === 'categorical') {
        from = xScale(region.from)
        to = xScale(region.to)
        width = to - from
      }

      if ((visualizationType === 'Bar' || config.visualizationType === 'Combo') && xAxis.type === 'date') {
        from = region.fromType !== 'Previous Days' ? xScale(parseDate(region.from).getTime()) - (barWidth * totalBarsInGroup) / 2 : null
        to = region.toType !== 'Last Date' ? xScale(parseDate(region.to).getTime()) + (barWidth * totalBarsInGroup) / 2 : null

        width = to - from
      }

      if ((visualizationType === 'Bar' || config.visualizationType === 'Combo') && config.xAxis.type === 'categorical') {
        from = xScale(region.from)
        to = xScale(region.to)
        width = to - from
      }

      if (region.fromType === 'Previous Days') {
        to = region.toType !== 'Last Date' ? xScale(parseDate(region.to).getTime()) + (barWidth * totalBarsInGroup) / 2 : null

        let domain = xScale.domain()
        let bisectDate = d3.bisector(d => d).left
        let closestValue

        let previousDays = Number(region.from)
        let lastDate = region.toType === 'Last Date' ? domain[domain.length - 1] : region.to
        let toDate = new Date(lastDate)

        from = new Date(toDate.setDate(toDate.getDate() - previousDays)).getTime()
        let targetValue = from

        let index = bisectDate(domain, targetValue)
        if (index === 0) {
          closestValue = domain[0]
        } else if (index === domain.length) {
          closestValue = domain[domain.length - 1]
        } else {
          let d0 = domain[index - 1]
          let d1 = domain[index]
          closestValue = targetValue - d0 > d1 - targetValue ? d1 : d0
        }
        from = Number(xScale(closestValue) - (visualizationType === 'Bar' || visualizationType === 'Combo' ? (barWidth * totalBarsInGroup) / 2 : 0))

        width = to - from
      }

      // set the region max to the charts max range.
      if (region.toType === 'Last Date') {
        let domainValues = xScale.domain()
        let lastDate = domainValues[domainValues.length - 1]
        to = Number(xScale(lastDate) + (visualizationType === 'Bar' || visualizationType === 'Combo' ? (barWidth * totalBarsInGroup) / 2 : 0))
        width = to - from
      }

      if (region.fromType === 'Previous Days' && xAxis.type === 'date-time' && config.visualizationType === 'Line') {
        let domain = xScale.domain()
        let previousDays = Number(region.from)
        let to = region.toType === 'Last Date' ? formatDate(config.xAxis.dateParseFormat, domain[domain.length - 1]) : region.to
        let toDate = new Date(to)
        from = new Date(toDate.setDate(toDate.getDate() - previousDays)).getTime()
        from = xScale(from)
        to = xScale(parseDate(to))
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
          left={config.visualizationType === 'Bar' || config.visualizationType === 'Combo' ? 0 : config?.visualizationType === 'Line' ? Number(runtime.yAxis.size) : 0}
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
