import path from 'node:path'
import fs from 'node:fs'
import vm from 'node:vm'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
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

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: ({ display }) => <span data-testid='mock-icon'>{display}</span>
}))

vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: () => null
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

const fallbackImageUrl = 'https://example.com/limited-no-data.png'
const veryLowImageUrl = 'https://example.com/very-low.png'

const dynamicImageConfig = (value, dataFunction = 'Sum') => ({
  type: 'data-bite',
  theme: 'theme-blue',
  dataColumn: 'value',
  dataFunction,
  bitePosition: 'Bottom',
  biteFontSize: '17',
  biteStyle: 'body',
  biteBody: '',
  dataFormat: {
    prefix: '',
    suffix: '',
    commas: false,
    roundToPlace: 2
  },
  imageData: {
    display: 'dynamic',
    url: fallbackImageUrl,
    alt: 'Limited / No Data',
    options: [
      {
        source: veryLowImageUrl,
        arguments: [{ operator: '<=', threshold: '2.7' }],
        alt: 'Very Low',
        secondArgument: false
      }
    ]
  },
  data: [{ value }]
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

  it('uses dashboard raw data for editor column options when rendered data is empty', async () => {
    render(
      <CdcDataBite
        isDashboard={true}
        isEditor={true}
        rawData={[{ metric: 42, region: 'East' }]}
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteBody: 'Test body',
          data: []
        }}
      />
    )

    fireEvent.click(await screen.findByRole('button', { name: 'Data' }))

    const dataColumnSelect = screen.getByLabelText('Data Column')
    const options = Array.from(dataColumnSelect.options).map(option => option.value)

    expect(options).toEqual(expect.arrayContaining(['metric', 'region']))
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

  it('uses the dynamic image fallback when sum has no numeric values', async () => {
    const { container } = render(<CdcDataBite config={dynamicImageConfig(' ')} />)

    const image = await screen.findByAltText('Limited / No Data')
    expect(image).toHaveAttribute('src', fallbackImageUrl)
    expect(container.querySelector('.bite-value')).toBeEmptyDOMElement()
  })

  it('matches dynamic image options for a real zero sum value', async () => {
    render(<CdcDataBite config={dynamicImageConfig('0')} />)

    const image = await screen.findByAltText('Very Low')
    expect(image).toHaveAttribute('src', veryLowImageUrl)
  })

  it.each(['', ' ', null, undefined])('uses the dynamic image fallback when pass-through value is %s', async value => {
    render(<CdcDataBite config={dynamicImageConfig(value, 'Pass Through')} />)

    const image = await screen.findByAltText('Limited / No Data')
    expect(image).toHaveAttribute('src', fallbackImageUrl)
  })

  it('matches dynamic image options for a real zero pass-through value', async () => {
    render(<CdcDataBite config={dynamicImageConfig('0', 'Pass Through')} />)

    const image = await screen.findByAltText('Very Low')
    expect(image).toHaveAttribute('src', veryLowImageUrl)
  })

  it('renders a bite body markup variable backed by numeric zero', async () => {
    render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteBody: 'Percent positive: {{percent}}%',
          enableMarkupVariables: true,
          markupVariables: [
            {
              name: 'Percent',
              tag: '{{percent}}',
              columnName: 'percent',
              conditions: [],
              addCommas: false
            }
          ],
          data: [{ percent: 0 }]
        }}
      />
    )

    expect(await screen.findByText('Percent positive: 0%')).toBeInTheDocument()
  })

  it('updates metadata-backed text and subtext markup variables when dataMetadata changes and data does not', async () => {
    const data = [{ value: 1 }]
    const config = {
      type: 'data-bite',
      theme: 'theme-blue',
      title: 'Test title',
      biteBody: 'Body {{source}}',
      subtext: 'Subtext {{source}}',
      data,
      dataMetadata: {},
      enableMarkupVariables: true,
      markupVariables: [
        {
          sourceType: 'metadata',
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: [],
          addCommas: false
        }
      ]
    }

    const { rerender } = render(<CdcDataBite config={config} />)

    expect(await screen.findByText('Body')).toBeInTheDocument()

    rerender(<CdcDataBite config={{ ...config, dataMetadata: { source: 'June file' } }} />)

    expect(await screen.findByText('Body June file')).toBeInTheDocument()
    expect(screen.getByText('Subtext June file')).toBeInTheDocument()
  })

  it.each(['Mean (Average)', 'Median'])('renders an empty value when %s has no numeric values', dataFunction => {
    const { container } = render(<CdcDataBite config={dynamicImageConfig(' ', dataFunction)} />)

    expect(container.querySelector('.bite-value')).toBeEmptyDOMElement()
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: false
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: false
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: false
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

  it('stacks the TP5 value above the message when valueAboveMessage is enabled', () => {
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: true
          },
          data: [{ value: '42' }]
        }}
      />
    )

    expect(container.querySelector('.cdc-callout__body--content-below')).toBeInTheDocument()
    expect(container.querySelector('.cove-visualization__body')).toHaveClass(
      'tp5-dashboard-component--value-above-message'
    )
  })

  it('renders TP5 subtext without forcing italics', () => {
    const { container } = render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteStyle: 'tp5',
          biteBody: 'Test body',
          subtext: 'Source: example data',
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: false
          },
          data: [{ value: '42' }]
        }}
      />
    )

    const subtext = container.querySelector('.tp5-dashboard-component--data-bite .bite-subtext')
    const tp5Body = container.querySelector('.cove-visualization__body.tp5-dashboard-component')

    expect(subtext).toHaveTextContent('Source: example data')
    expect(subtext).not.toHaveClass('fst-italic')
    expect(tp5Body).toHaveClass('tp5-dashboard-component--data-bite')
    expect(tp5Body).not.toHaveClass('bite__style--tp5')
    expect(tp5Body).not.toHaveClass('tp5-dashboard-component--thin-border')
  })

  it('adds the TP5 thin-border modifier only for TP5 data bites', () => {
    const tp5Config = {
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
        border: true
      },
      tp5Visual: {
        calloutStyle: 'thin-border',
        colorTheme: 'blue',
        valueAboveMessage: false
      },
      data: [{ value: '42' }]
    }

    const { container, unmount } = render(<CdcDataBite config={tp5Config} />)

    const thinBorderBody = container.querySelector('.cove-visualization__body')
    expect(thinBorderBody).toHaveClass('tp5-dashboard-component--thin-border')
    expect(container.querySelector('.cdc-callout')).toHaveStyle({
      '--tp5-dashboard-accent': 'var(--colors-blue-dark, #0B4778)',
      '--tp5-dashboard-accent-text': 'var(--colors-link-blue, #005EA2)',
      '--tp5-dashboard-accent-light': 'var(--colors-gray-cool-3, #F5F6F7)',
      '--tp5-data-bite-circle-light-outer': '#E6EBF1',
      '--tp5-data-bite-circle-light-inner': '#EFF2F6',
      '--tp5-data-bite-circle-dark-outer': 'var(--colors-blue-darkest, #112F4E)',
      '--tp5-data-bite-circle-dark-inner': 'var(--colors-blue-dark, #0B4778)'
    })

    unmount()
    const cyanRender = render(
      <CdcDataBite
        config={{
          ...tp5Config,
          tp5Visual: {
            ...tp5Config.tp5Visual,
            colorTheme: 'cyan'
          }
        }}
      />
    )

    expect(cyanRender.container.querySelector('.cdc-callout')).toHaveStyle({
      '--tp5-dashboard-accent': 'var(--colors-cyan-40v, #009EC1)',
      '--tp5-dashboard-accent-text': 'var(--colors-cyan-60v, #007A99)',
      '--tp5-dashboard-accent-light': 'var(--colors-cyan-15, #DFF2F6)',
      '--tp5-data-bite-circle-light-inner': 'var(--colors-cyan-5, #F4FBFC)'
    })

    cyanRender.unmount()
    const dropShadowRender = render(
      <CdcDataBite
        config={{
          ...tp5Config,
          tp5Visual: {
            ...tp5Config.tp5Visual,
            calloutStyle: 'drop-shadow'
          }
        }}
      />
    )

    expect(dropShadowRender.container.querySelector('.cove-visualization__body')).toHaveClass(
      'tp5-dashboard-component--drop-shadow',
      'tp5-dashboard-component--accent-left'
    )
    expect(dropShadowRender.container.querySelector('.bite-content')).not.toHaveClass('cdc-callout--data')
    expect(dropShadowRender.container.querySelector('.bite-content')).not.toHaveClass('dfe-block')
    expect(dropShadowRender.container.querySelector('.cdc-callout__flag')).not.toBeInTheDocument()

    dropShadowRender.unmount()
    const topDropShadowRender = render(
      <CdcDataBite
        config={{
          ...tp5Config,
          tp5Visual: {
            ...tp5Config.tp5Visual,
            calloutStyle: 'drop-shadow',
            accentPosition: 'top'
          }
        }}
      />
    )

    expect(topDropShadowRender.container.querySelector('.cove-visualization__body')).toHaveClass(
      'tp5-dashboard-component--drop-shadow',
      'tp5-dashboard-component--accent-top'
    )

    topDropShadowRender.unmount()
    const nonTp5Render = render(<CdcDataBite config={{ ...tp5Config, biteStyle: 'body' }} />)

    expect(nonTp5Render.container.querySelector('.cove-visualization__body')).not.toHaveClass('tp5-dashboard-component')
    expect(nonTp5Render.container.querySelector('.cove-visualization__body')).not.toHaveStyle({
      '--tp5-dashboard-accent': 'var(--colors-blue-dark, #0B4778)'
    })
  })

  it('does not apply TP5 color theme variables to the default callout data bite style', () => {
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            colorTheme: 'blue'
          },
          data: [{ value: '42' }]
        }}
      />
    )

    expect(container.querySelector('.cdc-callout')).not.toHaveStyle({
      '--tp5-dashboard-accent': 'var(--colors-blue-dark, #0B4778)'
    })
  })

  it('only uses filled callout heading padding when the TP5 callout flag can render', () => {
    const baseConfig = {
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
        border: true
      },
      tp5Visual: {
        calloutStyle: 'callout'
      },
      data: [{ value: '42' }]
    }

    const { container, unmount } = render(<CdcDataBite config={baseConfig} />)

    expect(container.querySelector('.cdc-callout__flag')).toBeInTheDocument()
    expect(container.querySelector('.cdc-callout')).toHaveClass('cdc-callout--has-flag')
    expect(container.querySelector('.cdc-callout')).toHaveClass('cdc-callout--data')
    expect(container.querySelector('.cdc-callout')).not.toHaveClass('cdc-callout--data-color')

    unmount()

    const thinBorderRender = render(
      <CdcDataBite
        config={{
          ...baseConfig,
          tp5Visual: {
            ...baseConfig.tp5Visual,
            calloutStyle: 'thin-border'
          }
        }}
      />
    )

    expect(thinBorderRender.container.querySelector('.cdc-callout__flag')).not.toBeInTheDocument()
    expect(thinBorderRender.container.querySelector('.cdc-callout')).not.toHaveClass('cdc-callout--has-flag')
    expect(thinBorderRender.container.querySelector('.cdc-callout')).not.toHaveClass('cdc-callout--data')
  })

  it('keeps TP5 data bite value markup simple when circleStyle is missing or off', () => {
    const baseConfig = {
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
        border: true
      },
      tp5Visual: {
        calloutStyle: 'thin-border',
        colorTheme: 'blue'
      },
      data: [{ value: '42' }]
    }

    const { container, rerender } = render(<CdcDataBite config={baseConfig} />)

    expect(container.querySelector('.cdc-callout__value-circle')).not.toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__value')).toHaveTextContent('42')
    expect(container.querySelector('.cdc-callout__value')?.parentElement).toHaveClass('cdc-callout__value-row')

    rerender(
      <CdcDataBite
        config={{
          ...baseConfig,
          tp5Visual: {
            ...baseConfig.tp5Visual,
            circleStyle: 'off'
          }
        }}
      />
    )

    expect(container.querySelector('.cdc-callout__value-circle')).not.toBeInTheDocument()
    expect(container.querySelector('.cdc-callout__value')?.parentElement).toHaveClass('cdc-callout__value-row')
  })

  it('renders TP5 data bite light and dark circle styling only for eligible non-filled styles', () => {
    const baseConfig = {
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
        border: true
      },
      tp5Visual: {
        calloutStyle: 'thin-border',
        colorTheme: 'cyan',
        circleStyle: 'light'
      },
      data: [{ value: '42' }]
    }

    const { container, unmount } = render(<CdcDataBite config={baseConfig} />)

    const lightCircle = container.querySelector('.cdc-callout__value-circle')
    expect(lightCircle).toHaveClass('cdc-callout__value-circle--light')
    expect(container.querySelector('.cdc-callout__body')).toHaveClass('cdc-callout__body--circle-value')
    expect(lightCircle).toHaveStyle({
      '--tp5-data-bite-circle-value-font-size': '36px'
    })
    expect(lightCircle).toContainElement(container.querySelector('.cdc-callout__value'))

    unmount()

    const darkRender = render(
      <CdcDataBite
        config={{
          ...baseConfig,
          tp5Visual: {
            ...baseConfig.tp5Visual,
            calloutStyle: 'drop-shadow',
            circleStyle: 'dark',
            circleFontSize: '32'
          }
        }}
      />
    )

    expect(darkRender.container.querySelector('.cdc-callout__value-circle')).toHaveClass(
      'cdc-callout__value-circle--dark'
    )
    expect(darkRender.container.querySelector('.cdc-callout__value-circle')).toHaveStyle({
      '--tp5-data-bite-circle-value-font-size': '32px'
    })

    darkRender.unmount()

    const calloutRender = render(
      <CdcDataBite
        config={{
          ...baseConfig,
          tp5Visual: {
            ...baseConfig.tp5Visual,
            calloutStyle: 'callout',
            circleStyle: 'dark'
          }
        }}
      />
    )

    expect(calloutRender.container.querySelector('.cdc-callout__value-circle')).not.toBeInTheDocument()
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: false
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
            border: true
          },
          tp5Visual: {
            calloutStyle: 'callout',
            valueAboveMessage: false
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
