import { getColumnNames } from './../getColumnNames'
import { MapConfig } from '../../types/MapConfig'

// write a test that returns null if columns are not provided
describe('missing config.columns parameter', () => {
  it('should return null', () => {
    const columns = null
    expect(getColumnNames(columns)).toBeNull()
  })
})

it('returns null for undefined column names', () => {
  const columns: Pick<MapConfig, 'columns'> = {
    columns: {
      geo: { name: undefined },
      primary: { name: undefined },
      latitude: { name: undefined },
      longitude: { name: undefined },
      categorical: { name: undefined }
    }
  }

  const result = getColumnNames(columns)
  expect(result).toEqual({
    geoColumnName: null,
    primaryColumnName: null,
    latitudeColumnName: null,
    longitudeColumnName: null,
    categoricalColumnName: null
  })
})

it('returns null for empty column names', () => {
  const columns: Pick<MapConfig, 'columns'> = {
    columns: {
      geo: { name: '' },
      primary: { name: '' },
      latitude: { name: '' },
      longitude: { name: '' },
      categorical: { name: '' }
    }
  }

  const result = getColumnNames(columns)
  expect(result).toEqual({
    geoColumnName: null,
    primaryColumnName: null,
    latitudeColumnName: null,
    longitudeColumnName: null,
    categoricalColumnName: null
  })
})
