import { useContext, useState, useCallback, useEffect } from 'react'
import ConfigContext from '../../ConfigContext'
import { Group } from '@visx/group'
import { scaleSequential } from 'd3-scale'
import { interpolateRgbBasis } from 'd3-interpolate'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { hasTrackedHover, markHoverTracked } from '../../utils/analyticsTracking'

type WarmingStripesProps = {
  xScale: any
  yScale: any
  xMax: number
  yMax: number
  synchronizedXValue?: any
  showTooltip: (args: any) => void
  handleTooltipMouseOff: () => void
}

const WarmingStripes = ({
  xMax,
  yMax,
  synchronizedXValue,
  showTooltip,
  handleTooltipMouseOff
}: WarmingStripesProps) => {
  const {
    transformedData: data,
    config,
    formatNumber,
    interactionLabel,
    currentViewport,
    handleSmallMultipleHover
  } = useContext(ConfigContext)

  const [currentHover, setCurrentHover] = useState<number | null>(null)

  // Get the data key for the temperature/anomaly values
  // Use the first series key as the value column
  const valueKey = config.runtime.seriesKeys?.[0]
  const xAxisDataKey = config.runtime.originalXAxis?.dataKey || config.xAxis?.dataKey

  // Determine max stripes based on viewport
  const isMobile = ['xxs', 'xs', 'sm', 'md'].includes(currentViewport)
  const maxStripes = isMobile ? 60 : 200

  // Sample data if we have more than the max allowed stripes
  let displayData = data || []
  if (displayData.length > maxStripes) {
    const step = displayData.length / maxStripes
    displayData = []
    for (let i = 0; i < maxStripes; i++) {
      const index = Math.floor(i * step)
      displayData.push(data[index])
    }
  }

  // Calculate the min and max values for the color scale
  const values = displayData.map(d => Number(d[valueKey])).filter(v => !isNaN(v))
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)

  // Get the color palette from config
  const colorPalettes = filterChartColorPalettes(config)
  const configPalette = config.general?.palette?.name
  const migratedPaletteName = configPalette ? configPalette : getFallbackColorPalette(config)

  // Check if the palette name ends with 'reverse' and get the base palette
  const isReversedPalette = migratedPaletteName?.endsWith('reverse')
  const basePaletteName = isReversedPalette ? migratedPaletteName.slice(0, -7) : migratedPaletteName

  let palette =
    colorPalettes[migratePaletteWithMap(basePaletteName, paletteMigrationMap, false)] ||
    colorPalettes[basePaletteName] ||
    colorPalettes[configPalette]

  // Fallback to a default diverging palette if none found
  if (!palette || palette.length < 2) {
    console.warn(`Palette "${configPalette}" not found or invalid, falling back to default`)
    // Use a default blue to red palette
    palette = [
      '#053061',
      '#2166ac',
      '#4393c3',
      '#92c5de',
      '#d1e5f0',
      '#f7f7f7',
      '#fddbc7',
      '#f4a582',
      '#d6604d',
      '#b2182b',
      '#67001f'
    ]
  }

  // Create a sequential color scale using the palette colors
  // Apply reverse if configured (either via isReversed flag or 'reverse' suffix in name)
  const shouldReverse = config.general?.palette?.isReversed || isReversedPalette
  const finalPalette = shouldReverse ? [...palette].reverse() : palette
  const colorScale = scaleSequential(interpolateRgbBasis(finalPalette)).domain([minValue, maxValue])

  // Calculate stripe width based on available space and display data
  const stripeWidth = xMax / displayData.length

  // Build tooltip data in COVE format and trigger showTooltip
  const showStripeTooltip = useCallback(
    (item: any, index: number, mouseY?: number) => {
      const value = Number(item[valueKey])
      if (isNaN(value)) return

      const formattedValue = formatNumber(value, 'left')

      // Pass raw x-axis value — TooltipListItem handles date formatting
      const tooltipItems = [
        [xAxisDataKey, item[xAxisDataKey]],
        [valueKey, formattedValue, 'left']
      ]

      const dataXPosition = index * stripeWidth + stripeWidth / 2 + Number(config.yAxis.size)
      const dataYPosition = mouseY ?? yMax / 2

      showTooltip({
        tooltipLeft: dataXPosition + 10,
        tooltipTop: dataYPosition,
        tooltipData: {
          data: tooltipItems,
          dataXPosition: dataXPosition + 10,
          dataYPosition
        }
      })
    },
    [valueKey, xAxisDataKey, stripeWidth, config.yAxis.size, yMax, formatNumber, showTooltip]
  )

  // Handle incoming synchronized tooltip from sibling small multiple tiles
  useEffect(() => {
    if (synchronizedXValue === null || synchronizedXValue === undefined) {
      setCurrentHover(null)
      handleTooltipMouseOff()
      return
    }

    const matchIndex = displayData.findIndex(item => String(item[xAxisDataKey]) === String(synchronizedXValue))

    if (matchIndex >= 0) {
      setCurrentHover(matchIndex)
      showStripeTooltip(displayData[matchIndex], matchIndex)
    }
  }, [synchronizedXValue])

  if (!valueKey || !xAxisDataKey || !data || data.length === 0) {
    return null
  }

  return (
    <Group className='warming-stripes' left={config.yAxis.size}>
      {displayData.map((item, index) => {
        const value = Number(item[valueKey])
        if (isNaN(value)) return null

        const xPosition = index * stripeWidth
        const fillColor = colorScale(value) as unknown as string
        const isHovered = currentHover === index
        const isMuted = currentHover !== null && !isHovered

        return (
          <rect
            key={`stripe-${index}`}
            x={xPosition}
            y={0}
            width={stripeWidth}
            height={yMax}
            fill={fillColor}
            fillOpacity={isMuted ? 0.5 : 1}
            stroke='none'
            tabIndex={-1}
            style={{ cursor: 'pointer', transition: 'fill-opacity 0.2s ease' }}
            onMouseEnter={e => {
              if (currentHover !== index) {
                const vizId = String(config.runtime.uniqueId)
                if (!hasTrackedHover(vizId)) {
                  publishAnalyticsEvent({
                    vizType: config?.type,
                    vizSubType: getVizSubType(config),
                    eventType: 'chart_hover',
                    eventAction: 'hover',
                    eventLabel: interactionLabel || 'unknown',
                    vizTitle: getVizTitle(config),
                    series: valueKey
                  })
                  markHoverTracked(vizId)
                }
                setCurrentHover(index)
              }

              // Show COVE tooltip using mouse Y position
              const svgEl = (e.currentTarget as SVGRectElement).ownerSVGElement
              const svgRect = svgEl?.getBoundingClientRect()
              const mouseY = svgRect ? e.clientY - svgRect.top : yMax / 2
              showStripeTooltip(item, index, mouseY)

              if (handleSmallMultipleHover) {
                handleSmallMultipleHover(item[xAxisDataKey], yMax / 2)
              }
            }}
            onMouseMove={e => {
              // Update tooltip Y position as mouse moves within the stripe
              const svgEl = (e.currentTarget as SVGRectElement).ownerSVGElement
              const svgRect = svgEl?.getBoundingClientRect()
              const mouseY = svgRect ? e.clientY - svgRect.top : yMax / 2
              showStripeTooltip(item, index, mouseY)
            }}
            onMouseLeave={() => {
              setCurrentHover(null)
              handleTooltipMouseOff()
              if (handleSmallMultipleHover) {
                handleSmallMultipleHover(null, null)
              }
            }}
          />
        )
      })}
    </Group>
  )
}

export default WarmingStripes
