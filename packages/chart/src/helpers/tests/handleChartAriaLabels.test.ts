import { handleChartAriaLabels } from '../handleChartAriaLabels'

describe('handleChartAriaLabels', () => {
  it('returns auto-generated label from visualizationType and title', () => {
    const result = handleChartAriaLabels({
      visualizationType: 'Line',
      title: 'COVID-19 Cases'
    })
    expect(result).toBe('Line chart with the title: COVID-19 Cases')
  })

  it('returns visualizationType-only label when title is absent', () => {
    const result = handleChartAriaLabels({
      visualizationType: 'Bar'
    })
    expect(result).toBe('Bar chart')
  })

  it('returns fallback when visualizationType is missing', () => {
    const result = handleChartAriaLabels({})
    expect(result).toBe('Data visualization container')
  })

  describe('static alt text', () => {
    it('uses static value when type is static', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Some Title',
        altText: { type: 'static', value: 'Manually written description of the chart.' }
      })
      expect(result).toBe('Manually written description of the chart.')
    })

    it('falls back to auto-generated label when type is static but value is empty', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Bar',
        title: 'My Chart',
        altText: { type: 'static', value: '' }
      })
      expect(result).toBe('Bar chart with the title: My Chart')
    })
  })

  describe('metadata-driven alt text', () => {
    it('uses metadata value when type is metadata and key matches', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Some Title',
        altText: { type: 'metadata', metadataKey: 'altDescription' },
        dataMetadata: {
          altDescription: 'Line chart showing recent COVID-19 test positivity. Positivity has increased steadily.',
          lastUpdated: '2026-04-01'
        }
      })
      expect(result).toBe('Line chart showing recent COVID-19 test positivity. Positivity has increased steadily.')
    })

    it('falls back to auto-generated label when metadataKey is not found in dataMetadata', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Bar',
        title: 'My Chart',
        altText: { type: 'metadata', metadataKey: 'nonExistentKey' },
        dataMetadata: { lastUpdated: '2026-04-01' }
      })
      expect(result).toBe('Bar chart with the title: My Chart')
    })

    it('falls back to auto-generated label when dataMetadata is undefined', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Pie',
        title: 'Distribution',
        altText: { type: 'metadata', metadataKey: 'altDescription' }
      })
      expect(result).toBe('Pie chart with the title: Distribution')
    })

    it('falls back to auto-generated label when metadataKey is empty string', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'metadata', metadataKey: '' },
        dataMetadata: { altDescription: 'Some alt text' }
      })
      expect(result).toBe('Line chart with the title: Trends')
    })
  })

  describe('fallback behavior', () => {
    it('uses auto-generated label when altText is undefined', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        dataMetadata: { altDescription: 'Some alt text' }
      })
      expect(result).toBe('Line chart with the title: Trends')
    })

    it('uses auto-generated label when altText.type is undefined', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: {},
        dataMetadata: { altDescription: 'Some alt text' }
      })
      expect(result).toBe('Line chart with the title: Trends')
    })
  })
})
