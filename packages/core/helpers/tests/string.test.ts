import { describe, it, expect } from 'vitest'
import { sanitizeToSvgId } from '../cove/string'

describe('sanitizeToSvgId', () => {
  describe('valid SVG IDs', () => {
    it('returns already valid ID unchanged', () => {
      expect(sanitizeToSvgId('validId')).toBe('validId')
    })

    it('preserves IDs starting with letters', () => {
      expect(sanitizeToSvgId('Location')).toBe('Location')
    })

    it('preserves IDs starting with uppercase letters', () => {
      expect(sanitizeToSvgId('MyValidId')).toBe('MyValidId')
    })

    it('preserves IDs starting with underscore', () => {
      expect(sanitizeToSvgId('_underscore')).toBe('_underscore')
    })

    it('preserves valid IDs with hyphens', () => {
      expect(sanitizeToSvgId('valid-id-123')).toBe('valid-id-123')
    })

    it('preserves valid IDs with underscores', () => {
      expect(sanitizeToSvgId('valid_id_123')).toBe('valid_id_123')
    })

    it('preserves alphanumeric IDs', () => {
      expect(sanitizeToSvgId('abc123XYZ')).toBe('abc123XYZ')
    })
  })

  describe('strings starting with numbers', () => {
    it('prefixes ID when starting with a number', () => {
      expect(sanitizeToSvgId('123')).toBe('id-123')
    })

    it('prefixes ID when starting with zero', () => {
      expect(sanitizeToSvgId('0abc')).toBe('id-0abc')
    })

    it('prefixes complex string starting with number', () => {
      expect(sanitizeToSvgId('2020-Q3')).toBe('id-2020-Q3')
    })

    it('handles string starting with number and spaces', () => {
      expect(sanitizeToSvgId('123 Main Street')).toBe('id-123-Main-Street')
    })
  })

  describe('strings with special characters', () => {
    it('replaces spaces with hyphens', () => {
      expect(sanitizeToSvgId('Coverage Type')).toBe('Coverage-Type')
    })

    it('replaces multiple consecutive spaces with single hyphen', () => {
      expect(sanitizeToSvgId('hello   world')).toBe('hello---world')
    })

    it('replaces special characters with hyphens', () => {
      expect(sanitizeToSvgId('name@domain.com')).toBe('name-domain-com')
    })

    it('handles mixed special characters', () => {
      expect(sanitizeToSvgId('user#123$test')).toBe('user-123-test')
    })

    it('replaces parentheses with hyphens', () => {
      expect(sanitizeToSvgId('value(percent)')).toBe('value-percent-')
    })

    it('replaces brackets with hyphens', () => {
      expect(sanitizeToSvgId('data[key]')).toBe('data-key-')
    })

    it('replaces forward slashes', () => {
      expect(sanitizeToSvgId('path/to/resource')).toBe('path-to-resource')
    })

    it('replaces commas and periods', () => {
      expect(sanitizeToSvgId('value1,value2.value3')).toBe('value1-value2-value3')
    })
  })

  describe('strings with only special characters', () => {
    it('sanitizes string with only spaces', () => {
      expect(sanitizeToSvgId('   ')).toBe('id----')
    })

    it('sanitizes string with only special characters', () => {
      expect(sanitizeToSvgId('###')).toBe('id----')
    })

    it('sanitizes string with mixed special characters only', () => {
      expect(sanitizeToSvgId('@#$%')).toBe('id-----')
    })

    it('sanitizes string with only punctuation', () => {
      expect(sanitizeToSvgId('...')).toBe('id----')
    })
  })

  describe('empty and edge cases', () => {
    it('handles empty string', () => {
      expect(sanitizeToSvgId('')).toBe('id-')
    })

    it('handles single character strings', () => {
      expect(sanitizeToSvgId('a')).toBe('a')
    })

    it('handles single underscore', () => {
      expect(sanitizeToSvgId('_')).toBe('_')
    })

    it('handles single hyphen (gets prefixed)', () => {
      expect(sanitizeToSvgId('-')).toBe('id--')
    })

    it('handles single number (gets prefixed)', () => {
      expect(sanitizeToSvgId('5')).toBe('id-5')
    })
  })

  describe('mixed special characters and spaces', () => {
    it('handles spaces at start and end', () => {
      expect(sanitizeToSvgId(' test ')).toBe('id--test-')
    })

    it('handles complex string with multiple character types', () => {
      expect(sanitizeToSvgId('My Data! (2023)')).toBe('My-Data---2023-')
    })

    it('handles string with tabs and newlines', () => {
      expect(sanitizeToSvgId('line1\nline2\tline3')).toBe('line1-line2-line3')
    })

    it('handles percentage symbols and dollar signs', () => {
      expect(sanitizeToSvgId('Cost: $50 (25%)')).toBe('Cost---50--25--')
    })

    it('handles ampersands', () => {
      expect(sanitizeToSvgId('Tom & Jerry')).toBe('Tom---Jerry')
    })

    it('handles quotes and apostrophes', () => {
      expect(sanitizeToSvgId("It's a \"test\"")).toBe('It-s-a--test-')
    })
  })

  describe('real-world map data examples', () => {
    it('sanitizes state abbreviation with dash', () => {
      expect(sanitizeToSvgId('US-VT')).toBe('US-VT')
    })

    it('sanitizes location data with spaces', () => {
      expect(sanitizeToSvgId('New York')).toBe('New-York')
    })

    it('sanitizes category data with special characters', () => {
      expect(sanitizeToSvgId('Age Group: 18-24')).toBe('Age-Group--18-24')
    })

    it('sanitizes measurement units', () => {
      expect(sanitizeToSvgId('Temperature (°F)')).toBe('Temperature---F-')
    })

    it('sanitizes data keys with colons', () => {
      expect(sanitizeToSvgId('Year:Quarter')).toBe('Year-Quarter')
    })
  })

  describe('unicode and international characters', () => {
    it('replaces unicode characters with hyphens', () => {
      expect(sanitizeToSvgId('café')).toBe('caf-')
    })

    it('handles emoji', () => {
      expect(sanitizeToSvgId('happy 😊 face')).toBe('happy----face')
    })

    it('handles currency symbols', () => {
      expect(sanitizeToSvgId('Price €100')).toBe('Price--100')
    })
  })

  describe('consecutive special characters', () => {
    it('preserves consecutive hyphens from replaced characters', () => {
      expect(sanitizeToSvgId('a..b..c')).toBe('a--b--c')
    })

    it('handles multiple consecutive special characters', () => {
      expect(sanitizeToSvgId('test!!!###')).toBe('test------')
    })

    it('handles mixed consecutive special characters', () => {
      expect(sanitizeToSvgId('value@#$%test')).toBe('value----test')
    })
  })

  describe('case preservation', () => {
    it('preserves original casing', () => {
      expect(sanitizeToSvgId('CamelCase')).toBe('CamelCase')
    })

    it('preserves uppercase', () => {
      expect(sanitizeToSvgId('UPPERCASE')).toBe('UPPERCASE')
    })

    it('preserves mixed case', () => {
      expect(sanitizeToSvgId('MixedCase123')).toBe('MixedCase123')
    })
  })

  describe('type coercion', () => {
    it('converts number to string and sanitizes', () => {
      expect(sanitizeToSvgId(123 as any)).toBe('id-123')
    })

    it('converts null to string and sanitizes', () => {
      expect(sanitizeToSvgId(null as any)).toBe('null')
    })

    it('converts undefined to string and sanitizes', () => {
      expect(sanitizeToSvgId(undefined as any)).toBe('undefined')
    })

    it('converts boolean to string and sanitizes', () => {
      expect(sanitizeToSvgId(true as any)).toBe('true')
    })
  })
})
