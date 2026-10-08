import React, { forwardRef, useContext, useEffect } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'
import BarChartRaceFallback from './BarChartRaceFallback'

vi.mock('../LinearChart', () => ({
  default: forwardRef<SVGAElement>((_props, ref) => {
    const { config, updateConfig } = useContext(ConfigContext)

    useEffect(() => {
      updateConfig?.({ ...config, isLollipopChart: false })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <svg
        ref={ref}
        data-testid='fallback-chart'
        data-is-lollipop={String(config.isLollipopChart)}
        data-orientation={config.orientation}
        data-style={config.barStyle}
        data-subtype={config.visualizationSubType}
      />
    )
  })
}))

describe('BarChartRaceFallback', () => {
  it('renders a regular horizontal projection without persisting its normalization', () => {
    const baseConfig = createMockConfig()
    const updateConfig = vi.fn()
    const config = createMockConfig({
      visualizationType: 'Bar',
      visualizationSubType: 'racing',
      orientation: 'vertical',
      barStyle: 'rounded',
      isLollipopChart: true,
      xAxis: { ...baseConfig.xAxis, anchors: ['x-axis-anchor'] },
      yAxis: { ...baseConfig.yAxis, anchors: ['y-axis-anchor'] }
    })

    render(
      <ConfigContext.Provider value={createMockChartContext(config, { updateConfig })}>
        <BarChartRaceFallback parentWidth={700} parentHeight={400} />
      </ConfigContext.Provider>
    )

    expect(screen.getByTestId('fallback-chart')).toHaveAttribute('data-subtype', 'regular')
    expect(screen.getByTestId('fallback-chart')).toHaveAttribute('data-orientation', 'horizontal')
    expect(screen.getByTestId('fallback-chart')).toHaveAttribute('data-style', 'flat')
    expect(screen.getByTestId('fallback-chart')).toHaveAttribute('data-is-lollipop', 'false')
    expect(updateConfig).not.toHaveBeenCalled()
    expect(config).toMatchObject({
      barStyle: 'rounded',
      isLollipopChart: true,
      orientation: 'vertical',
      visualizationSubType: 'racing'
    })
  })
})
