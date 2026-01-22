import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Regions/Date Scale (Band)',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const dateData = [
  { date: '2024-01-01', value: 10 },
  { date: '2024-01-08', value: 25 },
  { date: '2024-01-15', value: 35 },
  { date: '2024-01-22', value: 45 },
  { date: '2024-01-29', value: 55 },
  { date: '2024-02-05', value: 40 },
  { date: '2024-02-12', value: 60 },
  { date: '2024-02-19', value: 75 },
  { date: '2024-02-26', value: 65 },
  { date: '2024-03-04', value: 80 }
]

const baseDateConfig = {
  type: 'chart',
  visualizationType: 'Line',
  orientation: 'vertical',
  showTitle: true,
  theme: 'theme-blue',
  animate: false,
  xAxis: {
    type: 'date',
    dataKey: 'date',
    dateParseFormat: '%Y-%m-%d',
    dateDisplayFormat: '%b %-d',
    size: '0',
    hideAxis: false,
    hideTicks: false,
    numTicks: '6'
  },
  yAxis: {
    size: '50',
    hideAxis: false,
    hideTicks: false,
    gridLines: true,
    min: '0',
    max: '100'
  },
  series: [{ dataKey: 'value', type: 'Line', axis: 'Left', tooltip: true, name: 'Value' }],
  legend: { hide: true },
  data: dateData,
  regions: []
}

// LINE CHARTS

export const Line_Fixed_From_Fixed_To: Story = {
  args: {
    config: {
      ...baseDateConfig,
      title: 'Date Scale - Line: Fixed From + Fixed To',
      regions: [
        {
          from: '2024-01-15',
          to: '2024-02-12',
          fromType: 'Fixed',
          toType: 'Fixed',
          label: 'Fixed Region',
          background: '#0077cc',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Line_Fixed_From_Last_Date: Story = {
  args: {
    config: {
      ...baseDateConfig,
      title: 'Date Scale - Line: Fixed From + Last Date',
      regions: [
        {
          from: '2024-02-05',
          to: '',
          fromType: 'Fixed',
          toType: 'Last Date',
          label: 'To Last Date',
          background: '#00aa55',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Line_Previous_Days_Last_Date: Story = {
  args: {
    config: {
      ...baseDateConfig,
      title: 'Date Scale - Line: Previous Days + Last Date',
      regions: [
        {
          from: '28',
          to: '',
          fromType: 'Previous Days',
          toType: 'Last Date',
          label: 'Last 28 Days',
          background: '#aa0077',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

// BAR CHARTS

export const Bar_Fixed_From_Fixed_To: Story = {
  args: {
    config: {
      ...baseDateConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Date Scale - Bar: Fixed From + Fixed To',
      regions: [
        {
          from: '2024-01-15',
          to: '2024-02-12',
          fromType: 'Fixed',
          toType: 'Fixed',
          label: 'Fixed Region',
          background: '#0077cc',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Bar_Fixed_From_Last_Date: Story = {
  args: {
    config: {
      ...baseDateConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Date Scale - Bar: Fixed From + Last Date',
      regions: [
        {
          from: '2024-02-05',
          to: '',
          fromType: 'Fixed',
          toType: 'Last Date',
          label: 'To Last Date',
          background: '#00aa55',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Bar_Previous_Days_Last_Date: Story = {
  args: {
    config: {
      ...baseDateConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Date Scale - Bar: Previous Days + Last Date',
      regions: [
        {
          from: '28',
          to: '',
          fromType: 'Previous Days',
          toType: 'Last Date',
          label: 'Last 28 Days',
          background: '#aa0077',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export default meta
