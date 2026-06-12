import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CdcDashboard, { formatDashboardInitialState } from '../CdcDashboard'

vi.mock('resize-observer-polyfill', () => ({
  default: vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
}))

const createDashboardConfig = () => ({
  type: 'dashboard',
  dashboard: {
    theme: 'theme-blue',
    titleStyle: 'small',
    sharedFilters: [
      {
        key: 'Year',
        showDropdown: true,
        values: ['2024', '2025'],
        orderedValues: ['2024', '2025'],
        type: 'datafilter',
        filterStyle: 'dropdown',
        columnName: 'year',
        defaultValue: '2025',
        active: '2025',
        usedBy: ['waffle']
      }
    ]
  },
  rows: [{ columns: [{ width: 12, widget: 'filters' }] }, { columns: [{ width: 12, widget: 'waffle' }] }],
  visualizations: {
    filters: {
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      filterBehavior: 'Filter Change',
      sharedFilterIndexes: [0],
      uid: 'filters'
    },
    waffle: {
      type: 'waffle-chart',
      uid: 'waffle',
      title: 'Year Waffle',
      showTitle: false,
      visualizationType: 'Waffle',
      visualizationSubType: 'linear',
      showPercent: false,
      showDenominator: false,
      valueDescription: 'out of 100',
      content: 'during {{year}}',
      subtext: '',
      orientation: 'horizontal',
      filters: [],
      fontSize: '',
      overallFontSize: 'medium',
      dataColumn: 'value',
      dataFunction: 'Max',
      dataConditionalColumn: '',
      dataConditionalOperator: '',
      dataConditionalComparate: '',
      invalidComparate: false,
      customDenom: false,
      dataDenom: '100',
      dataDenomColumn: '',
      dataDenomFunction: '',
      suffix: '',
      roundToPlace: '0',
      shape: 'circle',
      nodeWidth: '10',
      nodeSpacer: '2',
      theme: 'theme-blue',
      gauge: {
        height: 35,
        width: '100%'
      },
      visual: {
        border: true,
        accent: false,
        background: false,
        useWrap: false,
        hideBackgroundColor: false,
        borderColorTheme: false,
        colors: {
          'theme-blue': '#005eaa'
        }
      },
      markupVariables: [
        {
          sourceType: 'column',
          name: 'year',
          tag: '{{year}}',
          columnName: 'year',
          conditions: [],
          addCommas: false,
          hideOnNull: false,
          outputType: 'value'
        }
      ],
      enableMarkupVariables: true,
      filterBehavior: 'Filter Change',
      dataKey: 'waffle-data.json',
      version: '4.26.4-1'
    }
  },
  datasets: {
    'waffle-data.json': {
      data: [
        { year: '2024', value: 24 },
        { year: '2025', value: 25 }
      ]
    }
  },
  table: {
    show: false
  }
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('CdcDashboard', () => {
  it('migrates 4.24.3 and 4.24.7 dashboards before deriving row filters and conditions', () => {
    const data = [
      { region: 'East', message: 'Visible' },
      { region: 'West', message: 'Hidden' }
    ]
    const config: any = {
      type: 'dashboard',
      version: '4.24.2',
      dashboard: {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            active: 'East',
            showDropdown: true,
            usedBy: [1, 'conditional-text']
          }
        ]
      },
      rows: [
        [{ width: 12, widget: 'legacy-array-row' }],
        {
          dataKey: 'main',
          data,
          dashboardCondition: {
            datasetKey: 'main',
            operator: 'hasData'
          },
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'conditional-text',
                  dashboardCondition: {
                    datasetKey: 'main',
                    operator: 'columnHasAnyValue',
                    columnName: 'message',
                    values: ['Visible']
                  }
                }
              ]
            }
          ]
        }
      ],
      visualizations: {
        'legacy-array-row': {
          type: 'chart',
          dataKey: 'main'
        },
        'conditional-text': {
          type: 'markup-include',
          dataKey: 'main'
        }
      },
      datasets: {
        main: { data }
      }
    }

    const initial = formatDashboardInitialState(config, { main: data })
    const rowConditionId = initial.config.rows[2].dashboardCondition.id
    const componentConditionId = initial.config.rows[2].columns[0].conditionalWidgets[0].dashboardCondition.id

    expect(initial.config.rows[1].columns).toEqual([{ width: 12, widget: 'legacy-array-row', uuid: undefined }])
    expect(initial.config.rows[2].columns[0].conditionalWidgets[0].widget).toBe('conditional-text')
    expect(initial.config.dashboard.sharedFilters[0].usedBy).toEqual(['2', 'conditional-text'])
    expect(initial.filteredData).toMatchObject({
      '2': [data[0]],
      [rowConditionId]: [data[0]],
      [componentConditionId]: [data[0]]
    })
    expect(initial.filteredData).not.toHaveProperty('1')
  })

  it('migrates 4.25.4 footnote row insertion before deriving filtered row data', () => {
    const data = [
      { region: 'East', value: 1 },
      { region: 'West', value: 2 }
    ]
    const config: any = {
      type: 'dashboard',
      version: '4.25.3',
      dashboard: {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            active: 'East',
            showDropdown: true,
            usedBy: []
          }
        ]
      },
      rows: [
        { columns: [{ width: 12, widget: 'filters' }] },
        {
          footnotesId: 'footnotes',
          columns: [
            { width: 6, widget: 'chart-a' },
            { width: 6, widget: 'chart-b' }
          ]
        },
        {
          dataKey: 'main',
          data,
          columns: [{ width: 12, widget: 'row-chart' }]
        }
      ],
      visualizations: {
        filters: {
          type: 'dashboardFilters',
          visualizationType: 'dashboardFilters',
          sharedFilterIndexes: [0],
          filterBehavior: 'Filter Change'
        },
        'chart-a': { type: 'chart', dataKey: 'main' },
        'chart-b': { type: 'chart', dataKey: 'main' },
        'row-chart': { type: 'chart', dataKey: 'main' },
        footnotes: {
          uid: 'footnotes',
          type: 'footnotes',
          visualizationType: 'footnotes',
          dataKey: 'main',
          staticFootnotes: 'Legacy footnote'
        }
      },
      datasets: {
        main: { data }
      }
    }

    const initial = formatDashboardInitialState(config, { main: data })

    expect(initial.config.rows[2].columns[0].widget).toMatch(/^markup-include-/)
    expect(initial.config.rows[3].dataKey).toBe('main')
    expect(initial.filteredData).toMatchObject({
      '3': [data[0]],
      'chart-a': [data[0]],
      'chart-b': [data[0]]
    })
    expect(initial.filteredData).not.toHaveProperty('2')
  })

  it('migrates 4.26.5 filtered-text widgets before deriving dashboard runtime', () => {
    vi.spyOn(console, 'info').mockImplementation(() => undefined)

    const data = [
      { region: 'East', Message: 'East message' },
      { region: 'West', Message: 'West message' }
    ]
    const config: any = {
      type: 'dashboard',
      version: '4.26.4-1',
      dashboard: {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            active: 'East',
            showDropdown: true,
            usedBy: ['legacy-filtered-text']
          }
        ]
      },
      rows: [{ columns: [{ width: 12, widget: 'legacy-filtered-text' }] }],
      visualizations: {
        'legacy-filtered-text': {
          uid: 'legacy-filtered-text',
          type: 'filtered-text',
          visualizationType: 'filtered-text',
          textColumn: 'Message',
          filters: [{ columnName: 'region', columnValue: 'East' }],
          dataKey: 'main'
        }
      },
      datasets: {
        main: { data }
      }
    }

    const initial = formatDashboardInitialState(config, { main: data })
    const migratedText = initial.config.visualizations['legacy-filtered-text']

    expect(migratedText.type).toBe('markup-include')
    expect(migratedText.visualizationType).toBe('markup-include')
    expect(migratedText.markupVariables[0]).toMatchObject({
      columnName: 'Message',
      conditions: [{ columnName: 'region', isOrIsNotEqualTo: 'is', value: 'East' }]
    })
    expect(initial.filteredData).toMatchObject({
      'legacy-filtered-text': [data[0]]
    })
    expect(initial.config.runtime).toEqual({})
  })

  it('migrates multi-dashboard root and sub-dashboard versions before deriving selected dashboard state', () => {
    const parentData = [
      { region: 'East', value: 1 },
      { region: 'West', value: 2 }
    ]
    const childData = [{ region: 'East', value: 3 }]
    const config: any = {
      type: 'dashboard',
      version: '4.26.5',
      activeDashboard: 0,
      dashboard: {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            active: 'East',
            showDropdown: true,
            usedBy: [0]
          }
        ]
      },
      rows: [
        {
          dataKey: 'parent',
          data: parentData,
          columns: [{ width: 12, widget: 'selected-chart' }]
        }
      ],
      visualizations: {
        'selected-chart': { type: 'chart', dataKey: 'parent' }
      },
      datasets: {
        parent: { data: parentData }
      },
      multiDashboards: [
        {
          type: 'dashboard',
          version: '4.24.6',
          dashboard: {
            sharedFilters: [
              {
                key: 'Child Region',
                type: 'datafilter',
                columnName: 'region',
                active: 'East',
                showDropdown: true,
                usedBy: [0]
              }
            ]
          },
          rows: [
            {
              dataKey: 'child',
              data: childData,
              columns: [{ width: 12, widget: 'child-chart' }]
            }
          ],
          visualizations: {
            'child-chart': { type: 'chart', dataKey: 'child' }
          },
          datasets: {
            child: { data: childData }
          }
        }
      ]
    }

    const initial = formatDashboardInitialState(config, { parent: parentData })
    const childDashboard = initial.config.multiDashboards[0]

    expect(initial.filteredData).toMatchObject({ '1': [parentData[0]] })
    expect(childDashboard.version).toBe(initial.config.version)
    expect(childDashboard.rows[0].columns[0].widget).toBe('legacySharedFilters')
    expect(childDashboard.rows[1].dataKey).toBe('child')
    expect(childDashboard.dashboard.sharedFilters[0].usedBy).toEqual(['1'])
  })

  it('updates waffle chart markup when a dashboard loaded through configUrl changes data filters', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(createDashboardConfig())
    })
    vi.stubGlobal('fetch', fetchMock)

    render(<CdcDashboard configUrl='/dashboard-with-waffle.json' interactionLabel='dashboard-test' />)

    await waitFor(() => {
      expect(screen.getByText(/during 2025/)).toBeInTheDocument()
    })

    await userEvent.selectOptions(screen.getByLabelText('Year'), '2024')

    await waitFor(() => {
      expect(screen.getByText(/during 2024/)).toBeInTheDocument()
    })

    expect(screen.queryByText(/during 2025/)).not.toBeInTheDocument()
  })
})
