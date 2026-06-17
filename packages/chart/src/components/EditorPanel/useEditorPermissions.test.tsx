import React from 'react'
import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { useEditorPermissions } from './useEditorPermissions'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'
import { ChartConfig } from '../../types/ChartConfig'

const renderUseEditorPermissions = (
  configOverrides: Partial<ChartConfig>,
  contextOverrides: Partial<ReturnType<typeof createMockChartContext>> = {}
) => {
  const config = createMockConfig(configOverrides)
  const context = createMockChartContext(config, contextOverrides)
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <ConfigContext.Provider value={context}>{children}</ConfigContext.Provider>
  )

  return renderHook(() => useEditorPermissions(), { wrapper })
}

describe('useEditorPermissions', () => {
  it('shows manual y-axis padding controls when there is no spaced inline label', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'side',
        inlineLabel: 'Rate'
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(true)
  })

  it('hides manual y-axis padding controls for spaced inline labels', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'side',
        inlineLabel: 'per 100k'
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(false)
  })

  it('shows manual y-axis padding controls for Combo charts with spaced inline labels', () => {
    const { result } = renderUseEditorPermissions({
      visualizationType: 'Combo',
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'side',
        inlineLabel: 'per 100k'
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(true)
  })

  it('shows manual y-axis padding controls for top y-axis titles', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'top',
        label: 'Y-Axis',
        inlineLabel: ''
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(true)
  })

  it('supports series color assignments only for eligible authored-series charts', () => {
    const supported = renderUseEditorPermissions({
      visualizationType: 'Line',
      series: [{ dataKey: 'cases', type: 'Line' }] as any
    })

    expect(supported.result.current.visSupportsSeriesColorAssignments()).toBe(true)

    const unsupported = renderUseEditorPermissions({
      visualizationType: 'Pie',
      series: [{ dataKey: 'cases', type: 'Pie' }] as any
    })

    expect(unsupported.result.current.visSupportsSeriesColorAssignments()).toBe(false)
  })

  it('shows filter-domain behavior when a standalone chart has visible filters and automatic max', () => {
    const { result } = renderUseEditorPermissions({
      filters: [{ columnName: 'Region', showDropdown: true } as any],
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(true)
  })

  it('shows filter-domain behavior for horizontal bar charts when automatic max can respond to filters', () => {
    const { result } = renderUseEditorPermissions({
      visualizationType: 'Bar',
      orientation: 'horizontal',
      filters: [{ columnName: 'Region', showDropdown: true } as any],
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(true)
  })

  it('shows filter-domain behavior for dashboard charts without local filters', () => {
    const { result } = renderUseEditorPermissions(
      {
        filters: [],
        yAxis: {
          ...createMockConfig().yAxis,
          max: '',
          type: 'linear'
        }
      },
      { isDashboard: true }
    )

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(true)
  })

  it('hides filter-domain behavior when vertical value-axis max is explicit', () => {
    const { result } = renderUseEditorPermissions(
      {
        filters: [{ columnName: 'Region', showDropdown: true } as any],
        yAxis: {
          ...createMockConfig().yAxis,
          max: '100',
          type: 'linear'
        }
      },
      { isDashboard: true }
    )

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(false)
  })

  it('hides filter-domain behavior for horizontal charts when value-axis max is explicit', () => {
    const { result } = renderUseEditorPermissions(
      {
        visualizationType: 'Bar',
        orientation: 'horizontal',
        filters: [{ columnName: 'Region', showDropdown: true } as any],
        xAxis: {
          ...createMockConfig().xAxis,
          max: '100'
        },
        yAxis: {
          ...createMockConfig().yAxis,
          max: '',
          type: 'linear'
        }
      },
      { isDashboard: true }
    )

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(false)
  })

  it('hides filter-domain behavior for unfiltered standalone charts', () => {
    const { result } = renderUseEditorPermissions({
      filters: [],
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(false)
  })

  it('hides filter-domain behavior for charts outside the value-axis allowlist', () => {
    const { result } = renderUseEditorPermissions(
      {
        visualizationType: 'Bump Chart',
        filters: [{ columnName: 'Region', showDropdown: true } as any],
        yAxis: {
          ...createMockConfig().yAxis,
          max: '',
          type: 'linear'
        }
      },
      { isDashboard: true }
    )

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(false)
  })

  it('hides filter-domain behavior for chart types with specialized value scales', () => {
    const { result } = renderUseEditorPermissions(
      {
        visualizationType: 'Paired Bar',
        filters: [{ columnName: 'Region', showDropdown: true } as any],
        yAxis: {
          ...createMockConfig().yAxis,
          max: '',
          type: 'linear'
        }
      },
      { isDashboard: true }
    )

    expect(result.current.visSupportsFilterDomainBehavior()).toBe(false)
  })

  it('shows automatic max strategy for automatic numeric value axes', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsAutoMaxStrategy()).toBe(true)
  })

  it('shows automatic max strategy for horizontal charts with automatic value axes', () => {
    const { result } = renderUseEditorPermissions({
      visualizationType: 'Bar',
      orientation: 'horizontal',
      xAxis: {
        ...createMockConfig().xAxis,
        max: ''
      },
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsAutoMaxStrategy()).toBe(true)
  })

  it('hides automatic max strategy when vertical value-axis max is explicit', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        max: '100',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsAutoMaxStrategy()).toBe(false)
  })

  it('hides automatic max strategy for horizontal charts when value-axis max is explicit', () => {
    const { result } = renderUseEditorPermissions({
      visualizationType: 'Bar',
      orientation: 'horizontal',
      xAxis: {
        ...createMockConfig().xAxis,
        max: '100'
      },
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsAutoMaxStrategy()).toBe(false)
  })

  it('hides automatic max strategy for categorical value axes', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'categorical'
      }
    })

    expect(result.current.visSupportsAutoMaxStrategy()).toBe(false)
  })

  it('hides automatic max strategy for chart types with specialized value scales', () => {
    const { result } = renderUseEditorPermissions({
      visualizationType: 'Paired Bar',
      yAxis: {
        ...createMockConfig().yAxis,
        max: '',
        type: 'linear'
      }
    })

    expect(result.current.visSupportsAutoMaxStrategy()).toBe(false)
  })
})
