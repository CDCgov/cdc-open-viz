import update_4_26_4_1 from '../4.26.4-1'
import { describe, expect, it } from 'vitest'

describe('update_4_26_4_1', () => {
  it('sets markup-include contentEditor.style to default when missing', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.4',
      contentEditor: {
        title: 'Title'
      }
    }

    const result = update_4_26_4_1(config)

    expect(result.contentEditor.style).toBe('default')
    expect(result.version).toBe('4.26.4-1')
  })

  it('creates contentEditor object when missing on markup-include', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.4'
    }

    const result = update_4_26_4_1(config)

    expect(result.contentEditor).toBeTruthy()
    expect(result.contentEditor.style).toBe('default')
  })

  it('does not overwrite existing markup-include contentEditor.style', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.4',
      contentEditor: {
        title: 'Title',
        style: 'tp5'
      }
    }

    const result = update_4_26_4_1(config)

    expect(result.contentEditor.style).toBe('tp5')
  })

  it('backfills sourceType for standalone markup variables', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      markupVariables: [
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: []
        },
        {
          name: 'Last Updated',
          tag: '{{lastUpdated}}',
          metadataKey: 'lastUpdated',
          conditions: []
        }
      ]
    }

    const result = update_4_26_4_1(config)

    expect(result.markupVariables[0].sourceType).toBe('column')
    expect(result.markupVariables[1].sourceType).toBe('metadata')
    expect(config.markupVariables[0].sourceType).toBeUndefined()
  })

  it('preserves existing markup variable source types', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      markupVariables: [
        {
          sourceType: 'icon',
          name: 'Trend Up',
          tag: '{{trend-arrow-up}}',
          iconId: 'trend-arrow-up',
          conditions: []
        }
      ]
    }

    const result = update_4_26_4_1(config)

    expect(result.markupVariables[0].sourceType).toBe('icon')
  })

  it('leaves null and undefined markup variables unchanged during sourceType backfill', () => {
    const config: any = {
      type: 'chart',
      version: '4.26.4',
      markupVariables: [
        null,
        undefined,
        {
          name: 'State',
          tag: '{{state}}',
          columnName: 'state',
          conditions: []
        }
      ]
    }

    const result = update_4_26_4_1(config)

    expect(result.markupVariables[0]).toBeNull()
    expect(result.markupVariables[1]).toBeUndefined()
    expect(result.markupVariables[2].sourceType).toBe('column')
  })

  it('does not mutate original markup-include config', () => {
    const config: any = {
      type: 'markup-include',
      version: '4.26.4',
      contentEditor: {
        title: 'Title'
      }
    }

    const result = update_4_26_4_1(config)

    expect(config.contentEditor.style).toBeUndefined()
    expect(result.contentEditor.style).toBe('default')
  })

  it('overrides waffle mode configs with new value descriptor defaults', () => {
    const config: any = {
      type: 'waffle-chart',
      visualizationType: 'Waffle',
      valueDescription: 'out of',
      showPercent: false,
      showDenominator: true
    }

    const result = update_4_26_4_1(config)

    expect(result.valueDescription).toBe('')
    expect(result.showPercent).toBe(true)
    expect(result.showDenominator).toBe(false)
    expect(result.version).toBe('4.26.4-1')
  })

  it('does not modify gauge mode waffle-chart configs', () => {
    const config: any = {
      type: 'waffle-chart',
      visualizationType: 'Gauge',
      valueDescription: 'out of',
      showPercent: false,
      showDenominator: true
    }

    const result = update_4_26_4_1(config)

    expect(result.valueDescription).toBe('out of')
    expect(result.showPercent).toBe(false)
    expect(result.showDenominator).toBe(true)
  })

  it('updates moved behaviors recursively inside nested dashboards', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.4',
      visualizations: {
        nestedDashboard: {
          type: 'dashboard',
          visualizations: {
            nestedMarkup: {
              type: 'markup-include'
            },
            nestedWaffle: {
              type: 'waffle-chart',
              visualizationType: 'TP5 Waffle',
              valueDescription: 'legacy',
              showPercent: false,
              showDenominator: true
            },
            nestedChart: {
              type: 'chart',
              markupVariables: [
                {
                  name: 'State',
                  tag: '{{state}}',
                  columnName: 'state',
                  conditions: []
                }
              ]
            },
            nestedCountyMap: {
              type: 'map',
              general: { geoType: 'us-county' },
              table: { showFullGeoNameInCSV: false }
            },
            nestedTerritoryMap: {
              type: 'map',
              general: { geoType: 'us-county' }
            }
          }
        }
      }
    }

    const result = update_4_26_4_1(config)
    const nested = result.visualizations.nestedDashboard.visualizations

    expect(nested.nestedMarkup.contentEditor.style).toBe('default')
    expect(nested.nestedWaffle.valueDescription).toBe('')
    expect(nested.nestedWaffle.showPercent).toBe(true)
    expect(nested.nestedWaffle.showDenominator).toBe(false)
    expect(nested.nestedChart.markupVariables[0].sourceType).toBe('column')
    expect(nested.nestedCountyMap.table.showFullGeoNameInCSV).toBe(true)
    expect(nested.nestedTerritoryMap.migrations.showPuertoRico).toBe(true)
  })

  it('does not change non-county map CSV full geo name settings', () => {
    const config: any = {
      type: 'map',
      version: '4.26.4',
      general: { geoType: 'us' },
      table: { showFullGeoNameInCSV: false }
    }

    const result = update_4_26_4_1(config)

    expect(result.table.showFullGeoNameInCSV).toBe(false)
  })
})
