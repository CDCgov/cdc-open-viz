import React, { useContext, useMemo } from 'react'
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
  xMax?: number
}

// TODO: should regions be removed on categorical axis?
const Regions: React.FC<RegionsProps> = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, xMax }) => {
  const { parseDate, config, unfilteredData, getXAxisData } = useContext<ChartContext>(ConfigContext)

  const { runtime, regions, visualizationType, orientation, xAxis } = config
  // Use full unfiltered data domain for regions, not the filtered/brushed domain
  // This ensures regions stay fixed when brush selection changes
  const fullDomain = useMemo(() => {
    if (!unfilteredData || !Array.isArray(unfilteredData) || unfilteredData.length === 0) {
      return xScale.domain()
    }

    const dataKey = config.runtime.originalXAxis?.dataKey || config.xAxis.dataKey
    const isDate = isDateScale(config.xAxis)

    if (isDate && getXAxisData) {
      const mapped = unfilteredData.map(d => getXAxisData(d))
      // Sort dates if needed
      return config.xAxis.sortByRecentDate ? [...mapped].reverse() : mapped
    } else {
      const mapped = unfilteredData.map(d => d[dataKey])
      return config.xAxis.sortByRecentDate ? [...mapped].reverse() : mapped
    }
  }, [unfilteredData, config, getXAxisData, xScale])

  // Use full domain for "Last Date" calculations to ensure regions stay fixed
  // But use filtered domain for scale positioning (xScale is based on filtered data)
  const filteredDomain = xScale.domain()

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
      // Use full domain for "Last Date" calculations
      const domainToUse = fullDomain.length > 0 ? fullDomain : filteredDomain
      const categoricalDomain = domainToUse.map(d => formatDate(config.xAxis.dateParseFormat, new Date(d)))
      const d =
        region.toType === 'Last Date' ? new Date(domainToUse[domainToUse.length - 1]).getTime() : new Date(region.to) // on categorical charts force leading zero 03/15/2016 vs 3/15/2016 for valid date format
      const to =
        config.xAxis.type === 'categorical'
          ? formatDate(config.xAxis.dateParseFormat, d)
          : formatDate(config.xAxis.dateParseFormat, d)
      const toDate = new Date(to)
      from = new Date(toDate.setDate(toDate.getDate() - Number(previousDays)))

      if (xAxis.type === 'date') {
        from = new Date(formatDate(xAxis.dateParseFormat, from)).getTime()

        const domainToUse = fullDomain.length > 0 ? fullDomain : filteredDomain
        let closestDate = domainToUse[0]
        let minDiff = Math.abs(from - closestDate)

        for (let i = 1; i < domainToUse.length; i++) {
          const diff = Math.abs(from - domainToUse[i])
          if (diff < minDiff) {
            minDiff = diff
            closestDate = domainToUse[i]
          }
        }
        from = closestDate
      }

      // Here the domain is in the xScale.dateParseFormat
      if (xAxis.type === 'categorical') {
        const domainToUse = fullDomain.length > 0 ? fullDomain : filteredDomain
        let closestDate = domainToUse[0]
        let minDiff = Math.abs(new Date(from).getTime() - new Date(closestDate).getTime())

        for (let i = 1; i < domainToUse.length; i++) {
          const diff = Math.abs(new Date(from).getTime() - new Date(domainToUse[i]).getTime())
          if (diff < minDiff) {
            minDiff = diff
            closestDate = domainToUse[i]
          }
        }
        from = closestDate
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
      // Use full domain to get the actual last date, not the filtered last date
      const domainToUse = fullDomain.length > 0 ? fullDomain : filteredDomain
      const lastDate = domainToUse[domainToUse.length - 1]
      const lastDatePosition = xScale(lastDate)

      // If lastDate is not in the filtered domain, xScale might return undefined
      // In that case, use xMax + yAxis.size to position at the end of the visible chart
      if (lastDatePosition === undefined || isNaN(lastDatePosition)) {
        const chartStart = Number(config.yAxis.size || 0)
        to = xMax !== undefined ? chartStart + xMax : chartStart
      } else {
        // For band scales, xScale returns the start of the band
        // To get to the end of the last band, we need to add the full bandwidth
        const bandwidth = xScale.bandwidth ? xScale.bandwidth() : 0
        const chartStart = Number(config.yAxis.size || 0)

        if (visualizationType === 'Line' || visualizationType === 'Area Chart') {
          // For Line/Area charts with band scales, add full bandwidth to reach end of band
          // Then add chartStart to account for left padding
          to = Number(lastDatePosition + bandwidth + chartStart)
        } else if (visualizationType === 'Bar' || visualizationType === 'Combo') {
          // For Bar charts, add barWidth instead of bandwidth
          to = Number(
            lastDatePosition + (config.xAxis.type === 'date' ? barWidth * totalBarsInGroup : bandwidth) + chartStart
          )
        } else {
          // For other chart types, just add bandwidth and chartStart
          to = Number(lastDatePosition + bandwidth + chartStart)
        }
      }
    } else {
      // For non-"Last Date" regions, apply the standard padding
      if (visualizationType === 'Line' || visualizationType === 'Area Chart') {
        let scalePadding = Number(config.yAxis.size)
        if (xScale.bandwidth) {
          scalePadding += xScale.bandwidth() / 2
        }
        to = to + scalePadding
      }
    }

    if (visualizationType === 'Bar' && config.xAxis.type === 'date-time' && region.toType !== 'Last Date') {
      to = to - (barWidth * totalBarsInGroup) / 2
    }

    if ((visualizationType === 'Bar' || visualizationType === 'Combo') && xAxis.type === 'categorical') {
      to = to + (visualizationType === 'Bar' || visualizationType === 'Combo' ? barWidth * totalBarsInGroup : 0)
    }
    return to
  }

  const getWidth = (to, from) => {
    const width = to - from
    // Ensure width is never negative
    return Math.max(0, width)
  }

  if (regions && orientation === 'vertical') {
    return regions.map(region => {
      const from = getFromValue(region)
      const to = getToValue(region)
      let width = getWidth(to, from)

      if (!from || from === undefined || isNaN(from)) return null
      if (!to || to === undefined || isNaN(to)) return null

      // Clip region to visible chart area (xMax) to prevent overflow
      // xMax is the width of the chart area (excluding left padding), so chartEnd = chartStart + xMax
      const chartStart = Number(config.yAxis.size || 0)
      const chartEnd = xMax !== undefined ? chartStart + xMax : chartStart + 1000 // fallback if xMax not provided

      // Adjust from and to to be within visible bounds
      let clippedFrom = Math.max(chartStart, from)
      let clippedTo = Math.min(chartEnd, to)

      // Recalculate width after clipping
      width = clippedTo - clippedFrom

      // Don't render if width is 0 or negative after clipping
      if (width <= 0) return null

      const HighlightedArea = () => {
        return <rect x={clippedFrom} y={0} width={width} height={yMax} fill={region.background} opacity={0.3} />
      }

      return (
        <Group
          height={100}
          fill='red'
          className='regions regions-group--line zzz'
          key={region.label}
          pointerEvents='none'
        >
          <HighlightedArea />
          <Text x={clippedFrom + width / 2} y={5} fill={region.color} verticalAnchor='start' textAnchor='middle'>
            {region.label}
          </Text>
        </Group>
      )
    })
  }
}

export default Regions
