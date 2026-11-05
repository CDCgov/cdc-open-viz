import { describe, expect, it } from 'vitest'
import type { Datasets } from '@cdc/core/types/DataSet'
import type { MapConfig } from '../../types/MapConfig'
import { getMissingRequiredMapFields } from '../getMissingRequiredMapFields'

const makeConfig = ({
  type = 'data',
  geo = '',
  primary = '',
  data = [{ State: 'Alabama', Rate: 10 }],
  bubble
}: {
  type?: string
  geo?: string
  primary?: string
  data?: Record<string, unknown>[]
  bubble?: unknown
} = {}) =>
  ({
    general: { type },
    columns: { geo: { name: geo }, primary: { name: primary } },
    data,
    bubble
  } as unknown as MapConfig)

const fields = (config: MapConfig, datasets?: Datasets) =>
  getMissingRequiredMapFields(config, datasets).map(({ field }) => field)

describe('getMissingRequiredMapFields', () => {
  it('reports both blank Data-map mappings', () => {
    expect(fields(makeConfig())).toEqual(['Geography', 'Data Column'])
  })

  it('reports only the unresolved mapping', () => {
    expect(fields(makeConfig({ geo: 'State' }))).toEqual(['Data Column'])
    expect(fields(makeConfig({ primary: 'Rate' }))).toEqual(['Geography'])
    expect(fields(makeConfig({ geo: 'State', primary: 'Rate' }))).toEqual([])
  })

  it('treats configured names absent from loaded data as missing', () => {
    expect(fields(makeConfig({ geo: 'Old State', primary: 'Old Rate' }))).toEqual(['Geography', 'Data Column'])
  })

  it('does not invalidate non-empty mappings before columns load', () => {
    expect(fields(makeConfig({ geo: 'State', primary: 'Rate', data: [] }))).toEqual([])
  })

  it('uses the assigned dashboard dataset when config data is unavailable', () => {
    const datasets = {
      dashboardData: { data: [{ State: 'Alabama', Rate: 10 }] }
    } as unknown as Datasets
    const config = { ...makeConfig({ geo: 'State', primary: 'Missing', data: [] }), dataKey: 'dashboardData' }

    expect(fields(config, datasets)).toEqual(['Data Column'])
  })

  it.each(['embedded', 'assigned'])('accepts sparse density counts in %s data', source => {
    const rows = [{ FIPS: '04001' }, { FIPS: '04013', Cases: 32 }]
    const config = {
      ...makeConfig({ geo: 'FIPS', data: source === 'embedded' ? rows : [] }),
      general: { type: 'data', geoType: 'us-county' },
      dataKey: 'dashboardData',
      dotDensity: {
        enabled: true,
        series: [{ id: 'cases', column: 'Cases', label: 'Cases', color: '#0072b2' }]
      }
    } as unknown as MapConfig
    const datasets = { dashboardData: { data: rows } } as unknown as Datasets
    expect(fields(config, datasets)).toEqual([])
    expect(
      fields(
        {
          ...config,
          dotDensity: { ...config.dotDensity!, series: [{ ...config.dotDensity!.series[0], column: 'Missing' }] }
        },
        datasets
      )
    ).toEqual(['Count Column'])
  })

  it('keeps density mappings available after dashboard filters retain only sparse rows', () => {
    const config = {
      ...makeConfig({ geo: 'FIPS', data: [{ FIPS: '04013', a: 50, derived: 12 }] }),
      general: { type: 'data', geoType: 'us-county' },
      dataKey: 'dashboardData',
      dotDensity: {
        enabled: true,
        series: [
          { id: 'a', column: 'a', label: 'A', color: '#0072b2' },
          { id: 'b', column: 'b', label: 'B', color: '#d55e00' },
          { id: 'derived', column: 'derived', label: 'Derived', color: '#000000' }
        ]
      }
    } as unknown as MapConfig
    const datasets = {
      dashboardData: {
        data: [
          { FIPS: '04013', a: 50 },
          { FIPS: '04001', b: 25 }
        ]
      }
    } as unknown as Datasets
    expect(fields(config, datasets)).toEqual([])
    expect(
      fields(
        {
          ...config,
          dotDensity: { ...config.dotDensity!, series: [{ ...config.dotDensity!.series[0], column: 'Missing' }] }
        },
        datasets
      )
    ).toEqual(['Count Column'])
    expect(
      fields({ ...config, columns: { ...config.columns, geo: { name: 'Raw FIPS' } } }, {
        dashboardData: { data: [{ 'Raw FIPS': '04013', a: 50, b: 25 }] }
      } as unknown as Datasets)
    ).toEqual(['Geography'])
  })

  it.each(['us', 'us-county', 'us-region', 'world', 'single-state'])(
    'uses the same requirements for %s geography',
    geoType => {
      const config = makeConfig()
      config.general.geoType = geoType as MapConfig['general']['geoType']
      expect(fields(config)).toEqual(['Geography', 'Data Column'])
    }
  )

  it('supports the legacy map type', () => {
    expect(fields(makeConfig({ type: 'map' }))).toEqual(['Geography', 'Data Column'])
  })

  it('exempts Data maps with a configured bubble layer', () => {
    const bubble = {
      layers: [
        {
          locationSource: 'data-column',
          columns: { geo: { name: 'State' }, primary: { name: 'Rate' } }
        }
      ]
    }
    expect(fields(makeConfig({ bubble }))).toEqual([])
  })

  it.each(['navigation', 'us-geocode', 'world-geocode'])('does not apply Data-map requirements to %s maps', type => {
    expect(fields(makeConfig({ type }))).toEqual([])
  })
})
