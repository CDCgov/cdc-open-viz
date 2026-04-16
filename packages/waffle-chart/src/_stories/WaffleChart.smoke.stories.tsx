import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import WaffleChart from '../CdcWaffleChart'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import MinimalExampleConfig from '../../examples/minimal-example.json'

const meta: Meta<typeof WaffleChart> = {
  title: 'Components/Templates/WaffleChart',
  component: WaffleChart
}

type Story = StoryObj<typeof WaffleChart>

export const Person: Story = {
  args: {
    config: {
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
      visualizationType: 'Waffle',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
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
    }
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Gauge: Story = {
  args: {
    config: {
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
      visualizationType: 'Gauge',
      visualizationSubType: '',
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
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Waffle_Chart_TP5_Style: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-style.json'
  },
  parameters: {
    docs: {
      description: {
        story:
          'TP5 Style - A new layout style that displays the waffle chart in a callout component with a blue background and icon. The title appears inside the callout header. This style mimics the CDC Template Package 5.0 callout component design and includes an optional white background variant.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Waffle_Chart_TP5_Style_White_Background: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-style-white.json'
  },
  parameters: {
    docs: {
      description: {
        story:
          'TP5 Style with White Background - The white background variant of the TP5 style features a white background with a teal border instead of the default blue background. The icon remains visible in this variant.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const TP5_Gauge: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-gauge.json'
  },
  parameters: {
    docs: {
      description: {
        story:
          'TP5 Gauge - A TP5 callout-style gauge with a blue background, callout flag, and title inside the callout header.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const TP5_Gauge_White_Background: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-gauge-white.json'
  },
  parameters: {
    docs: {
      description: {
        story:
          'TP5 Gauge with White Background - The white background variant of the TP5 gauge features a white callout with a teal border and no callout flag.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Minimal_Config: Story = {
  args: {
    config: MinimalExampleConfig
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimum working consumer config shared by the README, CONFIG reference, and sync test.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(canvasElement.querySelector('.cove-waffle-chart')).toBeInTheDocument()
    expect(canvasElement.textContent).toContain('Chart Title')
    expect(canvasElement.textContent).toContain('42')
  }
}

export default meta
