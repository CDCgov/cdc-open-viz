import { describe, expect, it } from 'vitest'
import {
  buildTooltipListHtml,
  getTooltipMarkerColor,
  getTooltipMarkerShape,
  shouldUseTooltipLegendMarkers,
  tooltipHasMarkerColumn,
  tooltipShouldUseMarkerColumn,
  type TooltipRow
} from '../tooltipHelpers'

const buildConfig = overrides => ({
  visualizationType: 'Line',
  legend: {
    hide: false,
    style: 'circles',
    groupBy: '',
    patterns: {},
    ...overrides?.legend
  },
  runtime: {
    seriesLabels: { cases: 'Cases', deaths: 'Deaths' },
    seriesLabelsAll: ['Cases', 'Deaths'],
    seriesKeys: ['cases', 'deaths'],
    ...overrides?.runtime
  },
  series: [{ dataKey: 'cases' }, { dataKey: 'deaths' }],
  smallMultiples: {
    mode: '',
    ...overrides?.smallMultiples
  },
  ...overrides
})

describe('tooltipHelpers', () => {
  it('enables marker rendering for supported multi-series charts with visible legends', () => {
    expect(shouldUseTooltipLegendMarkers(buildConfig())).toBe(true)
  })

  it('allows small-multiple tiles to use markers when the source legend is visible', () => {
    expect(shouldUseTooltipLegendMarkers(buildConfig({ legend: { hide: true, tooltipLegendVisible: true } }))).toBe(
      true
    )
  })

  it('disables markers when the source legend is hidden or the legend is in a special mode', () => {
    expect(shouldUseTooltipLegendMarkers(buildConfig({ legend: { hide: true } }))).toBe(false)
    expect(shouldUseTooltipLegendMarkers(buildConfig({ legend: { hide: true, tooltipLegendVisible: false } }))).toBe(
      false
    )
    expect(shouldUseTooltipLegendMarkers(buildConfig({ legend: { style: 'gradient' } }))).toBe(false)
    expect(shouldUseTooltipLegendMarkers(buildConfig({ legend: { groupBy: 'category' } }))).toBe(false)
    expect(
      shouldUseTooltipLegendMarkers(
        buildConfig({
          runtime: { seriesLabelsAll: ['Cases'], seriesKeys: ['cases'] },
          series: [{ dataKey: 'cases' }]
        })
      )
    ).toBe(false)
  })

  it('disables markers for single-series small-multiple tiles even when the source legend is visible', () => {
    expect(
      shouldUseTooltipLegendMarkers(
        buildConfig({
          legend: { hide: true, tooltipLegendVisible: true },
          runtime: { seriesLabelsAll: ['Cases'], seriesKeys: ['cases'] },
          series: [{ dataKey: 'cases' }]
        })
      )
    ).toBe(false)
  })

  it('keeps patterned legends eligible and still uses the base series color', () => {
    expect(shouldUseTooltipLegendMarkers(buildConfig({ legend: { patterns: { striped: { color: '#000' } } } }))).toBe(
      true
    )
  })

  it('resolves marker colors using the legend label mapping', () => {
    const colorScale = value => ({ Cases: '#1f77b4', deaths: '#d62728' }[value] || null)

    expect(getTooltipMarkerColor(buildConfig(), colorScale as any, 'cases')).toBe('#1f77b4')
    expect(getTooltipMarkerColor(buildConfig(), colorScale as any, 'unknown')).toBe(null)
  })

  it('uses square markers only when the legend explicitly uses boxes', () => {
    expect(getTooltipMarkerShape(buildConfig())).toBe('circle')
    expect(getTooltipMarkerShape(buildConfig({ legend: { style: 'boxes' } }))).toBe('square')
  })

  it('only reserves a marker column when at least one series row has a marker', () => {
    const rows: TooltipRow[] = [
      { key: 'Date', value: '2024-01-01', kind: 'heading' },
      { key: 'Cases', value: '10', kind: 'series', markerColor: '#1f77b4' },
      { key: 'Source', value: 'CDC', kind: 'extra' }
    ]
    const rowsWithoutMarkers: TooltipRow[] = [
      { key: 'Date', value: '2024-01-01', kind: 'heading' },
      { key: 'Source', value: 'CDC', kind: 'extra' }
    ]

    expect(tooltipHasMarkerColumn(rows)).toBe(true)
    expect(tooltipHasMarkerColumn(rowsWithoutMarkers)).toBe(false)
  })

  it('suppresses the marker column when two series would render identical marker signatures', () => {
    expect(
      tooltipShouldUseMarkerColumn([
        { markerColor: '#f28e2b', markerShape: 'circle' },
        { markerColor: '#f28e2b', markerShape: 'circle' }
      ])
    ).toBe(false)

    expect(
      tooltipShouldUseMarkerColumn([
        { markerColor: '#f28e2b', markerShape: 'circle' },
        { markerColor: '#f28e2b', markerShape: 'square' }
      ])
    ).toBe(true)
  })

  it('renders aligned raw HTML rows only when the tooltip contains a marker', () => {
    const withMarker = buildTooltipListHtml({
      heading: 'Date: Jan 1, 2024',
      bodyRows: [{ text: 'Cases: 10', markerColor: '#1f77b4', markerShape: 'square' }, { text: 'Source: CDC' }]
    })
    const withoutMarker = buildTooltipListHtml({
      heading: 'Date: Jan 1, 2024',
      bodyRows: [{ text: 'Source: CDC' }]
    })
    const ambiguousMarkers = buildTooltipListHtml({
      heading: 'Date: Jan 1, 2024',
      bodyRows: [
        { text: 'Dose 1: 10', markerColor: '#f28e2b', markerShape: 'circle' },
        { text: 'Dose 2: 20', markerColor: '#f28e2b', markerShape: 'circle' }
      ]
    })

    expect(withMarker).toContain('tooltip-body--marker-layout')
    expect(withMarker).toContain('tooltip-marker-slot')
    expect(withMarker).toContain('tooltip-marker-slot" aria-hidden="true"')
    expect(withMarker).toContain('tooltip-marker-swatch')
    expect(withMarker).toContain('tooltip-marker-swatch--square')
    expect(withoutMarker).not.toContain('tooltip-body--marker-layout')
    expect(withoutMarker).not.toContain('tooltip-marker-slot')
    expect(ambiguousMarkers).not.toContain('tooltip-body--marker-layout')
    expect(ambiguousMarkers).not.toContain('tooltip-marker-slot')
  })
})
