import {
  buildLocationOptions,
  canNavigateMap,
  getLocationLinks,
  hasLocationLinkColumn,
  isLocationSelectorEligible
} from './locationLinks'
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
  it.each([undefined, false, true])('defaults tooltip information only when omitted (%j)', value => {
    expect(defaults.locationLinks.selector.showTooltipInformation).toBe(false)
    expect(
      getLocationLinks({ locationLinks: { selector: { showTooltipInformation: value } } }).selector
        .showTooltipInformation
    ).toBe(value ?? false)
  })
  it.each([undefined, '', 'Report pending.'])('defaults the no-link message without replacing %j', noLinkMessage => {
    expect(getLocationLinks({ locationLinks: { selector: { noLinkMessage } } }).selector.noLinkMessage).toBe(
      noLinkMessage ?? 'No link available for this location.'
    )
  })
  it('hydrates omitted and partial configuration', () => {
    expect(getLocationLinks({} as any)).toEqual(defaults.locationLinks)
    expect(getLocationLinks({ locationLinks: { selector: { label: 'Place' } } }).selector).toEqual({
      ...defaults.locationLinks.selector,
      label: 'Place'
    })
    const hydrated = applyConfigDefaults({ locationLinks: { selector: { enabled: true } } }, defaults)
    expect(hydrated.locationLinks).toEqual({
      ...defaults.locationLinks,
      selector: { ...defaults.locationLinks.selector, enabled: true }
    })
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
    expect(buildLocationOptions(cfg, data).find(option => option.id === 'US-PR').url).toBeUndefined()
  })
  it('uses displayed labels, stable ID ties, and string URLs only', () => {
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
    expect(options[1].url).toBeUndefined()
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
    expect(buildLocationOptions(cfg, data)).toEqual([{ id: 'CAN', label: 'Canada', url: undefined }])
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
