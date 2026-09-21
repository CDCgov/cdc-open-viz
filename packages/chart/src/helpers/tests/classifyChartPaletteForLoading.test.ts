import { describe, expect, it } from 'vitest'
import { classifyChartPaletteForLoading } from '../classifyChartPaletteForLoading'

describe('classifyChartPaletteForLoading', () => {
  it('recognizes a nonempty modern palette name', () => {
    expect(classifyChartPaletteForLoading({ general: { palette: { name: 'qualitative_bold' } } } as any)).toBe('modern')
  })

  it('treats missing and empty palette selections as displaying a frozen fallback', () => {
    expect(classifyChartPaletteForLoading({ type: 'chart', palette: '  ', color: '' } as any)).toBe('frozen-fallback')
  })

  it.each([
    [{ type: 'chart', visualizationType: 'Bar', palette: 'qualitative-bold' }, 'frozen-fallback'],
    [{ type: 'chart', visualizationType: 'Line', color: 'sequential-orange' }, 'frozen-fallback'],
    [{ type: 'chart', visualizationType: 'Bar', color: 'sequential-orange' }, 'normally-migrated-legacy'],
    [{ type: 'chart', visualizationType: 'Line', color: 'sequential-orange', general: {} }, 'normally-migrated-legacy']
  ])('classifies legacy loading precedence for %#', (config, expected) => {
    expect(classifyChartPaletteForLoading(config as any)).toBe(expected)
  })

  it('does not classify a custom-color config as displaying a loader default', () => {
    expect(
      classifyChartPaletteForLoading({
        type: 'chart',
        visualizationType: 'Line',
        palette: 'qualitative-bold',
        customColors: ['#123456']
      } as any)
    ).toBe('normally-migrated-legacy')
  })
})
