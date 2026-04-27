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

  describe('title entry', () => {
    it('uses static value when title.type is static', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Some Title',
        altText: { title: { type: 'static', value: 'Manually written chart title.' } }
      })
      expect(result.title).toBe('Manually written chart title.')
    })

    it('falls back to auto-generated when title.type is static but value is empty', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Bar',
        title: 'My Chart',
        altText: { title: { type: 'static', value: '' } }
      })
      expect(result.title).toBe('Bar chart with the title: My Chart')
    })

    it('uses metadata value when title.type is metadata and key matches', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Some Title',
        altText: { title: { type: 'metadata', metadataKey: 'altTitle' } },
        dataMetadata: { altTitle: 'Metadata-driven chart title' }
      })
      expect(result.title).toBe('Metadata-driven chart title')
    })

    it('falls back to auto-generated when metadata key is not found', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Bar',
        title: 'My Chart',
        altText: { title: { type: 'metadata', metadataKey: 'nonExistent' } },
        dataMetadata: { other: 'value' }
      })
      expect(result.title).toBe('Bar chart with the title: My Chart')
    })
  })

  describe('description entry', () => {
    it('returns description when description.type is static', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { description: { type: 'static', value: 'Cases rose steadily over 8 weeks.' } }
      })
      expect(result.title).toBe('Line chart with the title: Trends')
      expect(result.description).toBe('Cases rose steadily over 8 weeks.')
    })

    it('returns description from metadata', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { description: { type: 'metadata', metadataKey: 'altDescription' } },
        dataMetadata: { altDescription: 'Positivity increased from 4% to 12%.' }
      })
      expect(result.description).toBe('Positivity increased from 4% to 12%.')
    })

    it('returns undefined description when metadata key is missing', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: { description: { type: 'metadata', metadataKey: 'missing' } },
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
  })

  describe('combined title and description', () => {
    it('returns both title and description from different sources', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        altText: {
          title: { type: 'static', value: 'COVID Positivity Chart' },
          description: { type: 'metadata', metadataKey: 'altDescription' }
        },
        dataMetadata: { altDescription: 'Positivity doubled in 8 weeks.' }
      })
      expect(result.title).toBe('COVID Positivity Chart')
      expect(result.description).toBe('Positivity doubled in 8 weeks.')
    })
  })

  describe('fallback behavior', () => {
    it('uses auto-generated title when altText is undefined', () => {
      const result = handleChartAriaLabels({
        visualizationType: 'Line',
        title: 'Trends',
        dataMetadata: { altDescription: 'Some alt text' }
      })
      expect(result.title).toBe('Line chart with the title: Trends')
      expect(result.description).toBeUndefined()
    })

    it('uses auto-generated title when altText is empty object', () => {
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
