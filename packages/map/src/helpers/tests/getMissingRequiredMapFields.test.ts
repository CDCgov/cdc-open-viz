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
