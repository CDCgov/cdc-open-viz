import { describe, expect, it, vi } from 'vitest'
import { addOptionalFullGeoNameColumn } from '../addOptionalFullGeoNameColumn'

describe('addOptionalFullGeoNameColumn', () => {
  const csvData = [{ geo: '01001', value: 1 }]
  const csvDataUpdated = [{ Geo: '01001', Value: 1 }]
  const formatLegendLocation = vi.fn((key: string) => `AL, ${key}`)

  it('does not add FullGeoName for county maps when the toggle is off', () => {
    const result = addOptionalFullGeoNameColumn({
      config: {
        general: { geoType: 'us-county' },
        table: { showFullGeoNameInCSV: false },
        columns: { geo: { name: 'geo' } }
      },
      csvData,
      csvDataUpdated,
      formatLegendLocation
    })

    expect(result).toEqual(csvDataUpdated)
    expect(result[0]).not.toHaveProperty('FullGeoName')
  })

  it('adds FullGeoName for county maps when the toggle is on', () => {
    const result = addOptionalFullGeoNameColumn({
      config: {
        general: { geoType: 'us-county' },
        table: { showFullGeoNameInCSV: true },
        columns: { geo: { name: 'geo' } }
      },
      csvData,
      csvDataUpdated,
      formatLegendLocation
    })

    expect(result).toEqual([{ FullGeoName: 'AL, 01001', Geo: '01001', Value: 1 }])
  })

  it('does not add FullGeoName for non-county maps when the toggle is off', () => {
    const result = addOptionalFullGeoNameColumn({
      config: {
        general: { geoType: 'us' },
        table: { showFullGeoNameInCSV: false },
        columns: { geo: { name: 'geo' } }
      },
      csvData,
      csvDataUpdated,
      formatLegendLocation
    })

    expect(result).toEqual(csvDataUpdated)
  })

  it('adds FullGeoName for non-county maps when the toggle is on', () => {
    const result = addOptionalFullGeoNameColumn({
      config: {
        general: { geoType: 'us' },
        table: { showFullGeoNameInCSV: true },
        columns: { geo: { name: 'geo' } }
      },
      csvData,
      csvDataUpdated,
      formatLegendLocation
    })

    expect(result).toEqual([{ FullGeoName: 'AL, 01001', Geo: '01001', Value: 1 }])
  })
})
