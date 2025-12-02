import React, { useContext, useMemo } from 'react'
import { replace } from 'lodash'
// cdc
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChartV2, sequentialPalettes } from '@cdc/core/data/colorPalettes'
import { updatePaletteNames } from '@cdc/core/helpers/updatePaletteNames'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { getBridgedData } from '../../helpers/getBridgedData'
import { buildForecastPaletteMappings } from '../../helpers/buildForecastPaletteMappings'

// visx & d3
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath } from '@visx/shape'
import { Group } from '@visx/group'

// Helper function to check if a value is numeric/calculable
const isCalculable = (value: any): boolean => {
  if (value === null || value === undefined || value === '' || value === 'NA') return false
  const num = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : Number(value)
  return !isNaN(num) && isFinite(num)
}

// Helper function to filter and sort forecast data, splitting into segments at gaps
const prepareForecastData = (
  data: Record<string, any>[],
  xAxisKey: string,
  highKey: string,
  lowKey: string
): Record<string, any>[][] => {
  if (!data || data.length === 0) return []

  // Filter out invalid data points (where confidence intervals are not calculable)
  const validData = data.filter(d => {
    const high = d[highKey]
    const low = d[lowKey]
    return isCalculable(high) && isCalculable(low) && d[xAxisKey]
  })

  if (validData.length === 0) return []

  // Sort by date
  const sortedData = [...validData].sort((a, b) => {
    const dateA = Date.parse(a[xAxisKey])
    const dateB = Date.parse(b[xAxisKey])
    if (isNaN(dateA) || isNaN(dateB)) return 0
    return dateA - dateB
  })

  // Split into segments when there are gaps
  // Calculate intervals between consecutive points to detect gaps
  const intervals: number[] = []
  for (let i = 1; i < sortedData.length; i++) {
    const currentDate = Date.parse(sortedData[i][xAxisKey])
    const prevDate = Date.parse(sortedData[i - 1][xAxisKey])
    if (!isNaN(currentDate) && !isNaN(prevDate)) {
      intervals.push(currentDate - prevDate)
    }
  }

  // Calculate median interval (more robust than average for detecting gaps)
  const medianInterval =
    intervals.length > 0
      ? [...intervals].sort((a, b) => a - b)[Math.floor(intervals.length / 2)]
      : 7 * 24 * 60 * 60 * 1000 // Default to 7 days if no intervals

  // Threshold: gap is more than 2x the median interval, or more than 30 days
  const gapThreshold = Math.max(medianInterval * 2, 30 * 24 * 60 * 60 * 1000)

  const segments: Record<string, any>[][] = []
  let currentSegment: Record<string, any>[] = []

  for (let i = 0; i < sortedData.length; i++) {
    const current = sortedData[i]
    const prev = sortedData[i - 1]

    if (i === 0) {
      // First data point starts a new segment
      currentSegment = [current]
    } else {
      const currentDate = Date.parse(current[xAxisKey])
      const prevDate = Date.parse(prev[xAxisKey])

      if (isNaN(currentDate) || isNaN(prevDate)) {
        // If dates are invalid, continue current segment
        currentSegment.push(current)
      } else {
        const interval = currentDate - prevDate
        const hasGap = interval > gapThreshold

        if (hasGap) {
          // Save current segment and start a new one
          if (currentSegment.length > 0) {
            segments.push(currentSegment)
          }
          currentSegment = [current]
        } else {
          // Continue current segment
          currentSegment.push(current)
        }
      }
    }
  }

  // Add the last segment
  if (currentSegment.length > 0) {
    segments.push(currentSegment)
  }

  return segments.length > 0 ? segments : [sortedData]
}

const Forecasting = ({ xScale, yScale, height, width, handleTooltipMouseOver, handleTooltipMouseOff }) => {
  const { transformedData: data, rawData, config, seriesHighlight, parseDate } = useContext(ConfigContext)
  const { xAxis, yAxis, legend, runtime } = config
  const DEBUG = false

  // Memoize processed palettes - use version-specific palettes
  const forecastingPalettes = useMemo(() => {
    // Determine palette version from config
    // Forecasting charts use sequentialPalettes for v1, sequential-only palettes for v2
    const paletteVersion = getColorPaletteVersion(config)

    let forecastPalettes
    if (paletteVersion === 1) {
      // V1: Use original sequential palettes
      forecastPalettes = sequentialPalettes
    } else {
      // V2: Only use sequential palettes (filter out divergent and qualitative)
      const allV2Palettes = colorPalettesChartV2
      forecastPalettes = {}
      Object.keys(allV2Palettes).forEach(key => {
        if (key.startsWith('sequential')) {
          forecastPalettes[key] = allV2Palettes[key]
        }
      })
    }

    const processedPalettes = updatePaletteNames(forecastPalettes)
    return buildForecastPaletteMappings(processedPalettes, paletteVersion)
  }, [config])

  return (
    data && (
      <ErrorBoundary component='ForecastingChart'>
        <Group className='forecasting-items' key='forecasting-items-wrapper' left={Number(yAxis.size)}>
          {runtime.forecastingSeriesKeys?.map((group, index) => {
            if (!group || !group.stages) return false
            return group.stages.map((stage, stageIndex) => {
              const { behavior } = legend
              let transparentArea =
                behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(stage.key) === -1
              let displayArea =
                behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(stage.key) !== -1
              const bridgedData = getBridgedData(stage.key, group.stageColumn, rawData)

              return (
                <Group
                  className={`forecasting-areas-combo-${index}`}
                  key={`forecasting-areas--stage-${replace(stage.key, / /g, '—')}-${index}`}
                >
                  {group.confidenceIntervals?.map((ciGroup, ciGroupIndex) => {
                    const palette = forecastingPalettes[stage.color] || false
                    const isReversed = stage.color?.toLowerCase().includes('reverse')

                    const getFill = () => {
                      if (displayArea) return palette?.[2] || 'transparent'
                      return 'transparent'
                    }

                    const getStroke = () => {
                      if (!displayArea) return 'transparent'
                      // Use darker colors: index 1 for reversed (dark at start), index 4 for non-reversed (dark at end)
                      return isReversed ? palette?.[1] || 'transparent' : palette?.[4] || 'transparent'
                    }

                    if (ciGroup.high === '' || ciGroup.low === '') return null

                    // Prepare data: filter invalid values, sort by date, and split into segments at gaps
                    const dataSegments = prepareForecastData(bridgedData, xAxis.dataKey, ciGroup.high, ciGroup.low)

                    return (
                      <Group
                        key={`forecasting-areas--stage-${replace(
                          stage.key,
                          / /g,
                          '—'
                        )}--group-${stageIndex}-${ciGroupIndex}`}
                      >
                        {dataSegments.map((segment, segmentIndex) => (
                          <Group key={`segment-${segmentIndex}`}>
                            {/* prettier-ignore */}
                            <Area
                              curve={curveMonotoneX}
                              data={segment}
                              fill={getFill()}
                              opacity={transparentArea ? 0.1 : 0.5}
                              x={d => xScale(Date.parse(d[xAxis.dataKey]))}
                              y0={d => yScale(d[ciGroup.low])}
                              y1={d => yScale(d[ciGroup.high])}
                            />

                            {ciGroupIndex === 0 && (
                              <>
                                <LinePath
                                  data={segment}
                                  x={d => Number(xScale(Date.parse(d[xAxis.dataKey])))}
                                  y={d => Number(yScale(d[ciGroup.high]))}
                                  curve={curveMonotoneX}
                                  stroke={getStroke()}
                                  strokeWidth={1}
                                  strokeOpacity={1}
                                />

                                <LinePath
                                  data={segment}
                                  x={d => Number(xScale(Date.parse(d[xAxis.dataKey])))}
                                  y={d => Number(yScale(d[ciGroup.low]))}
                                  curve={curveMonotoneX}
                                  stroke={getStroke()}
                                  strokeWidth={1}
                                  strokeOpacity={1}
                                />
                              </>
                            )}
                          </Group>
                        ))}
                      </Group>
                    )
                  })}
                </Group>
              )
            })
          })}
          <Group key='tooltip-hover-section'>
            <Bar
              key={'bars'}
              width={Number(width)}
              height={Number(height)}
              fill={DEBUG ? 'red' : 'transparent'}
              fillOpacity={0.05}
              onMouseMove={e => handleTooltipMouseOver(e, data)}
              onMouseOut={handleTooltipMouseOff}
            />
          </Group>
        </Group>
      </ErrorBoundary>
    )
  )
}

export default Forecasting
