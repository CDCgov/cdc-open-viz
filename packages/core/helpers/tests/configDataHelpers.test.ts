import { stripDataFromConfig, restoreDataToConfig } from '../configDataHelpers'
import { describe, expect, it } from 'vitest'

describe('configDataHelpers', () => {
  it('keeps dataset metadata available while stripping only heavy data arrays', () => {
    const config: any = {
      type: 'dashboard',
      datasets: {
        datasetA: {
          data: [{ State: 'CA' }],
          formattedData: [{ State: 'CA' }],
          originalFormattedData: [{ State: 'CA' }],
          dataDescription: { horizontal: false },
          dataUrl: '/dataset-a.json'
        }
      }
    }

    const { strippedConfig, extractedData } = stripDataFromConfig(config)

    expect(strippedConfig.datasets.datasetA).toEqual({
      dataDescription: { horizontal: false },
      dataUrl: '/dataset-a.json'
    })
    expect(strippedConfig.datasets.datasetA.data).toBeUndefined()
    expect(extractedData.datasets.datasetA.data).toEqual([{ State: 'CA' }])

    const restored = restoreDataToConfig(strippedConfig, extractedData)

    expect(restored.datasets.datasetA.data).toEqual([{ State: 'CA' }])
    expect(restored.datasets.datasetA.formattedData).toEqual([{ State: 'CA' }])
    expect(restored.datasets.datasetA.originalFormattedData).toEqual([{ State: 'CA' }])
    expect(restored.datasets.datasetA.dataUrl).toBe('/dataset-a.json')
    expect(config.datasets.datasetA.data).toEqual([{ State: 'CA' }])
  })
})
