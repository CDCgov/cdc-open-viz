import { titleCase } from '../titleCase'

describe('titleCase', () => {
  it('should return undefined for falsy input', () => {
    expect(titleCase(undefined)).toBeUndefined()
    expect(titleCase(null)).toBeUndefined()
    expect(titleCase('')).toBeUndefined()
  })

  it('should convert simple strings to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World')
    expect(titleCase('HELLO WORLD')).toBe('Hello World')
    expect(titleCase('HeLLo WoRLd')).toBe('Hello World')
  })

  it('should keep "of", "the", and "and" lowercase in title case', () => {
    expect(titleCase('DISTRICT OF COLUMBIA')).toBe('District of Columbia')
    expect(titleCase('District Of Columbia')).toBe('District of Columbia')
    expect(titleCase('district of columbia')).toBe('District of Columbia')
  })

  it('should handle "Federated States of Micronesia" correctly', () => {
    expect(titleCase('FEDERATED STATES OF MICRONESIA')).toBe('Federated States of Micronesia')
    expect(titleCase('Federated States Of Micronesia')).toBe('Federated States of Micronesia')
  })

  it('should handle "Republic of the Congo" correctly', () => {
    expect(titleCase('REPUBLIC OF THE CONGO')).toBe('Republic of the Congo')
    expect(titleCase('Republic Of The Congo')).toBe('Republic of the Congo')
  })

  it('should handle "and" in country names correctly', () => {
    expect(titleCase('ANTIGUA AND BARBUDA')).toBe('Antigua and Barbuda')
    expect(titleCase('TRINIDAD AND TOBAGO')).toBe('Trinidad and Tobago')
    expect(titleCase('BOSNIA AND HERZEGOVINA')).toBe('Bosnia and Herzegovina')
  })

  it('should handle hyphenated strings correctly', () => {
    expect(titleCase('INTER-TRIBAL INDIAN RESERVATION')).toBe('Inter-Tribal Indian Reservation')
    expect(titleCase('inter-tribal indian reservation')).toBe('Inter-Tribal Indian Reservation')
  })

  it('should handle en dash strings correctly', () => {
    expect(titleCase('PUERTO RICO–VIRGIN ISLANDS')).toBe('Puerto Rico–Virgin Islands')
    expect(titleCase('puerto rico–virgin islands')).toBe('Puerto Rico–Virgin Islands')
  })

  it('should handle mixed case strings with "of"', () => {
    expect(titleCase('UNIVERSITY OF WASHINGTON')).toBe('University of Washington')
    expect(titleCase('STATE OF ALASKA')).toBe('State of Alaska')
  })

  it('should handle single words', () => {
    expect(titleCase('CALIFORNIA')).toBe('California')
    expect(titleCase('california')).toBe('California')
  })

  it('should handle strings with multiple "of" and "the" occurrences', () => {
    expect(titleCase('OFFICE OF THE STATE OF CALIFORNIA')).toBe('Office of the State of California')
    expect(titleCase('DEMOCRATIC REPUBLIC OF THE CONGO')).toBe('Democratic Republic of the Congo')
  })

  it('should handle hyphenated strings with "of", "the", and "and"', () => {
    expect(titleCase('KINGDOM OF THE NETHERLANDS-ARUBA')).toBe('Kingdom of the Netherlands-Aruba')
    expect(titleCase('SAINT VINCENT AND THE GRENADINES-ISLAND')).toBe('Saint Vincent and the Grenadines-Island')
  })

  it('should handle "Commonwealth of the Northern Mariana Islands"', () => {
    expect(titleCase('COMMONWEALTH OF THE NORTHERN MARIANA ISLANDS')).toBe(
      'Commonwealth of the Northern Mariana Islands'
    )
    expect(titleCase('commonwealth of the northern mariana islands')).toBe(
      'Commonwealth of the Northern Mariana Islands'
    )
  })
})
