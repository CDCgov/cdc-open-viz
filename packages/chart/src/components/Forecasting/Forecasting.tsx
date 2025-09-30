import React, { useContext, useMemo } from 'react'
import { replace } from 'lodash'
// cdc
import ConfigContext from '../../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChartV1, colorPalettesChartV2, sequentialPalettes } from '@cdc/core/data/colorPalettes'
import { updatePaletteNames } from '@cdc/core/helpers/updatePaletteNames'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { getBridgedData } from '../../helpers/getBridgedData'

// visx & d3
import { curveMonotoneX } from '@visx/curve'
import { Bar, Area, LinePath } from '@visx/shape'
import { Group } from '@visx/group'

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

    // Create a lookup map that handles multiple naming conventions
    const paletteMap = {}

    // Map palette names to multiple formats for backward compatibility:
    // - sequential-blue (hyphenated)
    // - sequential_blue (underscore)
    // - Sequential Blue (with spaces)
    Object.keys(processedPalettes).forEach(key => {
      const value = processedPalettes[key]
      // Original key
      paletteMap[key] = value
      // Lowercase with hyphens
      paletteMap[key.toLowerCase().replace(/ /g, '-')] = value
      // Lowercase with underscores
      paletteMap[key.toLowerCase().replace(/ /g, '_')] = value
      // Original key variations
      paletteMap[key.replace(/_/g, '-')] = value
      paletteMap[key.toLowerCase()] = value
    })

    // Special mappings for MPX variants (old naming convention) - only for v1
    // Note: Sequential Blue Two was aliased as "Sequential Blue 2 (MPX)" and Sequential Orange as "Sequential Orange (MPX)"
    if (paletteVersion === 1) {
      // Map "Sequential Blue Two" variations to MPX alias
      if (paletteMap['sequential-blue-two']) {
        paletteMap['sequential-blue-2-(mpx)'] = paletteMap['sequential-blue-two']
        paletteMap['sequential-blue-2-(MPX)'] = paletteMap['sequential-blue-two']
      }
      if (paletteMap['sequential-blue-tworeverse']) {
        paletteMap['sequential-blue-2-(mpx)reverse'] = paletteMap['sequential-blue-tworeverse']
        paletteMap['sequential-blue-2-(MPX)reverse'] = paletteMap['sequential-blue-tworeverse']
      }
      // Map "Sequential Orange" variations to MPX alias
      if (paletteMap['sequential-orange']) {
        paletteMap['sequential-orange-(mpx)'] = paletteMap['sequential-orange']
        paletteMap['sequential-orange-(MPX)'] = paletteMap['sequential-orange']
      }
      if (paletteMap['sequential-orangereverse']) {
        paletteMap['sequential-orange-(mpx)reverse'] = paletteMap['sequential-orangereverse']
        paletteMap['sequential-orange-(MPX)reverse'] = paletteMap['sequential-orangereverse']
      }
    }

    return paletteMap
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
                  key={`forecasting-areas--stage-${replace(stage.key, / /g, '—')}-${index}`}
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

                    if (ciGroup.high === '' || ciGroup.low === '') return
                    return (
                      <Group
                        key={`forecasting-areas--stage-${replace(
                          stage.key,
                          / /g,
                          '—'
                        )}--group-${stageIndex}-${ciGroupIndex}`}
                      >
                        {/* prettier-ignore */}
                        <Area
                          curve={curveMonotoneX}
                          data={bridgedData}
                          fill={getFill()}
                          opacity={transparentArea? 0.1 : 0.5 }
                          x={d => xScale(Date.parse(d[xAxis.dataKey]))}
                          y0={d => yScale(d[ciGroup.low])}
                          y1={d => yScale(d[ciGroup.high])}
                        />

                        {ciGroupIndex === 0 && (
                          <>
                            {/* prettier-ignore */}
                            <LinePath data={bridgedData} x={d => Number(xScale(Date.parse(d[xAxis.dataKey])))} y={d => Number(yScale(d[ciGroup.high]))} curve={curveMonotoneX} stroke={getStroke()} strokeWidth={1} strokeOpacity={1} />

                            {/* prettier-ignore */}
                            <LinePath data={bridgedData} x={d => Number(xScale(Date.parse(d[xAxis.dataKey])))} y={d => Number(yScale(d[ciGroup.low]))} curve={curveMonotoneX} stroke={getStroke()} strokeWidth={1} strokeOpacity={1} />
                          </>
                        )}
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
