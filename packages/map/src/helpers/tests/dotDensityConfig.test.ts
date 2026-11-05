import { describe, expect, it } from 'vitest'
import type { MapConfig } from '../../types/MapConfig'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { createNewMapConfig } from '../createNewMapConfig'
import {
  createDefaultDotDensityConfig,
  createDotDensitySeries,
  getConfiguredDotDensitySeries,
  getDotDensityConfig,
  isDotDensitySupported,
  normalizeDotDensityLegend,
  withDotDensityColumns
} from '../dotDensityConfig'
import { getMissingRequiredMapFields } from '../getMissingRequiredMapFields'
import { createTooltipBuilder } from '../../hooks/useTooltip'

const makeConfig = () =>
  createNewMapConfig({
    type: 'map',
    general: { type: 'data', geoType: 'us-county' },
    columns: { geo: { name: 'FIPS' }, primary: { name: '' } },
    data: [{ FIPS: '04013', Cases: 32 }],
    dotDensity: {
      ...createDefaultDotDensityConfig(),
      enabled: true,
      dotValue: 5,
      series: [{ id: 'stable-series', column: 'Cases', label: 'Disease cases', color: '#0072B2' }]
    }
  } as unknown as MapConfig)

describe('persisted dot density configuration', () => {
  it('leaves existing maps disabled without mutating their input', () => {
    const original = { type: 'map', general: { type: 'data', geoType: 'us-county' } }
    const config = createNewMapConfig(original as unknown as MapConfig)
    expect(getDotDensityConfig(config as any)).toEqual(createDefaultDotDensityConfig())
    expect(original).not.toHaveProperty('dotDensity')
  })

  it('supports only county data maps and retains settings while on another geography', () => {
    const config = makeConfig()
    expect(isDotDensitySupported(config)).toBe(true)
    expect(getConfiguredDotDensitySeries(config)).toHaveLength(1)
    const world = { ...config, general: { ...config.general, geoType: 'world' as const } }
    expect(getConfiguredDotDensitySeries(world)).toEqual([])
    expect(world.dotDensity).toEqual(config.dotDensity)
    expect(getConfiguredDotDensitySeries({ ...config, general: { ...config.general, type: 'us-geocode' } })).toEqual([])
  })

  it('persists authored settings and series IDs through JSON, migration, and defaults', () => {
    const config = makeConfig()
    const saved = JSON.parse(JSON.stringify(config))
    const loaded = createNewMapConfig(coveUpdateWorker(saved))
    expect(loaded.dotDensity).toEqual(config.dotDensity)
    expect(loaded.dotDensity.series[0].id).toBe('stable-series')
    expect(loaded.dotDensity).not.toHaveProperty('hiddenSeries')
    expect(loaded.dotDensity).not.toHaveProperty('dots')
  })

  it('consumes prototype legend settings once without mutating the imported config', () => {
    const config = makeConfig()
    const imported = {
      ...config,
      general: { ...config.general, showSidebar: false },
      legend: { ...config.legend, title: '' },
      dotDensity: { ...config.dotDensity!, legend: { show: true, title: 'Outbreaks' } }
    }
    const snapshot = JSON.stringify(imported)
    const normalized = normalizeDotDensityLegend(imported)
    expect(normalized.general.showSidebar).toBe(true)
    expect(normalized.legend.title).toBe('Outbreaks')
    expect(normalized.dotDensity).not.toHaveProperty('legend')
    expect(JSON.stringify(imported)).toBe(snapshot)
    expect(normalizeDotDensityLegend(normalized)).toBe(normalized)
    const dormant = { ...imported, dotDensity: { ...imported.dotDensity, enabled: false } }
    expect(normalizeDotDensityLegend(dormant)).toBe(dormant)
    expect(
      normalizeDotDensityLegend({
        ...imported,
        legend: { ...imported.legend, title: 'Shared title' },
        dotDensity: { ...imported.dotDensity, legend: { show: false, title: 'Old title' } }
      })
    ).toMatchObject({ general: { showSidebar: false }, legend: { title: 'Shared title' } })
  })

  it('creates unique persisted identities even when a removed series is replaced', () => {
    const first = createDotDensitySeries([])
    const replacement = createDotDensitySeries([])
    expect(replacement.id).not.toBe(first.id)
    expect(first.column).toBe('')
  })

  it('accepts density-only data but still requires geography and a usable count column', () => {
    const config = makeConfig()
    expect(getMissingRequiredMapFields(config)).toEqual([])
    expect(
      getMissingRequiredMapFields({ ...config, columns: { ...config.columns, geo: { name: '' } } }).map(
        item => item.field
      )
    ).toEqual(['Geography'])
    expect(
      getMissingRequiredMapFields({ ...config, dotDensity: { ...config.dotDensity!, series: [] } }).map(
        item => item.field
      )
    ).toEqual(['Count Column'])
    expect(
      getMissingRequiredMapFields({ ...config, data: [{ FIPS: '04013', Renamed: 32 }] }).map(item => item.field)
    ).toEqual(['Count Column'])
    const datasets = { assigned: { data: config.data } }
    expect(getMissingRequiredMapFields({ ...config, data: [], dataKey: 'assigned' }, datasets as any)).toEqual([])
    expect(
      getMissingRequiredMapFields({ ...config, dotDensity: { ...config.dotDensity!, enabled: false } }).map(
        item => item.field
      )
    ).toEqual(['Data Column'])
  })

  it('adds native count columns for tooltips/table without mutating or duplicating saved fields', () => {
    const config = makeConfig()
    const snapshot = JSON.stringify(config)
    const prepared = withDotDensityColumns(config)
    expect(Object.values(prepared.columns).filter(column => column.name === 'Cases')).toHaveLength(1)
    expect(
      Object.values(withDotDensityColumns(prepared).columns).filter(column => column.name === 'Cases')
    ).toHaveLength(1)
    expect(JSON.stringify(config)).toBe(snapshot)
    expect(createTooltipBuilder(config).buildTooltip(config.data[0], '04013')).toContain('Disease cases: 32')
  })

  it('preserves an existing authored column whose key matches a generated column slot', () => {
    const config = makeConfig()
    const columns = { ...config.columns, dotDensitySeries0: { name: 'Other', label: 'Other', tooltip: true } }
    const prepared = withDotDensityColumns({ ...config, columns })
    expect((prepared.columns as any).dotDensitySeries0.name).toBe('Other')
    expect(Object.values(prepared.columns).some(column => column.name === 'Cases')).toBe(true)
  })

  it('handles malformed optional series entries without enabling invalid saved flags', () => {
    const config = { ...makeConfig(), dotDensity: { enabled: 'false', series: [null] } } as any
    expect(getDotDensityConfig(config).series).toEqual([])
    expect(getConfiguredDotDensitySeries(config)).toEqual([])
  })
})
