import { describe, it, expect } from 'vitest'
import { filterCountyTableRuntimeDataByStateCode, prepareBubbleMapDataTable } from '../dataTableHelpers'

describe('filterCountyTableRuntimeDataByStateCode', () => {
  it('filters county rows by selected state fips prefix', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '06013': { uid: '06013', value: 2 },
      '12001': { uid: '12001', value: 3 }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '06')

    expect(Object.keys(filtered)).toEqual(['06001', '06013'])
    expect(filtered['06001'].value).toBe(1)
    expect(filtered['12001']).toBeUndefined()
  })

  it('filters county rows when state fips is provided without leading zero', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '06013': { uid: '06013', value: 2 },
      '12001': { uid: '12001', value: 3 }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '6')

    expect(Object.keys(filtered)).toEqual(['06001', '06013'])
    expect(filtered['06001'].value).toBe(1)
    expect(filtered['12001']).toBeUndefined()
  })

  it('preserves non-enumerable fromHash metadata', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '12001': { uid: '12001', value: 2 }
    }

    Object.defineProperty(runtimeData, 'fromHash', {
      value: 12345,
      enumerable: false
    })

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '06')

    expect(filtered.fromHash).toBe(12345)
    expect(Object.keys(filtered)).toEqual(['06001'])
  })

  it('filters us-geocode rows by configured state column when uid is not county fips', () => {
    const runtimeData = {
      'ID:2472': { uid: 'ID:2472', 'State/Territory': 'Alabama' },
      'ID:1010': { uid: 'ID:1010', 'State/Territory': 'California' },
      'ID:2020': { uid: 'ID:2020', 'State/Territory': 'California' }
    }

    const config = {
      columns: {
        additionalColumn1: { name: 'State/Territory' }
      }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '06', config)

    expect(Object.keys(filtered)).toEqual(['ID:1010', 'ID:2020'])
    expect(filtered['ID:2472']).toBeUndefined()
  })

  it('returns original runtime data when state fips is empty', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 }
    }

    const filtered = filterCountyTableRuntimeDataByStateCode(runtimeData, '')

    expect(filtered).toBe(runtimeData)
  })
})

describe('prepareBubbleMapDataTable', () => {
  const createConfig = (overrides: any = {}) =>
    ({
      type: 'map',
      general: {
        type: 'data',
        geoType: 'us'
      },
      columns: {
        geo: {
          name: '',
          label: 'Location',
          dataTable: true
        },
        primary: {
          name: '',
          label: 'Total Confirmed Cases',
          dataTable: true
        }
      },
      bubble: {
        migratedToBubbleAccordion: true,
        layers: [
          {
            minBubbleSize: 1,
            maxBubbleSize: 20,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'State' },
              primary: { name: 'Cases' }
            }
          }
        ]
      },
      ...overrides
    } as any)

  it('fills missing map table column names from the primary bubble layer', () => {
    const config = createConfig()
    const runtimeData = {
      '06': { uid: '06', State: 'California', Cases: 12 }
    }

    const prepared = prepareBubbleMapDataTable(config, config.columns, runtimeData)

    expect(prepared.config.columns.geo).toMatchObject({
      name: 'State',
      label: 'Location',
      dataTable: true
    })
    expect(prepared.config.columns.primary).toMatchObject({
      name: 'Cases',
      label: 'Total Confirmed Cases',
      dataTable: true
    })
    expect(prepared.columns).toBe(prepared.config.columns)
    expect(prepared.runtimeData).toBe(runtimeData)
    expect(config.columns.geo.name).toBe('')
    expect(config.columns.primary.name).toBe('')
  })

  it('preserves top-level map columns when they are already configured', () => {
    const config = createConfig({
      columns: {
        geo: {
          name: 'country',
          label: 'Country',
          dataTable: true
        },
        primary: {
          name: 'outbreakStatus',
          label: 'Active Outbreak',
          dataTable: true
        }
      },
      bubble: {
        layers: [
          {
            minBubbleSize: 4,
            maxBubbleSize: 28,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            columns: {
              geo: { name: 'country' },
              primary: { name: 'diseaseType' },
              size: { name: 'cases' }
            }
          }
        ]
      }
    })

    const prepared = prepareBubbleMapDataTable(config, config.columns, {})

    expect(prepared.config).toBe(config)
    expect(prepared.columns).toBe(config.columns)
    expect(prepared.config.columns.geo.name).toBe('country')
    expect(prepared.config.columns.primary.name).toBe('outbreakStatus')
  })
})
