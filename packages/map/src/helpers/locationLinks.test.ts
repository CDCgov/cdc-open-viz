import { buildLocationOptions, getLocationSelector, isLocationSelectorEligible } from './locationSelector'
import { canNavigateMap, getLocationLinks, hasLocationLinkColumn } from './locationLinks'
import { createNewMapConfig } from './createNewMapConfig'
import generateRuntimeData from './generateRuntimeData'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { applyConfigDefaults } from '@cdc/core/helpers/applyConfigDefaults'
import defaults from '../data/initial-state'

const config = (extra = {}) =>
  createNewMapConfig({
    general: { type: 'data', geoType: 'us' },
    columns: { geo: { name: 'State', displayColumn: 'Label' }, navigate: { name: 'URL' } },
    ...extra
  } as any)

describe('location link options', () => {
  it.each(['', '   ', undefined])(
    'requires a configured URL column (%j) even when direct navigation is saved on',
    name => {
      const cfg = config({ locationLinks: { enableMapNavigation: true } })
      cfg.columns.navigate.name = name
      expect(hasLocationLinkColumn(cfg)).toBe(false)
      expect(canNavigateMap(cfg)).toBe(false)
      expect(cfg.locationLinks.enableMapNavigation).toBe(true)
      cfg.columns.navigate.name = 'URL'
      expect(canNavigateMap(cfg)).toBe(true)
    }
  )
  it('hydrates omitted and partial selector settings with independent defaults', () => {
    for (const locationSelector of [undefined, {}, { enabled: true }]) {
      const hydrated = applyConfigDefaults({ locationSelector }, defaults)
      expect(getLocationSelector(hydrated)).toEqual({ ...defaults.locationSelector, ...locationSelector })
    }
    expect(defaults.locationSelector).toEqual({
      enabled: false,
      position: 'above',
      highlightSelectedLocation: false,
      information: '',
      label: 'Select a location for more information',
      placeholder: '- Select -',
      filterColumn: ''
    })
  })
  it.each(['above', 'below', 'bottom', '', null])('normalizes position %j without mutating settings', position => {
    const cfg = config({ locationSelector: { position } })
    expect(getLocationSelector(cfg).position).toBe(position === 'below' ? 'below' : 'above')
    expect(cfg.locationSelector.position).toBe(position)
  })
  it.each([undefined, null, '', '  ', '\n', 0, false, 'value', 'not a URL'])(
    'filters presence for %j on the current runtime row',
    value => {
      const cfg = config({ locationSelector: { filterColumn: 'Presence' } })
      const options = buildLocationOptions(cfg, { 'US-AL': { Presence: value } })
      expect(options).toHaveLength(value == null || (typeof value === 'string' && !value.trim()) ? 0 : 1)
    }
  )
  it('includes all eligible rows by default and excludes all when the configured column is missing', () => {
    const cfg = config()
    expect(buildLocationOptions(cfg, { 'US-AL': {} })).toHaveLength(1)
    cfg.locationSelector.filterColumn = 'Missing'
    expect(buildLocationOptions(cfg, { 'US-AL': {} })).toEqual([])
  })
  it('stamps new maps so migration retains current defaults even with a URL column', () => {
    const result = coveUpdateWorker(config())
    expect(result.locationLinks).toEqual(defaults.locationLinks)
  })
  it.each([false, true])('includes states, territories, and DC on hex=%s, without requiring links', displayAsHex => {
    const cfg = config({
      general: { geoType: 'us', type: 'data', displayAsHex },
      data: [
        { State: 'Alabama', URL: '/al' },
        { State: 'Puerto Rico' },
        { State: 'District of Columbia', URL: ' ' },
        { State: 'unknown' }
      ]
    })
    const data = generateRuntimeData(cfg, [], 1, false)
    expect(
      buildLocationOptions(cfg, data)
        .map(option => option.id)
        .sort()
    ).toEqual(['US-AL', 'US-DC', 'US-PR'])
  })
  it('uses displayed labels and stable ID ties', () => {
    const options = buildLocationOptions(config(), {
      'US-AK': { Label: 'Same', URL: 123 },
      'US-AL': { Label: 'Same', URL: '/al' },
      'US-WY': { Label: 'First', URL: '\n ' }
    })
    expect(options.map(({ id, label }) => [id, label])).toEqual([
      ['US-WY', 'First'],
      ['US-AK', 'Same'],
      ['US-AL', 'Same']
    ])
  })
  it('respects hidden world countries, filters, and no URL column', () => {
    const cfg = config({
      general: { type: 'data', geoType: 'world', countriesPicked: [{ iso: 'CAN' }], hideUnselectedCountries: true },
      columns: { geo: { name: 'State' }, navigate: { name: '' } },
      data: [
        { State: 'Canada', Filter: 'yes' },
        { State: 'Mexico', Filter: 'yes' },
        { State: 'France', Filter: 'no' }
      ]
    })
    const data = generateRuntimeData(cfg, [{ columnName: 'Filter', active: 'yes' }] as any, 1, false)
    expect(buildLocationOptions(cfg, data)).toEqual([{ id: 'CAN', label: 'Canada' }])
    cfg.general.hideUnselectedCountries = false
    expect(buildLocationOptions(cfg, data).map(option => option.id)).toEqual(['CAN', 'MEX'])
  })
  it.each(['us-county', 'us-region', 'single-state'])('excludes %s selectors', geoType => {
    expect(isLocationSelectorEligible(config({ general: { type: 'data', geoType } }))).toBe(false)
  })
  it('excludes Navigation, geocode, and small multiples', () => {
    for (const type of ['navigation', 'us-geocode', 'world-geocode']) {
      expect(isLocationSelectorEligible(config({ general: { type, geoType: 'world' } }))).toBe(false)
    }
    expect(isLocationSelectorEligible(config({ smallMultiples: { mode: 'by-column' } }))).toBe(false)
  })
})
