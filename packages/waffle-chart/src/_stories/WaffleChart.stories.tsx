import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import WaffleChart from '../CdcWaffleChart'

const meta: Meta<typeof WaffleChart> = {
  title: 'Components/Templates/WaffleChart',
  component: WaffleChart
}

type Story = StoryObj<typeof WaffleChart>

export const Example_Waffle_Chart_Count: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  )
}

export const Waffle_Chart_Average_Max: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  )
}

export const Waffle_Chart_Demographics: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  )
}

export const Linear_Gauge: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  )
}

export const Linear_Gauge_With_Message: Story = {
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => (
    <>
      <WaffleChart {...args} />
    </>
  )
}

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
