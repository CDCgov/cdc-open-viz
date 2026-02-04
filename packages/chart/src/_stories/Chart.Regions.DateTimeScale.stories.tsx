import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Regions/Date-Time Scale (Continuous)',
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

const baseDateTimeConfig = {
  type: 'chart',
  visualizationType: 'Line',
  orientation: 'vertical',
  showTitle: true,
  theme: 'theme-blue',
  animate: false,
  xAxis: {
    type: 'date-time',
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
      ...baseDateTimeConfig,
      title: 'Date-Time Scale - Line: Fixed From + Fixed To',
      regions: [
        {
          from: '2024-01-15',
          to: '2024-02-11',
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
      ...baseDateTimeConfig,
      title: 'Date-Time Scale - Line: Fixed From + Last Date',
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
      ...baseDateTimeConfig,
      title: 'Date-Time Scale - Line: Previous Days + Last Date',
      regions: [
        {
          from: '8',
          to: '',
          fromType: 'Previous Days',
          toType: 'Last Date',
          label: 'Last 8 Days',
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
      ...baseDateTimeConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Date-Time Scale - Bar: Fixed From + Fixed To',
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
      ...baseDateTimeConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Date-Time Scale - Bar: Fixed From + Last Date',
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
      ...baseDateTimeConfig,
      visualizationType: 'Bar',
      barThickness: 0.7,
      title: 'Date-Time Scale - Bar: Previous Days + Last Date',
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

// EDGE CASES

export const Edge_Region_At_Start: Story = {
  args: {
    config: {
      ...baseDateTimeConfig,
      title: 'Edge Case: Region at Start',
      regions: [
        {
          from: '2024-01-01',
          to: '2024-01-21',
          fromType: 'Fixed',
          toType: 'Fixed',
          label: 'At Start',
          background: '#0077cc',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Edge_Region_At_End: Story = {
  args: {
    config: {
      ...baseDateTimeConfig,
      title: 'Edge Case: Region at End',
      regions: [
        {
          from: '2024-02-19',
          to: '2024-03-04',
          fromType: 'Fixed',
          toType: 'Fixed',
          label: 'At End',
          background: '#00aa55',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Edge_Full_Coverage: Story = {
  args: {
    config: {
      ...baseDateTimeConfig,
      title: 'Edge Case: Full Chart Coverage',
      regions: [
        {
          from: '2024-01-01',
          to: '',
          fromType: 'Fixed',
          toType: 'Last Date',
          label: 'Full Coverage',
          background: '#cc7700',
          color: '#000000',
          range: 'Custom'
        }
      ]
    },
    isEditor: true
  }
}

export const Multiple_Regions: Story = {
  args: {
    config: {
      ...baseDateTimeConfig,
      title: 'Multiple Regions',
      regions: [
        {
          from: '2024-01-08',
          to: '2024-01-21',
          fromType: 'Fixed',
          toType: 'Fixed',
          label: 'Region 1',
          background: '#0077cc',
          color: '#000000',
          range: 'Custom'
        },
        {
          from: '2024-02-05',
          to: '2024-02-18',
          fromType: 'Fixed',
          toType: 'Fixed',
          label: 'Region 2',
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
