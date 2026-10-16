import { describe, expect, it } from 'vitest'
import { buildBumpChartTooltipHtml } from '../bumpChartTooltip'

const buildConfig = overrides => ({
  xAxis: {
    dataKey: 'Timestamp',
    type: 'date-time'
  },
  tooltips: {
    dateDisplayFormat: '%Y'
  },
  columns: {
    Timestamp: {
      name: 'Timestamp',
      label: 'Year',
      tooltips: true
    },
    Frequency: {
      name: 'Frequency',
      label: 'Frequency',
      tooltips: true
    }
  },
  legend: {
    hide: false,
    style: 'circles',
    groupBy: ''
  },
  runtime: {
    xAxis: {
      label: 'Year'
    },
    seriesLabels: {
      Rank: 'Rank'
    },
    seriesLabelsAll: ['Rank', 'Other'],
    seriesKeys: ['Rank', 'Other']
  },
  visualizationType: 'Bump Chart',
  series: [{ dataKey: 'Rank' }, { dataKey: 'Other' }],
  ...overrides
})

const helpers = {
  parseDate: (value: string) => new Date(value),
  formatDate: (date: Date) => String(date.getUTCFullYear()),
  formatTooltipsDate: (date: Date) => `tooltip-${date.getUTCFullYear()}`
}

describe('buildBumpChartTooltipHtml', () => {
  it('uses the shared x-axis formatter in the tooltip heading', () => {
    const html = buildBumpChartTooltipHtml({
      config: buildConfig(),
      colorScale: undefined,
      dataRow: { Timestamp: '2014-01-01T00:00:00.000Z', Rank: '1', Frequency: '149' },
      series: { dataKey: 'Rank' },
      helpers
    })

    expect(html).toContain('Year: tooltip-2014')
  })

  it('does not render the raw x-axis value as an extra tooltip row', () => {
    const html = buildBumpChartTooltipHtml({
      config: buildConfig(),
      colorScale: undefined,
      dataRow: { Timestamp: '2014-01-01T00:00:00.000Z', Rank: '1', Frequency: '149' },
      series: { dataKey: 'Rank' },
      helpers
    })

    expect(html).not.toContain('2014-01-01T00:00:00.000Z')
    expect(html).toContain('Frequency: 149')
  })
})
