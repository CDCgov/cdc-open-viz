import { describe, expect, it } from 'vitest'
import { createTooltipBuilder } from '../../hooks/useTooltip'
import { displayGeoName } from '../displayGeoName'

describe('displayGeoName', () => {
  it('resolves lowercase world iso codes to country names', () => {
    expect(displayGeoName('ssd')).toBe('South Sudan')
    expect(displayGeoName('usa')).toBe('United States of America')
  })

  it.each([
    ['Republic of Chad', 'Chad'],
    ['Democratic Republic of Congo', 'Democratic Republic of the Congo']
  ])('displays world country alias %s as canonical name %s', (countryAlias, canonicalName) => {
    expect(displayGeoName(countryAlias)).toBe(canonicalName)
  })

  it.each([
    ['Republic of Chad', 'Chad'],
    ['Democratic Republic of Congo', 'Democratic Republic of the Congo']
  ])('uses the canonical name for world tooltip alias %s', (countryAlias, canonicalName) => {
    const config = {
      general: {
        geoType: 'world',
        type: 'data',
        hideGeoColumnInTooltip: false,
        hidePrimaryColumnInTooltip: false,
        geoLabelOverride: ''
      },
      columns: {
        geo: { name: 'Location', label: 'Location', tooltip: false, displayColumn: '' },
        primary: { name: 'Value', label: 'Value', tooltip: true },
        navigate: { name: '' }
      },
      legend: { specialClasses: [] },
      tooltips: { noDataLabel: 'No Data' }
    }

    const tooltip = createTooltipBuilder(config as any).buildTooltip({ Location: countryAlias, Value: 1 }, countryAlias)

    expect(tooltip).toContain(`<p class="tooltip-heading" style="text-transform: none;">${canonicalName}</p>`)
  })

  it('formats the District of Columbia state key as a display label', () => {
    expect(displayGeoName('US-DC')).toBe('District of Columbia')
  })

  it.each([
    ['US-AS', 'American Samoa'],
    ['US-VI', 'U.S. Virgin Islands'],
    ['US-MP', 'Northern Mariana Islands'],
    ['US-FM', 'Micronesia'],
    ['US-PW', 'Palau'],
    ['US-MH', 'Marshall Islands']
  ])('formats geography key %s as %s', (geographyKey, expectedName) => {
    expect(displayGeoName(geographyKey)).toBe(expectedName)
  })

  it('prefers the provided display override', () => {
    expect(displayGeoName('ssd', 'Custom South Sudan')).toBe('Custom South Sudan')
  })

  it('ignores display overrides that only restate the raw code with different casing', () => {
    expect(displayGeoName('ssd', 'Ssd')).toBe('South Sudan')
    expect(displayGeoName('SSD', 'ssd')).toBe('South Sudan')
  })

  it.each([
    ['US-NM', 'Nuevo México'],
    ['US-DC', 'Distrito de Columbia'],
    ['US-VI', 'Islas Vírgenes de los EE. UU.']
  ])('localizes %s for Spanish', (geographyKey, expectedName) => {
    expect(displayGeoName(geographyKey, undefined, 'es-MX')).toBe(expectedName)
  })

  it('keeps explicit display overrides ahead of locale translation', () => {
    expect(displayGeoName('US-NM', 'Custom name', 'es-MX')).toBe('Custom name')
  })

  it('localizes raw English geography names for tooltip and table-column values', () => {
    expect(displayGeoName('New Mexico', undefined, 'es-MX')).toBe('Nuevo México')
  })

  it('resolves Spanish geography input to the English name', () => {
    expect(displayGeoName('Nuevo México', undefined, 'en-US')).toBe('New Mexico')
  })

  it.each([
    ['AFG', 'Afghanistan', 'Afganistán'],
    ['BRA', 'Brazil', 'Brasil'],
    ['CZE', 'Czechia', 'Chequia'],
    ['DEU', 'Germany', 'Alemania'],
    ['EGY', 'Egypt', 'Egipto'],
    ['JPN', 'Japan', 'Japón'],
    ['NZL', 'New Zealand', 'Nueva Zelandia'],
    ['CIV', "Côte D'ivoire", 'Costa de Marfil'],
    ['SGS', 'South Georgia and the South Sandwich Islands', 'Islas Georgia del Sur y Sándwich del Sur'],
    ['Easter Island', 'Easter Island', 'Isla de Pascua'],
    ['Madeira Islands', 'Madeira Islands', 'Islas Madeira']
  ])('switches %s between English and the approved Spanish name', (uid, english, spanish) => {
    expect(displayGeoName(uid, undefined, 'en-US')).toBe(english)
    expect(displayGeoName(uid, undefined, 'es-MX')).toBe(spanish)
    expect(displayGeoName(uid.toLowerCase(), undefined, 'es-MX')).toBe(spanish)
    expect(displayGeoName(english, undefined, 'es-MX')).toBe(spanish)
    expect(displayGeoName(spanish, undefined, 'en-US')).toBe(english)
    expect(displayGeoName(uid, undefined, 'en-US')).toBe(english)
    expect(displayGeoName(uid, 'Author label', 'es-MX')).toBe('Author label')
  })

  it('preserves canonical codes and existing state translations where country names overlap', () => {
    expect(displayGeoName('GEO', undefined, 'es-MX')).toBe('Georgia')
    expect(displayGeoName('US-GA', undefined, 'es-MX')).toBe('Georgia')
    expect(displayGeoName('US-HI', undefined, 'es-MX')).toBe('Hawái')
    expect(displayGeoName('US-VI', undefined, 'es-MX')).toBe('Islas Vírgenes de los EE. UU.')
    expect(displayGeoName('VIR', undefined, 'es-MX')).toBe('Islas Vírgenes (de los EE. UU.)')
  })
})
