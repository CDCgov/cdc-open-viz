import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { ChartContext } from '../../../types/ChartContext'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import { formatDate, isDateScale } from '@cdc/core/helpers/cove/date.js'

// Constants for visualization types
const VIZ_TYPES = {
  BAR: 'Bar',
  LINE: 'Line',
  AREA: 'Area Chart',
  COMBO: 'Combo'
} as const

type Region = {
  from: string
  to: string
  fromType?: 'Fixed' | 'Previous Days'
  toType?: 'Fixed' | 'Last Date'
  label: string
  background: string
  color: string
}

type XScale = {
  (value: unknown): number
  domain: () => unknown[]
  bandwidth?: () => number
}

type RegionsProps = {
  xScale: XScale
  yMax: number
  barWidth?: number
  totalBarsInGroup?: number
  xMax?: number
}

type HighlightedAreaProps = {
  x: number
  width: number
  yMax: number
  background: string
}

const HighlightedArea: React.FC<HighlightedAreaProps> = ({ x, width, yMax, background }) => (
  <rect x={x} y={0} width={width} height={yMax} fill={background} opacity={0.3} />
)

/** Find the closest date in domain to a target date */
const findClosestDate = <T,>(targetTime: number, domain: T[], getTime: (d: T) => number): T => {
  let closest = domain[0]
  let minDiff = Math.abs(targetTime - getTime(closest))

  for (let i = 1; i < domain.length; i++) {
    const diff = Math.abs(targetTime - getTime(domain[i]))
    if (diff < minDiff) {
      minDiff = diff
      closest = domain[i]
    }
  }
  return closest
}

/** Check if visualization type is line-like (Line or Area Chart) */
const isLineLike = (type: string): boolean => type === VIZ_TYPES.LINE || type === VIZ_TYPES.AREA

/** Check if visualization type is bar-like (Bar or Combo) */
const isBarLike = (type: string): boolean => type === VIZ_TYPES.BAR || type === VIZ_TYPES.COMBO

// TODO: should regions be removed on categorical axis?
const Regions: React.FC<RegionsProps> = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, xMax }) => {
  const { parseDate, config } = useContext<ChartContext>(ConfigContext)

  const { regions, visualizationType, orientation, xAxis } = config

  const getScalePadding = (): number => {
    let padding = Number(config.yAxis.size)
    if (xScale.bandwidth) {
      padding += xScale.bandwidth() / 2
    }
    return padding
  }

  const getBarOffset = (): number => (barWidth * totalBarsInGroup) / 2

  const getFromValue = (region: Region): number => {
    let from: number

    // Fixed Date
    if (!region?.fromType || region.fromType === 'Fixed') {
      const date = new Date(region.from)
      const parsedDate = parseDate(formatDate(config.xAxis.dateParseFormat, date)).getTime()
      from = xScale(parsedDate)

      if (visualizationType === VIZ_TYPES.BAR && xAxis.type === 'date-time') {
        from = from - getBarOffset()
      }
    }

    // Previous Days calculation
    if (region.fromType === 'Previous Days') {
      const previousDays = Number(region.from) || 0
      const domain = xScale.domain()

      // Determine the "to" reference date
      const toRefDate =
        region.toType === 'Last Date'
          ? new Date(domain[domain.length - 1] as string | number).getTime()
          : new Date(region.to)

      const toFormatted = formatDate(config.xAxis.dateParseFormat, toRefDate)
      const toDate = new Date(toFormatted)
      const fromDate = new Date(toDate)
      fromDate.setDate(fromDate.getDate() - previousDays)

      let closestValue: unknown

      if (xAxis.type === 'date') {
        const fromTime = new Date(formatDate(xAxis.dateParseFormat, fromDate)).getTime()
        closestValue = findClosestDate(fromTime, domain as number[], d => d)
      } else if (xAxis.type === 'categorical') {
        const fromTime = fromDate.getTime()
        closestValue = findClosestDate(fromTime, domain as string[], d => new Date(d).getTime())
      } else {
        closestValue = fromDate
      }

      from = xScale(closestValue)
    }

    if (xAxis.type === 'categorical' && region.fromType !== 'Previous Days') {
      from = xScale(region.from)
    }

    if (isLineLike(visualizationType)) {
      from = from + getScalePadding()
    }

    if (
      visualizationType === VIZ_TYPES.BAR &&
      config.xAxis.type === 'date-time' &&
      region.fromType === 'Previous Days'
    ) {
      from = from - getBarOffset()
    }

    return from
  }

  const getToValue = (region: Region): number => {
    let to: number

    // Categorical axis: leading zeros are removed (e.g., 03/15/2016 becomes 3/15/2016)
    if (xAxis.type === 'categorical') {
      to = xScale(region.to)
    }

    if (isDateScale(xAxis)) {
      if (!region?.toType || region.toType === 'Fixed') {
        to = xScale(parseDate(region.to).getTime())
      }

      if (isBarLike(visualizationType) && region.toType !== 'Last Date') {
        to = xScale(parseDate(region.to).getTime()) + barWidth * totalBarsInGroup
      }
    }

    if (region.toType === 'Last Date') {
      to = calculateLastDatePosition()
    } else if (isLineLike(visualizationType)) {
      to = to + getScalePadding()
    }

    if (visualizationType === VIZ_TYPES.BAR && config.xAxis.type === 'date-time' && region.toType !== 'Last Date') {
      to = to - getBarOffset()
    }

    if (isBarLike(visualizationType) && xAxis.type === 'categorical') {
      to = to + barWidth * totalBarsInGroup
    }

    return to
  }

  const calculateLastDatePosition = (): number => {
    const domain = xScale.domain()
    const lastDate = domain[domain.length - 1]
    const lastDatePosition = xScale(lastDate)
    const bandwidth = xScale.bandwidth ? xScale.bandwidth() : 0
    const chartStart = Number(config.yAxis.size || 0)

    if (isLineLike(visualizationType)) {
      return Number(lastDatePosition + bandwidth + chartStart)
    }

    if (isBarLike(visualizationType)) {
      const offset = config.xAxis.type === 'date' ? barWidth * totalBarsInGroup : bandwidth
      return Number(lastDatePosition + offset + chartStart)
    }

    return Number(lastDatePosition + bandwidth + chartStart)
  }

  const getWidth = (to: number, from: number): number => Math.max(0, to - from)

  if (!regions || orientation !== 'vertical') return null

  const chartStart = Number(config.yAxis.size || 0)
  const chartEnd = xMax !== undefined ? chartStart + xMax : chartStart + 1000

  return regions.map((region: Region) => {
    const from = getFromValue(region)
    const to = getToValue(region)

    // Validate computed positions
    if (from === undefined || isNaN(from) || to === undefined || isNaN(to)) {
      return null
    }

    // Clip region to visible chart area
    const clippedFrom = Math.max(chartStart, from)
    const clippedTo = Math.min(chartEnd, to)
    const width = getWidth(clippedTo, clippedFrom)

    if (width <= 0) return null

    return (
      <Group height={100} fill='red' className='regions regions-group--line' key={region.label} pointerEvents='none'>
        <HighlightedArea x={clippedFrom} width={width} yMax={yMax} background={region.background} />
        <Text x={clippedFrom + width / 2} y={5} fill={region.color} verticalAnchor='start' textAnchor='middle'>
          {region.label}
        </Text>
      </Group>
    )
  })
}

export default Regions
