import { describe, expect, it } from 'vitest'
import useDataVizClasses from '../useDataVizClasses'

describe('useDataVizClasses', () => {
  it('maps supported visual settings to wrapper classes for non-chart visualizations', () => {
    const { contentClasses } = useDataVizClasses({
      type: 'data-bite',
      showTitle: true,
      title: 'Example',
      visualizationType: 'Bar',
      visual: {
        border: false,
        borderColorTheme: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        tp5Treatment: true
      }
    })

    expect(contentClasses).toContain('component--has-border-color-theme')
    expect(contentClasses).toContain('component--has-accent')
    expect(contentClasses).toContain('component--has-background')
    expect(contentClasses).toContain('component--hide-background-color')
    expect(contentClasses).toContain('component--tp5-treatment')
    expect(contentClasses).not.toContain('component--tp5-treatment-background')
  })

  it('does not add background wrapper classes for chart and map visualizations', () => {
    const { contentClasses: chartClasses } = useDataVizClasses({
      type: 'chart',
      visualizationType: 'Bar',
      visual: {
        background: true,
        hideBackgroundColor: true
      }
    })

    const { contentClasses: mapClasses } = useDataVizClasses({
      type: 'map',
      visual: {
        background: true,
        hideBackgroundColor: true
      }
    })

    expect(chartClasses).not.toContain('component--has-background')
    expect(chartClasses).not.toContain('component--hide-background-color')
    expect(mapClasses).not.toContain('component--has-background')
    expect(mapClasses).not.toContain('component--hide-background-color')
  })
})
