import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import WaffleChart from '@cdc/waffle-chart'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Regression Tests/Gallery/Waffle Charts',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Waffle Chart and Gauge visualization examples from the CDC COVE Gallery'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof WaffleChart>

// Helper function to test waffle chart rendering
const testWaffleChartRendering = async (canvasElement: HTMLElement, storyName: string) => {
  await step('Wait for waffle chart to render', async () => {
    // Wait for SVG element to appear
    await new Promise<void>((resolve, reject) => {
      const startTime = Date.now()
      const timeout = 10000

      const checkSvg = () => {
        const svgElement = canvasElement.querySelector('svg')
        if (svgElement) {
          resolve()
        } else if (Date.now() - startTime > timeout) {
          reject(new Error(`Timeout: SVG element not found after ${timeout}ms`))
        } else {
          setTimeout(checkSvg, 100)
        }
      }
      checkSvg()
    })
  })

  await step('Verify SVG element is present', async () => {
    const svgElement = canvasElement.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
  })

  await step('Verify waffle chart container is present', async () => {
    const waffleContainer = canvasElement.querySelector('.cove-waffle-chart')
    expect(waffleContainer).toBeInTheDocument()
  })

  console.log(` ${storyName} waffle chart rendered successfully`)
}

// Base config for examples
const baseWaffleConfig = {
  type: 'waffle-chart',
  shape: 'person',
  title: 'Overdose Mortality Rates',
  content: 'of overdoses resulted in death.',
  subtext: 'This data is an example and does not reflect actual averages',
  orientation: 'horizontal',
  data: [
    {
      'Resulted in Death': 250,
      'Number of Overdoses': 600,
      state: 'Alabama',
      Year: '2010'
    },
    {
      'Resulted in Death': 16,
      'Number of Overdoses': 80,
      state: 'Alaska',
      Year: '2008'
    },
    {
      'Resulted in Death': 19,
      'Number of Overdoses': 100,
      state: 'Alaska',
      Year: '2010'
    },
    {
      'Resulted in Death': 93,
      'Number of Overdoses': 400,
      state: 'Alaska',
      Year: '2012'
    },
    {
      'Resulted in Death': 82,
      'Number of Overdoses': 400,
      state: 'Arizona',
      Year: '2010'
    }
  ],
  filters: [],
  fontSize: null,
  overallFontSize: 'medium',
  dataColumn: 'Resulted in Death',
  dataFunction: 'Sum',
  dataConditionalColumn: '',
  dataConditionalOperator: null,
  dataConditionalComparate: '',
  customDenom: true,
  dataDenom: null,
  dataDenomColumn: 'Number of Overdoses',
  dataDenomFunction: 'Sum',
  prefix: '',
  suffix: '%',
  roundToPlace: 0,
  nodeWidth: 10,
  nodeSpacer: 2,
  theme: 'theme-blue',
  invalidComparate: false,
  showDenominator: false,
  showPercent: true,
  valueDescription: 'testing',
  visual: {
    border: true,
    accent: true,
    background: true,
    hideBackgroundColor: true,
    borderColorTheme: true
  }
}

export const Waffle_Chart_Person: Story = {
  render: () => (
    <WaffleChart
      config={{
        ...baseWaffleConfig,
        visualizationType: 'Waffle',
        visualizationSubType: '',
        gauge: {
          height: 35,
          width: 400
        },
        visual: {
          border: true,
          accent: true,
          background: true,
          hideBackgroundColor: true,
          borderColorTheme: true,
          colors: {
            'theme-blue': '#005eaa',
            'theme-purple': '#712177',
            'theme-brown': '#705043',
            'theme-teal': '#00695c',
            'theme-pink': '#af4448',
            'theme-orange': '#bb4d00',
            'theme-slate': '#29434e',
            'theme-indigo': '#26418f',
            'theme-cyan': '#006778',
            'theme-green': '#4b830d',
            'theme-amber': '#fbab18'
          }
        }
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    await testWaffleChartRendering(canvasElement, 'Waffle Chart Person')
  }
}

export const Gauge_Chart: Story = {
  render: () => (
    <WaffleChart
      config={{
        ...baseWaffleConfig,
        visualizationType: 'Gauge',
        visualizationSubType: ''
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    await testWaffleChartRendering(canvasElement, 'Gauge Chart')
  }
}
