import { handleChartAriaLabels } from '../handleChartAriaLabels'

describe('handleChartAriaLabels', () => {
  it('returns auto-generated title from visualizationType and title', () => {
    const result = handleChartAriaLabels({
      visualizationType: 'Line',
      title: 'COVID-19 Cases'
    })
    expect(result).toEqual({ title: 'Line chart with the title: COVID-19 Cases' })
  })

  it('returns visualizationType-only title when chart title is absent', () => {
    const result = handleChartAriaLabels({
      visualizationType: 'Bar'
    })
    expect(result).toEqual({ title: 'Bar chart' })
  })

  it('returns fallback when visualizationType is missing', () => {
    const result = handleChartAriaLabels({})
    expect(result).toEqual({ title: 'Data visualization container' })
  })

  describe('description', () => {
    it('returns static description', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'static', value: 'Cases rose steadily over 8 weeks.' }
      })
      expect(result.title).toBe('Line chart with the title: Trends')
      expect(result.description).toBe('Cases rose steadily over 8 weeks.')
    })

    it('returns description from metadata', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'metadata', metadataKey: 'altDescription' },
        dataMetadata: { altDescription: 'Positivity increased from 4% to 12%.' }
      })
      expect(result.description).toBe('Positivity increased from 4% to 12%.')
    })

    it('returns undefined description when metadata key is missing', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { type: 'metadata', metadataKey: 'missing' },
        dataMetadata: { other: 'value' }
      })
      expect(result.description).toBeUndefined()
    })

    it('returns undefined description when not configured', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends'
      })
      expect(result.description).toBeUndefined()
    })

    it('returns undefined description when altText is empty object', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: {}
      })
      expect(result.title).toBe('Line chart with the title: Trends')
      expect(result.description).toBeUndefined()
    })
  })
})
