import { describe, expect, it } from 'vitest'
import update_4_26_11 from '../4.26.11'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { applyConfigDefaults } from '../../applyConfigDefaults'
import mapDefaults from '../../../../map/src/data/initial-state'

describe('update_4_26_11', () => {
  const legacyMap = () => ({ type: 'map', general: { type: 'map', geoType: 'us' } })

  it('repairs standalone maps without mutating the input and is idempotent', () => {
    const config = { ...legacyMap(), version: '4.26.10', data: [{ state: 'Alabama' }] }
    const original = structuredClone(config)

    const result = update_4_26_11(config)

    expect(result.general).toEqual({ type: 'data', geoType: 'us' })
    expect(result.type).toBe('map')
    expect(result.data).toEqual(config.data)
    expect(config).toEqual(original)
    expect(update_4_26_11(result)).toEqual(result)
  })

  it('repairs dashboard maps while preserving other visualization types and the input', () => {
    const config = {
      type: 'dashboard',
      general: { type: 'map' },
      visualizations: {
        map: legacyMap(),
        chart: { type: 'chart', general: { type: 'map' } },
        nested: { type: 'dashboard', visualizations: { map: legacyMap() } }
      }
    }
    const original = structuredClone(config)

    const result = update_4_26_11(config)

    expect(result.visualizations.map.general.type).toBe('data')
    expect(result.visualizations.nested.visualizations.map.general.type).toBe('data')
    expect(result.visualizations.chart).toEqual(config.visualizations.chart)
    expect(result.general).toEqual(config.general)
    expect(config).toEqual(original)
    expect(update_4_26_11(result)).toEqual(result)
  })

  it.each(['data', 'navigation', 'us-geocode', 'world-geocode', 'bubble', null, '', 'unknown', undefined])(
    'preserves interaction type %s',
    type => {
      const general = { type, geoType: 'us' }
      expect(update_4_26_11({ type: 'map', general }).general).toEqual(general)
    }
  )

  it.each([{}, { general: {} }, { general: null }])('preserves missing and null fields: %j', fields => {
    const result = update_4_26_11({ type: 'map', ...fields })
    const { version, ...repaired } = result
    expect(repaired).toEqual({ type: 'map', ...fields })
  })

  it.each([{}, { general: {} }, { general: { type: undefined } }])(
    'leaves missing fields for normal map default hydration: %j',
    fields => {
      const migrated = coveUpdateWorker({ type: 'map', version: '4.26.10', ...fields })
      expect(migrated.general?.type).toBeUndefined()
      expect(applyConfigDefaults(migrated, mapDefaults).general.type).toBe('data')
    }
  )

  it.each(['chart', 'dashboard', 'waffle-chart', undefined])('preserves non-map visualization %s', type => {
    expect(update_4_26_11({ type, general: { type: 'map' } }).general.type).toBe('map')
  })

  it.each([
    ['4.26.10', 'data'],
    ['4.26.11', 'map']
  ])('respects worker eligibility for configs saved at %s', (version, expectedType) => {
    const result = coveUpdateWorker({ ...legacyMap(), version })
    expect(result.general.type).toBe(expectedType)
    expect(coveUpdateWorker(result).general.type).toBe(expectedType)
  })

  it('uses worker recursion and each multi-dashboard child’s version eligibility', () => {
    const child = (version?: string) => ({
      type: 'dashboard',
      ...(version ? { version } : {}),
      dashboard: {},
      rows: [],
      visualizations: { map: legacyMap() }
    })
    const config = {
      ...child('4.26.10'),
      multiDashboards: [child(), child('4.26.10'), child('4.26.11')]
    }
    const original = structuredClone(config)
    const result = coveUpdateWorker(config)

    expect(result.visualizations.map.general.type).toBe('data')
    expect(result.multiDashboards.map(child => child.visualizations.map.general.type)).toEqual(['data', 'data', 'map'])
    expect(config).toEqual(original)
  })

  it('migrates an older child even when its parent is already current', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.11',
      multiDashboards: [
        { version: '4.26.10', visualizations: { map: legacyMap() } },
        { visualizations: { map: legacyMap() } }
      ]
    })

    expect(result.multiDashboards[0].visualizations.map.general.type).toBe('data')
    expect(result.multiDashboards[1].visualizations.map.general.type).toBe('map')
  })
})

const map = (name: any = 'URL', extra = {}) => ({
  type: 'map',
  version: '4.26.10',
  general: { type: 'data' },
  columns: { navigate: { name } },
  data: [],
  ...extra
})

describe('4.26.11 location link compatibility', () => {
  it('preserves location links after repairing a legacy map interaction type', () => {
    const input = map('URL', { general: { type: 'map' } })
    const result = coveUpdateWorker(input as any)

    expect(result.general.type).toBe('data')
    expect(result.locationLinks).toEqual({ enableMapNavigation: true, enableDataTableLinks: true })
    expect(input.general.type).toBe('map')
    expect(input).not.toHaveProperty('locationLinks')
    expect(update_4_26_11(result)).toEqual(result)
  })

  it.each([{ data: [] }, { data: [{ State: 'Alabama' }] }])(
    'uses configured columns independently of data: %j',
    ({ data }) => {
      const input = map('URL', { data })
      const result = coveUpdateWorker(input as any)
      expect(result.locationLinks).toEqual({ enableMapNavigation: true, enableDataTableLinks: true })
      expect(input).not.toHaveProperty('locationLinks')
      expect(update_4_26_11(result)).toEqual(result)
    }
  )
  it.each([undefined, null, '', '   ', 12])('leaves unconfigured columns untouched: %j', name => {
    expect(update_4_26_11(map(name, { columns: { navigate: { name } } }))).not.toHaveProperty('locationLinks')
  })
  it('preserves authored flags and selector settings', () => {
    const settings = {
      enableMapNavigation: false,
      enableDataTableLinks: false,
      selector: { enabled: true, label: 'Places' }
    }
    expect(update_4_26_11(map('URL', { locationLinks: settings })).locationLinks).toEqual(settings)
    expect(update_4_26_11(map('URL', { locationLinks: { enableMapNavigation: false } })).locationLinks).toEqual({
      enableMapNavigation: false,
      enableDataTableLinks: true
    })
  })
  it('handles dashboard and inherited-version multi-dashboard children', () => {
    const dashboard = { type: 'dashboard', version: '4.26.10', dashboard: {}, rows: [], visualizations: { map: map() } }
    const result = coveUpdateWorker({ ...dashboard, multiDashboards: [{ ...dashboard, version: undefined }] } as any)
    expect(result.visualizations.map.locationLinks.enableMapNavigation).toBe(true)
    expect(result.multiDashboards[0].visualizations.map.locationLinks.enableDataTableLinks).toBe(true)
  })
  it('leaves Navigation maps and other visualization types unchanged', () => {
    expect(update_4_26_11(map('URL', { general: { type: 'navigation' } }))).not.toHaveProperty('locationLinks')
    expect(update_4_26_11(map('URL', { type: 'chart' }))).not.toHaveProperty('locationLinks')
  })
  it('does not migrate maps saved at the current version', () => {
    expect(coveUpdateWorker(map('URL', { version: '4.26.11' }) as any)).not.toHaveProperty('locationLinks')
  })
})
