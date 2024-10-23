import { handleRankByValue } from '../handleRankByValue'
import { ChartConfig } from '../../types/ChartConfig'

describe('handleRankByValue', () => {
  it('should sort the data in ascending order when rankByValue is "asc"', () => {
    const data = [{ value: 3 }, { value: 1 }, { value: 2 }]
    const config: ChartConfig = {
      rankByValue: 'asc',
      series: [{ dataKey: 'value' }]
    }

    const result = handleRankByValue(data, config)
    expect(result).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])
  })

  it('should sort the data in descending order when rankByValue is "desc"', () => {
    const data = [{ value: 3 }, { value: 1 }, { value: 2 }]
    const config: ChartConfig = {
      rankByValue: 'desc',
      series: [{ dataKey: 'value' }]
    }

    const result = handleRankByValue(data, config)
    expect(result).toEqual([{ value: 3 }, { value: 2 }, { value: 1 }])
  })

  it('should handle numeric strings correctly', () => {
    const data = [{ value: '3' }, { value: '1' }, { value: '2' }]
    const config: ChartConfig = {
      rankByValue: 'asc',
      series: [{ dataKey: 'value' }]
    }

    const result = handleRankByValue(data, config)
    expect(result).toEqual([{ value: '1' }, { value: '2' }, { value: '3' }])
  })
})
