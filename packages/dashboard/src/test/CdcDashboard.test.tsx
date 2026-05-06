import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CdcDashboard from '../CdcDashboard'

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
