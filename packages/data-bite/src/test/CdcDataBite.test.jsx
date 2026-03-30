import path from 'node:path'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { describe, it, expect, vi, afterEach } from 'vitest'
import CdcDataBite from '../CdcDataBite'

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

describe('Data Bite', () => {
  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)

  it('renders when config.general is omitted', async () => {
    render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteBody: 'Test body',
          subtext: 'Test subtext',
          data: []
        }}
      />
    )

    expect(await screen.findByText('Test body')).toBeInTheDocument()
    expect(screen.getByText('Test subtext')).toBeInTheDocument()
  })

  it('moves the trend indicator below the value when a trend label is configured', () => {
    const { container } = render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteStyle: 'tp5',
          biteBody: 'Test body',
          dataColumn: 'value',
          dataFunction: 'Pass Through',
          dataFormat: {
            prefix: '',
            suffix: '',
            commas: false,
            roundToPlace: 0
          },
          visual: {
            showTitle: true,
            useWrap: false,
            whiteBackground: false,
            border: true
          },
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }],
            upLabel: 'Increasing significantly'
          },
          data: [{ value: '42', trend: 'increase' }]
        }}
      />
    )

    expect(container.querySelector('.cdc-callout__body--trend-below')).toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__trend-slot--below')).toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__trend-slot--inline')).not.toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__body--content-below')).toBeInTheDocument()
    expect(
      container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--below.cove-trend-arrow__wrap--with-label')
    ).toBeInTheDocument()
  })

  it('moves the trend indicator below the value when a footer trend label is configured', () => {
    const { container } = render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteStyle: 'tp5',
          biteBody: 'Test body',
          dataColumn: 'value',
          dataFunction: 'Pass Through',
          dataFormat: {
            prefix: '',
            suffix: '',
            commas: false,
            roundToPlace: 0
          },
          visual: {
            showTitle: true,
            useWrap: false,
            whiteBackground: false,
            border: true
          },
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }],
            trendLabel: '(compared to one year prior)'
          },
          data: [{ value: '42', trend: 'increase' }]
        }}
      />
    )

    expect(container.querySelector('.cdc-callout__body--trend-below')).toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__trend-footer-label')).toHaveTextContent(
      '(compared to one year prior)'
    )
    expect(
      container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--below.cove-trend-arrow__wrap--with-label')
    ).not.toBeInTheDocument()
  })

  it('keeps the trend indicator inline when no trend label is configured', () => {
    const { container } = render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteStyle: 'tp5',
          biteBody: 'Test body',
          dataColumn: 'value',
          dataFunction: 'Pass Through',
          dataFormat: {
            prefix: '',
            suffix: '',
            commas: false,
            roundToPlace: 0
          },
          visual: {
            showTitle: true,
            useWrap: false,
            whiteBackground: false,
            border: true
          },
          trendIndicator: {
            mode: 'categorical',
            column: 'trend',
            mappings: [{ sourceValue: 'increase', arrowType: 'up' }]
          },
          data: [{ value: '42', trend: 'increase' }]
        }}
      />
    )

    expect(container.querySelector('.cdc-callout__body--trend-inline')).toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__trend-slot--inline')).toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__trend-slot--below')).not.toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__body--content-right')).toBeInTheDocument()
    expect(container.querySelector('.mock-trend-arrow-wrap.cove-trend-arrow__wrap--inline')).toBeInTheDocument()
  })
})
