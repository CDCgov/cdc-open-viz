import { describe, expect, it } from 'vitest'
import { getChartCellValue } from '../getChartCellValue'

describe('getChartCellValue', () => {
  it('uses runtime x-axis date settings when config.xAxis is stale', () => {
    const config = {
      xAxis: {
        type: 'categorical',
        dataKey: 'Timestamp',
        dateParseFormat: '%m/%d/%Y',
        dateDisplayFormat: '%Y'
      },
      runtime: {
        xAxis: {
          type: 'date-time',
          dataKey: 'Timestamp',
          dateParseFormat: '%m/%d/%Y',
          dateDisplayFormat: '%Y'
        }
      },
      table: {
        dateDisplayFormat: '%Y'
      },
      general: {
        showMissingDataLabel: true
      },
      visualizationType: 'Bump Chart',
      locale: 'en-US',
      dataFormat: {}
    }

    const runtimeData = [{ Timestamp: '1/1/2014' }]

    expect(getChartCellValue('0', 'Timestamp', config as any, runtimeData as any, new Map())).toBe('2014')
  })
})
