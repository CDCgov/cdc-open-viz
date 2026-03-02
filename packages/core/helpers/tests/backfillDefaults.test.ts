import { backfillDefaults } from '../backfillDefaults'
import { expect, describe, it } from 'vitest'
import { LEGACY_CHART_DEFAULTS } from '@cdc/chart/src/data/legacy-defaults'
import { LEGACY_MAP_DEFAULTS } from '@cdc/map/src/data/legacy-defaults'
import chartDefaults from '@cdc/chart/src/data/initial-state'
import mapDefaults from '@cdc/map/src/data/initial-state'

// ============================================================================
// backfillDefaults — pure function tests
// ============================================================================

describe('backfillDefaults', () => {
  it('fills missing properties from defaults into config', () => {
    const config = { yAxis: { hideLabel: false } }
    const defaults = { yAxis: { hideLabel: true, gridLines: true, numTicks: 4 } }
    backfillDefaults(config, defaults)
    expect(config.yAxis.gridLines).toBe(true)
    expect(config.yAxis.numTicks).toBe(4)
  })

  it('preserves existing config values including falsy ones', () => {
    const config = {
      yAxis: { hideAxis: false, numTicks: '', gridLines: false },
      dataFormat: { commas: false },
      table: { expanded: 0 }
    }
    const defaults = {
      yAxis: { hideAxis: true, numTicks: 4, gridLines: true },
      dataFormat: { commas: true },
      table: { expanded: false }
    }
    backfillDefaults(config, defaults)
    expect(config.yAxis.hideAxis).toBe(false)
    expect(config.yAxis.numTicks).toBe('')
    expect(config.yAxis.gridLines).toBe(false)
    expect(config.dataFormat.commas).toBe(false)
    expect(config.table.expanded).toBe(0)
  })

  it('preserves null config values (does not overwrite with default)', () => {
    const config = { yAxis: { numTicks: null } }
    const defaults = { yAxis: { numTicks: 4 } }
    backfillDefaults(config, defaults)
    expect(config.yAxis.numTicks).toBeNull()
  })

  it('skips arrays and primitive top-level keys', () => {
    const config = { filters: [], title: 'My Chart', yAxis: { hideAxis: false } } as any
    const defaults = { filters: [{ name: 'default' }], title: 'Default', yAxis: { hideAxis: true, numTicks: 4 } }
    backfillDefaults(config, defaults)
    expect(config.filters).toEqual([])
    expect(config.title).toBe('My Chart')
    expect(config.yAxis.numTicks).toBe(4)
  })

  it('skips top-level keys that exist in defaults but not in config', () => {
    const config = { yAxis: { hideAxis: false } } as any
    const defaults = { yAxis: { hideAxis: true }, legend: { position: 'top' } }
    backfillDefaults(config, defaults)
    expect(config.legend).toBeUndefined()
  })

  it('legacy changed-value entries override new defaults for missing properties', () => {
    const config = { yAxis: {} } as any
    const defaults = { yAxis: { numTicks: 6 } }
    const legacy = { yAxis: { numTicks: '' } }
    backfillDefaults(config, defaults, legacy)
    expect(config.yAxis.numTicks).toBe('')
  })

  it('legacy undefined entries prevent backfill entirely', () => {
    const config = { xAxis: {} } as any
    const defaults = { xAxis: { dateDisplayFormat: '%b. %-d %Y' } }
    const legacy = { xAxis: { dateDisplayFormat: undefined } }
    backfillDefaults(config, defaults, legacy)
    expect(config.xAxis.dateDisplayFormat).toBeUndefined()
    expect('dateDisplayFormat' in config.xAxis).toBe(false)
  })

  it('legacy is ignored when config already has the property', () => {
    const config = { yAxis: { numTicks: 10 } }
    const defaults = { yAxis: { numTicks: 6 } }
    const legacy = { yAxis: { numTicks: '' } }
    backfillDefaults(config, defaults, legacy)
    expect(config.yAxis.numTicks).toBe(10)
  })

  it('no legacy arg falls back to defaults normally', () => {
    const config = { yAxis: {} } as any
    const defaults = { yAxis: { numTicks: 6 } }
    backfillDefaults(config, defaults)
    expect(config.yAxis.numTicks).toBe(6)
  })

  it('empty legacy object falls back to defaults normally', () => {
    const config = { yAxis: {} } as any
    const defaults = { yAxis: { numTicks: 6 } }
    backfillDefaults(config, defaults, {})
    expect(config.yAxis.numTicks).toBe(6)
  })

  it('works with multiple sections in a single call', () => {
    const config = { yAxis: {}, xAxis: {}, legend: {} } as any
    const defaults = {
      yAxis: { numTicks: 4 },
      xAxis: { numTicks: 6 },
      legend: { position: 'top' }
    }
    backfillDefaults(config, defaults)
    expect(config.yAxis.numTicks).toBe(4)
    expect(config.xAxis.numTicks).toBe(6)
    expect(config.legend.position).toBe('top')
  })
})

// ============================================================================
// Chart legacy defaults protection
// ============================================================================

describe('chart legacy defaults protection', () => {
  it('old config with yAxis.numTicks: "" keeps "" (not replaced with 4)', () => {
    const config = { yAxis: { numTicks: '' } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.yAxis.numTicks).toBe('')
  })

  it('old config with yAxis.hideAxis: false keeps false (not replaced with true)', () => {
    const config = { yAxis: { hideAxis: false } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.yAxis.hideAxis).toBe(false)
  })

  it('old config with yAxis.gridLines: false keeps false (not replaced with true)', () => {
    const config = { yAxis: { gridLines: false } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.yAxis.gridLines).toBe(false)
  })

  it('old config with yAxis.hideTicks: false keeps false (not replaced with true)', () => {
    const config = { yAxis: { hideTicks: false } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.yAxis.hideTicks).toBe(false)
  })

  it('old config with xAxis.numTicks: "" keeps "" (not replaced with 6)', () => {
    const config = { xAxis: { numTicks: '' } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.xAxis.numTicks).toBe('')
  })

  it('old config missing xAxis.viewportNumTicks does NOT get { xs: 4, xxs: 4 }', () => {
    const config = { xAxis: { numTicks: '' } } as any
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.xAxis.viewportNumTicks).toBeUndefined()
  })

  it('old config missing xAxis.dateDisplayFormat does NOT get the new default', () => {
    const config = { xAxis: { numTicks: '' } } as any
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.xAxis.dateDisplayFormat).toBeUndefined()
  })

  it('old config with table.expanded: true keeps true (not replaced with false)', () => {
    const config = { table: { expanded: true } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.table.expanded).toBe(true)
  })

  it('old config with legend.position: "right" keeps "right" (not replaced with "top")', () => {
    const config = { legend: { position: 'right' } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.legend.position).toBe('right')
  })

  it('old config with dataFormat.commas: false keeps false (not replaced with true)', () => {
    const config = { dataFormat: { commas: false } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.dataFormat.commas).toBe(false)
  })

  it('old config with tooltips.dateDisplayFormat: "" keeps "" (not replaced with new format)', () => {
    const config = { tooltips: { dateDisplayFormat: '' } }
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)
    expect(config.tooltips.dateDisplayFormat).toBe('')
  })

  it('new config (no properties set) gets all the new defaults correctly', () => {
    const config = {
      yAxis: {},
      xAxis: {},
      table: {},
      legend: {},
      dataFormat: {},
      tooltips: {},
      general: {}
    } as any
    backfillDefaults(config, chartDefaults, LEGACY_CHART_DEFAULTS)

    expect(config.yAxis.hideAxis).toBe(false)
    expect(config.yAxis.hideTicks).toBe(false)
    expect(config.yAxis.gridLines).toBe(false)
    expect(config.yAxis.numTicks).toBe('')
    expect(config.table.expanded).toBe(true)
    expect(config.table.dateDisplayFormat).toBe('')
    expect(config.legend.position).toBe('right')
    expect(config.dataFormat.commas).toBe(false)
    expect(config.tooltips.dateDisplayFormat).toBe('')
    expect(config.xAxis.numTicks).toBe('')
    // New properties should NOT be backfilled for old configs
    expect(config.xAxis.dateDisplayFormat).toBeUndefined()
    expect(config.xAxis.viewportNumTicks).toBeUndefined()
    expect(config.general.useIntelligentLineChartLabels).toBeUndefined()
  })
})

// ============================================================================
// Map legacy defaults protection
// ============================================================================

describe('map legacy defaults protection', () => {
  it('old config with legend.style: "circles" keeps "circles" (not replaced with "gradient")', () => {
    const config = { legend: { style: 'circles' } }
    backfillDefaults(config, mapDefaults, LEGACY_MAP_DEFAULTS)
    expect(config.legend.style).toBe('circles')
  })

  it('old config with legend.position: "side" keeps "side" (not replaced with "top")', () => {
    const config = { legend: { position: 'side' } }
    backfillDefaults(config, mapDefaults, LEGACY_MAP_DEFAULTS)
    expect(config.legend.position).toBe('side')
  })

  it('old config with legend.numberOfItems: 3 keeps 3 (not replaced with 5)', () => {
    const config = { legend: { numberOfItems: 3 } }
    backfillDefaults(config, mapDefaults, LEGACY_MAP_DEFAULTS)
    expect(config.legend.numberOfItems).toBe(3)
  })

  it('old config with legend.hideBorder: false keeps false (not replaced with true)', () => {
    const config = { legend: { hideBorder: false } }
    backfillDefaults(config, mapDefaults, LEGACY_MAP_DEFAULTS)
    expect(config.legend.hideBorder).toBe(false)
  })

  it('old config missing one property gets the legacy value, not the new default', () => {
    const config = { legend: { style: 'circles' } } as any
    backfillDefaults(config, mapDefaults, LEGACY_MAP_DEFAULTS)
    expect(config.legend.style).toBe('circles')
    expect(config.legend.position).toBe('side')
    expect(config.legend.numberOfItems).toBe(3)
    expect(config.legend.hideBorder).toBe(false)
  })
})
