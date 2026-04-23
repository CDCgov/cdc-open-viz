import React from 'react'
import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { useEditorPermissions } from './useEditorPermissions'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'
import { ChartConfig } from '../../types/ChartConfig'

const renderUseEditorPermissions = (configOverrides: Partial<ChartConfig>) => {
  const config = createMockConfig(configOverrides)
  const context = createMockChartContext(config)
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <ConfigContext.Provider value={context}>{children}</ConfigContext.Provider>
  )

  return renderHook(() => useEditorPermissions(), { wrapper })
}

describe('useEditorPermissions', () => {
  it('shows manual y-axis padding controls when auto-padding mode is none', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'side',
        inlineLabel: 'Rate'
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(true)
  })

  it('hides manual y-axis padding controls for inline-label auto-padding', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'side',
        inlineLabel: 'per 100k'
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(false)
  })

  it('hides manual y-axis padding controls for top-title auto-padding', () => {
    const { result } = renderUseEditorPermissions({
      yAxis: {
        ...createMockConfig().yAxis,
        titlePlacement: 'top',
        label: 'Y-Axis',
        inlineLabel: ''
      }
    })

    expect(result.current.visSupportsYPadding()).toBe(false)
  })
})
