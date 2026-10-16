import { afterEach, describe, expect, it, vi } from 'vitest'
import { addVisualization } from '../addVisualization'

describe('addVisualization', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('creates chart visual settings with extra theme toggles disabled by default', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    const visualization = addVisualization('chart', 'Bar')

    expect(visualization).toMatchObject({
      uid: 'chart-4fzzzxjy',
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
    vi.spyOn(Math, 'random').mockReturnValue(0.23456789)

    const visualization = addVisualization('map', 'single-state')

    expect(visualization).toMatchObject({
      uid: 'map-8fzzzbjm',
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
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    expect(addVisualization('data-bite')).toMatchObject({ biteStyle: 'tp5', visualizationType: 'data-bite' })
    expect(addVisualization('waffle-chart', 'Waffle')).toMatchObject({ visualizationType: 'TP5 Waffle' })
  })

  it('preserves other visualizationType defaults for related visualizations', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    expect(addVisualization('waffle-chart', 'Gauge')).toMatchObject({ visualizationType: 'Gauge' })
  })

  it('preserves visualizationType for current lightweight visualizations', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)

    expect(addVisualization('data-bite')).toMatchObject({ visualizationType: 'data-bite' })
    expect(addVisualization('markup-include')).toMatchObject({ visualizationType: 'markup-include' })
  })

  it('throws when asked to create deprecated filtered-text visualizations', () => {
    expect(() => addVisualization('filtered-text')).toThrow(
      'Cannot create new filtered-text visualizations. filtered-text is deprecated; use markup-include instead.'
    )
  })

  it('creates dashboard filters with grey background disabled by default', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.3456789)

    expect(addVisualization('dashboardFilters', '')).toMatchObject({
      uid: 'dashboardFilters-cfzzt7g4',
      type: 'dashboardFilters',
      sharedFilterIndexes: [],
      visualizationType: 'dashboardFilters',
      visual: {
        grayBackground: false
      }
    })
  })

  it('avoids existing visualization ids when caller provides a uniqueness scope', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.23456789)

    const visualization = addVisualization('chart', 'Bar', { existingIds: ['chart-4fzzzxjy'] })

    expect(visualization.uid).toBe('chart-8fzzzbjm')
  })
})
