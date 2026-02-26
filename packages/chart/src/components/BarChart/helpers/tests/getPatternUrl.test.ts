import { getPatternUrl } from '../getPatternUrl'

describe('getPatternUrl', () => {
  it('matches specific series patterns by series key and value', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: 'y1', dataValue: '19000' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 47000 },
      seriesKey: 'y1',
      seriesValue: 19000,
      seriesLabels: { y1: 'Series 1', y2: 'Series 2' }
    })

    expect(patternUrl).toBe('url(#chart-pattern-Pattern1)')
  })

  it('matches specific non-series field patterns', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: 'category', dataValue: 'Q1' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 47000 },
      seriesKey: 'y2',
      seriesValue: 47000,
      seriesLabels: { y1: 'Series 1', y2: 'Series 2' }
    })

    expect(patternUrl).toBe('url(#chart-pattern-Pattern1)')
  })

  it('does not match non-series field patterns when non-series matching is disabled', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: 'category', dataValue: 'Q1' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 47000 },
      seriesKey: 'y2',
      seriesValue: 47000,
      seriesLabels: { y1: 'Series 1', y2: 'Series 2' },
      allowNonSeriesFieldMatch: false
    })

    expect(patternUrl).toBeNull()
  })

  it('matches blank dataKey pattern by value across series', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: '', dataValue: '47000' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 47000 },
      seriesKey: 'y2',
      seriesValue: 47000,
      seriesLabels: { y1: 'Series 1', y2: 'Series 2' }
    })

    expect(patternUrl).toBe('url(#chart-pattern-Pattern1)')
  })

  it('does not match blank dataKey pattern with empty dataValue', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: '', dataValue: '' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 47000 },
      seriesKey: 'y2',
      seriesValue: 47000,
      seriesLabels: { y1: 'Series 1', y2: 'Series 2' }
    })

    expect(patternUrl).toBeNull()
  })

  it('prioritizes specific match over broad match', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: '', dataValue: '19000' },
        Pattern2: { dataKey: 'y1', dataValue: '19000' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 47000 },
      seriesKey: 'y1',
      seriesValue: 19000,
      seriesLabels: { y1: 'Series 1', y2: 'Series 2' }
    })

    expect(patternUrl).toBe('url(#chart-pattern-Pattern2)')
  })

  it('uses seriesKeys as fallback to identify series keys when seriesLabels are missing', () => {
    const patternUrl = getPatternUrl({
      patterns: {
        Pattern1: { dataKey: 'y1', dataValue: '19000' }
      },
      datum: { category: 'Q1', y1: 19000, y2: 19000 },
      seriesKey: 'y2',
      seriesValue: 19000,
      seriesKeys: ['y1', 'y2']
    })

    expect(patternUrl).toBeNull()
  })
})
