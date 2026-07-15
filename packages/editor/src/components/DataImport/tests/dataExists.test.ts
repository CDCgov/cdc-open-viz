import { describe, expect, it } from 'vitest'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { dataExists } from '../helpers/dataExists'

describe('dataExists', () => {
  it('requires the configured x-axis and every configured series column', () => {
    const newData = [
      {
        Month: 'Jan',
        Cases: '10'
      }
    ]

    expect(dataExists(newData, [{ dataKey: 'HHS Region 1' }], 'Month')).toBe(false)
  })

  it('returns true when all configured columns exist in the new data', () => {
    const newData = [
      {
        Month: 'Jan',
        'HHS Region 1': '10'
      }
    ]

    expect(dataExists(newData, [{ dataKey: 'HHS Region 1' }], 'Month')).toBe(true)
  })

  it('returns true when configured columns exist after applying the same data transform', () => {
    const newData = [
      {
        Category: 'A',
        '2023': '10',
        '2024': '12'
      }
    ]
    const transformedData = new DataTransform().developerStandardize(newData, { horizontal: true, series: false })

    expect(dataExists(newData, [{ dataKey: 'value' }], 'key', transformedData)).toBe(true)
  })
})
