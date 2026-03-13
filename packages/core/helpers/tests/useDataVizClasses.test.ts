import { describe, expect, it } from 'vitest'
import useDataVizClasses from '../useDataVizClasses'

describe('useDataVizClasses', () => {
  it('only keeps border-theme and accent classes from visual settings', () => {
    const { contentClasses } = useDataVizClasses({
      showTitle: true,
      title: 'Example',
      visualizationType: 'Bar',
      visual: {
        border: false,
        borderColorTheme: true,
        accent: true,
        background: true,
        hideBackgroundColor: true
      }
    })

    expect(contentClasses).toContain('component--has-border-color-theme')
    expect(contentClasses).toContain('component--has-accent')
    expect(contentClasses).not.toContain('component--has-background')
    expect(contentClasses).not.toContain('component--hide-background-color')
  })
})
