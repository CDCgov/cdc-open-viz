import { describe, expect, it } from 'vitest'
import {
  getCountryGeographyUidAlias,
  getGeographyUidAlias,
  getLocalizedGeographyName,
  normalizeGeographyName
} from '../geographyTranslations'
import spanishCountryNames from '../../data/spanish-country-names.json'

describe('geographyTranslations', () => {
  it('normalizes accents, punctuation, and whitespace', () => {
    expect(normalizeGeographyName('  Nuevo MéXico  ')).toBe('NUEVO MEXICO')
    expect(normalizeGeographyName('U.S. Virgin Islands')).toBe('US VIRGIN ISLANDS')
  })

  it('resolves Spanish names to canonical UIDs', () => {
    expect(getGeographyUidAlias('NUEVO MÉXICO')).toBe('US-NM')
    expect(getGeographyUidAlias('Islas Vírgenes de los EE. UU.')).toBe('US-VI')
  })

  it('falls back for unsupported display locales', () => {
    expect(getLocalizedGeographyName('US-NM', 'en-US')).toBeUndefined()
    expect(getLocalizedGeographyName('US-NM', 'es-MX')).toBe('Nuevo México')
  })

  it.each(Object.entries(spanishCountryNames))('looks up the approved translation for %s', (uid, name) => {
    expect(getLocalizedGeographyName(uid, 'es-MX')).toBe(name)
    expect(getLocalizedGeographyName(uid.toLowerCase(), 'es')).toBe(name)
    expect(getLocalizedGeographyName(uid, 'en-US')).toBeUndefined()
    expect(getLocalizedGeographyName(uid, 'fr-FR')).toBeUndefined()
    expect(getLocalizedGeographyName(uid)).toBeUndefined()
  })

  it.each(['XAC', 'XBK', 'SAH', 'VUT', 'XWK', 'unknown'])(
    'leaves untranslated geography %s for English fallback',
    uid => {
      expect(getLocalizedGeographyName(uid, 'es-MX')).toBeUndefined()
    }
  )

  it('resolves country names without adding country aliases to US data matching', () => {
    expect(getCountryGeographyUidAlias('Alemania')).toBe('DEU')
    expect(getCountryGeographyUidAlias('Czech Republic')).toBe('CZE')
    expect(getCountryGeographyUidAlias('  japon  ')).toBe('JPN')
    expect(getGeographyUidAlias('Georgia')).toBe('US-GA')
    expect(getGeographyUidAlias('Alemania')).toBeUndefined()
  })
})
