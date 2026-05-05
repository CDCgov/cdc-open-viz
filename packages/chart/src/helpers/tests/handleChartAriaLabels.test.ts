import { handleChartAriaLabels } from '../handleChartAriaLabels'

describe('handleChartAriaLabels', () => {
  it('returns auto-generated title from visualizationType and title', () => {
    const result = handleChartAriaLabels({
      visualizationType: 'Line',
      title: 'COVID-19 Cases'
    })
    expect(result).toBe('Line chart with the title: COVID-19 Cases')
  })

  it('returns visualizationType-only title when chart title is absent', () => {
    const result = handleChartAriaLabels({
      visualizationType: 'Bar'
    })
    expect(result).toBe('Bar chart')
  })

  it('returns fallback when visualizationType is missing', () => {
    const result = handleChartAriaLabels({})
    expect(result).toBe('Data visualization container')
  })

  describe('description', () => {
    it('concatenates static description after title', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'static', value: 'Cases rose steadily over 8 weeks.' }
      })
      expect(result).toBe('Line chart with the title: Trends. Cases rose steadily over 8 weeks.')
    })

    it('concatenates description from metadata after title', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'metadata', metadataKey: 'altDescription' },
        dataMetadata: { altDescription: 'Positivity increased from 4% to 12%.' }
      })
      expect(result).toBe('Line chart with the title: Trends. Positivity increased from 4% to 12%.')
    })

    it('returns title only when metadata key is missing', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'metadata', metadataKey: 'missing' },
        dataMetadata: { other: 'value' }
      })
      expect(result).toBe('Line chart with the title: Trends')
    })

    it('returns title only when not configured', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends'
      })
      expect(result).toBe('Line chart with the title: Trends')
    })

    it('returns title only when altText is empty object', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: {}
      })
      expect(result).toBe('Line chart with the title: Trends')
    })
  })
})
