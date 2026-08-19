import { describe, expect, it, vi } from 'vitest'
import { getColorScale } from '../getColorScale'
import { ChartConfig } from '../../types/ChartConfig'
import { colorPalettesChartV2 } from '@cdc/core/data/colorPalettes'
import {
  colorblindColorDistribution,
  divergentColorDistribution,
  qualitativeStandardColorDistribution,
  v2ColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'

const buildConfig = (overrides: Partial<ChartConfig> = {}): ChartConfig =>
  ({
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    general: {
      palette: {
        customColors: ['#111111', '#222222', '#333333'],
        colorAssignmentMode: 'by-value',
        colorAssignments: [
          { key: 'series_a', color: '#aa0000' },
          { key: 'series_c', color: '#00cc00' }
        ]
      }
    },
    legend: {},
    series: [
      { dataKey: 'series_a', name: 'Series A', type: 'Line' },
      { dataKey: 'series_b', name: 'Series B', type: 'Line' },
      { dataKey: 'series_c', name: 'Series C', type: 'Line' }
    ],
    runtime: {
      seriesKeys: ['series_a', 'series_b', 'series_c'],
      seriesLabels: {
        series_a: 'Series A',
        series_b: 'Series B',
        series_c: 'Series C'
      },
      seriesLabelsAll: ['Series A', 'Series B', 'Series C']
    },
    ...overrides
  } as ChartConfig)

describe('getColorScale series color assignments', () => {
  it('keeps assigned series colors stable when runtime series order changes', () => {
    const colorScale = getColorScale(
      buildConfig({
        runtime: {
          seriesKeys: ['series_c', 'series_a'],
          seriesLabels: {
            series_a: 'Series A',
            series_c: 'Series C'
          },
          seriesLabelsAll: ['Series C', 'Series A']
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#aa0000')
    expect(colorScale('Series C')).toBe('#00cc00')
  })

  it('keeps assigned colors when missing series later reappear', () => {
    const filteredScale = getColorScale(
      buildConfig({
        runtime: {
          seriesKeys: ['series_a'],
          seriesLabels: { series_a: 'Series A' },
          seriesLabelsAll: ['Series A']
        } as any
      })
    )
    const restoredScale = getColorScale(buildConfig())

    expect(filteredScale('Series A')).toBe('#aa0000')
    expect(restoredScale('Series C')).toBe('#00cc00')
  })

  it('uses ordered palette/custom fallback for unassigned series', () => {
    const colorScale = getColorScale(buildConfig())

    expect(colorScale('Series A')).toBe('#aa0000')
    expect(colorScale('Series B')).toBe('#222222')
    expect(colorScale('Series C')).toBe('#00cc00')
  })

  it('resolves assignments by dataKey when display labels differ', () => {
    const colorScale = getColorScale(
      buildConfig({
        series: [{ dataKey: 'raw_value', name: 'Display Value', type: 'Line' }] as any,
        runtime: {
          seriesKeys: ['raw_value'],
          seriesLabels: { raw_value: 'Display Value' },
          seriesLabelsAll: ['Display Value']
        } as any,
        general: {
          palette: {
            customColors: ['#111111'],
            colorAssignmentMode: 'by-value',
            colorAssignments: [{ key: 'raw_value', color: '#123456' }]
          }
        } as any
      })
    )

    expect(colorScale('Display Value')).toBe('#123456')
  })

  it('preserves ordered mode behavior when assignments are present', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            customColors: ['#111111', '#222222', '#333333'],
            colorAssignmentMode: 'ordered',
            colorAssignments: [{ key: 'series_a', color: '#aa0000' }]
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#111111')
    expect(colorScale('Series B')).toBe('#222222')
  })

  it('preserves scatter plot customColors through the shared scale', () => {
    const colorScale = getColorScale(
      buildConfig({
        visualizationType: 'Scatter Plot',
        general: {
          palette: {
            customColors: ['#101010', '#202020', '#303030']
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#101010')
    expect(colorScale('Series B')).toBe('#202020')
  })

  it('uses v2 customColors in authored order when customColorsOrdered is absent', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColors: [
              '#111111',
              '#222222',
              '#333333',
              '#444444',
              '#555555',
              '#666666',
              '#777777',
              '#888888',
              '#999999'
            ]
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#111111')
    expect(colorScale('Series B')).toBe('#222222')
    expect(colorScale('Series C')).toBe('#333333')
  })

  it('falls back to customColors when customColorsOrdered is empty', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            customColorsOrdered: [],
            customColors: ['#101010', '#202020', '#303030']
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#101010')
    expect(colorScale('Series B')).toBe('#202020')
    expect(colorScale('Series C')).toBe('#303030')
  })

  it('fills invalid customColorsOrdered entries with black', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColorsOrdered: ['', '#222222', 'whyte']
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#000000')
    expect(colorScale('Series B')).toBe('#222222')
    expect(colorScale('Series C')).toBe('#000000')
  })

  it('uses black when saved customColors are all invalid', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColors: ['', 'whyte']
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#000000')
    expect(colorScale('Series B')).toBe('#000000')
    expect(colorScale('Series C')).toBe('#000000')
  })

  it('uses black when the named palette cannot be resolved', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'unknown_palette',
            version: '2.0'
          }
        } as any
      })
    )

    expect(warn).toHaveBeenCalledWith('Palette "unknown_palette" not found, falling back to black')
    expect(colorScale('Series A')).toBe('#000000')
    expect(colorScale('Series B')).toBe('#000000')
    expect(colorScale('Series C')).toBe('#000000')

    warn.mockRestore()
  })

  it('falls back to the named palette when customColors is empty', () => {
    const colorScale = getColorScale(
      buildConfig({
        general: {
          palette: {
            name: 'qualitative_standard',
            version: '2.0',
            customColors: []
          }
        } as any
      })
    )

    expect(colorScale('Series A')).toBe('#0057B7')
    expect(colorScale('Series B')).toBe('#00B1CE')
    expect(colorScale('Series C')).toBe('#5A8E3F')
  })
})

const buildDistributionConfig = (
  numberOfSeries: number,
  paletteName = 'qualitative_standard',
  distributionVersion?: '1.0' | '2.0',
  overrides: Partial<ChartConfig> = {}
) => {
  const seriesKeys = Array.from({ length: numberOfSeries }, (_, index) => `series_${index + 1}`)
  const seriesLabelsAll = seriesKeys.map((_, index) => `Series ${index + 1}`)

  return buildConfig({
    general: {
      palette: {
        name: paletteName,
        version: '2.0',
        distributionVersion
      }
    } as any,
    series: seriesKeys.map((dataKey, index) => ({ dataKey, name: seriesLabelsAll[index], type: 'Line' })) as any,
    runtime: {
      seriesKeys,
      seriesLabels: Object.fromEntries(seriesKeys.map((key, index) => [key, seriesLabelsAll[index]])),
      seriesLabelsAll
    } as any,
    ...overrides
  })
}

const getScaleColors = (config: ChartConfig) => {
  const scale = getColorScale(config)
  return config.runtime.seriesLabelsAll.map(label => scale(label))
}

describe('getColorScale distribution profiles', () => {
  it.each(Object.keys(qualitativeStandardColorDistribution).map(Number))(
    'uses released colorblind colors for %i series when the profile is missing or 1.0',
    count => {
      const expected = colorblindColorDistribution[count].map(index => colorPalettesChartV2.qualitative_standard[index])

      expect(getScaleColors(buildDistributionConfig(count))).toEqual(expected)
      expect(getScaleColors(buildDistributionConfig(count, 'qualitative_standard', '1.0'))).toEqual(expected)
    }
  )

  it.each(Object.keys(qualitativeStandardColorDistribution).map(Number))(
    'uses V2 colorblind colors for %i series with profile 2.0',
    count => {
      const expected = qualitativeStandardColorDistribution[count].map(
        index => colorPalettesChartV2.qualitative_standard[index]
      )

      expect(getScaleColors(buildDistributionConfig(count, 'qualitative_standard', '2.0'))).toEqual(expected)
    }
  )

  it('uses the V2 forward colors in reverse order for a reversed palette', () => {
    const count = 5
    const expected = qualitativeStandardColorDistribution[count]
      .map(index => colorPalettesChartV2.qualitative_standard[index])
      .reverse()

    expect(getScaleColors(buildDistributionConfig(count, 'qualitative_standardreverse', '2.0'))).toEqual(expected)
  })

  it.each([
    ['sequential_blue', v2ColorDistribution],
    ['divergent_blue_orange', divergentColorDistribution]
  ])('does not change %s colors between distribution profiles', (paletteName, distribution) => {
    const count = 5
    const expected = distribution[count].map(index => colorPalettesChartV2[paletteName][index])

    expect(getScaleColors(buildDistributionConfig(count, paletteName, '1.0'))).toEqual(expected)
    expect(getScaleColors(buildDistributionConfig(count, paletteName, '2.0'))).toEqual(expected)
  })

  it('bypasses distribution profiles for non-empty custom colors', () => {
    const customColors = Array.from({ length: 9 }, (_, index) => `#00000${index}`)
    const config = buildDistributionConfig(5, 'qualitative_standard', '2.0', {
      general: {
        palette: {
          name: 'qualitative_standard',
          version: '2.0',
          distributionVersion: '2.0',
          customColors
        }
      } as any
    })

    expect(getScaleColors(config)).toEqual(customColors.slice(0, 5))
  })

  it('treats empty custom color arrays as inactive', () => {
    const config = buildDistributionConfig(3, 'qualitative_standard', '2.0', {
      general: {
        palette: {
          name: 'qualitative_standard',
          version: '2.0',
          distributionVersion: '2.0',
          customColors: [],
          customColorsOrdered: []
        }
      } as any
    })
    const expected = qualitativeStandardColorDistribution[3].map(
      index => colorPalettesChartV2.qualitative_standard[index]
    )

    expect(getScaleColors(config)).toEqual(expected)
  })

  it('retains slice and repeat behavior outside the supported item range', () => {
    const expected = [...colorPalettesChartV2.qualitative_standard, colorPalettesChartV2.qualitative_standard[0]]

    expect(getScaleColors(buildDistributionConfig(10, 'qualitative_standard', '2.0'))).toEqual(expected)
  })

  it.each([
    ['Horizon Chart', {}],
    ['Bar', { colorCode: 'category' }]
  ])('does not apply the V2 distribution to %s', (visualizationType, legend) => {
    const config = buildDistributionConfig(3, 'qualitative_standard', '2.0', {
      visualizationType: visualizationType as ChartConfig['visualizationType'],
      legend: legend as any
    })
    const expected = colorblindColorDistribution[3].map(index => colorPalettesChartV2.qualitative_standard[index])

    expect(getScaleColors(config)).toEqual(expected)
  })
})
