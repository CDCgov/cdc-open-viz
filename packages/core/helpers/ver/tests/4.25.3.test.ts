import { describe, expect, it } from 'vitest'
import update from '../4.25.3'

describe('4.25.3 Area Chart subtype migration', () => {
  it.each([undefined, 'regular'])('migrates the legacy %s subtype to stacked', visualizationSubType => {
    const result = update({ type: 'chart', visualizationType: 'Area Chart', visualizationSubType })
    expect(result.visualizationSubType).toBe('stacked')
  })

  it('preserves other explicit subtypes and recurses through dashboard children', () => {
    const result = update({
      type: 'dashboard',
      visualizations: {
        missing: { type: 'chart', visualizationType: 'Area Chart' },
        explicit: { type: 'chart', visualizationType: 'Area Chart', visualizationSubType: 'stream' }
      }
    })
    expect(result.visualizations.missing.visualizationSubType).toBe('stacked')
    expect(result.visualizations.explicit.visualizationSubType).toBe('stream')
  })

  it('handles sparse dashboards and charts before default hydration', () => {
    expect(() => update({ type: 'dashboard' })).not.toThrow()

    const chart = update({ type: 'chart', general: { showDownloadButton: true } })
    expect(chart.table.download).toBe(true)
  })
})
