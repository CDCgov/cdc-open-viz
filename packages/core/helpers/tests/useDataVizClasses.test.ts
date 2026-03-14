import { describe, expect, it } from 'vitest'
import useDataVizClasses from '../useDataVizClasses'

describe('useDataVizClasses', () => {
  it('maps supported visual settings to wrapper classes', () => {
    const { contentClasses } = useDataVizClasses({
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
    expect(contentClasses).not.toContain('component--has-background')
    expect(contentClasses).not.toContain('component--hide-background-color')
    expect(contentClasses).toContain('component--tp5-treatment')
    expect(contentClasses).not.toContain('component--tp5-treatment-background')
  })
})
