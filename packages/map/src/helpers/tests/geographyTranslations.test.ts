import { describe, expect, it } from 'vitest'
import { getGeographyUidAlias, getLocalizedGeographyName, normalizeGeographyName } from '../geographyTranslations'

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
})
