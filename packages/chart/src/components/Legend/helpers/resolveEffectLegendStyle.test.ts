import { describe, expect, it } from 'vitest'
import { resolveEffectLegendStyle } from './resolveEffectLegendStyle'

const colorScale = (value: string) => ({ 2024: '#722161', 2025: '#5A8E3F', 2026: '#00B1CE' }[value])
const effect = { type: 'effect', column: 'current_week', value: 'yes', seriesKeys: ['2026'] } as any

describe('resolveEffectLegendStyle', () => {
  it('inherits the color and weight for one matching series', () => {
    expect(
      resolveEffectLegendStyle({
        effect,
        data: [{ current_week: 'yes', 2026: 4 }],
        series: [{ dataKey: '2026', weight: 3 }],
        seriesLabels: { 2026: '2026' },
        colorScale
      })
    ).toEqual({ color: '#00B1CE', weight: 3, matchedSeries: ['2026'] })
  })

  it('uses black and the mean weight for multiple matching series', () => {
    expect(
      resolveEffectLegendStyle({
        effect: { ...effect, seriesKeys: ['2024', '2025'] },
        data: [{ current_week: 'yes', 2024: 4, 2025: 5 }],
        series: [
          { dataKey: '2024', weight: 1 },
          { dataKey: '2025', weight: 3 }
        ],
        colorScale
      })
    ).toEqual({ color: '#000', weight: 2, matchedSeries: ['2024', '2025'] })
  })

  it('uses the default weight when a matching series has no valid weight', () => {
    expect(
      resolveEffectLegendStyle({
        effect,
        data: [{ current_week: 'yes', 2026: 4 }],
        series: [{ dataKey: '2026' }],
        colorScale
      }).weight
    ).toBe(2)
  })

  it('returns a safe fallback when no current row matches', () => {
    expect(
      resolveEffectLegendStyle({
        effect,
        data: [{ current_week: 'no', 2026: 4 }],
        series: [{ dataKey: '2026', weight: 3 }],
        colorScale
      })
    ).toEqual({ color: '#000', weight: 2, matchedSeries: [] })
  })

  it('uses the original value column for dynamic categories', () => {
    expect(
      resolveEffectLegendStyle({
        effect: { ...effect, seriesKeys: ['Alpha'] },
        data: [{ current_week: 'yes', Category: 'Alpha', Value: 4 }],
        series: [{ dataKey: 'Alpha', originalDataKey: 'Value', dynamicCategory: 'Category', weight: 3 }],
        colorScale: value => (value === 'Alpha' ? '#00B1CE' : '#000')
      })
    ).toEqual({ color: '#00B1CE', weight: 3, matchedSeries: ['Alpha'] })
  })
})
