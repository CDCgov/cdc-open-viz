import path from 'node:path'
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CdcWaffleChart from '../CdcWaffleChart'

vi.mock('resize-observer-polyfill', () => ({
  default: vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
}))

vi.mock('@cdc/core/components/ui/TrendArrow', () => ({
  default: ({ label, wrapperClassName = '' }) => (
    <span className={['mock-trend-arrow-wrap', wrapperClassName].join(' ').trim()}>
      <span className='mock-trend-arrow'>{label || 'Trend'}</span>
    </span>
  )
}))

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Waffle Chart', () => {
  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)

  it('moves the trend indicator below the value when a trend label is configured', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={{
          type: 'waffle-chart',
          title: 'Test Waffle',
          showTitle: true,
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [{ value: 42, total: 100, trend: 'increase' }],
          filters: [],
          content: 'Test content',
          subtext: 'Test subtext',
          dataColumn: 'value',
          dataFunction: 'Sum',
          customDenom: true,
          dataDenomColumn: 'total',
          dataDenomFunction: 'Sum',
          showPercent: true,
          showDenominator: false,
          valueDescription: 'out of',
          suffix: '%',
          roundToPlace: 0,
          nodeWidth: 10,
          nodeSpacer: 2,
          theme: 'theme-blue',
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }],
            upLabel: 'Increasing'
          },
          visual: {
            border: false,
            accent: false,
            background: false,
            hideBackgroundColor: false,
            borderColorTheme: false,
            whiteBackground: false,
            colors: {
              'theme-blue': '#005eaa'
            }
          }
        }}
      />
    )

    await waitFor(() => {
      expect(container.querySelector('.cove-waffle-chart__trend-slot--below')).toBeInTheDocument()
    })

    expect(container.querySelector('.cove-waffle-chart__trend-slot--inline')).not.toBeInTheDocument()
    expect(container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--below')).toBeInTheDocument()
  })

  it('keeps the trend indicator inline when no trend label is configured', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={{
          type: 'waffle-chart',
          title: 'Test Waffle',
          showTitle: true,
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [{ value: 42, total: 100, trend: 'increase' }],
          filters: [],
          content: 'Test content',
          subtext: 'Test subtext',
          dataColumn: 'value',
          dataFunction: 'Sum',
          customDenom: true,
          dataDenomColumn: 'total',
          dataDenomFunction: 'Sum',
          showPercent: true,
          showDenominator: false,
          valueDescription: 'out of',
          suffix: '%',
          roundToPlace: 0,
          nodeWidth: 10,
          nodeSpacer: 2,
          theme: 'theme-blue',
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }]
          },
          visual: {
            border: false,
            accent: false,
            background: false,
            hideBackgroundColor: false,
            borderColorTheme: false,
            whiteBackground: false,
            colors: {
              'theme-blue': '#005eaa'
            }
          }
        }}
      />
    )

    await waitFor(() => {
      expect(container.querySelector('.cove-waffle-chart__trend-slot--inline')).toBeInTheDocument()
    })

    expect(container.querySelector('.cove-waffle-chart__trend-slot--below')).not.toBeInTheDocument()
    expect(container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--inline')).toBeInTheDocument()
  })
})
