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

  describe('description', () => {
    it('returns static description', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'static', value: 'Rates highest in the Southeast.' }
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
      expect(result.description).toBe('Rates highest in the Southeast.')
    })

    it('returns description from metadata', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'altDescription' },
        dataMetadata: { altDescription: 'Map shows elevated rates in southern states.' }
      })
      expect(result.description).toBe('Map shows elevated rates in southern states.')
    })

    it('returns undefined description when metadata key is missing', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: { type: 'metadata', metadataKey: 'missing' },
        dataMetadata: { other: 'value' }
      })
      expect(result.description).toBeUndefined()
    })

    it('returns undefined description when not configured', () => {
      const result = handleMapAriaLabels(baseState)
      expect(result.description).toBeUndefined()
    })

    it('returns undefined description when altText is empty object', () => {
      const result = handleMapAriaLabels({
        ...baseState,
        altText: {}
      })
      expect(result.title).toBe('United States map with the title: COVID-19 Cases by State')
      expect(result.description).toBeUndefined()
    })
  })
})
