import { describe, expect, it } from 'vitest'
import { mapColorPalettes } from '@cdc/core/data/colorPalettes'
import type { MapConfig } from '../../types/MapConfig'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { createNewMapConfig } from '../createNewMapConfig'
import {
  createDefaultDotDensityConfig,
  createDotDensitySeries,
  getConfiguredDotDensitySeries,
  getDotDensityConfig,
  getActiveHiddenDensitySeries,
  isolateDotDensitySeries,
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

describe('dot density map palettes', () => {
  const paletteConfig = (name = 'qualitative_standard', version = '2.0') => {
    const config = makeConfig()
    config.general.palette = { name, version, isReversed: name.endsWith('reverse') }
    config.dotDensity!.series = [
      { id: 'draft', column: '', label: '' },
      ...['A', 'B', 'C'].map(id => ({ id, column: id, label: id, color: '#123456' }))
    ] as any
    return config
  }

  it('uses the selected map palette instead of legacy colors without consuming draft colors', () => {
    const config = paletteConfig()
    const before = JSON.stringify(config)
    expect(getConfiguredDotDensitySeries(config).map(series => series.color)).toEqual(
      mapColorPalettes.v2.qualitative_standard.slice(0, 3)
    )
    expect(JSON.stringify(config)).toBe(before)
    expect(createDotDensitySeries([])).not.toHaveProperty('color')
  })

  it('follows palette 2.1 distribution and reversal, independently of base numeric bins', () => {
    const config = paletteConfig('qualitative_standard', '2.1')
    config.legend = { ...config.legend, type: 'equalinterval', numberOfItems: 8 }
    expect(getConfiguredDotDensitySeries(config).map(series => series.color)).toEqual(
      [0, 4, 6].map(index => mapColorPalettes.v2.qualitative_standard[index])
    )
    const reversed = paletteConfig('qualitative_standardreverse', '2.1')
    expect(getConfiguredDotDensitySeries(reversed).map(series => series.color)).toEqual(
      [...getConfiguredDotDensitySeries(config)].reverse().map(series => series.color)
    )
  })

  it('honors ordered custom colors before regular custom colors', () => {
    const config = paletteConfig()
    config.general.palette.customColors = ['#111111', '#222222', '#333333']
    config.general.palette.customColorsOrdered = ['#abcdef', '#fedcba']
    expect(getConfiguredDotDensitySeries(config).map(series => series.color)).toEqual(['#abcdef', '#fedcba', '#fedcba'])
  })

  it('reuses available catalog colors when series outnumber the palette', () => {
    const config = paletteConfig()
    config.dotDensity!.series = Array.from({ length: 12 }, (_, index) => ({
      id: String(index),
      column: String(index),
      label: ''
    })) as any
    const colors = getConfiguredDotDensitySeries(config).map(series => series.color)
    expect(colors.slice(0, 9)).toEqual(mapColorPalettes.v2.qualitative_standard)
    expect(colors.slice(9)).toEqual(colors.slice(0, 3))
  })
})

it('isolates, switches, restores, and recovers when the selected category disappears', () => {
  const series = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
  expect(isolateDotDensitySeries(series, [], 'a')).toEqual(['b', 'c'])
  expect(isolateDotDensitySeries(series, ['b', 'c'], 'b')).toEqual(['a', 'c'])
  expect(isolateDotDensitySeries(series, ['a', 'c'], 'b')).toEqual([])
  expect(isolateDotDensitySeries([{ id: 'a' }], [], 'a')).toEqual([])
  expect(getActiveHiddenDensitySeries(series.slice(1), ['b', 'c'])).toEqual([])
  expect(getActiveHiddenDensitySeries(series, ['deleted', 'b', 'b'])).toEqual(['b'])
})

it('preserves legacy map palette versions and regular custom palette precedence', () => {
  const config = makeConfig()
  config.dotDensity!.series = ['a', 'b', 'c'].map(id => ({ id, column: id, label: id }))
  config.general.palette = { name: 'colorblindsafe', version: '1.0', isReversed: false }
  expect(getConfiguredDotDensitySeries(config).map(series => series.color)).toEqual(
    [1, 3, 5].map(index => mapColorPalettes.v1.colorblindsafe[index])
  )
  config.general.palette = {
    name: 'qualitative_standard',
    version: '2.0',
    isReversed: false,
    customColors: ['#101010', '#202020', '#303030']
  }
  expect(getConfiguredDotDensitySeries(config).map(series => series.color)).toEqual(['#101010', '#202020', '#303030'])
})
