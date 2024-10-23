import { updateFieldRankByValue } from '../updateFieldRankByValue'

describe('updateFieldRankByValue', () => {
  it('should update rankByValue to "asc" and return new config', () => {
    const config = { rankByValue: undefined }
    const newValue = 'asc'
    const preTransformedData = [{ value: 3 }, { value: 1 }, { value: 2 }]

    const [newConfig] = updateFieldRankByValue(config, newValue, preTransformedData)

    expect(newConfig.rankByValue).toBe('asc')
  })

  it('should return new config and sorted data when newValue is undefined and config.rankByValue is set', () => {
    const config = {
      rankByValue: 'asc',
      data: [{ value: 1 }, { value: 2 }, { value: 3 }],
      xAxis: { dataKey: 'value' }
    }
    const newValue = undefined
    const preTransformedData = [{ value: 3 }, { value: 1 }, { value: 2 }]

    const [newConfig, newData] = updateFieldRankByValue(config, newValue, preTransformedData)

    expect(newConfig.rankByValue).toBeUndefined()
    expect(newData).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])
  })

  it('should return new config when newValue is undefined and config.rankByValue is not set', () => {
    const config = { rankByValue: undefined }
    const newValue = undefined
    const preTransformedData = [{ value: 3 }, { value: 1 }, { value: 2 }]

    const [newConfig] = updateFieldRankByValue(config, newValue, preTransformedData)

    expect(newConfig.rankByValue).toBeUndefined()
  })
})
