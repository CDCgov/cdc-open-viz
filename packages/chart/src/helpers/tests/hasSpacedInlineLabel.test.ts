import { describe, expect, it } from 'vitest'
import { hasSpacedInlineLabel } from '../hasSpacedInlineLabel'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

describe('hasSpacedInlineLabel', () => {
  it('returns true for multi-word inline labels', () => {
    expect(
      hasSpacedInlineLabel(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: 'per 100k'
          }
        })
      )
    ).toBe(true)
  })

  it('returns true for inline labels with leading space', () => {
    expect(
      hasSpacedInlineLabel(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: ' cases'
          }
        })
      )
    ).toBe(true)
  })

  it('returns false for top y-axis titles with empty inline labels', () => {
    expect(
      hasSpacedInlineLabel(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'top',
            inlineLabel: ''
          }
        })
      )
    ).toBe(false)
  })

  it('returns false when the inline label has no spaces', () => {
    expect(
      hasSpacedInlineLabel(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: 'Rate'
          }
        })
      )
    ).toBe(false)
  })

  it('returns true for spaced inline labels regardless of title placement', () => {
    expect(
      hasSpacedInlineLabel(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'top',
            inlineLabel: 'per 100k'
          }
        })
      )
    ).toBe(true)
  })
})
