import { describe, expect, it } from 'vitest'

import { getBoxPlotConfig } from '../getBoxPlotConfig'
import { ChartConfig } from '../../types/ChartConfig'

const createBoxPlotConfig = (): ChartConfig =>
  ({
    xAxis: {
      dataKey: 'Group'
    },
    series: [
      {
        dataKey: 'Score'
      }
    ],
    dataFormat: {
      roundTo: 0
    }
  } as ChartConfig)

describe('getBoxPlotConfig', () => {
  it('sorts generated value arrays numerically for numeric strings', () => {
    const data = [
      { Group: 'Group A', Score: '1' },
      { Group: 'Group A', Score: '2' },
      { Group: 'Group A', Score: '3' },
      { Group: 'Group A', Score: '10' },
      { Group: 'Group A', Score: '20' },
      { Group: 'Group A', Score: '100' }
    ]

    const [plots] = getBoxPlotConfig(createBoxPlotConfig(), data)

    expect(plots[0].values).toEqual([1, 2, 3, 10, 20, 100])
    expect(plots[0].columnNonOutliers).toEqual([1, 2, 3, 10, 20])
    expect(plots[0].columnOutliers).toEqual([100])
  })

  it('parses formatted numeric strings before sorting', () => {
    const data = [
      { Group: 'Group A', Score: '1,234.5' },
      { Group: 'Group A', Score: '20' },
      { Group: 'Group A', Score: '3' }
    ]

    const [plots] = getBoxPlotConfig(createBoxPlotConfig(), data)

    expect(plots[0].values).toEqual([3, 20, 1234.5])
    expect(plots[0].columnCount).toBe(3)
  })

  it('ignores blank, null, and nonnumeric values when generating box plot stats', () => {
    const data = [
      { Group: 'Group A', Score: '1' },
      { Group: 'Group A', Score: '' },
      { Group: 'Group A', Score: null },
      { Group: 'Group A', Score: undefined },
      { Group: 'Group A', Score: 'n/a' },
      { Group: 'Group A', Score: '2' },
      { Group: 'Group A', Score: '3' }
    ]

    const [plots] = getBoxPlotConfig(createBoxPlotConfig(), data)

    expect(plots[0].values).toEqual([1, 2, 3])
    expect(plots[0].columnCount).toBe(3)
    expect(plots[0].columnNonOutliers).toEqual([1, 2, 3])
    expect(plots[0].columnOutliers).toEqual([])
  })
})
