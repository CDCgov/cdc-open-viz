import { shouldLoadAllFilters } from '../shouldLoadAllFilters'

describe('shouldLoadAllFilters File Name filters', () => {
  it('returns true for File Name filters without empty initial state when data is missing', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      dashboard: {
        sharedFilters: [{ type: 'urlfilter', filterBy: 'File Name' }]
      },
      visualizations: {
        abc: {
          dataKey: 'abcd'
        }
      },
      rows: [],
      datasets: {
        abcd: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })

  it('returns false for File Name filters with empty initial state when no other loading trigger exists', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      dashboard: {
        sharedFilters: [
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            allowEmptyInitialState: true,
            fileNameTargets: [{ datasetKey: 'abcd', fileName: 'disease-${value}' }]
          }
        ]
      },
      visualizations: {
        abc: {
          dataKey: 'abcd'
        }
      },
      rows: [],
      datasets: {
        abcd: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(false)
  })

  it('returns true when a selected File Name filter shares the target of an empty-initial filter', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      dashboard: {
        sharedFilters: [
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            allowEmptyInitialState: true,
            active: '',
            fileNameTargets: [{ datasetKey: 'abcd', fileName: 'disease-${value}' }]
          },
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            active: 'weekly',
            fileNameTargets: [{ datasetKey: 'abcd', fileName: '${value}' }]
          }
        ]
      },
      visualizations: {
        abc: {
          dataKey: 'abcd'
        }
      },
      rows: [],
      datasets: {
        abcd: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })

  it('returns true for an empty File Name filter when unrelated data is missing', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      dashboard: {
        sharedFilters: [
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            allowEmptyInitialState: true,
            fileNameTargets: [{ datasetKey: 'targetData', fileName: 'disease-${value}' }]
          }
        ]
      },
      visualizations: {
        targetViz: {
          dataKey: 'targetData'
        },
        metadataViz: {
          dataKey: 'metadata'
        }
      },
      rows: [],
      datasets: {
        targetData: { data: [] },
        metadata: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })

  it('returns true when an empty File Name filter defers its target but a condition dataset is missing', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      dashboard: {
        sharedFilters: [
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            allowEmptyInitialState: true,
            fileNameTargets: [{ datasetKey: 'targetData', fileName: 'disease-${value}' }]
          }
        ]
      },
      visualizations: {
        targetViz: {
          dataKey: 'targetData'
        }
      },
      rows: [
        {
          columns: [{ width: 12, widget: 'targetViz' }],
          dashboardCondition: {
            id: 'metadata-condition',
            datasetKey: 'metadata',
            operator: 'columnHasAnyValue',
            columnName: 'module_weekly',
            values: ['true']
          }
        }
      ],
      datasets: {
        targetData: { data: [] },
        metadata: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })

  it('returns true when an empty File Name filter defers its target but a footnote dataset is missing', () => {
    delete window.location
    window.location = new URL('https://www.example.com')
    const config = {
      dashboard: {
        sharedFilters: [
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            allowEmptyInitialState: true,
            fileNameTargets: [{ datasetKey: 'targetData', fileName: 'disease-${value}' }]
          }
        ]
      },
      visualizations: {
        targetViz: {
          dataKey: 'targetData',
          footnotes: {
            dataKey: 'footnoteData'
          }
        }
      },
      rows: [{ columns: [{ width: 12, widget: 'targetViz' }] }],
      datasets: {
        targetData: { data: [] },
        footnoteData: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })

  it('returns true for an empty-state File Name filter with a matching query parameter', () => {
    delete window.location
    window.location = new URL('https://www.example.com?disease=asthma')
    const config = {
      dashboard: {
        sharedFilters: [
          {
            type: 'urlfilter',
            filterBy: 'File Name',
            allowEmptyInitialState: true,
            setByQueryParameter: 'disease',
            fileNameTargets: [{ datasetKey: 'abcd', fileName: 'disease-${value}' }]
          }
        ]
      },
      visualizations: {
        abc: {
          dataKey: 'abcd'
        }
      },
      rows: [],
      datasets: {
        abcd: { data: [] }
      }
    }

    expect(shouldLoadAllFilters(config)).toBe(true)
  })
})
