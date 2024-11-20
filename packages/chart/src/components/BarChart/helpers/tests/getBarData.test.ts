import { getBarData } from '../getBarData'

import { TransformedData } from '../../../../types/ChartContext'
import { ChartConfig } from '../../../../types/ChartConfig'

describe('getBarData', () => {
  it('should return the original data when there is no dynamicSeries', () => {
    const config = {
      series: [{ dataKey: 'value' }],
      runtime: { originalXAxis: { dataKey: 'category' } }
    } as ChartConfig
    const data: TransformedData[] = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 }
    ]
    const hasConfidenceInterval = false

    const result = getBarData(config, data, hasConfidenceInterval)

    expect(result).toEqual(data)
  })

  it('should return transformed data when there is a dynamicSeries but no confidence interval', () => {
    const config = {
      series: [{ dataKey: 'value', dynamicCategory: 'subCategory' }],
      runtime: { originalXAxis: { dataKey: 'category' } }
    } as ChartConfig
    const data: TransformedData[] = [
      { category: 'A', subCategory: 'X', value: 10 },
      { category: 'A', subCategory: 'Y', value: 20 },
      { category: 'B', subCategory: 'X', value: 30 }
    ]
    const hasConfidenceInterval = false

    const result = getBarData(config, data, hasConfidenceInterval)

    expect(result).toEqual([
      { category: 'A', X: 10, Y: 20, dynamicData: true },
      { category: 'B', X: 30, dynamicData: true }
    ])
  })

  it('should return transformed data with confidence intervals when there is a dynamicSeries and confidence interval', () => {
    const config = {
      series: [{ dataKey: 'value', dynamicCategory: 'subCategory' }],
      runtime: { originalXAxis: { dataKey: 'category' } },
      confidenceKeys: { lower: 'lowerCI', upper: 'upperCI' }
    } as ChartConfig
    const data: TransformedData[] = [
      { category: 'A', subCategory: 'X', value: 10, lowerCI: 5, upperCI: 15 },
      { category: 'A', subCategory: 'Y', value: 20, lowerCI: 15, upperCI: 25 },
      { category: 'B', subCategory: 'X', value: 30, lowerCI: 25, upperCI: 35 }
    ]
    const hasConfidenceInterval = true

    const result = getBarData(config, data, hasConfidenceInterval)

    expect(result).toEqual([
      {
        category: 'A',
        X: 10,
        Y: 20,
        CI: { X: { lower: 5, upper: 15 }, Y: { lower: 15, upper: 25 } },
        dynamicData: true
      },
      {
        category: 'B',
        X: 30,
        CI: { X: { lower: 25, upper: 35 } },
        dynamicData: true
      }
    ])
  })
})
