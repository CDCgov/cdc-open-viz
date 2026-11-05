import { createMapHighlight, isSupportedMapHighlightValue } from './mapHighlight'

describe('map highlighting', () => {
  it('leaves every element undimmed without an active highlight', () => {
    const highlight = createMapHighlight({ dashboardHighlightActive: false })
    expect(highlight.isDimmed('US-AL', 'Alabama')).toBe(false)
    expect(highlight.isDimmed()).toBe(false)
  })

  it('gives selector highlighting precedence over dashboard highlighting, including overlays without an ID', () => {
    const highlight = createMapHighlight({
      selectedLocationId: 'US-NY',
      sharedFilterValue: 'Alabama',
      dashboardHighlightActive: true
    })
    expect(highlight.isDimmed('US-NY', 'New York')).toBe(false)
    expect(highlight.isHighlighted('US-NY')).toBe(true)
    expect(highlight.isDimmed('US-AL', 'Alabama')).toBe(true)
    expect(highlight.isDimmed()).toBe(true)
    expect(highlight.isDimmed(undefined, 'New York City')).toBe(true)
  })

  it('restores dashboard highlighting when the selector highlight clears', () => {
    const highlight = createMapHighlight({ sharedFilterValue: 'Alabama', dashboardHighlightActive: true })
    expect(highlight.isDimmed('US-AL', 'Alabama')).toBe(false)
    expect(highlight.isDimmed('US-NY', 'New York')).toBe(true)
    expect(highlight.isDimmed('US-AK')).toBe(true)
    expect(highlight.isDimmed()).toBe(true)
  })

  it.each(['Alabama', 'AL', 'New York City', 'PR'])('recognizes existing US dashboard highlight values: %s', value => {
    expect(isSupportedMapHighlightValue(value)).toBe(true)
  })

  it.each([undefined, '', 123, 'unrelated category'])('ignores unsupported dashboard values: %s', value => {
    expect(isSupportedMapHighlightValue(value)).toBe(false)
  })
})
