import { describe, expect, it } from 'vitest'
import { applyAutoDetectedDateParseFormat } from '../helpers/applyAutoDetectedDateParseFormat'

describe('applyAutoDetectedDateParseFormat', () => {
  const baseChartConfig: any = {
    type: 'chart',
    xAxis: {
      type: 'date',
      dataKey: 'date',
      dateParseFormat: ''
    },
    tooltips: {
      dateDisplayFormat: '%B %-d, %Y'
    },
    table: {
      dateDisplayFormat: '%b %-d %Y'
    }
  }

  const reliableSlashDateRows = [
    { date: '2024/03/15', value: 10 },
    { date: '2025/11/09', value: 12 }
  ]

  const ambiguousUsOrEuDateRows = [
    { date: '01/02/2024', value: 10 },
    { date: '02/03/2024', value: 12 }
  ]

  const missingXAxisDateRows = [{ otherDate: '2024/03/15', value: 10 }]
  const sparseFirstRowReliableDateRows = [
    { otherDate: 'ignore-me', value: 8 },
    { date: '2024/03/15', value: 10 },
    { date: '2025/11/09', value: 12 }
  ]

  it('auto-fills the chart xAxis date parse format when detection is reliable', () => {
    const result: any = applyAutoDetectedDateParseFormat(baseChartConfig, reliableSlashDateRows)

    expect(result.xAxis.dateParseFormat).toBe('%Y/%m/%d')
    expect(result.tooltips.dateDisplayFormat).toBe('%B %-d, %Y')
    expect(result.table.dateDisplayFormat).toBe('%b %-d %Y')
  })

  it('leaves the config unchanged when the sample is ambiguous', () => {
    const result: any = applyAutoDetectedDateParseFormat(baseChartConfig, ambiguousUsOrEuDateRows)

    expect(result).toEqual(baseChartConfig)
  })

  it('does nothing for non-date chart axes', () => {
    const result: any = applyAutoDetectedDateParseFormat(
      {
        ...baseChartConfig,
        xAxis: {
          ...baseChartConfig.xAxis,
          type: 'categorical'
        }
      },
      [{ date: '2024/03/15', value: 10 }]
    )

    expect(result).toEqual({
      ...baseChartConfig,
      xAxis: {
        ...baseChartConfig.xAxis,
        type: 'categorical'
      }
    })
  })

  it('does nothing for non-chart visualizations', () => {
    const result: any = applyAutoDetectedDateParseFormat(
      {
        ...baseChartConfig,
        type: 'map'
      },
      [{ date: '2024/03/15', value: 10 }]
    )

    expect(result).toEqual({
      ...baseChartConfig,
      type: 'map'
    })
  })

  it('does nothing when the configured x-axis column is missing', () => {
    const result: any = applyAutoDetectedDateParseFormat(baseChartConfig, missingXAxisDateRows)

    expect(result).toEqual(baseChartConfig)
  })

  it('still detects the date parse format when the first row is missing the x-axis key', () => {
    const result: any = applyAutoDetectedDateParseFormat(baseChartConfig, sparseFirstRowReliableDateRows)

    expect(result.xAxis.dateParseFormat).toBe('%Y/%m/%d')
  })
})
