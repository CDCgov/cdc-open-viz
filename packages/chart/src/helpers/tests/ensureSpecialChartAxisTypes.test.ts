import { describe, expect, it } from 'vitest'
import { ensureSpecialChartAxisTypes } from '../ensureSpecialChartAxisTypes'

describe('ensureSpecialChartAxisTypes', () => {
  it('forces bump charts to use a date-time x-axis', () => {
    const config = {
      visualizationType: 'Bump Chart',
      xAxis: {
        type: 'categorical',
        dataKey: 'Timestamp',
        dateParseFormat: '%m/%d/%Y',
        dateDisplayFormat: '%Y'
      }
    }

    expect(ensureSpecialChartAxisTypes(config as any).xAxis.type).toBe('date-time')
  })

  it('leaves non-bump chart axis types unchanged', () => {
    const config = {
      visualizationType: 'Line',
      xAxis: {
        type: 'categorical',
        dataKey: 'Category'
      }
    }

    expect(ensureSpecialChartAxisTypes(config as any).xAxis.type).toBe('categorical')
  })
})
