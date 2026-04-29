import { describe, expect, it, vi } from 'vitest'
import { addVisualization } from '../addVisualization'

describe('addVisualization', () => {
  it('creates chart visual settings with extra theme toggles disabled by default', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)
    vi.spyOn(Math, 'random').mockReturnValue(0)

    const visualization = addVisualization('chart', 'Bar')

    expect(visualization).toMatchObject({
      uid: 'chart12345',
      type: 'chart',
      visualizationType: 'Bar',
      visual: {
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false
      }
    })
  })

  it('creates map visual settings with extra theme toggles disabled by default', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)
    vi.spyOn(Math, 'random').mockReturnValue(0)

    const visualization = addVisualization('map', 'single-state')

    expect(visualization).toMatchObject({
      uid: 'map12345',
      type: 'map',
      general: {
        geoType: 'single-state'
      },
      visual: {
        border: false,
        borderColorTheme: false,
        accent: false,
        background: false,
        hideBackgroundColor: false
      }
    })
  })

  it('preserves visualizationType for current lightweight visualizations', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)

    expect(addVisualization('data-bite')).toMatchObject({ visualizationType: 'data-bite' })
    expect(addVisualization('waffle-chart', 'Waffle')).toMatchObject({ visualizationType: 'Waffle' })
    expect(addVisualization('markup-include')).toMatchObject({ visualizationType: 'markup-include' })
  })

  it('throws when asked to create deprecated filtered-text visualizations', () => {
    expect(() => addVisualization('filtered-text')).toThrow(
      'Cannot create new filtered-text visualizations. filtered-text is deprecated; use markup-include instead.'
    )
  })
})
