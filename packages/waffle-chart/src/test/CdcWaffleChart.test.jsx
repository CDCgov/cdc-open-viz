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
  const createBaseConfig = overrides => ({
    type: 'waffle-chart',
    title: 'Test Waffle',
    showTitle: true,
    visualizationType: 'Waffle',
    shape: 'circle',
    data: [{ value: 42 }],
    filters: [],
    content: 'Test content',
    subtext: 'Test subtext',
    dataColumn: 'value',
    dataFunction: 'Sum',
    customDenom: false,
    dataDenom: '100',
    dataDenomColumn: '',
    dataDenomFunction: 'Sum',
    showPercent: true,
    showDenominator: false,
    valueDescription: 'out of',
    suffix: '%',
    roundToPlace: 0,
    nodeWidth: 10,
    nodeSpacer: 2,
    theme: 'theme-blue',
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
    },
    ...overrides
  })

  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)

  it('moves the trend indicator below the value when a trend label is configured', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={createBaseConfig({
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [{ value: 42, total: 100, trend: 'increase' }],
          customDenom: true,
          dataDenomColumn: 'total',
          showPercent: true,
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }],
            upLabel: 'Increasing'
          }
        })}
      />
    )

    await waitFor(() => {
      expect(container.querySelector('.cove-waffle-chart__trend-slot--below')).toBeInTheDocument()
    })

    expect(container.querySelector('.cove-waffle-chart__trend-slot--inline')).not.toBeInTheDocument()
    expect(
      container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--below.cove-trend-arrow__wrap--with-label')
    ).toBeInTheDocument()
  })

  it('moves the trend indicator below the value when a footer trend label is configured', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={createBaseConfig({
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [{ value: 42, total: 100, trend: 'increase' }],
          customDenom: true,
          dataDenomColumn: 'total',
          showPercent: true,
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }],
            trendLabel: '(compared to one year prior)'
          }
        })}
      />
    )

    await waitFor(() => {
      expect(container.querySelector('.cove-waffle-chart__trend-footer-label')).toHaveTextContent(
        '(compared to one year prior)'
      )
    })
    expect(
      container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--below.cove-trend-arrow__wrap--with-label')
    ).not.toBeInTheDocument()
  })

  it('keeps the trend indicator inline when no trend label is configured', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={createBaseConfig({
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [{ value: 42, total: 100, trend: 'increase' }],
          customDenom: true,
          dataDenomColumn: 'total',
          showPercent: true,
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }]
          }
        })}
      />
    )

    await waitFor(() => {
      expect(container.querySelector('.cove-waffle-chart__trend-slot--inline')).toBeInTheDocument()
    })

    expect(container.querySelector('.cove-waffle-chart__trend-slot--below')).not.toBeInTheDocument()
    expect(container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--inline')).toBeInTheDocument()
  })

  it('renders a no-change trend label when numeric no-change arrows are enabled', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={{
          type: 'waffle-chart',
          title: 'Test Waffle',
          showTitle: true,
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [
            { value: 10, total: 100, historical: 8 },
            { value: 10, total: 100, historical: 12 }
          ],
          filters: [],
          content: 'Test content',
          subtext: 'Test subtext',
          dataColumn: 'value',
          dataFunction: 'Sum',
          customDenom: true,
          dataDenom: '100',
          dataDenomColumn: '',
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
            mode: 'numeric',
            column: 'historical',
            numericThreshold: 5,
            showNoChangeArrows: true,
            noChangeLabel: 'No change'
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
      expect(container.querySelector('.mock-trend-arrow')).toHaveTextContent('No change')
    })
  })

  it('does not render a no-change trend arrow when numeric no-change arrows are disabled', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={{
          type: 'waffle-chart',
          title: 'Test Waffle',
          showTitle: true,
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [
            { value: 10, total: 100, historical: 8 },
            { value: 10, total: 100, historical: 12 }
          ],
          filters: [],
          content: 'Test content',
          subtext: 'Test subtext',
          dataColumn: 'value',
          dataFunction: 'Sum',
          customDenom: true,
          dataDenom: '100',
          dataDenomColumn: '',
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
            mode: 'numeric',
            column: 'historical',
            numericThreshold: 5,
            noChangeLabel: 'No change'
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
      expect(container.querySelector('.mock-trend-arrow-wrap')).not.toBeInTheDocument()
    })
  })

  it('ignores blank historical values when resolving numeric trends', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={{
          type: 'waffle-chart',
          title: 'Test Waffle',
          showTitle: true,
          visualizationType: 'TP5 Waffle',
          shape: 'square',
          data: [
            { value: 10, total: 100, historical: ' ' },
            { value: 10, total: 100, historical: 10 }
          ],
          filters: [],
          content: 'Test content',
          subtext: 'Test subtext',
          dataColumn: 'value',
          dataFunction: 'Mean (Average)',
          customDenom: true,
          dataDenom: '100',
          dataDenomColumn: '',
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
            mode: 'numeric',
            column: 'historical',
            numericThreshold: 0,
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
      expect(container.querySelector('.mock-trend-arrow-wrap')).not.toBeInTheDocument()
    })
  })

  it('renders denominator 10 as a 5 by 2 grid in visible denominator mode', async () => {
    const { container } = render(
      <CdcWaffleChart
        config={createBaseConfig({
          data: [{ value: 4 }],
          dataDenom: '10',
          showPercent: false,
          showDenominator: true,
          suffix: ''
        })}
      />
    )

    await waitFor(() => {
      const nodes = container.querySelectorAll('.cove-waffle-chart svg .cdc-waffle-chart__node')
      expect(nodes).toHaveLength(10)
    })

    const nodes = Array.from(container.querySelectorAll('.cove-waffle-chart svg circle'))
    const uniqueX = new Set(nodes.map(node => node.getAttribute('cx'))).size
    const uniqueY = new Set(nodes.map(node => node.getAttribute('cy'))).size

    expect(uniqueX).toBe(5)
    expect(uniqueY).toBe(2)
  })
})
