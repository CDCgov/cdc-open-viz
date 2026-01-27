import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Regions/Categorical',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const categoricalData = [
  { category: 'Jan 1', value: 10 },
  { category: 'Jan 8', value: 25 },
  { category: 'Jan 15', value: 35 },
  { category: 'Jan 22', value: 45 },
  { category: 'Jan 29', value: 55 },
  { category: 'Feb 5', value: 40 },
  { category: 'Feb 12', value: 60 },
  { category: 'Feb 19', value: 75 },
  { category: 'Feb 26', value: 65 },
  { category: 'Mar 4', value: 80 }
]

const baseCategoricalConfig = {
  type: 'chart',
  visualizationType: 'Line',
  orientation: 'vertical',
  showTitle: true,
  theme: 'theme-blue',
  animate: false,
  xAxis: {
    type: 'categorical',
    dataKey: 'category',
    size: '0',
    hideAxis: false,
    hideTicks: false
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
  data: categoricalData,
  regions: []
}

// LINE CHARTS

export const Line_Fixed_From_Fixed_To: Story = {
  args: {
    config: {
      ...baseCategoricalConfig,
      title: 'Categorical - Line: Fixed From + Fixed To',
      regions: [
        {
          from: 'Jan 15',
          to: 'Feb 12',
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
      ...baseCategoricalConfig,
      title: 'Categorical - Line: Fixed From + Last Date',
      regions: [
        {
          from: 'Feb 5',
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

// BAR CHARTS

export const Bar_Fixed_From_Fixed_To: Story = {
  args: {
    config: {
      ...baseCategoricalConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Categorical - Bar: Fixed From + Fixed To',
      regions: [
        {
          from: 'Jan 15',
          to: 'Feb 12',
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
      ...baseCategoricalConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Categorical - Bar: Fixed From + Last Date',
      regions: [
        {
          from: 'Feb 5',
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

export default meta
