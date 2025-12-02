import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Preserve Original Decimals',
  component: Chart
}

type Story = StoryObj<typeof Chart>

// Mock data with mixed decimal precision
const mixedDecimalData = [
  { Year: '2020', Value: '1000' },
  { Year: '2021', Value: '45.7' },
  { Year: '2022', Value: '12' },
  { Year: '2023', Value: '89.23' },
  { Year: '2024', Value: '156' },
  { Year: '2025', Value: '23.5' }
]

const baseConfig: any = {
  type: 'chart',
  visualizationType: 'Bar',
  data: mixedDecimalData,
  xAxis: {
    dataKey: 'Year',
    type: 'categorical'
  },
  yAxis: {
    label: 'Value'
  },
  series: [
    {
      dataKey: 'Value'
    }
  ],
  dataFormat: {
    commas: true
  }
}

export const Default_With_Forced_Rounding: Story = {
  args: {
    config: {
      ...baseConfig,
      dataFormat: {
        commas: true,
        roundTo: 1
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default behavior forces all numbers to 1 decimal place. Notice how whole numbers like 1000 become "1,000.0" and 89.23 gets rounded to "89.2".'
      }
    }
  }
}

export const Preserve_Original_Decimals_Enabled: Story = {
  args: {
    config: {
      ...baseConfig,
      dataFormat: {
        commas: true,
        roundTo: 1,
        preserveOriginalDecimals: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'With "Preserve Original Decimals" enabled, numbers display exactly as they appear in the data: 1000 shows as "1,000", 45.7 shows as "45.7", and 89.23 shows as "89.23". The roundTo setting is ignored.'
      }
    }
  }
}

export const Comparison_No_Decimals: Story = {
  args: {
    config: {
      ...baseConfig,
      dataFormat: {
        commas: true,
        roundTo: 0
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'Forcing 0 decimal places rounds everything to whole numbers: 45.7 becomes "46", 89.23 becomes "89". This loses precision from the original data.'
      }
    }
  }
}

export const Comparison_Two_Decimals: Story = {
  args: {
    config: {
      ...baseConfig,
      dataFormat: {
        commas: true,
        roundTo: 2
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'Forcing 2 decimal places adds unnecessary zeros: 1000 becomes "1,000.00", 45.7 becomes "45.70". This can look cluttered for whole numbers.'
      }
    }
  }
}

export const With_Prefix_And_Suffix: Story = {
  args: {
    config: {
      ...baseConfig,
      dataFormat: {
        commas: true,
        prefix: '$',
        suffix: ' USD',
        preserveOriginalDecimals: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'Preserve Original Decimals works seamlessly with prefix and suffix formatting. Numbers show as "$1,000 USD", "$45.7 USD", etc.'
      }
    }
  }
}

export const Percentage_Data_Mixed_Precision: Story = {
  args: {
    config: {
      ...baseConfig,
      data: [
        { Year: 'Region 1', Value: '25' },
        { Year: 'Region 2', Value: '33.3' },
        { Year: 'Region 3', Value: '50' },
        { Year: 'Region 4', Value: '12.75' },
        { Year: 'Region 5', Value: '8.5' }
      ],
      dataFormat: {
        suffix: '%',
        preserveOriginalDecimals: true,
        commas: false
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'Perfect for percentage data where some values are whole (25%, 50%) and others need decimals (33.3%, 12.75%). Each value displays naturally without forced rounding.'
      }
    }
  }
}

export const Line_Chart_With_Table: Story = {
  args: {
    config: {
      ...baseConfig,
      visualizationType: 'Line',
      dataFormat: {
        commas: true,
        preserveOriginalDecimals: true
      },
      table: {
        show: true,
        label: 'Data Table',
        expanded: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story:
          'When enabled, the preserve decimals setting applies to both the chart axis/tooltips AND the data table, ensuring consistency across all displays.'
      }
    }
  }
}

export const Editor_Mode: Story = {
  args: {
    config: {
      ...baseConfig,
      dataFormat: {
        commas: true,
        roundTo: 1
      }
    },
    isEditor: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'In editor mode, look for the "Preserve Original Decimal Places" checkbox in the Number Formatting section, right below the "Round to decimal point" field. Toggle it to see the effect in real-time.'
      }
    }
  }
}

export default meta
