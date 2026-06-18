import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../../LinearChart/tests/mockConfigContext'

vi.mock('@visx/axis', () => ({
  AxisLeft: ({ tickValues }: { tickValues?: number[] }) => (
    <div data-testid='axis-left' data-tick-values={JSON.stringify(tickValues ?? null)} />
  ),
  AxisRight: ({ tickValues }: { tickValues?: number[] }) => (
    <div data-testid='axis-right' data-tick-values={JSON.stringify(tickValues ?? null)} />
  )
}))

import LeftAxis from '../LeftAxis'
import LeftAxisGridlines from '../LeftAxisGridlines'
import RightAxis from '../RightAxis'

const tickValues = [0, 5, 10, 15]

const renderWithContext = (children: React.ReactNode) => {
  const config = createMockConfig({
    runtime: {
      ...createMockConfig().runtime,
      yAxis: {
        ...createMockConfig().runtime.yAxis,
        rightNumTicks: 4
      }
    } as any
  })

  return render(<ConfigContext.Provider value={createMockChartContext(config)}>{children}</ConfigContext.Provider>)
}

describe('axis tick values', () => {
  it('passes supplied tick values to the left axis', () => {
    renderWithContext(
      <LeftAxis
        yScale={{}}
        xScale={{}}
        yMax={100}
        xMax={300}
        yAxisWidth={50}
        numTicks={4}
        tickValues={tickValues}
        tickLabelFontSize={16}
        axisLabelFontSize={16}
        handleLeftTickFormatting={tick => String(tick)}
      />
    )

    expect(JSON.parse(screen.getByTestId('axis-left').dataset.tickValues || 'null')).toEqual(tickValues)
  })

  it('passes supplied tick values to left-axis gridlines', () => {
    renderWithContext(
      <LeftAxisGridlines
        yScale={{}}
        xMax={300}
        yAxisWidth={50}
        numTicks={4}
        tickValues={tickValues}
        axisLabelFontSize={16}
      />
    )

    expect(JSON.parse(screen.getByTestId('axis-left').dataset.tickValues || 'null')).toEqual(tickValues)
  })

  it('passes supplied tick values to the right axis', () => {
    renderWithContext(
      <RightAxis
        yScaleRight={{} as any}
        yMax={100}
        xMax={300}
        yAxisWidth={50}
        tickValues={tickValues}
        tickLabelFontSize={16}
        axisLabelFontSize={16}
      />
    )

    expect(JSON.parse(screen.getByTestId('axis-right').dataset.tickValues || 'null')).toEqual(tickValues)
  })
})
