import { describe, expect, it } from 'vitest'
import { applyChartTypeContract } from '../applyChartTypeContract'

const chart = (visualizationType: string) => ({
  type: 'chart',
  visualizationType,
  orientation: 'vertical',
  series: [{ dataKey: 'value' }],
  xAxis: { type: 'categorical', dataKey: 'date' },
  yAxis: {},
  legend: {},
  general: { paletteColorCount: 2 },
  table: {}
})

describe('applyChartTypeContract', () => {
  it.each(['Area Chart', 'Horizon Chart', 'Box Plot', 'Bump Chart', 'HeatMap', 'Forecasting'])(
    'does not mutate the input for %s transitions',
    visualizationType => {
      const input = chart(visualizationType)
      const before = structuredClone(input)

      const result = applyChartTypeContract(input as any)

      expect(input).toEqual(before)
      expect(result).not.toBe(input)
      expect(result.xAxis).not.toBe(input.xAxis)
      expect(result.series).not.toBe(input.series)
    }
  )

  it('authors the stacked Area Chart subtype', () => {
    const result = applyChartTypeContract(chart('Area Chart') as any)

    expect(result.visualizationSubType).toBe('stacked')
  })
})
