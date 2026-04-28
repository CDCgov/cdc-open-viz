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

  it('uses TP5 defaults for new dashboard data bites and waffle charts', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)

    expect(addVisualization('data-bite')).toMatchObject({ biteStyle: 'tp5', visualizationType: 'data-bite' })
    expect(addVisualization('waffle-chart', 'Waffle')).toMatchObject({ visualizationType: 'TP5 Waffle' })
  })

  it('preserves other visualizationType defaults for related visualizations', () => {
    vi.spyOn(Date, 'now').mockReturnValue(12345)

    expect(addVisualization('waffle-chart', 'Gauge')).toMatchObject({ visualizationType: 'Gauge' })
    expect(addVisualization('filtered-text')).toMatchObject({ visualizationType: 'filtered-text' })
  })
})
