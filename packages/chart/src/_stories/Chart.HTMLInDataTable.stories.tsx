import { Meta, StoryObj } from '@storybook/react-vite'
import CdcChart from '../CdcChartComponent'

const meta: Meta<typeof CdcChart> = {
  title: 'Components/Templates/Chart/HTML in Data Table',
  component: CdcChart,
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates charts with HTML content rendered in data table columns, including footnotes, links, and formatted text.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CdcChart>

// Sample data with HTML footnotes as a column
const sampleDataWithHTMLFootnotes = [
  {
    State: 'California',
    VaccinationRate: 82.4,
    Year: 2023,
    Category: 'High',
    Footnote: 'Data from <strong>CDC National Immunization Survey</strong>'
  },
  {
    State: 'Connecticut',
    VaccinationRate: 85.6,
    Year: 2023,
    Category: 'High',
    Footnote: 'Coverage rate includes <em>all age groups</em>'
  },
  {
    State: 'Massachusetts',
    VaccinationRate: 87.3,
    Year: 2023,
    Category: 'High',
    Footnote: 'Highest rate in <strong>2023</strong> survey'
  },
  {
    State: 'New York',
    VaccinationRate: 81.2,
    Year: 2023,
    Category: 'High',
    Footnote: 'See <a href="https://www.cdc.gov" target="_blank">CDC.gov</a> for details'
  },
  {
    State: 'Washington',
    VaccinationRate: 80.5,
    Year: 2023,
    Category: 'High',
    Footnote: 'Rate increased <strong>5%</strong> from previous year'
  },
  {
    State: 'Alabama',
    VaccinationRate: 72.5,
    Year: 2023,
    Category: 'Medium',
    Footnote: 'Medium coverage: <em>60-79%</em> range'
  },
  {
    State: 'Arizona',
    VaccinationRate: 75.8,
    Year: 2023,
    Category: 'Medium',
    Footnote: 'Improving from <strong>previous surveys</strong>'
  },
  {
    State: 'Colorado',
    VaccinationRate: 79.1,
    Year: 2023,
    Category: 'Medium',
    Footnote: 'Near <em>high coverage</em> threshold'
  }
]

// Base chart configuration
const baseChartConfig: any = {
  type: 'chart',
  visualizationType: 'Bar',
  title: 'State Vaccination Coverage Rates',
  showTitle: true,
  theme: 'theme-blue',
  fontSize: 'medium',
  orientation: 'vertical',
  filterBehavior: 'Filter Change',
  filters: [],
  xAxis: {
    label: 'State',
    dataKey: 'State',
    type: 'categorical'
  },
  yAxis: {
    label: 'Vaccination Rate (%)',
    dataKey: 'VaccinationRate',
    type: 'linear'
  },
  series: [
    {
      dataKey: 'VaccinationRate',
      type: 'Bar',
      name: 'Coverage Rate'
    }
  ],
  table: {
    label: 'Data Table',
    expanded: true,
    show: true,
    download: true
  },
  dataFormat: {
    commas: false,
    abbreviated: false,
    roundTo: 1
  },
  data: sampleDataWithHTMLFootnotes
}

// Story 1: Basic HTML in footnote column
export const BasicHTMLInFootnoteColumn: Story = {
  name: 'Basic HTML in Footnote Column',
  args: {
    config: {
      ...baseChartConfig,
      columns: {
        State: {
          name: 'State',
          label: 'State',
          dataTable: true
        },
        VaccinationRate: {
          name: 'VaccinationRate',
          label: 'Vaccination Rate (%)',
          dataTable: true,
          suffix: '%',
          roundToPlace: 1
        },
        Footnote: {
          name: 'Footnote',
          label: 'Notes',
          dataTable: true,
          tooltips: false
        }
      }
    },
    isEditor: true
  }
}

// Story 2: HTML with links and formatting
export const HTMLWithLinksAndFormatting: Story = {
  name: 'HTML with Links and Formatting',
  args: {
    config: {
      ...baseChartConfig,
      data: [
        {
          State: 'California',
          VaccinationRate: 82.4,
          Footnote:
            'Source: <strong>CDC</strong> - <a href="https://www.cdc.gov/vaccines" target="_blank">Vaccine Data</a>\nReporting Period: January - December 2023'
        },
        {
          State: 'Connecticut',
          VaccinationRate: 85.6,
          Footnote: 'Includes <em>all demographics</em>\nContact: <a href="mailto:health@ct.gov">health@ct.gov</a>'
        },
        {
          State: 'Massachusetts',
          VaccinationRate: 87.3,
          Footnote:
            '<strong style="color: #005ea2;">Leading state</strong> in vaccination coverage\nHighest rate in region'
        },
        {
          State: 'New York',
          VaccinationRate: 81.2,
          Footnote: 'Data validated by <em>NYS Department of Health</em>\nSee full report for methodology'
        },
        {
          State: 'Texas',
          VaccinationRate: 69.8,
          Footnote:
            'More info: <a href="https://dshs.texas.gov" target="_blank">TX DSHS</a>\nOutreach programs available'
        }
      ],
      columns: {
        State: {
          name: 'State',
          label: 'State',
          dataTable: true
        },
        VaccinationRate: {
          name: 'VaccinationRate',
          label: 'Coverage Rate (%)',
          dataTable: true,
          suffix: '%',
          roundToPlace: 1
        },
        Footnote: {
          name: 'Footnote',
          label: 'Additional Information',
          dataTable: true
        }
      }
    },
    isEditor: true
  }
}

// Story 3: HTML with line breaks
export const HTMLWithLineBreaks: Story = {
  name: 'HTML with Line Breaks',
  args: {
    config: {
      ...baseChartConfig,
      data: [
        {
          State: 'California',
          VaccinationRate: 82.4,
          Footnote: '<strong>Data Source:</strong> CDC Survey<br><em>Collection Period:</em> Jan-Dec 2023'
        },
        {
          State: 'Connecticut',
          VaccinationRate: 85.6,
          Footnote: 'Coverage includes:<br>• Ages 6 months+<br>• All vaccine types'
        },
        {
          State: 'Massachusetts',
          VaccinationRate: 87.3,
          Footnote: 'Leading state for:<br>1. Overall coverage<br>2. Equity metrics'
        },
        {
          State: 'New York',
          VaccinationRate: 81.2,
          Footnote: '<strong>Note:</strong> Excludes NYC<br>See separate report'
        },
        {
          State: 'Washington',
          VaccinationRate: 80.5,
          Footnote: 'Trend: ↑ 5% YoY<br>Target: <strong>85%</strong> by 2024'
        }
      ],
      columns: {
        State: {
          name: 'State',
          label: 'State',
          dataTable: true
        },
        VaccinationRate: {
          name: 'VaccinationRate',
          label: 'Rate (%)',
          dataTable: true,
          suffix: '%',
          roundToPlace: 1
        },
        Footnote: {
          name: 'Footnote',
          label: 'Detailed Notes',
          dataTable: true
        }
      }
    },
    isEditor: true
  }
}

// Story 4: Complex HTML with lists
export const ComplexHTMLWithLists: Story = {
  name: 'Complex HTML with Lists',
  args: {
    config: {
      ...baseChartConfig,
      data: [
        {
          State: 'California',
          VaccinationRate: 82.4,
          Footnote:
            '<strong>Program Details:</strong><ul style="margin:0;padding-left:20px;"><li>State-funded clinics</li><li>Mobile vaccination units</li></ul>'
        },
        {
          State: 'Connecticut',
          VaccinationRate: 85.6,
          Footnote:
            '<em>Success Factors:</em><br><ol style="margin:0;padding-left:20px;"><li>Community outreach</li><li>School programs</li></ol>'
        },
        {
          State: 'Massachusetts',
          VaccinationRate: 87.3,
          Footnote:
            'Achievements:<ul style="margin:0;padding-left:20px;"><li><strong>Highest rate</strong> in region</li><li>Improved <em>accessibility</em></li></ul>'
        }
      ],
      columns: {
        State: {
          name: 'State',
          label: 'State',
          dataTable: true
        },
        VaccinationRate: {
          name: 'VaccinationRate',
          label: 'Coverage (%)',
          dataTable: true,
          suffix: '%',
          roundToPlace: 1
        },
        Footnote: {
          name: 'Footnote',
          label: 'Program Information',
          dataTable: true
        }
      }
    },
    isEditor: true
  }
}

// Story 5: HTML with inline styles
export const HTMLWithInlineStyles: Story = {
  name: 'HTML with Inline Styles',
  args: {
    config: {
      ...baseChartConfig,
      data: [
        {
          State: 'California',
          VaccinationRate: 82.4,
          Footnote:
            '<span style="color: #005ea2; font-weight: bold;">High Priority State</span> - Continued improvement needed'
        },
        {
          State: 'Connecticut',
          VaccinationRate: 85.6,
          Footnote: '<span style="background-color: #f0f0f0; padding: 2px 5px;">Exemplary Performance</span>'
        },
        {
          State: 'Massachusetts',
          VaccinationRate: 87.3,
          Footnote: '<strong style="color: #2e8540;">✓ Target Achieved</strong> - Maintaining high coverage'
        },
        {
          State: 'Texas',
          VaccinationRate: 69.8,
          Footnote: '<span style="color: #d54309;">⚠ Below Target</span> - Outreach initiatives underway'
        }
      ],
      columns: {
        State: {
          name: 'State',
          label: 'State',
          dataTable: true
        },
        VaccinationRate: {
          name: 'VaccinationRate',
          label: 'Rate (%)',
          dataTable: true,
          suffix: '%',
          roundToPlace: 1
        },
        Footnote: {
          name: 'Footnote',
          label: 'Status',
          dataTable: true
        }
      }
    },
    isEditor: true
  }
}

// Story 6: Line chart with HTML footnotes
export const LineChartWithHTMLFootnotes: Story = {
  name: 'Line Chart with HTML Footnotes',
  args: {
    config: {
      ...baseChartConfig,
      visualizationType: 'Line',
      title: 'Vaccination Rate Trends',
      data: [
        {
          Year: '2019',
          Rate: 72.5,
          Footnote: 'Baseline year - <strong>Pre-pandemic</strong> data'
        },
        {
          Year: '2020',
          Rate: 68.3,
          Footnote: '<em style="color: #d54309;">Pandemic impact</em> - Reduced access to healthcare'
        },
        {
          Year: '2021',
          Rate: 75.8,
          Footnote: 'Recovery begins - <strong>Vaccination campaigns</strong> launched'
        },
        {
          Year: '2022',
          Rate: 80.1,
          Footnote: 'Significant improvement - See <a href="https://www.cdc.gov" target="_blank">CDC report</a>'
        },
        {
          Year: '2023',
          Rate: 82.4,
          Footnote: '<strong style="color: #2e8540;">Target exceeded</strong> - Continued success'
        }
      ],
      xAxis: {
        label: 'Year',
        dataKey: 'Year',
        type: 'categorical'
      },
      yAxis: {
        label: 'Vaccination Rate (%)',
        dataKey: 'Rate',
        type: 'linear'
      },
      series: [
        {
          dataKey: 'Rate',
          type: 'Line',
          name: 'Coverage Rate'
        }
      ],
      columns: {
        Year: {
          name: 'Year',
          label: 'Year',
          dataTable: true
        },
        Rate: {
          name: 'Rate',
          label: 'Rate (%)',
          dataTable: true,
          suffix: '%',
          roundToPlace: 1
        },
        Footnote: {
          name: 'Footnote',
          label: 'Context & Notes',
          dataTable: true
        }
      }
    },
    isEditor: true
  }
}

// Story 7: Pie chart with HTML footnotes
export const PieChartWithHTMLFootnotes: Story = {
  name: 'Pie Chart with HTML Footnotes',
  args: {
    config: {
      type: 'chart',
      visualizationType: 'Pie',
      title: 'Coverage by Category',
      showTitle: true,
      theme: 'theme-blue',
      fontSize: 'medium',
      filterBehavior: 'Filter Change',
      filters: [],
      data: [
        {
          Category: 'High Coverage',
          Count: 5,
          Percentage: 42,
          Footnote: '<strong>5 states</strong> with ≥80% coverage<br>Leading examples: <em>MA, CT, NY</em>'
        },
        {
          Category: 'Medium Coverage',
          Count: 7,
          Percentage: 58,
          Footnote: '<strong>7 states</strong> with 60-79% coverage<br>Target: Move to <em>high category</em>'
        }
      ],
      series: [
        {
          dataKey: 'Percentage',
          type: 'Pie',
          name: 'Coverage Distribution'
        }
      ],
      table: {
        label: 'Coverage Distribution Data',
        expanded: true,
        show: true,
        download: true
      },
      columns: {
        Category: {
          name: 'Category',
          label: 'Coverage Category',
          dataTable: true
        },
        Count: {
          name: 'Count',
          label: 'Number of States',
          dataTable: true
        },
        Percentage: {
          name: 'Percentage',
          label: 'Percentage',
          dataTable: true,
          suffix: '%'
        },
        Footnote: {
          name: 'Footnote',
          label: 'Details',
          dataTable: true
        }
      },
      dataFormat: {
        commas: false,
        abbreviated: false
      }
    },
    isEditor: true
  }
}
