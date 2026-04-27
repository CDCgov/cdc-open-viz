import { handleMapAriaLabels } from '../handleMapAriaLabels'

const baseState = {
  general: {
    geoType: 'us',
    title: 'COVID-19 Cases by State',
    statesPicked: []
  }
}

describe('handleMapAriaLabels', () => {
  it('returns auto-generated title for US map', () => {
    const result = handleMapAriaLabels(baseState)
    expect(result).toEqual({ title: 'United States map with the title: COVID-19 Cases by State' })
  })

  it('returns auto-generated title for world map', () => {
    const result = handleMapAriaLabels({
      general: { geoType: 'world', title: 'Global Data', statesPicked: [] }
    })
    expect(result).toEqual({ title: 'World map with the title: Global Data' })
  })

  it('returns fallback when geoType is missing', () => {
    const result = handleMapAriaLabels({ general: {} })
    expect(result).toEqual({ title: 'Data visualization container' })
  })

  describe('title entry', () => {
    it('uses static value when title.type is static', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { title: { type: 'static', value: 'Choropleth map showing case rates.' } }
      })
      expect(result.title).toBe('Choropleth map showing case rates.')
    })

    it('falls back to auto-generated when title.type is static but value is empty', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { title: { type: 'static', value: '' } }
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
    })

    it('uses metadata value when title.type is metadata and key matches', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { title: { type: 'metadata', metadataKey: 'altTitle' } },
        dataMetadata: { altTitle: 'COVID Case Rate Map' }
      })
      expect(result.title).toBe('COVID Case Rate Map')
    })

    it('falls back when metadataKey is not found', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { title: { type: 'metadata', metadataKey: 'missing' } },
        dataMetadata: { other: 'value' }
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
    })
  })

  describe('description entry', () => {
    it('returns description when description.type is static', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { description: { type: 'static', value: 'Rates highest in the Southeast.' } }
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
      expect(result.description).toBe('Rates highest in the Southeast.')
    })

    it('returns description from metadata', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { description: { type: 'metadata', metadataKey: 'altDescription' } },
        dataMetadata: { altDescription: 'Map shows elevated rates in southern states.' }
      })
      expect(result.description).toBe('Map shows elevated rates in southern states.')
    })

    it('returns undefined description when metadata key is missing', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { description: { type: 'metadata', metadataKey: 'missing' } },
        dataMetadata: { other: 'value' }
      })
      expect(result.description).toBeUndefined()
    })

    it('returns undefined description when not configured', () => {
      const result = handleMapAriaLabels(baseState)
      expect(result.description).toBeUndefined()
    })
  })

  describe('combined title and description', () => {
    it('returns both from different sources', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: {
          title: { type: 'static', value: 'US Case Rate Map' },
          description: { type: 'metadata', metadataKey: 'altDescription' }
        },
        dataMetadata: { altDescription: 'Southeast has the highest rates.' }
      })
      expect(result.title).toBe('US Case Rate Map')
      expect(result.description).toBe('Southeast has the highest rates.')
    })
  })

  describe('fallback behavior', () => {
    it('uses auto-generated title when altText is undefined', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        dataMetadata: { altDescription: 'Should not be used' }
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
      expect(result.description).toBeUndefined()
    })

    it('uses auto-generated title when altText is empty object', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: {}
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
      expect(result.description).toBeUndefined()
    })
  })
})
