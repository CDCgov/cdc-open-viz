import { describe, expect, it } from 'vitest'
import { classifyChartPaletteForLoading } from '../classifyChartPaletteForLoading'

describe('classifyChartPaletteForLoading', () => {
  it('recognizes a nonempty modern palette name', () => {
    expect(classifyChartPaletteForLoading({ general: { palette: { name: 'qualitative_bold' } } } as any)).toBe('modern')
  })

  it('treats missing and empty palette selections as palette-less', () => {
    expect(classifyChartPaletteForLoading({ type: 'chart', palette: '  ', color: '' } as any)).toBe('palette-less')
  })

  it.each([
    [{ type: 'chart', visualizationType: 'Bar', palette: 'qualitative-bold' }, 'default-overridden-legacy'],
    [{ type: 'chart', visualizationType: 'Line', color: 'sequential-orange' }, 'default-overridden-legacy'],
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
