import { describe, expect, it } from 'vitest'
import {
  getHighlightedBarLegendKey,
  getHighlightedBarLegendKeys,
  getSelectedBarSeriesKeys,
  isBarLegendSelectionActive
} from '../barLegendHighlight'
import { shouldResetSeriesHighlight } from '../seriesHighlight'

const seriesKey = 'Age-adjusted rate'
const label = 'Optional Legend Title'
const selection = [getHighlightedBarLegendKey(label)]
const config = {
  series: [{ dataKey: seriesKey }],
  highlightedBarValues: [
    { dataKey: seriesKey, value: 'Non-Hispanic American Indian', legendLabel: label, color: '#FFA500', borderWidth: 5 }
  ]
}

describe('highlighted bar legend selection', () => {
  it('isolates the highlighted category within its owning series', () => {
    expect(isBarLegendSelectionActive(config, selection, seriesKey, 'Non-Hispanic American Indian')).toBe(true)
    expect(isBarLegendSelectionActive(config, selection, seriesKey, 'Hispanic or Latino')).toBe(false)
    expect(isBarLegendSelectionActive(config, selection, 'Other series', 'Non-Hispanic American Indian')).toBe(false)
  })

  it('shows the entire series, including highlighted categories, for regular series selections', () => {
    for (const category of ['Non-Hispanic American Indian', 'Hispanic or Latino']) {
      expect(isBarLegendSelectionActive(config, [seriesKey], seriesKey, category)).toBe(true)
      expect(isBarLegendSelectionActive(config, [...selection, seriesKey], seriesKey, category)).toBe(true)
      expect(isBarLegendSelectionActive(config, [], seriesKey, category)).toBe(true)
    }
  })

  it('groups highlighted values with the same legend label and supports legacy entries without dataKey', () => {
    const grouped = {
      ...config,
      highlightedBarValues: [
        ...config.highlightedBarValues,
        { value: 'Hispanic or Latino', legendLabel: label, color: '#FFA500', borderWidth: 5 }
      ]
    }
    expect(getHighlightedBarLegendKeys(grouped)).toEqual(selection)
    expect(isBarLegendSelectionActive(grouped, selection, seriesKey, 'Hispanic or Latino')).toBe(true)
    expect(isBarLegendSelectionActive(grouped, selection, seriesKey, 'Non-Hispanic White')).toBe(false)
  })

  it('distinguishes a highlighted label from an identical regular series label', () => {
    const sameLabel = {
      ...config,
      highlightedBarValues: [{ ...config.highlightedBarValues[0], legendLabel: seriesKey }]
    }
    expect(
      isBarLegendSelectionActive(sameLabel, [getHighlightedBarLegendKey(seriesKey)], seriesKey, 'Hispanic or Latino')
    ).toBe(false)
    expect(isBarLegendSelectionActive(sameLabel, [seriesKey], seriesKey, 'Hispanic or Latino')).toBe(true)
  })

  it('matches raw date categories and numeric zero without formatting the selection', () => {
    for (const value of ['2026-01-01', 0]) {
      const dated = { ...config, highlightedBarValues: [{ ...config.highlightedBarValues[0], value }] }
      expect(isBarLegendSelectionActive(dated, selection, seriesKey, value)).toBe(true)
      expect(isBarLegendSelectionActive(dated, selection, seriesKey, 'other')).toBe(false)
    }
  })

  it('does not match unconfigured categories or create legend entries for blank labels', () => {
    const blank = { ...config, highlightedBarValues: [{ ...config.highlightedBarValues[0], legendLabel: '' }] }
    expect(getHighlightedBarLegendKeys(blank)).toEqual([])
    expect(isBarLegendSelectionActive(blank, selection, seriesKey, 'Non-Hispanic American Indian')).toBe(false)
  })

  it('resolves selected highlights to their owning tooltip series', () => {
    expect(getSelectedBarSeriesKeys(config, selection)).toEqual([seriesKey])
    expect(getSelectedBarSeriesKeys(config, [...selection, seriesKey])).toEqual([seriesKey])
    expect(getSelectedBarSeriesKeys(config, [...selection, 'Other series'])).toEqual([seriesKey, 'Other series'])
    expect(getSelectedBarSeriesKeys(config, [])).toEqual([])
  })

  it('counts highlight entries when deciding whether selecting another entry resets the legend', () => {
    expect(shouldResetSeriesHighlight([], [seriesKey], seriesKey, 'Bar', selection)).toBe(false)
    expect(shouldResetSeriesHighlight(selection, [seriesKey], seriesKey, 'Bar', selection)).toBe(true)
    expect(shouldResetSeriesHighlight([seriesKey], [seriesKey], selection[0], 'Bar', selection)).toBe(true)
    expect(shouldResetSeriesHighlight(selection, [seriesKey], selection[0], 'Bar', selection)).toBe(false)
  })
})
