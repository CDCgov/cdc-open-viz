import { Meta, StoryObj } from '@storybook/react-vite'
import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import defaults from '../data/initial-state.js'

const meta: Meta<typeof DataTableStandAlone> = {
  title: 'Components/Templates/DataTable/With Footnotes',
  component: DataTableStandAlone,
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates data table with footnotes including HTML formatting, newlines, and markup variables.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof DataTableStandAlone>

// Sample data for the data table
const sampleData = [
  {
    State: 'Alabama',
    Population: 5024279,
    VaccinationRate: 72.5,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Alaska',
    Population: 733391,
    VaccinationRate: 68.3,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Arizona',
    Population: 7151502,
    VaccinationRate: 75.8,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'California',
    Population: 39538223,
    VaccinationRate: 82.4,
    Year: 2023,
    Category: 'High',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Colorado',
    Population: 5773714,
    VaccinationRate: 79.1,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Connecticut',
    Population: 3605944,
    VaccinationRate: 85.6,
    Year: 2023,
    Category: 'High',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Florida',
    Population: 21538187,
    VaccinationRate: 74.2,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Georgia',
    Population: 10711908,
    VaccinationRate: 70.9,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Massachusetts',
    Population: 7029917,
    VaccinationRate: 87.3,
    Year: 2023,
    Category: 'High',
    Program: 'Flu Vaccine'
  },
  {
    State: 'New York',
    Population: 20201249,
    VaccinationRate: 81.2,
    Year: 2023,
    Category: 'High',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Texas',
    Population: 29145505,
    VaccinationRate: 69.8,
    Year: 2023,
    Category: 'Medium',
    Program: 'Flu Vaccine'
  },
  {
    State: 'Washington',
    Population: 7705281,
    VaccinationRate: 80.5,
    Year: 2023,
    Category: 'High',
    Program: 'Flu Vaccine'
  }
]

// Base configuration for the data table
const baseConfig: any = {
  ...defaults,
  type: 'table' as const,
  visualizationType: 'Table',
  title: 'State Vaccination Coverage Rates',
  showTitle: true,
  theme: 'theme-blue',
  fontSize: 'medium' as const,
  filterBehavior: 'Filter Change',
  filters: [],
  table: {
    ...defaults.table,
    label: 'Vaccination Data',
    expanded: true,
    caption: 'State-level vaccination coverage data',
    indexLabel: 'State',
    download: true,
    showVertical: false
  },
  columns: {
    State: {
      name: 'State',
      label: 'State',
      dataTable: true,
      tooltips: false
    },
    Population: {
      name: 'Population',
      label: 'Population',
      dataTable: true,
      tooltips: false,
      commas: true
    },
    VaccinationRate: {
      name: 'VaccinationRate',
      label: 'Vaccination Rate (%)',
      dataTable: true,
      tooltips: false,
      suffix: '%',
      roundToPlace: 1
    },
    Category: {
      name: 'Category',
      label: 'Coverage Category',
      dataTable: true,
      tooltips: false
    }
  },
  data: sampleData
}

// Story with basic HTML footnotes
export const WithHTMLFootnotes: Story = {
  name: 'With HTML Footnotes',
  args: {
    visualizationKey: 'data-table-html-footnotes',
    config: {
      ...baseConfig,
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: 'Data source: <strong>CDC National Immunization Survey</strong>'
          },
          {
            symbol: '†',
            text: 'Coverage categories: <em>High (≥80%)</em>, <em>Medium (60-79%)</em>, <em>Low (<60%)</em>'
          },
          {
            text: 'For more information, visit <a href="https://www.cdc.gov" target="_blank">CDC.gov</a>'
          }
        ]
      }
    },
    isEditor: true
  }
}

// Story with HTML tags including line breaks
export const WithHTMLAndLineBreaks: Story = {
  name: 'With HTML and Line Breaks',
  args: {
    visualizationKey: 'data-table-html-linebreaks',
    config: {
      ...baseConfig,
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: 'Data reflects 2023 vaccination coverage rates.<br><strong>Note:</strong> Rates may vary by age group and vaccine type.'
          },
          {
            symbol: '†',
            text: 'Coverage categories defined as:<br>• <strong>High:</strong> ≥80%<br>• <strong>Medium:</strong> 60-79%<br>• <strong>Low:</strong> <60%'
          },
          {
            text: 'Additional information:<br>Population estimates from <em>U.S. Census Bureau</em><br>Vaccination data from <em>CDC Immunization Programs</em>'
          }
        ]
      }
    },
    isEditor: true
  }
}

// Story with newlines and HTML combined
export const WithNewlinesAndHTML: Story = {
  name: 'With Newlines and HTML',
  args: {
    visualizationKey: 'data-table-newlines-html',
    config: {
      ...baseConfig,
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: 'Data Source Information:\nNational Immunization Survey conducted by <strong>CDC</strong>\nReporting period: <em>January - December 2023</em>'
          },
          {
            symbol: '†',
            text: 'Coverage Categories:\nHigh coverage states: <strong>5 states</strong> with rates ≥80%\nMedium coverage states: <strong>7 states</strong> with rates 60-79%'
          },
          {
            text: 'Important Notes:\nVaccination rates shown are for <em>influenza vaccine</em>\nRates calculated based on survey responses\nFor complete methodology, see <a href="https://www.cdc.gov" target="_blank">CDC documentation</a>'
          }
        ]
      }
    },
    isEditor: true
  }
}

// Story with markup variables in footnotes
export const WithMarkupVariables: Story = {
  name: 'With Markup Variables',
  args: {
    visualizationKey: 'data-table-markup-variables',
    config: {
      ...baseConfig,
      enableMarkupVariables: true,
      markupVariables: [
        {
          name: 'all_states',
          columnName: 'State',
          tag: '{{all_states}}',
          conditions: [],
          addCommas: true
        },
        {
          name: 'high_coverage_states',
          columnName: 'State',
          tag: '{{high_coverage_states}}',
          conditions: [
            {
              columnName: 'Category',
              isOrIsNotEqualTo: 'is',
              value: 'High'
            }
          ],
          addCommas: true
        },
        {
          name: 'medium_coverage_states',
          columnName: 'State',
          tag: '{{medium_coverage_states}}',
          conditions: [
            {
              columnName: 'Category',
              isOrIsNotEqualTo: 'is',
              value: 'Medium'
            }
          ],
          addCommas: true
        },
        {
          name: 'data_year',
          columnName: 'Year',
          tag: '{{data_year}}',
          conditions: [],
          addCommas: false
        }
      ],
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: 'States included in analysis: <strong>{{all_states}}</strong>'
          },
          {
            symbol: '†',
            text: 'High coverage states (≥80%): <em>{{high_coverage_states}}</em><br>These states demonstrated <strong>excellent</strong> vaccination uptake.'
          },
          {
            text: 'Medium coverage states (60-79%): {{medium_coverage_states}}\nData year: <strong>{{data_year}}</strong>'
          }
        ]
      }
    },
    isEditor: true
  }
}

// Story with filters that affect footnotes
export const WithFilterableFootnotes: Story = {
  name: 'With Filterable Footnotes',
  args: {
    visualizationKey: 'data-table-filterable-footnotes',
    config: {
      ...baseConfig,
      enableMarkupVariables: true,
      filters: [
        {
          columnName: 'Category',
          label: 'Coverage Category',
          active: 'High',
          values: ['High', 'Medium'],
          setBy: 'url',
          filterBy: ['High', 'Medium'],
          filterFootnotes: true,
          filterStyle: 'dropdown'
        }
      ],
      markupVariables: [
        {
          name: 'filtered_states',
          columnName: 'State',
          tag: '{{filtered_states}}',
          conditions: [],
          addCommas: true
        },
        {
          name: 'selected_category',
          columnName: 'Category',
          tag: '{{selected_category}}',
          conditions: [],
          addCommas: false
        }
      ],
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: 'Filtered results showing: <strong>{{selected_category}}</strong> coverage states'
          },
          {
            symbol: '†',
            text: 'States displayed: <em>{{filtered_states}}</em><br>Use the filter above to view different coverage categories.'
          },
          {
            text: 'Note: Footnote content updates dynamically based on filter selections.<br>This demonstrates the <strong>filterFootnotes</strong> feature.'
          }
        ]
      }
    },
    isEditor: true
  }
}

// Story with complex HTML formatting
export const WithComplexHTML: Story = {
  name: 'With Complex HTML',
  args: {
    visualizationKey: 'data-table-complex-html',
    config: {
      ...baseConfig,
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: '<strong style="color: #005ea2;">Important:</strong> Vaccination coverage rates are calculated using <em>household survey data</em> and may differ from <em>provider-reported data</em>.'
          },
          {
            symbol: '†',
            text: 'Coverage Category Definitions:<br><ul style="margin: 0; padding-left: 20px;"><li><strong>High:</strong> ≥80% coverage</li><li><strong>Medium:</strong> 60-79% coverage</li><li><strong>Low:</strong> <60% coverage</li></ul>'
          },
          {
            text: 'For questions or additional information:<br>• Visit <a href="https://www.cdc.gov" target="_blank" style="text-decoration: underline;">CDC.gov</a><br>• Email: <a href="mailto:vaccines@cdc.gov">vaccines@cdc.gov</a><br>• Call: <strong>1-800-CDC-INFO</strong>'
          }
        ]
      }
    },
    isEditor: true
  }
}

// Story showing editor mode with footnotes
export const InEditorMode: Story = {
  name: 'In Editor Mode',
  args: {
    visualizationKey: 'data-table-editor-footnotes',
    config: {
      ...baseConfig,
      footnotes: {
        staticFootnotes: [
          {
            symbol: '*',
            text: 'This demonstrates the data table with footnotes in <strong>editor mode</strong>.<br>You can configure footnotes using the editor panel.'
          },
          {
            symbol: '†',
            text: 'HTML tags like <em>italic</em>, <strong>bold</strong>, and <br>line breaks are fully supported.'
          }
        ]
      }
    },
    isEditor: true
  }
}
