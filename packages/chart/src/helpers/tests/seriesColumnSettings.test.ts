import {
  createDefaultSeriesColumnConfig,
  findColumnConfigByName,
  getSeriesColumnConfig,
  getSeriesOwnedColumnNames,
  upsertSeriesColumnConfig
} from '../seriesColumnSettings'

describe('seriesColumnSettings', () => {
  it('returns all current series data keys as owned column names', () => {
    expect(getSeriesOwnedColumnNames([{ dataKey: 'cases' }, { dataKey: 'deaths' }, {}])).toEqual(['cases', 'deaths'])
  })

  it('finds an existing column config by configured name', () => {
    const result = findColumnConfigByName(
      {
        additionalColumn1: { name: 'cases', label: 'Cases', tooltips: true }
      },
      'cases'
    )

    expect(result).toEqual({
      columnKey: 'additionalColumn1',
      columnConfig: { name: 'cases', label: 'Cases', tooltips: true }
    })
  })

  it('returns a default-backed series column config when none exists yet', () => {
    const result = getSeriesColumnConfig({}, 'cases')

    expect(result.columnKey).toBe('cases')
    expect(result.columnConfig).toEqual(createDefaultSeriesColumnConfig('cases'))
  })

  it('updates an existing matching column config without changing its key', () => {
    const updatedColumns = upsertSeriesColumnConfig(
      {
        additionalColumn1: { name: 'cases', label: 'Cases', dataTable: false }
      },
      'cases',
      { prefix: '$', commas: true }
    )

    expect(updatedColumns).toEqual({
      additionalColumn1: {
        ...createDefaultSeriesColumnConfig('cases'),
        name: 'cases',
        label: 'Cases',
        dataTable: false,
        prefix: '$',
        commas: true
      }
    })
  })
})
