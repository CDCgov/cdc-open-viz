import { describe, expect, it } from 'vitest'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'
import { getYAxisFinalizationEligibility } from '../getYAxisFinalizationEligibility'

const getEligibility = (overrides = {}) =>
  getYAxisFinalizationEligibility({
    config: createMockConfig(overrides),
    hasSpacedInlineLabel: false,
    hasValidExplicitLeftMax: false,
    isHorizontal: false
  })

describe('getYAxisFinalizationEligibility', () => {
  it('finalizes automatic clean-top-tick linear Y axes', () => {
    const result = getEligibility({
      yAxis: {
        ...createMockConfig().yAxis,
        type: 'linear',
        autoMaxStrategy: 'clean-top-tick'
      }
    })

    expect(result.shouldUseCleanTopTick).toBe(true)
    expect(result.shouldFinalizePrimaryYAxis).toBe(true)
    expect(result.shouldUseInlineLabelHeadroom).toBe(false)
  })

  it('uses spaced inline labels as headroom for standard non-Combo Y axes', () => {
    const result = getYAxisFinalizationEligibility({
      config: createMockConfig({
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'linear',
          autoMaxStrategy: 'default',
          inlineLabel: ' percent'
        }
      }),
      hasSpacedInlineLabel: true,
      hasValidExplicitLeftMax: false,
      isHorizontal: false
    })

    expect(result.shouldUseInlineLabelHeadroom).toBe(true)
    expect(result.shouldUseCleanTopTick).toBe(true)
    expect(result.shouldFinalizePrimaryYAxis).toBe(true)
  })

  it('does not use spaced inline labels as headroom for Combo charts', () => {
    const result = getYAxisFinalizationEligibility({
      config: createMockConfig({
        visualizationType: 'Combo',
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'linear',
          autoMaxStrategy: 'default',
          inlineLabel: ' percent'
        }
      }),
      hasSpacedInlineLabel: true,
      hasValidExplicitLeftMax: false,
      isHorizontal: false
    })

    expect(result.supportsInlineLabelHeadroom).toBe(false)
    expect(result.shouldUseInlineLabelHeadroom).toBe(false)
    expect(result.shouldFinalizePrimaryYAxis).toBe(false)
  })

  it('still finalizes Combo charts when clean-top-tick is explicitly enabled', () => {
    const result = getEligibility({
      visualizationType: 'Combo',
      yAxis: {
        ...createMockConfig().yAxis,
        type: 'linear',
        autoMaxStrategy: 'clean-top-tick'
      }
    })

    expect(result.shouldUseCleanTopTick).toBe(true)
    expect(result.shouldFinalizePrimaryYAxis).toBe(true)
    expect(result.shouldUseInlineLabelHeadroom).toBe(false)
  })

  it('treats a valid explicit left max as a full finalization bypass', () => {
    const result = getYAxisFinalizationEligibility({
      config: createMockConfig({
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'linear',
          autoMaxStrategy: 'clean-top-tick',
          inlineLabel: ' percent'
        }
      }),
      hasSpacedInlineLabel: true,
      hasValidExplicitLeftMax: true,
      isHorizontal: false
    })

    expect(result.shouldUseCleanTopTick).toBe(false)
    expect(result.shouldFinalizePrimaryYAxis).toBe(false)
  })

  it('does not finalize horizontal, categorical, logarithmic, or special chart Y axes', () => {
    expect(
      getYAxisFinalizationEligibility({
        config: createMockConfig({
          yAxis: {
            ...createMockConfig().yAxis,
            type: 'linear',
            autoMaxStrategy: 'clean-top-tick'
          }
        }),
        hasSpacedInlineLabel: false,
        hasValidExplicitLeftMax: false,
        isHorizontal: true
      }).shouldFinalizePrimaryYAxis
    ).toBe(false)

    expect(
      getEligibility({
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'categorical',
          autoMaxStrategy: 'clean-top-tick'
        }
      }).shouldFinalizePrimaryYAxis
    ).toBe(false)

    expect(
      getEligibility({
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'logarithmic',
          autoMaxStrategy: 'clean-top-tick'
        }
      }).shouldFinalizePrimaryYAxis
    ).toBe(false)

    expect(
      getEligibility({
        visualizationType: 'Box Plot',
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'linear',
          autoMaxStrategy: 'clean-top-tick'
        }
      }).shouldFinalizePrimaryYAxis
    ).toBe(false)

    expect(
      getEligibility({
        visualizationType: 'Bump Chart',
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'linear',
          autoMaxStrategy: 'clean-top-tick'
        }
      }).shouldFinalizePrimaryYAxis
    ).toBe(false)

    expect(
      getEligibility({
        visualizationType: 'Forest Plot',
        yAxis: {
          ...createMockConfig().yAxis,
          type: 'linear',
          autoMaxStrategy: 'clean-top-tick'
        }
      }).shouldFinalizePrimaryYAxis
    ).toBe(false)
  })

  it('treats omitted legacy Y-axis type as linear', () => {
    const result = getEligibility({
      yAxis: {
        ...createMockConfig().yAxis,
        type: undefined,
        autoMaxStrategy: 'clean-top-tick'
      }
    })

    expect(result.hasStandardLinearPrimaryYAxis).toBe(true)
    expect(result.shouldFinalizePrimaryYAxis).toBe(true)
  })
})
