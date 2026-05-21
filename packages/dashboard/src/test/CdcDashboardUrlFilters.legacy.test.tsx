import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import CdcDashboardComponent from '../CdcDashboardComponent'
import { getDataURL, getNewFileName } from '../helpers/reloadURLHelpers'
import { getFilterValues, getParentParams, setActiveNestedDropdown } from '../helpers/apiFilterHelpers'
import { FILTER_STYLE } from '../types/FilterStyles'
import type { InitialState } from '../types/InitialState'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.mock('@cdc/chart/src/CdcChartComponent', () => ({
  default: () => <div data-testid='mock-chart' />
}))

vi.mock('@cdc/markup-include/src/CdcMarkupInclude', () => ({
  default: ({ config, datasets }) => {
    const dataKey = config.dataKey
    const dataset = dataKey ? datasets?.[dataKey] : undefined
    return (
      <>
        <span data-testid='datasets-probe'>{JSON.stringify(datasets)}</span>
        <div data-testid={`dataset-${dataKey || config.uid || 'markup'}`}>
          {JSON.stringify({
            data: dataset?.data,
            runtimeDataUrl: dataset?.runtimeDataUrl
          })}
        </div>
      </>
    )
  }
}))

const requestedUrls: string[] = []

const routeData = {
  '/viz.json': [{ dataset: 'viz' }],
  '/row.json': [{ dataset: 'row' }],
  '/footnote.json': [{ dataset: 'footnote' }],
  '/condition.json': [{ dataset: 'condition' }],
  '/files/Weekly_New_York_City_Report.json': [{ dataset: 'filename' }],
  '/files/Weekly_New_York_City_Report_Data_Bite.json': [{ dataset: 'filename-bite' }],
  '/files/static.json': [{ dataset: 'filename-untargeted' }],
  '/api/regions.json': [
    { region_name: 'Northeast', region_id: 'NE' },
    { region_name: 'Southwest', region_id: 'SW' }
  ],
  '/api/autoload-regions.json': [
    { region_name: 'Default Northeast', region_id: 'NE-default' },
    { region_name: 'Default Southwest', region_id: 'SW-default' }
  ],
  '/api-data.json': [{ dataset: 'api' }],
  '/deep-link.json': [{ dataset: 'deep-link' }],
  '/autoload-data.json': [{ dataset: 'autoload' }],
  '/files/NE.json': [{ dataset: 'file-name-api-backed-initial' }],
  '/files/SW.json': [{ dataset: 'file-name-api-backed' }]
}

const jsonResponse = data => ({
  ok: true,
  json: async () => data
})

const readDatasetProbe = (testId: string) => JSON.parse(screen.getByTestId(testId).textContent || '{}')

const readDatasetsProbe = () => JSON.parse(screen.getAllByTestId('datasets-probe')[0].textContent || '{}')

const decodedRequestedUrls = () => requestedUrls.map(url => decodeURIComponent(url))

const createMinimalUrlFilterState = ({
  sharedFilters,
  filterBehavior = 'Apply Button',
  autoLoad = false,
  filtersApplied = filterBehavior !== 'Apply Button',
  dataUrl = 'https://data.test/api-data.json',
  sharedFilterIndexes = sharedFilters.map((_filter, index) => index)
}: {
  sharedFilters: any[]
  filterBehavior?: 'Apply Button' | 'Filter Change'
  autoLoad?: boolean
  filtersApplied?: boolean
  dataUrl?: string
  sharedFilterIndexes?: number[]
}): InitialState =>
  ({
    config: {
      type: 'dashboard',
      dashboard: {
        title: 'Legacy API URL filter dashboard',
        titleStyle: 'small',
        theme: 'theme-blue',
        sharedFilters
      },
      visualizations: {
        filters: {
          uid: 'filters',
          type: 'dashboardFilters',
          visualizationType: 'dashboardFilters',
          filterBehavior,
          autoLoad,
          sharedFilterIndexes
        },
        apiViz: {
          uid: 'apiViz',
          type: 'markup-include',
          dataKey: 'apiData',
          contentEditor: { inlineHTML: '<p>API</p>', useInlineHTML: true }
        }
      },
      rows: [
        { columns: [{ width: 12, widget: 'filters' }], expandCollapseAllButtons: false },
        { columns: [{ width: 12, widget: 'apiViz' }], expandCollapseAllButtons: false }
      ],
      datasets: {
        apiData: { dataUrl }
      },
      table: {}
    },
    data: {},
    loading: false,
    filteredData: {},
    preview: false,
    tabSelected: 'Dashboard Preview',
    filtersApplied
  } as InitialState)

const createApiFilter = (overrides = {}) => ({
  key: 'API Region',
  type: 'urlfilter',
  filterBy: 'Query String',
  filterStyle: 'dropdown',
  showDropdown: true,
  values: [],
  active: '',
  resetLabel: '- Select Region -',
  apiFilter: {
    apiEndpoint: 'https://api.test/api/regions.json',
    textSelector: 'region_name',
    valueSelector: 'region_id'
  },
  usedBy: ['apiViz'],
  ...overrides
})

const createLegacyUrlFilterState = (): InitialState =>
  ({
    config: {
      type: 'dashboard',
      dashboard: {
        title: 'Legacy URL filter dashboard',
        titleStyle: 'small',
        theme: 'theme-blue',
        sharedFilters: [
          {
            key: 'Region',
            type: 'urlfilter',
            filterBy: 'Query String',
            filterStyle: 'dropdown',
            showDropdown: true,
            values: ['North East', 'South West'],
            active: 'South West',
            setByQueryParameter: 'region',
            resetLabel: '- Select Region -'
          },
          {
            key: 'Global Scope',
            type: 'urlfilter',
            filterBy: 'Query String',
            filterStyle: 'dropdown',
            showDropdown: true,
            values: ['Everywhere'],
            active: 'Everywhere',
            queryParameter: 'globalScope',
            usedBy: []
          },
          {
            key: 'Year',
            type: 'urlfilter',
            filterBy: 'Query String',
            filterStyle: 'dropdown',
            showDropdown: true,
            values: ['2023', '2024'],
            active: '2024',
            queryParameter: 'year',
            usedBy: ['chartA']
          },
          {
            key: 'Audience',
            type: 'urlfilter',
            filterBy: 'Query String',
            filterStyle: 'dropdown',
            showDropdown: true,
            values: ['Adults'],
            active: 'Adults',
            queryParameter: 'audience',
            usedBy: [1, 3]
          },
          {
            key: 'Footnote Type',
            type: 'urlfilter',
            filterBy: 'Query String',
            filterStyle: 'dropdown',
            showDropdown: true,
            values: ['detail'],
            active: 'detail',
            queryParameter: 'footnoteType',
            usedBy: ['chartA']
          },
          {
            key: 'File Location',
            type: 'urlfilter',
            filterBy: 'File Name',
            filterStyle: 'dropdown',
            showDropdown: true,
            values: ['new york city'],
            active: 'new york city',
            fileNameTargets: [
              { datasetKey: 'filenameData', fileName: 'weekly ${value} report' },
              { datasetKey: 'filenameBiteData', fileName: 'weekly ${value} report data bite' }
            ],
            forceFileNameCapitalization: true,
            whitespaceReplacement: 'Replace With Underscore',
            usedBy: ['filenameViz']
          }
        ]
      },
      visualizations: {
        filters: {
          uid: 'filters',
          type: 'dashboardFilters',
          visualizationType: 'dashboardFilters',
          filterBehavior: 'Apply Button',
          sharedFilterIndexes: [0, 1, 2, 3, 4, 5]
        },
        chartA: {
          uid: 'chartA',
          type: 'markup-include',
          dataKey: 'vizData',
          contentEditor: { inlineHTML: '<p>Viz</p>', useInlineHTML: true },
          footnotes: { dataKey: 'footnoteData' }
        },
        filenameViz: {
          uid: 'filenameViz',
          type: 'markup-include',
          dataKey: 'filenameData',
          contentEditor: { inlineHTML: '<p>Filename</p>', useInlineHTML: true }
        },
        filenameBiteViz: {
          uid: 'filenameBiteViz',
          type: 'markup-include',
          dataKey: 'filenameBiteData',
          contentEditor: { inlineHTML: '<p>Filename Bite</p>', useInlineHTML: true }
        },
        filenameUntargetedViz: {
          uid: 'filenameUntargetedViz',
          type: 'markup-include',
          dataKey: 'filenameUntargetedData',
          contentEditor: { inlineHTML: '<p>Filename Untargeted</p>', useInlineHTML: true }
        }
      },
      rows: [
        { columns: [{ width: 12, widget: 'filters' }], expandCollapseAllButtons: false },
        {
          dataKey: 'rowData',
          columns: [{ width: 12, widget: 'chartA' }],
          expandCollapseAllButtons: false
        },
        { columns: [{ width: 12, widget: 'filenameViz' }], expandCollapseAllButtons: false },
        {
          columns: [{ width: 12, widget: 'chartA' }],
          dashboardCondition: {
            id: 'condition-1',
            datasetKey: 'conditionData',
            operator: 'hasData'
          },
          expandCollapseAllButtons: false
        },
        { columns: [{ width: 12, widget: 'filenameBiteViz' }], expandCollapseAllButtons: false },
        { columns: [{ width: 12, widget: 'filenameUntargetedViz' }], expandCollapseAllButtons: false }
      ],
      datasets: {
        vizData: { dataUrl: 'https://data.test/viz.json?$limit=5000&stale="old"' },
        rowData: { dataUrl: 'https://data.test/row.json' },
        footnoteData: { dataUrl: 'https://data.test/footnote.json' },
        conditionData: { dataUrl: 'https://data.test/condition.json' },
        filenameData: { dataUrl: 'https://data.test/files/current.json' },
        filenameBiteData: { dataUrl: 'https://data.test/files/current-data-bite.json' },
        filenameUntargetedData: { dataUrl: 'https://data.test/files/static.json' }
      },
      table: {}
    },
    data: {},
    loading: false,
    filteredData: {},
    preview: false,
    tabSelected: 'Dashboard Preview',
    filtersApplied: false
  } as InitialState)

describe('CdcDashboard legacy URL filter behavior', () => {
  beforeEach(() => {
    requestedUrls.length = 0
    window.history.pushState({}, '', '/dashboard')
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    vi.stubGlobal(
      'fetch',
      vi.fn(async input => {
        const href = String(input)
        requestedUrls.push(href)
        const path = new URL(href).pathname
        if (!routeData[path]) {
          return { ok: false, json: async () => ({ error: `No route for ${path}` }) }
        }
        return jsonResponse(routeData[path])
      })
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('reloads scoped legacy Query String and File Name URL-filter datasets with current URL semantics', async () => {
    render(
      <CdcDashboardComponent
        initialState={createLegacyUrlFilterState()}
        interactionLabel='legacy-url-filter-test'
        isEditor={false}
      />
    )

    await waitFor(() => expect(requestedUrls).toHaveLength(7))
    requestedUrls.length = 0

    fireEvent.change(screen.getByLabelText('Region'), { target: { value: 'North East' } })
    fireEvent.click(screen.getByRole('button', { name: 'GO!' }))

    await waitFor(() => expect(requestedUrls).toHaveLength(7))

    expect(decodedRequestedUrls()).toEqual([
      'https://data.test/viz.json?$limit=5000&stale="old"&globalScope="Everywhere"&year=2024&footnoteType="detail"&region="North East"',
      'https://data.test/row.json?globalScope="Everywhere"&audience="Adults"&region="North East"',
      'https://data.test/footnote.json?globalScope="Everywhere"&year=2024&footnoteType="detail"&region="North East"',
      'https://data.test/condition.json?globalScope="Everywhere"&audience="Adults"&region="North East"',
      'https://data.test/files/Weekly_New_York_City_Report.json?globalScope="Everywhere"&region="North East"',
      'https://data.test/files/Weekly_New_York_City_Report_Data_Bite.json?globalScope="Everywhere"&region="North East"',
      'https://data.test/files/static.json?globalScope="Everywhere"&region="North East"'
    ])

    await screen.findByTestId('dataset-vizData')

    expect(readDatasetProbe('dataset-vizData')).toEqual({
      data: routeData['/viz.json'],
      runtimeDataUrl:
        'https://data.test/viz.json?$limit=5000&stale="old"&globalScope="Everywhere"&year=2024&footnoteType="detail"&region="North East"'
    })
    expect(readDatasetProbe('dataset-filenameData')).toEqual({
      data: routeData['/files/Weekly_New_York_City_Report.json'],
      runtimeDataUrl:
        'https://data.test/files/Weekly_New_York_City_Report.json?globalScope="Everywhere"&region="North East"'
    })
    expect(readDatasetProbe('dataset-filenameBiteData')).toEqual({
      data: routeData['/files/Weekly_New_York_City_Report_Data_Bite.json'],
      runtimeDataUrl:
        'https://data.test/files/Weekly_New_York_City_Report_Data_Bite.json?globalScope="Everywhere"&region="North East"'
    })
    expect(readDatasetProbe('dataset-filenameUntargetedData')).toEqual({
      data: routeData['/files/static.json'],
      runtimeDataUrl: 'https://data.test/files/static.json?globalScope="Everywhere"&region="North East"'
    })

    const datasets = readDatasetsProbe()
    expect(datasets.rowData).toEqual({
      dataUrl: 'https://data.test/row.json',
      data: routeData['/row.json'],
      runtimeDataUrl: 'https://data.test/row.json?globalScope="Everywhere"&audience="Adults"&region="North East"',
      dataMetadata: {}
    })
    expect(datasets.footnoteData).toEqual({
      dataUrl: 'https://data.test/footnote.json',
      data: routeData['/footnote.json'],
      runtimeDataUrl:
        'https://data.test/footnote.json?globalScope="Everywhere"&year=2024&footnoteType="detail"&region="North East"',
      dataMetadata: {}
    })
    expect(datasets.conditionData).toEqual({
      dataUrl: 'https://data.test/condition.json',
      data: routeData['/condition.json'],
      runtimeDataUrl: 'https://data.test/condition.json?globalScope="Everywhere"&audience="Adults"&region="North East"',
      dataMetadata: {}
    })
  })

  it('loads API-backed URL-filter options, waits for Apply Button, and reloads with apiFilter.valueSelector', async () => {
    render(
      <CdcDashboardComponent
        initialState={createMinimalUrlFilterState({
          dataUrl: 'https://data.test/api-data.json?existing=1',
          sharedFilterIndexes: [0],
          sharedFilters: [
            createApiFilter(),
            createApiFilter({
              key: 'Reset API Region',
              showDropdown: false,
              active: '- All Regions -',
              resetLabel: '- All Regions -',
              apiFilter: { valueSelector: 'reset_region_id' },
              usedBy: ['apiViz']
            })
          ]
        })}
        interactionLabel='legacy-api-url-filter-test'
        isEditor={false}
      />
    )

    await waitFor(() => expect(decodedRequestedUrls()).toEqual(['https://api.test/api/regions.json']))

    fireEvent.change(screen.getByLabelText('API Region'), { target: { value: 'NE' } })

    expect(decodedRequestedUrls()).toEqual(['https://api.test/api/regions.json'])

    fireEvent.click(screen.getByRole('button', { name: 'GO!' }))

    await waitFor(() =>
      expect(decodedRequestedUrls()).toEqual([
        'https://api.test/api/regions.json',
        'https://data.test/api-data.json?existing=1&region_id="NE"'
      ])
    )

    expect(readDatasetProbe('dataset-apiData')).toEqual({
      data: routeData['/api-data.json'],
      runtimeDataUrl: 'https://data.test/api-data.json?existing=1&region_id="NE"'
    })
  })

  it('does not add apiFilter query params for File Name URL filters', async () => {
    render(
      <CdcDashboardComponent
        initialState={createMinimalUrlFilterState({
          filterBehavior: 'Filter Change',
          dataUrl: 'https://data.test/files/current.json',
          sharedFilterIndexes: [0],
          sharedFilters: [
            {
              key: 'State File',
              type: 'urlfilter',
              filterBy: 'File Name',
              filterStyle: 'dropdown',
              showDropdown: true,
              values: [],
              active: 'NE',
              fileNameTargets: [{ datasetKey: 'apiData', fileName: '${value}' }],
              apiFilter: {
                apiEndpoint: 'https://api.test/api/regions.json',
                textSelector: 'region_name',
                valueSelector: 'region_id'
              },
              usedBy: ['apiViz']
            }
          ]
        })}
        interactionLabel='file-name-api-url-filter-test'
        isEditor={false}
      />
    )

    await waitFor(() =>
      expect(decodedRequestedUrls()).toEqual(['https://api.test/api/regions.json', 'https://data.test/files/NE.json'])
    )
    requestedUrls.length = 0

    fireEvent.change(screen.getByLabelText('State File'), { target: { value: 'SW' } })

    await waitFor(() => expect(decodedRequestedUrls()).toEqual(['https://data.test/files/SW.json']))

    expect(readDatasetProbe('dataset-apiData')).toEqual({
      data: routeData['/files/SW.json'],
      runtimeDataUrl: 'https://data.test/files/SW.json'
    })
  })

  it('uses setByQueryParameter deep-link values and maps them through apiFilter.valueSelector', async () => {
    window.history.pushState({}, '', '/dashboard?region=SW')

    render(
      <CdcDashboardComponent
        initialState={createMinimalUrlFilterState({
          dataUrl: 'https://data.test/deep-link.json',
          sharedFilterIndexes: [0],
          sharedFilters: [
            createApiFilter({
              active: '',
              setByQueryParameter: 'region',
              apiFilter: {
                apiEndpoint: 'https://api.test/api/regions.json',
                textSelector: 'region_name',
                valueSelector: 'region_id'
              }
            })
          ]
        })}
        interactionLabel='legacy-deep-link-url-filter-test'
        isEditor={false}
      />
    )

    await waitFor(() => expect(decodedRequestedUrls()).toEqual(['https://api.test/api/regions.json']))
    fireEvent.click(screen.getByRole('button', { name: 'GO!' }))

    await waitFor(() =>
      expect(decodedRequestedUrls()).toEqual([
        'https://api.test/api/regions.json',
        'https://data.test/deep-link.json?region_id="SW"'
      ])
    )

    expect(readDatasetProbe('dataset-apiData')).toEqual({
      data: routeData['/deep-link.json'],
      runtimeDataUrl: 'https://data.test/deep-link.json?region_id="SW"'
    })
  })

  it('autoloads API-backed URL-filter defaults and reloads data without the Apply Button', async () => {
    render(
      <CdcDashboardComponent
        initialState={createMinimalUrlFilterState({
          autoLoad: true,
          filtersApplied: true,
          dataUrl: 'https://data.test/autoload-data.json',
          sharedFilters: [
            createApiFilter({
              apiFilter: {
                apiEndpoint: 'https://api.test/api/autoload-regions.json',
                textSelector: 'region_name',
                valueSelector: 'region_id'
              }
            })
          ]
        })}
        interactionLabel='legacy-autoload-url-filter-test'
        isEditor={false}
      />
    )

    await waitFor(() =>
      expect(decodedRequestedUrls()).toEqual([
        'https://api.test/api/autoload-regions.json',
        'https://data.test/autoload-data.json?region_id="NE-default"'
      ])
    )

    expect(readDatasetProbe('dataset-apiData')).toEqual({
      data: routeData['/autoload-data.json'],
      runtimeDataUrl: 'https://data.test/autoload-data.json?region_id="NE-default"'
    })
  })

  it('proves scoped URL filters can touch multiple datasets and compose with other URL filters on one dataset', async () => {
    render(
      <CdcDashboardComponent
        initialState={createLegacyUrlFilterState()}
        interactionLabel='legacy-url-filter-composition-test'
        isEditor={false}
      />
    )

    await waitFor(() => expect(requestedUrls).toHaveLength(7))
    requestedUrls.length = 0

    fireEvent.change(screen.getByLabelText('Region'), { target: { value: 'North East' } })
    fireEvent.click(screen.getByRole('button', { name: 'GO!' }))

    await waitFor(() => expect(requestedUrls).toHaveLength(7))

    const [vizUrl, rowUrl, footnoteUrl, conditionUrl, filenameUrl, filenameBiteUrl, filenameUntargetedUrl] =
      decodedRequestedUrls()

    expect(rowUrl).toBe('https://data.test/row.json?globalScope="Everywhere"&audience="Adults"&region="North East"')
    expect(conditionUrl).toBe(
      'https://data.test/condition.json?globalScope="Everywhere"&audience="Adults"&region="North East"'
    )
    expect(vizUrl).not.toContain('audience=')
    expect(filenameUrl).not.toContain('audience=')
    expect(filenameBiteUrl).not.toContain('audience=')
    expect(filenameBiteUrl).toContain('/Weekly_New_York_City_Report_Data_Bite.json')
    expect(filenameUntargetedUrl).toBe(
      'https://data.test/files/static.json?globalScope="Everywhere"&region="North East"'
    )
    expect(footnoteUrl).toBe(
      'https://data.test/footnote.json?globalScope="Everywhere"&year=2024&footnoteType="detail"&region="North East"'
    )
  })

  it('keeps gatherQueryParams formatting for quoted strings, numeric values, and $ params', () => {
    expect(
      getDataURL(
        {
          $limit: '5000',
          year: '2024',
          location: 'North East',
          alreadyQuoted: '"value with quotes"',
          empty: '',
          missing: undefined
        },
        new URL('https://data.test/report.json'),
        ''
      )
    ).toBe(
      'https://data.test/report.json?$limit=5000&year=2024&location="North East"&alreadyQuoted="value with quotes"'
    )
  })

  it('keeps legacy File Name casing, whitespace replacement, fallback, and extension preservation', () => {
    const baseFilter = {
      fileNameTargets: [{ datasetKey: 'fileData', fileName: 'weekly ${value} report' }],
      active: 'new york city',
      forceFileNameCapitalization: true
    }

    expect(getNewFileName('', { ...baseFilter, whitespaceReplacement: 'Keep Spaces' } as any, 'fileData')).toBe(
      'Weekly New York City Report'
    )
    expect(getNewFileName('', { ...baseFilter, whitespaceReplacement: 'Remove Spaces' } as any, 'fileData')).toBe(
      'WeeklyNewYorkCityReport'
    )
    expect(
      getNewFileName('', { ...baseFilter, whitespaceReplacement: 'Replace With Underscore' } as any, 'fileData')
    ).toBe('Weekly_New_York_City_Report')
    expect(
      getNewFileName(
        '',
        {
          fileNameTargets: [{ datasetKey: 'fileData', fileName: '${value}' }],
          active: 'raw active name',
          forceFileNameCapitalization: true
        } as any,
        'fileData'
      )
    ).toBe('Raw Active Name')
    expect(getDataURL({}, new URL('https://data.test/files/current.csv'), 'Weekly_New_York_City_Report')).toBe(
      'https://data.test/files/Weekly_New_York_City_Report.csv'
    )
  })

  it('keeps nested API dropdown parent params, grouped options, defaults, and subgroup query params', () => {
    const nestedOptions = getFilterValues(
      [
        { year_label: 'Year 2024', year_value: '2024', quarter_label: 'Quarter 1', quarter_value: 'Q1' },
        { year_label: 'Year 2024', year_value: '2024', quarter_label: 'Quarter 2', quarter_value: 'Q2' },
        { year_label: 'Year 2025', year_value: '2025', quarter_label: 'Quarter 1', quarter_value: 'Q1' }
      ],
      {
        textSelector: 'year_label',
        valueSelector: 'year_value',
        subgroupTextSelector: 'quarter_label',
        subgroupValueSelector: 'quarter_value'
      } as any
    )

    expect(nestedOptions).toEqual([
      {
        text: 'Year 2024',
        value: '2024',
        subOptions: [
          { text: 'Quarter 1', value: 'Q1' },
          { text: 'Quarter 2', value: 'Q2' }
        ]
      },
      {
        text: 'Year 2025',
        value: '2025',
        subOptions: [{ text: 'Quarter 1', value: 'Q1' }]
      }
    ])

    const nestedParent = {
      key: 'Year and Quarter',
      type: 'urlfilter',
      filterBy: 'Query String',
      filterStyle: FILTER_STYLE.nestedDropdown,
      active: '2024',
      apiFilter: {
        valueSelector: 'year',
        subgroupValueSelector: 'quarter'
      },
      subGrouping: { active: 'Q2' }
    }
    const child = {
      key: 'Child',
      type: 'urlfilter',
      filterBy: 'Query String',
      apiFilter: { apiEndpoint: 'https://api.test/api/child.json' },
      parents: ['Year and Quarter']
    }

    expect(getParentParams(child as any, [nestedParent, child] as any)).toEqual([
      { key: 'year', value: '2024' },
      { key: 'quarter', value: 'Q2' }
    ])

    window.history.pushState({}, '', '/dashboard?year=2025&quarter=Q1')
    const deepLinkedNestedFilter = {
      ...nestedParent,
      active: '',
      setByQueryParameter: 'year',
      subGrouping: { active: '', setByQueryParameter: 'quarter' }
    }

    setActiveNestedDropdown(nestedOptions, deepLinkedNestedFilter as any)

    expect(deepLinkedNestedFilter.active).toBe('2025')
    expect(deepLinkedNestedFilter.subGrouping.active).toBe('Q1')
  })
})
