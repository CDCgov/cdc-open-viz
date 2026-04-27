import { handleMapAriaLabels } from '../handleMapAriaLabels'

const baseState = {
  general: {
    geoType: 'us',
    title: 'COVID-19 Cases by State',
    statesPicked: []
  }
}

describe('handleMapAriaLabels', () => {
  it('returns auto-generated label for US map with title', () => {
    const result = handleMapAriaLabels(baseState)
    expect(result).toBe('United States map with the title: COVID-19 Cases by State')
  })

  it('returns auto-generated label for world map', () => {
    const result = handleMapAriaLabels({
      general: { geoType: 'world', title: 'Global Data', statesPicked: [] }
    })
    expect(result).toBe('World map with the title: Global Data')
  })

  it('returns fallback when geoType is missing', () => {
    const result = handleMapAriaLabels({ general: {} })
    expect(result).toBe('Data visualization container')
  })

  describe('static alt text', () => {
    it('uses static value when type is static', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'static', value: 'Choropleth map showing case rates highest in the Southeast.' }
      })
      expect(result).toBe('Choropleth map showing case rates highest in the Southeast.')
    })

    it('falls back to auto-generated label when type is static but value is empty', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'static', value: '' }
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })
  })

  describe('metadata-driven alt text', () => {
    it('uses metadata value when type is metadata and key matches', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'altDescription' },
        dataMetadata: { altDescription: 'Map showing elevated case rates in southern states.' }
      })
      expect(result).toBe('Map showing elevated case rates in southern states.')
    })

    it('falls back when metadataKey is not found', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'missing' },
        dataMetadata: { other: 'value' }
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })

    it('falls back when dataMetadata is undefined', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'altDescription' }
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })
  })

  describe('fallback behavior', () => {
    it('uses auto-generated label when altText is undefined', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        dataMetadata: { altDescription: 'Should not be used' }
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })

    it('uses auto-generated label when altText.type is undefined', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: {}
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })
  })
})
