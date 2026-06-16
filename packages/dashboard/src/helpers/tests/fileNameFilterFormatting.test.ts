import { describe, expect, it } from 'vitest'
import {
  formatFileNameFilterTemplate,
  formatFileNameFilterValue,
  getFileNameWhitespaceReplacement
} from '../fileNameFilterFormatting'

describe('fileNameFilterFormatting', () => {
  it('returns the configured filename whitespace replacement', () => {
    expect(getFileNameWhitespaceReplacement()).toBe(' ')
    expect(getFileNameWhitespaceReplacement('Keep Spaces')).toBe(' ')
    expect(getFileNameWhitespaceReplacement('Remove Spaces')).toBe('')
    expect(getFileNameWhitespaceReplacement('Replace With Underscore')).toBe('_')
  })

  it('formats selected values with whitespace replacement', () => {
    expect(formatFileNameFilterValue('New York City', { whitespaceReplacement: 'Keep Spaces' })).toBe('New York City')
    expect(formatFileNameFilterValue('New York City', { whitespaceReplacement: 'Remove Spaces' })).toBe('NewYorkCity')
    expect(formatFileNameFilterValue('New York City', { whitespaceReplacement: 'Replace With Underscore' })).toBe(
      'New_York_City'
    )
  })

  it('formats selected values and templates with legacy capitalization enabled', () => {
    const filter = {
      forceFileNameCapitalization: true,
      whitespaceReplacement: 'Replace With Underscore'
    } as const

    expect(formatFileNameFilterValue('new york city', filter)).toBe('New_York_City')
    expect(formatFileNameFilterTemplate('weekly ${value} report', filter)).toBe('Weekly_${value}_Report')
  })

  it('leaves templates unchanged when legacy capitalization is disabled', () => {
    expect(
      formatFileNameFilterTemplate('weekly ${value} report', {
        whitespaceReplacement: 'Replace With Underscore'
      })
    ).toBe('weekly ${value} report')
  })
})
