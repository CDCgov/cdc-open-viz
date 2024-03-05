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

// TODO: should regions be removed on categorical axis?
const Regions: React.FC<RegionsProps> = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, handleTooltipMouseOff, handleTooltipMouseOver, handleTooltipClick, tooltipData, showTooltip, hideTooltip }) => {
  const { parseDate, config } = useContext<ChartContext>(ConfigContext)

  const { runtime, regions, visualizationType, orientation, xAxis } = config

  const getFromValue = region => {
    let from

    // Fixed Date
    if (!region?.fromType || region.fromType === 'Fixed') {
      let date = new Date(region.from)
      let f = parseDate(formatDate(config.xAxis.dateParseFormat, date)).getTime()
      from = xScale(f)
      if (visualizationType === 'Bar' || config.visualizationType === 'Combo') {
        from = region.fromType !== 'Previous Days' ? xScale(parseDate(region.from)) : null
      }
    }

    // Previous Date
    if (region.fromType === 'Previous Days') {
      let previousDays = Number(region.from) || 0

      let domain = xScale.domain()
      let categoricalDomain = xScale.domain().map(d => formatDate(config.xAxis.dateParseFormat, new Date(d)))
      let d = region.toType === 'Last Date' ? new Date(domain[domain.length - 1]) : new Date(region.to) // on categorical charts force leading zero 03/15/2016 vs 3/15/2016 for valid date format
      let to = config.xAxis.type === 'categorical' ? formatDate(config.xAxis.dateParseFormat, d) : formatDate(config.xAxis.dateParseFormat, d)
      let toDate = new Date(to)
      console.log('toDate', toDate)
      from = new Date(toDate.setDate(toDate.getDate() - previousDays))
      let categoricalFormattedDate = formatDate(config.xAxis.dateParseFormat, from)
      const isDate = date => date === categoricalFormattedDate
      let index = categoricalDomain.findIndex(isDate)
      debugger
      let categoricalIndexValue = xScale.domain()[index]

      from = config.xAxis.type === 'categorical' ? categoricalIndexValue : from
      from = xScale(from)
    }

    if (xAxis.type === 'categorical' && region.fromType !== 'Previous Days') {
      from = xScale(region.from)
    }

    return from
  }

  const getToValue = region => {
    let to

    // when xScale is categorical leading zeros are removed, ie. 03/15/2016 is 3/15/2016
    if (xAxis.type === 'categorical') {
      to = xScale(region.to)
    }

    if (xAxis.type === 'date') {
      if (!region?.toType || region.toType === 'Fixed') {
        to = xScale(parseDate(region.to).getTime())
      }

      if (visualizationType === 'Bar' || config.visualizationType === 'Combo') {
        to = region.toType !== 'Last Date' ? xScale(parseDate(region.to).getTime()) + barWidth * totalBarsInGroup : to
      }
    }
    if (region.toType === 'Last Date') {
      let domainValues = xScale.domain()
      let lastDate = domainValues[domainValues.length - 1]
      to = Number(xScale(lastDate) + (visualizationType === 'Bar' || visualizationType === 'Combo' ? barWidth * totalBarsInGroup : 0))
    }
    console.log('to value', to)
    return to
  }

  const getWidth = (to, from) => to - from

  if (regions && orientation === 'vertical') {
    return regions.map(region => {
      const from = getFromValue(region) + Number((visualizationType === 'Line' && config.xAxis.type === 'date') || config.xAxis.type === 'categorical' ? (xScale.bandwidth ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size) : 0)
      const to = getToValue(region) + Number((visualizationType === 'Line' && config.xAxis.type === 'date') || config.xAxis.type === 'categorical' ? (xScale.bandwidth ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size) : 0)
      const width = getWidth(to, from)

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
        <Group height={100} fill='red' className='regions regions-group--line zzz' key={region.label} onMouseMove={handleTooltipMouseOver} onMouseLeave={handleTooltipMouseOff} handleTooltipClick={handleTooltipClick} tooltipData={JSON.stringify(tooltipData)} showTooltip={showTooltip}>
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
