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

  it('preserves top-level map columns when adding bubble layer columns', () => {
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

    expect(prepared.config.columns.geo.name).toBe('country')
    expect(prepared.config.columns.primary.name).toBe('outbreakStatus')
    expect((prepared.config.columns as any).bubbleLayer0Primary).toMatchObject({
      name: 'diseaseType',
      label: 'diseaseType',
      dataTable: true
    })
    expect((prepared.config.columns as any).bubbleLayer0Size).toMatchObject({
      name: 'cases',
      label: 'cases',
      dataTable: true
    })
  })

  it('adds unique bubble layer primary and size columns alongside configured map columns', () => {
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
              primary: { name: 'diseaseType', label: 'Disease Type' },
              size: { name: 'cases', label: 'Case Count' }
            }
          }
        ]
      }
    })

    const prepared = prepareBubbleMapDataTable(config, config.columns, {})

    expect(prepared.config.columns.geo.name).toBe('country')
    expect(prepared.config.columns.primary.name).toBe('outbreakStatus')
    expect((prepared.config.columns as any).bubbleLayer0Primary).toMatchObject({
      name: 'diseaseType',
      label: 'Disease Type',
      dataTable: true
    })
    expect((prepared.config.columns as any).bubbleLayer0Size).toMatchObject({
      name: 'cases',
      label: 'Case Count',
      dataTable: true
    })
    expect(Object.values(prepared.config.columns).filter((column: any) => column.name === 'country')).toHaveLength(1)
  })

  it('adds bubble columns when a data-column layer inherits map geography', () => {
    const config = createConfig({
      columns: {
        geo: {
          name: 'STATE',
          label: 'Location',
          dataTable: true
        },
        primary: {
          name: 'Rate',
          label: 'Rate',
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
              geo: { name: '' },
              primary: { name: 'Location' },
              size: { name: 'Rate' }
            }
          }
        ]
      }
    })

    const prepared = prepareBubbleMapDataTable(config, config.columns, {})

    expect(prepared.config.columns.geo.name).toBe('STATE')
    expect(prepared.config.columns.primary.name).toBe('Rate')
    expect((prepared.config.columns as any).bubbleLayer0Primary).toMatchObject({
      name: 'Location',
      label: 'Location',
      dataTable: true
    })
    expect(Object.values(prepared.config.columns).filter((column: any) => column.name === 'Rate')).toHaveLength(1)
  })

  it('uses bubble geography when the configured map geography column is not in the data', () => {
    const config = createConfig({
      data: [
        { STATE: 'Alabama', Rate: 130, Location: 'Vehicle' },
        { STATE: 'California', Rate: 30, Location: 'Home' }
      ],
      columns: {
        geo: {
          name: 'FIPS Codes',
          label: 'Location',
          dataTable: true
        },
        primary: {
          name: '',
          label: 'Rate',
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
              geo: { name: 'STATE' },
              primary: { name: 'Rate' },
              size: { name: 'Rate' }
            }
          }
        ]
      }
    })

    const prepared = prepareBubbleMapDataTable(config, config.columns, {})

    expect(prepared.config.columns.geo).toMatchObject({
      name: 'STATE',
      label: 'Location',
      dataTable: true
    })
    expect(prepared.config.columns.primary).toMatchObject({
      name: 'Rate',
      label: 'Rate',
      dataTable: true
    })
    expect((prepared.config.columns as any).bubbleLayer0Geo).toBeUndefined()
    expect(Object.values(prepared.config.columns).filter((column: any) => column.name === 'Rate')).toHaveLength(1)
  })

  it('adds the size column for size-only bubble layers', () => {
    const config = createConfig({
      bubble: {
        layers: [
          {
            minBubbleSize: 4,
            maxBubbleSize: 28,
            extraBubbleBorder: false,
            showBubbleZeros: false,
            legend: {
              size: {
                title: 'Case Count'
              }
            },
            columns: {
              geo: { name: 'State' },
              primary: { name: '' },
              size: { name: 'Cases' }
            }
          }
        ]
      }
    })

    const prepared = prepareBubbleMapDataTable(config, config.columns, {})

    expect(prepared.config.columns.geo).toMatchObject({
      name: 'State',
      label: 'Location',
      dataTable: true
    })
    expect(prepared.config.columns.primary.name).toBe('')
    expect((prepared.config.columns as any).bubbleLayer0Size).toMatchObject({
      name: 'Cases',
      label: 'Case Count',
      dataTable: true
    })
  })
})
