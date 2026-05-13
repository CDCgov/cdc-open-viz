import React, { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { ChartContext } from '../../../types/ChartContext'
import { Text, useText } from '@visx/text'
import { Group } from '@visx/group'
import { formatDate } from '@cdc/core/helpers/cove/date.js'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { isMobileFontViewport } from '@cdc/core/helpers/viewports'

// Constants for visualization types
const VIZ_TYPES = {
  BAR: 'Bar',
  LINE: 'Line',
  AREA: 'Area Chart',
  COMBO: 'Combo',
  HORIZON: 'Horizon Chart'
} as const

const DEFAULT_REGION_BACKGROUND = 'var(--cool-gray-50, #71767a)'
const TICK_LABEL_FONT_SIZE = 16
const TICK_LABEL_FONT_SIZE_SMALL = 13
const REGION_LABEL_HORIZONTAL_PADDING = 8
const REGION_LABEL_TOP_PADDING = 6
const REGION_LABEL_MAX_PLOT_WIDTH_RATIO = 1 / 3
const REGION_LABEL_COMFORTABLE_MIN_WIDTH = 120
const REGION_LABEL_COMFORTABLE_MIN_WIDTH_SMALL = 96
const REGION_LABEL_FONT_FAMILY = 'Nunito, sans-serif'

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

type RegionLabelLayout = {
  x: number
  width: number
}

type RegionLabelProps = {
  label: string
  color: string
  clippedFrom: number
  regionWidth: number
  plotWidth: number
  fontSize: number
  isMobileViewport: boolean
}

const HighlightedArea: React.FC<HighlightedAreaProps> = ({ x, width, yMax, background }) => (
  <rect x={x} y={0} width={width} height={yMax} fill={background || DEFAULT_REGION_BACKGROUND} opacity={0.3} />
)

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max)

const getRegionLabelY = (fontSize: number): number => REGION_LABEL_TOP_PADDING + fontSize * 0.25

const getComfortableRegionLabelWidth = (plotWidth: number, isMobileViewport: boolean): number => {
  const maxPlotLabelWidth = Math.max(1, plotWidth * REGION_LABEL_MAX_PLOT_WIDTH_RATIO)
  const comfortableMinWidth = isMobileViewport
    ? REGION_LABEL_COMFORTABLE_MIN_WIDTH_SMALL
    : REGION_LABEL_COMFORTABLE_MIN_WIDTH
  return Math.min(comfortableMinWidth, maxPlotLabelWidth, plotWidth)
}

// Region labels prefer to sit centered inside their highlighted region when the measured text
// fits with padding. If the visible region is too narrow, keep a readable fixed wrapping width
// and pin the measured text near the region's right edge, clamped so the text stays inside the plot.
const getRegionLabelLayout = (
  clippedFrom: number,
  regionWidth: number,
  plotWidth: number,
  comfortableLabelWidth: number,
  estimatedWrappedWidth: number
): RegionLabelLayout => {
  const maxPlotLabelWidth = Math.max(1, plotWidth * REGION_LABEL_MAX_PLOT_WIDTH_RATIO)
  const regionInnerWidth = Math.max(0, regionWidth - REGION_LABEL_HORIZONTAL_PADDING * 2)
  const insideThreshold = Math.min(comfortableLabelWidth, estimatedWrappedWidth || comfortableLabelWidth)

  const isInsideRegion = regionInnerWidth >= insideThreshold
  const labelWidth = isInsideRegion ? Math.min(regionInnerWidth, maxPlotLabelWidth) : comfortableLabelWidth

  const regionCenter = clippedFrom + regionWidth / 2
  const halfLabelWidth = labelWidth / 2
  const measuredTextWidth = Math.min(estimatedWrappedWidth || labelWidth, labelWidth)
  const halfMeasuredTextWidth = measuredTextWidth / 2
  const overflowLabelX = clamp(
    clippedFrom + regionWidth - REGION_LABEL_HORIZONTAL_PADDING - halfMeasuredTextWidth,
    halfMeasuredTextWidth,
    plotWidth - halfMeasuredTextWidth
  )
  const insideLabelX =
    labelWidth >= plotWidth ? plotWidth / 2 : clamp(regionCenter, halfLabelWidth, plotWidth - halfLabelWidth)

  return { x: isInsideRegion ? insideLabelX : overflowLabelX, width: labelWidth }
}

const RegionLabel: React.FC<RegionLabelProps> = ({
  label,
  color,
  clippedFrom,
  regionWidth,
  plotWidth,
  fontSize,
  isMobileViewport
}) => {
  const style = { fontFamily: REGION_LABEL_FONT_FAMILY, fontSize }
  const comfortableLabelWidth = getComfortableRegionLabelWidth(plotWidth, isMobileViewport)
  const { wordsByLines } = useText({
    children: label,
    width: comfortableLabelWidth,
    style
  })
  const estimatedWrappedWidth = Math.max(...wordsByLines.map(line => line.width || 0), 0)
  const labelLayout = getRegionLabelLayout(
    clippedFrom,
    regionWidth,
    plotWidth,
    comfortableLabelWidth,
    estimatedWrappedWidth
  )

  return (
    <Text
      x={labelLayout.x}
      y={getRegionLabelY(fontSize)}
      width={labelLayout.width}
      fill={color || APP_FONT_COLOR}
      fontSize={fontSize}
      style={style}
      lineHeight='1.1em'
      verticalAnchor='start'
      textAnchor='middle'
    >
      {label}
    </Text>
  )
}

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

/** Check if visualization type is line-like (Line, Area Chart, or Horizon Chart) */
const isLineLike = (type: string): boolean =>
  type === VIZ_TYPES.LINE || type === VIZ_TYPES.AREA || type === VIZ_TYPES.HORIZON

/** Check if visualization type is bar-like (Bar or Combo) */
const isBarLike = (type: string): boolean => type === VIZ_TYPES.BAR || type === VIZ_TYPES.COMBO

// TODO: should regions be removed on categorical axis?
const Regions: React.FC<RegionsProps> = ({ xScale, barWidth = 0, totalBarsInGroup = 1, yMax, xMax }) => {
  const { parseDate, config, vizViewport } = useContext<ChartContext>(ConfigContext)

  const { regions, visualizationType, orientation, xAxis } = config
  const isMobileViewport = isMobileFontViewport(vizViewport || 'lg')
  const regionLabelFontSize = isMobileViewport ? TICK_LABEL_FONT_SIZE_SMALL : TICK_LABEL_FONT_SIZE

  const getBarOffset = (): number => (barWidth * totalBarsInGroup) / 2

  // ============================================
  // HELPER FUNCTIONS FOR PREVIOUS DAYS
  // ============================================

  const calculatePreviousDaysFrom = (region: Region, axisType: string): number => {
    const previousDays = Number(region.from) || 0
    const domain = xScale.domain()

    // Determine the "to" reference date
    const toRefDate =
      region.toType === 'Last Date'
        ? new Date(domain[domain.length - 1] as string | number).getTime()
        : new Date(region.to)

    const toFormatted = formatDate(config.xAxis.dateParseFormat, toRefDate, config.locale)
    const toDate = new Date(toFormatted)
    const fromDate = new Date(toDate)
    fromDate.setDate(fromDate.getDate() - previousDays)

    let closestValue: unknown

    if (axisType === 'date') {
      const fromTime = new Date(formatDate(xAxis.dateParseFormat, fromDate, config.locale)).getTime()
      closestValue = findClosestDate(fromTime, domain as number[], d => d)
    } else if (axisType === 'categorical') {
      const fromTime = fromDate.getTime()
      closestValue = findClosestDate(fromTime, domain as string[], d => new Date(d).getTime())
    } else if (axisType === 'date-time') {
      closestValue = fromDate.getTime()
    }

    return xScale(closestValue)
  }

  // ============================================
  // LINE/AREA CHART LOGIC
  // ============================================

  const getLineFromValue_Categorical = (region: Region): number => {
    let from: number
    if (region.fromType === 'Previous Days') {
      from = calculatePreviousDaysFrom(region, 'categorical')
    } else {
      from = xScale(region.from)
    }
    // Add half bandwidth to center on the category
    let scalePadding = 0
    if (xScale.bandwidth) {
      scalePadding += xScale.bandwidth() / 2
    }
    return from + scalePadding
  }

  const getLineToValue_Categorical = (region: Region): number => {
    if (region.toType === 'Last Date') {
      return calculateLineLastDatePosition_Categorical()
    }
    let to = xScale(region.to)
    // Add half bandwidth to center on the category
    let scalePadding = 0
    if (xScale.bandwidth) {
      scalePadding += xScale.bandwidth() / 2
    }
    return to + scalePadding
  }

  const getLineFromValue_Date = (region: Region): number => {
    let from: number
    if (region.fromType === 'Previous Days') {
      from = calculatePreviousDaysFrom(region, 'date')
    } else {
      // For date scale (band), we need to find the value in the domain
      // Parse the region date to match the format in the domain
      const date = new Date(region.from)
      const parsedDate = parseDate(formatDate(config.xAxis.dateParseFormat, date, config.locale)).getTime()

      // For band scales, find the closest date in the domain
      const domain = xScale.domain() as number[]
      const closestDate = findClosestDate(parsedDate, domain, d => d)
      from = xScale(closestDate)
    }
    // Add half bandwidth to center on the date band
    let scalePadding = 0
    if (xScale.bandwidth) {
      scalePadding += xScale.bandwidth() / 2
    }
    return from + scalePadding
  }

  const getLineToValue_Date = (region: Region): number => {
    if (region.toType === 'Last Date') {
      return calculateLineLastDatePosition_Date()
    }
    // For date scale (band), we need to find the value in the domain
    // Parse the region date to match the format in the domain
    const parsedDate = parseDate(region.to).getTime()

    // For band scales, find the closest date in the domain
    const domain = xScale.domain() as number[]
    const closestDate = findClosestDate(parsedDate, domain, d => d)
    let to = xScale(closestDate)

    // Add half bandwidth to center on the date band
    let scalePadding = 0
    if (xScale.bandwidth) {
      scalePadding += xScale.bandwidth() / 2
    }
    return to + scalePadding
  }

  const getLineFromValue_DateTime = (region: Region): number => {
    if (region.fromType === 'Previous Days') {
      const from = calculatePreviousDaysFrom(region, 'date-time')
      return from
    }
    const date = new Date(region.from)
    const parsedDate = parseDate(formatDate(config.xAxis.dateParseFormat, date, config.locale)).getTime()
    let from = xScale(parsedDate)
    // For date-time, xScale returns the plot-local position (no bandwidth)
    return from
  }

  const getLineToValue_DateTime = (region: Region): number => {
    if (region.toType === 'Last Date') {
      return calculateLineLastDatePosition_DateTime()
    }
    let to = xScale(parseDate(region.to).getTime())
    return to
  }

  const calculateLineLastDatePosition_Categorical = (): number => {
    // Extend to the right edge of the chart
    return xMax || 0
  }

  const calculateLineLastDatePosition_Date = (): number => {
    // For date scale line charts with Last Date, extend to the right edge of the chart
    return xMax || 0
  }

  const calculateLineLastDatePosition_DateTime = (): number => {
    const domain = xScale.domain()
    const lastDate = domain[domain.length - 1]
    const lastDatePosition = xScale(lastDate)
    return Number(lastDatePosition)
  }

  // ============================================
  // BAR CHART LOGIC
  // ============================================

  const getBarFromValue_Categorical = (region: Region): number => {
    if (region.fromType === 'Previous Days') {
      return calculatePreviousDaysFrom(region, 'categorical')
    }
    return xScale(region.from)
  }

  const getBarToValue_Categorical = (region: Region): number => {
    if (region.toType === 'Last Date') {
      return calculateBarLastDatePosition_Categorical()
    }
    let to = xScale(region.to)
    return to + barWidth * totalBarsInGroup
  }

  const getBarFromValue_Date = (region: Region): number => {
    if (region.fromType === 'Previous Days') {
      return calculatePreviousDaysFrom(region, 'date')
    }
    // For date scale (band), we need to find the value in the domain
    const date = new Date(region.from)
    const parsedDate = parseDate(formatDate(config.xAxis.dateParseFormat, date, config.locale)).getTime()

    // For band scales, find the closest date in the domain
    const domain = xScale.domain() as number[]
    const closestDate = findClosestDate(parsedDate, domain, d => d)
    return xScale(closestDate)
  }

  const getBarToValue_Date = (region: Region): number => {
    if (region.toType === 'Last Date') {
      return calculateBarLastDatePosition_Date()
    }
    // For date scale (band), we need to find the value in the domain
    const parsedDate = parseDate(region.to).getTime()

    // For band scales, find the closest date in the domain
    const domain = xScale.domain() as number[]
    const closestDate = findClosestDate(parsedDate, domain, d => d)
    let to = xScale(closestDate)

    return to + barWidth * totalBarsInGroup
  }

  const getBarFromValue_DateTime = (region: Region): number => {
    let from: number
    if (region.fromType === 'Previous Days') {
      from = calculatePreviousDaysFrom(region, 'date-time')
    } else {
      const date = new Date(region.from)
      const parsedDate = parseDate(formatDate(config.xAxis.dateParseFormat, date, config.locale)).getTime()
      from = xScale(parsedDate)
    }
    return from - getBarOffset()
  }

  const getBarToValue_DateTime = (region: Region): number => {
    if (region.toType === 'Last Date') {
      return calculateBarLastDatePosition_DateTime()
    }
    let to = xScale(parseDate(region.to).getTime())
    return to - getBarOffset()
  }

  const calculateBarLastDatePosition_Categorical = (): number => {
    const domain = xScale.domain()
    const lastDate = domain[domain.length - 1]
    const lastDatePosition = xScale(lastDate)
    const bandwidth = xScale.bandwidth ? xScale.bandwidth() : 0
    // For categorical bars, extend to the end of the last bar
    // Don't add chartStart - xScale already returns positions in the chart coordinate space
    return xMax
  }

  const calculateBarLastDatePosition_Date = (): number => {
    const domain = xScale.domain()
    const lastDate = domain[domain.length - 1]
    const lastDatePosition = xScale(lastDate)
    const offset = barWidth * totalBarsInGroup
    // Don't add chartStart - xScale already returns positions in chart coordinate space
    return Number(lastDatePosition + offset)
  }

  const calculateBarLastDatePosition_DateTime = (): number => {
    const domain = xScale.domain()
    const lastDate = domain[domain.length - 1]
    const lastDatePosition = xScale(lastDate)
    // For date-time bars, don't add chartStart - xScale returns positions in chart coordinate space
    // Also don't subtract barOffset since we want to extend to the edge
    return Number(lastDatePosition)
  }

  const isRegionInVisibleDomain = (region: Region): boolean => {
    if (region.toType !== 'Last Date') return true
    if (region.fromType === 'Previous Days') return true
    if (xAxis.type !== 'date' && xAxis.type !== 'date-time') return true

    const domain = xScale.domain()
    if (!domain || domain.length === 0) return true

    const visEnd = Number(domain[domain.length - 1])
    const fromTime = parseDate(
      formatDate(config.xAxis.dateParseFormat, new Date(region.from), config.locale)
    )?.getTime()

    if (isNaN(visEnd) || fromTime === undefined || isNaN(fromTime)) return true
    return fromTime <= visEnd
  }

  // ============================================
  // MAIN ROUTING FUNCTIONS
  // ============================================

  const getFromValue = (region: Region): number => {
    const isLine = isLineLike(visualizationType)
    const isBar = isBarLike(visualizationType)

    // LINE/AREA CHARTS
    if (isLine) {
      if (xAxis.type === 'categorical') {
        return getLineFromValue_Categorical(region)
      } else if (xAxis.type === 'date') {
        return getLineFromValue_Date(region)
      } else if (xAxis.type === 'date-time') {
        return getLineFromValue_DateTime(region)
      }
    }

    // BAR CHARTS
    if (isBar) {
      if (xAxis.type === 'categorical') {
        return getBarFromValue_Categorical(region)
      } else if (xAxis.type === 'date') {
        return getBarFromValue_Date(region)
      } else if (xAxis.type === 'date-time') {
        return getBarFromValue_DateTime(region)
      }
    }

    return 0
  }

  const getToValue = (region: Region): number => {
    const isLine = isLineLike(visualizationType)
    const isBar = isBarLike(visualizationType)

    // LINE/AREA CHARTS
    if (isLine) {
      if (xAxis.type === 'categorical') {
        return getLineToValue_Categorical(region)
      } else if (xAxis.type === 'date') {
        return getLineToValue_Date(region)
      } else if (xAxis.type === 'date-time') {
        return getLineToValue_DateTime(region)
      }
    }

    // BAR CHARTS
    if (isBar) {
      if (xAxis.type === 'categorical') {
        return getBarToValue_Categorical(region)
      } else if (xAxis.type === 'date') {
        return getBarToValue_Date(region)
      } else if (xAxis.type === 'date-time') {
        return getBarToValue_DateTime(region)
      }
    }

    return 0
  }

  const getWidth = (to: number, from: number): number => Math.max(0, to - from)

  if (!regions || orientation !== 'vertical') return null

  const chartStart = 0
  const chartEnd = xMax !== undefined ? xMax : 1000

  return regions.map((region: Region) => {
    if (!isRegionInVisibleDomain(region)) return null

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
      <Group height={100} className='regions regions-group--line' key={region.label} pointerEvents='none'>
        <HighlightedArea x={clippedFrom} width={width} yMax={yMax} background={region.background} />
        <RegionLabel
          label={region.label}
          color={region.color}
          clippedFrom={clippedFrom}
          regionWidth={width}
          plotWidth={chartEnd}
          fontSize={regionLabelFontSize}
          isMobileViewport={isMobileViewport}
        />
      </Group>
    )
  })
}

export default Regions
