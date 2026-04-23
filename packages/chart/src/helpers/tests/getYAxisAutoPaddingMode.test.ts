import { describe, expect, it } from 'vitest'
import { getYAxisAutoPaddingMode } from '../getYAxisAutoPaddingMode'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

describe('getYAxisAutoPaddingMode', () => {
  it('returns inline-label for multi-word inline labels', () => {
    expect(
      getYAxisAutoPaddingMode(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: 'per 100k'
          }
        })
      )
    ).toBe('inline-label')
  })

  it('returns inline-label for inline labels with leading space', () => {
    expect(
      getYAxisAutoPaddingMode(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: ' cases'
          }
        })
      )
    ).toBe('inline-label')
  })

  it('returns top-title for top y-axis titles with label content', () => {
    expect(
      getYAxisAutoPaddingMode(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'top',
            inlineLabel: ''
          }
        })
      )
    ).toBe('top-title')
  })

  it('returns none when neither trigger applies', () => {
    expect(
      getYAxisAutoPaddingMode(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'side',
            inlineLabel: 'Rate'
          }
        })
      )
    ).toBe('none')
  })

  it('returns inline-label when both triggers are present', () => {
    expect(
      getYAxisAutoPaddingMode(
        createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            titlePlacement: 'top',
            inlineLabel: 'per 100k'
          }
        })
      )
    ).toBe('inline-label')
  })
})
