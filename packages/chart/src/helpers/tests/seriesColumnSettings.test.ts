import {
  createDefaultSeriesColumnConfig,
  findColumnConfigByName,
  getSeriesColumnConfig,
  getSeriesColumnFormattingParams,
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
        name: 'cases',
        label: 'Cases',
        dataTable: false,
        prefix: '$',
        commas: true
      }
    })
  })

  it('removes fields when an update value is undefined', () => {
    const updatedColumns = upsertSeriesColumnConfig(
      {
        cases: { name: 'cases', label: 'Cases', roundToPlace: 2 }
      },
      'cases',
      { roundToPlace: undefined }
    )

    expect(updatedColumns).toEqual({
      cases: {
        name: 'cases',
        label: 'Cases'
      }
    })
  })

  it('does not persist display defaults when creating a new series-owned column config', () => {
    expect(upsertSeriesColumnConfig({}, 'cases', { label: 'Cases' })).toEqual({
      cases: {
        name: 'cases',
        label: 'Cases'
      }
    })
  })

  it('does not create a rounding override when updating unrelated display settings', () => {
    expect(upsertSeriesColumnConfig({}, 'cases', { dataTable: false })).toEqual({
      cases: {
        name: 'cases',
        dataTable: false
      }
    })
  })

  it('only returns explicit formatting overrides and preserves falsey values', () => {
    expect(
      getSeriesColumnFormattingParams({
        prefix: '$',
        suffix: ' units',
        roundToPlace: 0,
        commas: false
      })
    ).toEqual({
      addColPrefix: '$',
      addColSuffix: ' units',
      addColRoundTo: 0,
      addColCommas: false
    })
  })

  it('ignores blank prefix and suffix overrides so global formatting can apply', () => {
    expect(
      getSeriesColumnFormattingParams({
        prefix: '',
        suffix: '',
        roundToPlace: 0,
        commas: false
      })
    ).toEqual({
      addColRoundTo: 0,
      addColCommas: false
    })
  })

  it('ignores blank rounding overrides so global formatting can apply', () => {
    expect(
      getSeriesColumnFormattingParams({
        roundToPlace: '',
        commas: false
      })
    ).toEqual({
      addColCommas: false
    })
  })

  it('returns undefined when no formatting overrides were explicitly configured', () => {
    expect(getSeriesColumnFormattingParams({ label: 'Cases' })).toBeUndefined()
  })
})
