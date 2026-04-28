import path from 'node:path'
import fs from 'node:fs'
import vm from 'node:vm'
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

const extractMarkedExampleConfig = (content, label) => {
  const match = content.match(
    /<!-- README_EXAMPLE_CONFIG_START -->\s*```jsx\s*([\s\S]*?)\s*```\s*<!-- README_EXAMPLE_CONFIG_END -->/
  )
  expect(match, `${label} should contain a marked README example block`).toBeTruthy()
  const configMatch = match[1].match(/const config = (\{[\s\S]*?\})\n\nfunction App\(\)/)
  expect(configMatch, `${label} should define const config before function App()`).toBeTruthy()
  return vm.runInNewContext(`(${configMatch[1]})`)
}

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

  it('keeps the minimal example in sync with the README docs', () => {
    const pkgRoot = path.join(__dirname, '..', '..')
    const minimalExamplePath = path.join(pkgRoot, 'examples', 'minimal-example.json')
    const readmePath = path.join(pkgRoot, 'README.md')

    const minimalExample = JSON.parse(fs.readFileSync(minimalExamplePath, 'utf8'))
    const readmeBlock = extractMarkedExampleConfig(fs.readFileSync(readmePath, 'utf8'), 'README.md')

    expect(readmeBlock).toEqual(minimalExample)
    expect(minimalExample.version).toBeTruthy()
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

  it('renders a no-change trend label when numeric no-change arrows are enabled', () => {
    const { container } = render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteStyle: 'tp5',
          biteBody: 'Test body',
          dataColumn: 'value',
          dataFunction: 'Mean (Average)',
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
            mode: 'numeric',
            column: 'historical',
            numericThreshold: 5,
            showNoChangeArrows: true,
            noChangeLabel: 'No change'
          },
          data: [
            { value: 10, historical: 8 },
            { value: 10, historical: 12 }
          ]
        }}
      />
    )

    expect(container.querySelector('.mock-trend-arrow')).toHaveTextContent('No change')
  })

  it('does not render a no-change trend arrow when numeric no-change arrows are disabled', () => {
    const { container } = render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteStyle: 'tp5',
          biteBody: 'Test body',
          dataColumn: 'value',
          dataFunction: 'Mean (Average)',
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
            mode: 'numeric',
            column: 'historical',
            numericThreshold: 5,
            noChangeLabel: 'No change'
          },
          data: [
            { value: 10, historical: 8 },
            { value: 10, historical: 12 }
          ]
        }}
      />
    )

    expect(container.querySelector('.mock-trend-arrow-wrap')).not.toBeInTheDocument()
  })
})
