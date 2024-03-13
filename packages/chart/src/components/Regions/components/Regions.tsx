import React, { MouseEventHandler, useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { ChartContext } from '../../../types/ChartContext'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import { formatDate, isDateScale } from '@cdc/core/helpers/cove/date.js'

type RegionsProps = {
  xScale: Function
  yMax: number
  barWidth?: number
  totalBarsInGroup?: number
  handleTooltipMouseOff: MouseEventHandler<SVGElement>
  handleTooltipMouseOver: MouseEventHandler<SVGElement>
  handleTooltipClick: MouseEventHandler<SVGElement>
  tooltipData: unknown
  showTooltip: Function
  hideTooltip: Function
}

// TODO: should regions be removed on categorical axis?
const Regions: React.FC<RegionsProps> = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, handleTooltipMouseOff, handleTooltipMouseOver, handleTooltipClick, tooltipData, showTooltip, hideTooltip }) => {
  const { parseDate, config } = useContext<ChartContext>(ConfigContext)

  const { runtime, regions, visualizationType, orientation, xAxis } = config
  const domain = xScale.domain()

  const getFromValue = region => {
    let from

    // Fixed Date
    if (!region?.fromType || region.fromType === 'Fixed') {
      const date = new Date(region.from)
      const parsedDate = parseDate(formatDate(config.xAxis.dateParseFormat, date)).getTime()
      from = xScale(parsedDate)

      if (visualizationType === 'Bar' && xAxis.type === 'date-time') {
        from = from - (barWidth * totalBarsInGroup) / 2
      }
    }

    // Previous Date
    if (region.fromType === 'Previous Days') {
      const previousDays = Number(region.from) || 0
      const categoricalDomain = domain.map(d => formatDate(config.xAxis.dateParseFormat, new Date(d)))
      const d = region.toType === 'Last Date' ? new Date(domain[domain.length - 1]) : new Date(region.to) // on categorical charts force leading zero 03/15/2016 vs 3/15/2016 for valid date format
      const to = config.xAxis.type === 'categorical' ? formatDate(config.xAxis.dateParseFormat, d) : formatDate(config.xAxis.dateParseFormat, d)
      const toDate = new Date(to)

      from = new Date(toDate.setDate(toDate.getDate() - previousDays))

      if (xAxis.type === 'categorical') {
        const categoricalFormattedDate = formatDate(config.xAxis.dateParseFormat, from)
        const isDate = date => date === categoricalFormattedDate
        const index = categoricalDomain.findIndex(isDate)
        const categoricalIndexValue = xScale.domain()[index]
        from = config.xAxis.type === 'categorical' ? categoricalIndexValue : from
      }

      from = xScale(from)
    }

    if (xAxis.type === 'categorical' && region.fromType !== 'Previous Days') {
      from = xScale(region.from)
    }

    if (visualizationType === 'Line' || visualizationType === 'Area Chart') {
      let scalePadding = Number(config.yAxis.size)
      if (xScale.bandwidth) {
        scalePadding += xScale.bandwidth() / 2
      }
      from = from + scalePadding
    }

    if (visualizationType === 'Bar' && config.xAxis.type === 'date-time' && region.fromType === 'Previous Days') {
      from = from - (barWidth * totalBarsInGroup) / 2
    }

    return from
  }

  const getToValue = region => {
    let to

    // when xScale is categorical leading zeros are removed, ie. 03/15/2016 is 3/15/2016
    if (xAxis.type === 'categorical') {
      to = xScale(region.to)
    }

    if (isDateScale(xAxis)) {
      if (!region?.toType || region.toType === 'Fixed') {
        to = xScale(parseDate(region.to).getTime())
      }

      if (visualizationType === 'Bar' || config.visualizationType === 'Combo') {
        to = region.toType !== 'Last Date' ? xScale(parseDate(region.to).getTime()) + barWidth * totalBarsInGroup : to
      }
    }
    if (region.toType === 'Last Date') {
      const lastDate = domain[domain.length - 1]
      to = Number(xScale(lastDate) + ((visualizationType === 'Bar' || visualizationType === 'Combo') && config.xAxis.type === 'date' ? barWidth * totalBarsInGroup : 0))
    }

    if (visualizationType === 'Line' || visualizationType === 'Area Chart') {
      let scalePadding = Number(config.yAxis.size)
      if (xScale.bandwidth) {
        scalePadding += xScale.bandwidth() / 2
      }
      to = to + scalePadding
    }

    if (visualizationType === 'Bar' && config.xAxis.type === 'date-time' && region.toType !== 'Last Date') {
      to = to - (barWidth * totalBarsInGroup) / 2
    }

    if ((visualizationType === 'Bar' || visualizationType === 'Combo') && xAxis.type === 'categorical') {
      to = to + (visualizationType === 'Bar' || visualizationType === 'Combo' ? barWidth * totalBarsInGroup : 0)
    }
    return to
  }

  const getWidth = (to, from) => to - from

  if (regions && orientation === 'vertical') {
    return regions.map(region => {
      const from = getFromValue(region)
      const to = getToValue(region)
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
