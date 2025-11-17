import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import WaffleChart from '../CdcWaffleChart'

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
  )
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
  )
}

export default meta
