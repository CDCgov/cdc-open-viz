import {
  isUpdateNeeded,
  getDataURL,
  getDatasetKeys,
  getNewFileName,
  filterUsedByDataUrl,
  isEmptyInitialFileNameTarget
} from '../reloadURLHelpers'
import { SharedFilter } from '../../types/SharedFilter'

describe('isUpdateNeeded', () => {
  it('should return false when there are no filters and no query params', () => {
    const filters: SharedFilter[] = []
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return true when there is a filter with type "urlfilter" and filterBy "File Name"', () => {
    const filters: SharedFilter[] = [{ type: 'urlfilter', active: 'someValue', filterBy: 'File Name' }]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(true)
  })

  it('should return false for an empty File Name filter that allows empty initial state', () => {
    const filters: SharedFilter[] = [
      { type: 'urlfilter', active: '', filterBy: 'File Name', allowEmptyInitialState: true }
    ]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return true when query params are different', () => {
    const filters: SharedFilter[] = []
    const currentQueryParams = { param1: 'value1' }
    const newQueryParams = { param1: 'value2' }
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(true)
  })

  it('should return false when query params are the same', () => {
    const filters: SharedFilter[] = []
    const currentQueryParams = { param1: 'value1' }
    const newQueryParams = { param1: 'value1' }
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return false when filter type is "urlfilter" but filterBy is not "File Name"', () => {
    const filters: SharedFilter[] = [{ type: 'urlfilter', active: 'someValue', filterBy: 'Other' }]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })

  it('should return false when filter type is "urlfilter" and filterBy is "File Name" but active is an array', () => {
    const filters: SharedFilter[] = [{ type: 'urlfilter', active: ['someValue'], filterBy: 'File Name' }]
    const currentQueryParams = {}
    const newQueryParams = {}
    expect(isUpdateNeeded(filters, currentQueryParams, newQueryParams)).toBe(false)
  })
})

describe('getDataURL', () => {
  it('should return the base URL when there are no query parameters and no new file name', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = ''
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe('https://example.com/path/to/file.csv')
  })

  it('should append query parameters correctly when they are strings and there is no new file name', () => {
    const updatedQSParams = { param1: 'value1', param2: 'value2' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = ''
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/file.csv?param1="value1"&param2="value2"'
    )
  })

  it('should append query parameters correctly when they are arrays and there is no new file name', () => {
    const updatedQSParams = { param1: ['value1', 'value2'], param2: 'value3' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = ''
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/file.csv?param1="value1"&param1="value2"&param2="value3"'
    )
  })

  it('should change the file name correctly when there are no query parameters but there is a new file name', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = 'newfile'
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe('https://example.com/path/to/newfile.csv')
  })

  it('does not double the original filename extension authored in the new file name', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/file.json')

    expect(getDataURL(updatedQSParams, dataUrl, 'newfile.json')).toBe('https://example.com/path/to/newfile.json')
    expect(getDataURL(updatedQSParams, dataUrl, 'newfile.JSON')).toBe('https://example.com/path/to/newfile.JSON')
  })

  it('does not append the original last path segment as an extension for extensionless dataset URLs', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/current')

    expect(getDataURL(updatedQSParams, dataUrl, 'newfile.json')).toBe('https://example.com/path/to/newfile.json')
    expect(getDataURL(updatedQSParams, dataUrl, 'newfile')).toBe('https://example.com/path/to/newfile')
  })

  it('preserves current path-template behavior for subdirectories and root-looking paths', () => {
    const updatedQSParams = {}
    const dataUrl = new URL('https://example.com/path/to/file.json')

    expect(getDataURL(updatedQSParams, dataUrl, 'xyz/newfile')).toBe('https://example.com/path/to/xyz/newfile.json')
    expect(getDataURL(updatedQSParams, dataUrl, 'xyz/../newfile')).toBe(
      'https://example.com/path/to/xyz/../newfile.json'
    )
    expect(getDataURL(updatedQSParams, dataUrl, '/newfile')).toBe('https://example.com/path/to//newfile.json')
  })

  it('should change the file name and append query parameters correctly when they are strings and there is a new file name', () => {
    const updatedQSParams = { param1: 'value1', param2: 'value2' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = 'newfile'
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/newfile.csv?param1="value1"&param2="value2"'
    )
  })

  it('should change the file name and append query parameters correctly when they are arrays and there is a new file name', () => {
    const updatedQSParams = { param1: ['value1', 'value2'], param2: 'value3' }
    const dataUrl = new URL('https://example.com/path/to/file.csv')
    const newFileName = 'newfile'
    expect(getDataURL(updatedQSParams, dataUrl, newFileName)).toBe(
      'https://example.com/path/to/newfile.csv?param1="value1"&param1="value2"&param2="value3"'
    )
  })

  it('should filter out empty query parameters', () => {
    const currentQSParams = {
      $datakey: 'topic',
      $limit: '5000',
      'TEST TEST': '"undefined"',
      AgeGroupSelector: '"undefined"',
      Category: '"undefined"',
      Indicator: '"undefined"',
      Location: '"undefined"',
      Year: '"undefined"'
    }
    const updatedQSParams = {
      AgeGroupSelector: undefined,
      Category: undefined,
      Indicator: undefined,
      Location: undefined,
      Year: undefined
    }
    const runtimeURL = `http://example.com/public?$datakey=topic&$limit=5000&Location="undefined"&Category="undefined"&Indicator="undefined"&Year="undefined"&AgeGroupSelector="undefined"`
    const dataUrl = new URL(runtimeURL, 'http://example.com')
    const newFileName = ''
    const dataUrlFinal = getDataURL({ ...currentQSParams, ...updatedQSParams }, dataUrl, newFileName)
    expect(dataUrlFinal).toBe('http://example.com/public?$datakey=topic&$limit=5000')
    updatedQSParams.Category = 'something'
    expect(getDataURL({ ...currentQSParams, ...updatedQSParams }, dataUrl, newFileName)).toBe(
      'http://example.com/public?$datakey=topic&$limit=5000&Category="something"'
    )
  })
})

describe('getNewFileName', () => {
  it('uses exact template casing by default and applies whitespace replacement to the filter value', () => {
    const newFileName = 'defaultFile'
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'state_${value}' }],
      active: 'active Filter',
      whitespaceReplacement: 'Replace With Underscore'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('state_active_Filter')
  })

  it('keeps the existing filename for an empty File Name filter that allows empty initial state', () => {
    const filter = {
      type: 'urlfilter',
      filterBy: 'File Name',
      allowEmptyInitialState: true,
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'state_${value}' }],
      active: '',
      whitespaceReplacement: 'Replace With Underscore'
    }

    expect(getNewFileName('defaultFile', filter, 'dataset1')).toBe('defaultFile')
  })

  it('should support the migrated fallback filename template', () => {
    const newFileName = 'defaultFile'
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: '${value}' }],
      active: 'activeFilter',
      whitespaceReplacement: 'Keep Spaces'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('activeFilter')
  })

  it('should return the newFileName as is when filter does not match datasetKey', () => {
    const newFileName = 'defaultFile'
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset2', fileName: 'state_${value}' }],
      active: 'activeFilter',
      whitespaceReplacement: 'Replace With Underscore'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('defaultFile')
  })

  it('should replace ${value} with the active filter when filter matches datasetKey, has a fileName, and includes ${value}', () => {
    const newFileName = 'defaultFile'
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'state_${value}' }],
      active: 'activeFilter',
      whitespaceReplacement: 'Keep Spaces'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('state_activeFilter')
  })

  it('uses the subgroup active value for nested dropdown File Name filters', () => {
    const filter = {
      filterStyle: 'nested-dropdown',
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: '${value}_weekly_epicurve' }],
      active: 'Animal-borne diseases',
      subGrouping: { active: 'brucella' },
      whitespaceReplacement: 'Keep Spaces'
    }

    expect(getNewFileName('', filter, 'dataset1')).toBe('brucella_weekly_epicurve')
  })

  it('does not resolve legacy ${query} placeholders at runtime', () => {
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'state_${query}' }],
      active: 'activeFilter',
      whitespaceReplacement: 'Keep Spaces'
    }

    expect(getNewFileName('', filter, 'dataset1')).toBe('state_${query}')
  })

  it('replaces every ${value} placeholder in a filename template', () => {
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: '${value}_summary_${value}' }],
      active: 'New York',
      whitespaceReplacement: 'Replace With Underscore'
    }

    expect(getNewFileName('', filter, 'dataset1')).toBe('New_York_summary_New_York')
  })

  it('should handle whitespace replacement options correctly', () => {
    const newFileName = 'defaultFile'
    const filter = {
      fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'state_${value}' }],
      active: 'active Filter',
      whitespaceReplacement: 'Remove Spaces'
    }
    const datasetKey = 'dataset1'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('state_activeFilter')

    filter.whitespaceReplacement = 'Keep Spaces'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('state_active Filter')

    filter.whitespaceReplacement = 'Replace With Underscore'
    expect(getNewFileName(newFileName, filter, datasetKey)).toBe('state_active_Filter')
  })

  it('selects the filename template for the current dataset target', () => {
    const filter = {
      fileNameTargets: [
        { datasetKey: 'lineData', fileName: 'state_${value}' },
        { datasetKey: 'biteData', fileName: 'state_${value}_data_bite' }
      ],
      active: 'new york city',
      whitespaceReplacement: 'Replace With Underscore'
    }

    expect(getNewFileName('', filter, 'lineData')).toBe('state_new_york_city')
    expect(getNewFileName('', filter, 'biteData')).toBe('state_new_york_city_data_bite')
    expect(getNewFileName('', filter, 'otherData')).toBe('')
  })

  it('preserves legacy capitalization when forceFileNameCapitalization is enabled', () => {
    const filter = {
      fileNameTargets: [
        { datasetKey: 'weeklyData', fileName: 'weekly ${value} report' },
        { datasetKey: 'biteData', fileName: 'state_${value}_data_bite' }
      ],
      active: 'new york city',
      forceFileNameCapitalization: true,
      whitespaceReplacement: 'Replace With Underscore'
    }

    expect(getNewFileName('', filter, 'weeklyData')).toBe('Weekly_New_York_City_Report')
    expect(getNewFileName('', filter, 'biteData')).toBe('State_New_York_City_data_bite')
  })

  describe('row filter field (filterSelector)', () => {
    it('builds ${value} from the resolved file-name value instead of active', () => {
      const filter = {
        fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'data_${value}' }],
        active: 'itemA1',
        apiFilter: { apiEndpoint: 'http://test.gov/options', valueSelector: 'fileKey', filterSelector: 'rowKey' },
        forceFileNameCapitalization: true,
        whitespaceReplacement: 'Replace With Underscore'
      } as any
      // resolvedFileNameValue is the selected option's file value ("groupA"), not the active row value.
      expect(getNewFileName('', filter, 'dataset1', 'groupA')).toBe('Data_GroupA')
    })

    it('uses the resolved file-name value for a bare ${value} template', () => {
      const filter = {
        fileNameTargets: [{ datasetKey: 'dataset1', fileName: '${value}' }],
        active: 'itemB1',
        apiFilter: { apiEndpoint: 'http://test.gov/options', valueSelector: 'fileKey', filterSelector: 'rowKey' },
        whitespaceReplacement: 'Replace With Underscore'
      } as any
      expect(getNewFileName('', filter, 'dataset1', 'group one')).toBe('group_one')
    })

    it('falls back to active when filterSelector is not set (default)', () => {
      const filter = {
        fileNameTargets: [{ datasetKey: 'dataset1', fileName: 'data_${value}' }],
        active: 'groupA',
        apiFilter: { apiEndpoint: 'http://test.gov/options', valueSelector: 'fileKey' },
        whitespaceReplacement: 'Replace With Underscore'
      } as any
      // No filterSelector -> resolvedFileNameValue is ignored and active is used.
      expect(getNewFileName('', filter, 'dataset1', 'ignored')).toBe('data_groupA')
    })
  })
})

describe('isEmptyInitialFileNameTarget', () => {
  it('defers a dataset when every File Name filter targeting it is empty-initial', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        allowEmptyInitialState: true,
        active: '',
        fileNameTargets: [{ datasetKey: 'targetData', fileName: 'disease-${value}' }]
      }
    ] as SharedFilter[]

    expect(isEmptyInitialFileNameTarget(filters, 'targetData')).toBe(true)
  })

  it('does not defer a dataset when a selected File Name filter also targets it', () => {
    const filters = [
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        allowEmptyInitialState: true,
        active: '',
        fileNameTargets: [{ datasetKey: 'targetData', fileName: 'disease-${value}' }]
      },
      {
        type: 'urlfilter',
        filterBy: 'File Name',
        active: 'weekly',
        fileNameTargets: [{ datasetKey: 'targetData', fileName: '${value}' }]
      }
    ] as SharedFilter[]

    expect(isEmptyInitialFileNameTarget(filters, 'targetData')).toBe(false)
  })
})

describe('getDatasetKeys', () => {
  it('includes datasets used only by dashboard conditions', () => {
    const datasetKeys = getDatasetKeys({
      datasets: {
        conditionData: { data: [{ county: 'Adams County' }] },
        unusedData: { data: [{ county: 'Clark County' }] }
      },
      visualizations: {
        filters: { type: 'dashboardFilters' },
        explainer: { type: 'markup-include' }
      },
      rows: [
        {
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'explainer',
                  dashboardCondition: {
                    id: 'has-data-condition',
                    datasetKey: 'conditionData',
                    operator: 'hasData'
                  }
                },
                {
                  widget: 'filters-incomplete',
                  dashboardCondition: {
                    id: 'filters-incomplete-condition',
                    operator: 'filtersIncomplete'
                  }
                }
              ]
            }
          ]
        }
      ]
    } as any)

    expect(datasetKeys).toEqual(['conditionData'])
  })

  it('can exclude datasets used only by dashboard conditions', () => {
    const datasetKeys = getDatasetKeys(
      {
        datasets: {
          conditionData: { data: [{ county: 'Adams County' }] },
          contentData: { data: [{ county: 'Baker County' }] }
        },
        visualizations: {
          chart: { type: 'chart', dataKey: 'contentData' }
        },
        rows: [
          {
            columns: [{ width: 12, widget: 'chart' }],
            dashboardCondition: {
              id: 'has-data-condition',
              datasetKey: 'conditionData',
              operator: 'hasData'
            }
          }
        ]
      } as any,
      { includeDashboardConditionDatasetKeys: false }
    )

    expect(datasetKeys).toEqual(['contentData'])
  })
})

describe('filterUsedByDataUrl', () => {
  const visualizations = {
    viz1: { dataKey: 'dataset1' },
    viz2: { dataKey: 'dataset2' },
    viz3: { dataKey: 'dataset1' }
  }

  it('should return true when filter has no usedBy property', () => {
    const filter = { datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations, [])).toBe(true)
  })

  it('should return true when filter has an empty usedBy array', () => {
    const filter = { usedBy: [], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations, [])).toBe(true)
  })

  it('should return true when filter has usedBy array with visualization keys that match the datasetKey', () => {
    const filter = { usedBy: ['viz1', 'viz3'], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations, [])).toBe(true)
  })

  it('should return false when filter has usedBy array with visualization keys that do not match the datasetKey', () => {
    const filter = { usedBy: ['viz2'], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations, [])).toBe(false)
  })

  it('should return true when filter has usedBy array with a mix of matching and non-matching visualization keys', () => {
    const filter = { usedBy: ['viz1', 'viz2'], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations, [])).toBe(true)
  })

  it('should return true when used by a row', () => {
    const filter = { usedBy: ['viz1', 'viz2', 2], datasetKey: 'dataset1' }
    const datasetKey = 'dataset1'
    expect(filterUsedByDataUrl(filter, datasetKey, visualizations, [{}, {}, { dataKey: 'dataset1' }])).toBe(true)
  })

  it('should return true when used by a dashboard condition owner target that matches the datasetKey', () => {
    const filter = { usedBy: ['viz1'], datasetKey: 'dataset1' }
    const rows = [
      {
        columns: [
          {
            width: 12,
            conditionalWidgets: [
              {
                widget: 'viz1',
                dashboardCondition: {
                  id: 'condition-1',
                  datasetKey: 'dataset1',
                  operator: 'hasData'
                }
              }
            ]
          }
        ]
      }
    ]

    expect(filterUsedByDataUrl(filter, 'dataset1', visualizations, rows as any)).toBe(true)
  })

  it('should return true when used by a row-level dashboard condition owner target', () => {
    const filter = { usedBy: [0], datasetKey: 'dataset1' }
    const rows = [
      {
        dashboardCondition: {
          id: 'row-condition-1',
          datasetKey: 'dataset1',
          operator: 'hasData'
        },
        columns: []
      }
    ]

    expect(filterUsedByDataUrl(filter, 'dataset1', visualizations, rows as any)).toBe(true)
  })

  it('should return true when used by a component condition owner target on a row-data row', () => {
    const filter = { usedBy: [0], datasetKey: 'dataset1' }
    const rows = [
      {
        dataKey: 'row-data',
        columns: [
          {
            width: 12,
            conditionalWidgets: [
              {
                widget: 'viz2',
                dashboardCondition: {
                  id: 'component-condition-1',
                  datasetKey: 'dataset1',
                  operator: 'hasData'
                }
              }
            ]
          }
        ]
      }
    ]

    expect(filterUsedByDataUrl(filter, 'dataset1', visualizations, rows as any)).toBe(true)
  })

  it('should return false when used by an unrelated row target for a dashboard condition dataset', () => {
    const filter = { usedBy: [1], datasetKey: 'dataset1' }
    const rows = [
      {
        dashboardCondition: {
          id: 'row-condition-1',
          datasetKey: 'dataset1',
          operator: 'hasData'
        },
        columns: []
      },
      {
        columns: []
      }
    ]

    expect(filterUsedByDataUrl(filter, 'dataset1', visualizations, rows as any)).toBe(false)
  })
})
