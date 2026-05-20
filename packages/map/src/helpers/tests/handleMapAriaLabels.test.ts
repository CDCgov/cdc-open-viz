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
    expect(result).toBe('United States map with the title: COVID-19 Cases by State')
  })

  it('returns auto-generated title for world map', () => {
    const result = handleMapAriaLabels({
      general: { geoType: 'world', title: 'Global Data', statesPicked: [] }
    })
    expect(result).toBe('World map with the title: Global Data')
  })

  it('returns fallback when geoType is missing', () => {
    const result = handleMapAriaLabels({ general: {} })
    expect(result).toBe('Data visualization container')
  })

  describe('description', () => {
    it('concatenates static description after title', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'static', value: 'Rates highest in the Southeast.' }
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State. Rates highest in the Southeast.')
    })

    it('concatenates description from metadata after title', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'altDescription' },
        dataMetadata: { altDescription: 'Map shows elevated rates in southern states.' }
      })
      expect(result).toBe(
        'United States map with the title: COVID-19 Cases by State. Map shows elevated rates in southern states.'
      )
    })

    it('returns title only when metadata key is missing', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'missing' },
        dataMetadata: { other: 'value' }
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })

    it('returns title only when not configured', () => {
      const result = handleMapAriaLabels(baseState)
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })

    it('returns title only when altText is empty object', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: {}
      })
      expect(result).toBe('United States map with the title: COVID-19 Cases by State')
    })
  })
})
