import { describe, expect, it } from 'vitest'
import { getLegendHighlightKey, shouldResetSeriesHighlight } from '../seriesHighlight'

describe('seriesHighlight helpers', () => {
  const seriesLabels = {
    nonfatal_rate_alldrugs: 'All drugs',
    opioid_nonfatal_rate: 'All opioids',
    stimulant_nonfatal_rate: 'All stimulants'
  }

  it('normalizes a legend label to the stored series highlight key', () => {
    expect(getLegendHighlightKey(seriesLabels, 'All opioids')).toBe('opioid_nonfatal_rate')
    expect(getLegendHighlightKey(seriesLabels, 'unmapped_series')).toBe('unmapped_series')
  })

  it('accepts legend label objects and legacy raw string callers', () => {
    expect(
      getLegendHighlightKey(seriesLabels, {
        datum: 'All stimulants',
        index: 2,
        text: 'All stimulants',
        value: '#075290'
      })
    ).toBe('stimulant_nonfatal_rate')

    expect(getLegendHighlightKey(seriesLabels, 'Highlighted bar')).toBe('Highlighted bar')
  })

  it('does not reset when removing one selected item from a three-series legend', () => {
    expect(
      shouldResetSeriesHighlight(
        ['nonfatal_rate_alldrugs', 'opioid_nonfatal_rate'],
        Object.keys(seriesLabels),
        'opioid_nonfatal_rate',
        'Line'
      )
    ).toBe(false)
  })

  it('resets when selecting the only remaining unselected item', () => {
    expect(
      shouldResetSeriesHighlight(
        ['nonfatal_rate_alldrugs', 'opioid_nonfatal_rate'],
        Object.keys(seriesLabels),
        'stimulant_nonfatal_rate',
        'Line'
      )
    ).toBe(true)
  })

  it('does not reset when the clicked item is not a known series key', () => {
    expect(
      shouldResetSeriesHighlight(
        ['nonfatal_rate_alldrugs', 'opioid_nonfatal_rate'],
        Object.keys(seriesLabels),
        'suppressed-data-note',
        'Line'
      )
    ).toBe(false)
  })
})
