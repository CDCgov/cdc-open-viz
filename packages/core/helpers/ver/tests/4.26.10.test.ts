import { describe, expect, it } from 'vitest'
import update_4_26_10 from '../4.26.10'
import { coveUpdateWorker } from '../../coveUpdateWorker'

describe('update_4_26_10', () => {
  const colors = {
    label: 'black',
    connector: '#222',
    marker: '#333'
  }

  it.each(['chart', 'map'])('removes annotation colors from standalone %s configs', type => {
    const config: any = {
      type,
      version: '4.26.8',
      annotations: [{ text: 'Annotation', colors }]
    }

    const result = update_4_26_10(config)

    expect(result.annotations[0]).not.toHaveProperty('colors')
    expect(result.annotations[0].text).toBe('Annotation')
    expect(config.annotations[0].colors).toEqual(colors)
  })

  it('removes annotation colors from chart and map visualizations in dashboards', () => {
    const config: any = {
      type: 'dashboard',
      version: '4.26.8',
      visualizations: {
        chart: {
          type: 'chart',
          annotations: [{ text: 'Chart annotation', colors }]
        },
        map: {
          type: 'map',
          annotations: [{ text: 'Map annotation', colors }]
        }
      }
    }

    const result = update_4_26_10(config)

    expect(result.visualizations.chart.annotations[0]).not.toHaveProperty('colors')
    expect(result.visualizations.map.annotations[0]).not.toHaveProperty('colors')
  })

  it('preserves missing and null annotations', () => {
    const withoutAnnotations = update_4_26_10({ type: 'chart', version: '4.26.8' })
    const withNullAnnotation = update_4_26_10({
      type: 'chart',
      version: '4.26.8',
      annotations: [null]
    })

    expect(withoutAnnotations).not.toHaveProperty('annotations')
    expect(withNullAnnotation.annotations).toEqual([null])
  })

  it('runs through coveUpdateWorker only when 4.26.10 is eligible', () => {
    const legacyResult = coveUpdateWorker({
      type: 'chart',
      version: '4.26.8',
      annotations: [{ colors }]
    })
    const currentResult = coveUpdateWorker({
      type: 'chart',
      version: '4.26.10',
      annotations: [{ colors }]
    })

    expect(legacyResult.annotations[0]).not.toHaveProperty('colors')
    expect(currentResult.annotations[0].colors).toEqual(colors)
  })

  it('removes annotation colors from multi-dashboard visualizations', () => {
    const result = coveUpdateWorker({
      type: 'dashboard',
      version: '4.26.8',
      dashboard: {},
      rows: [],
      visualizations: {},
      multiDashboards: [
        {
          type: 'dashboard',
          dashboard: {},
          rows: [],
          visualizations: {
            chart: {
              type: 'chart',
              annotations: [{ colors }]
            }
          }
        }
      ]
    })

    expect(result.multiDashboards[0].visualizations.chart.annotations[0]).not.toHaveProperty('colors')
  })

  it.each([undefined, {}])('preserves omitted waffle data formatting as commas disabled', dataFormat => {
    const config: any = {
      type: 'waffle-chart',
      version: '4.26.8',
      ...(dataFormat === undefined ? {} : { dataFormat })
    }

    const result = update_4_26_10(config)

    expect(result.dataFormat).toEqual({ commas: false })
    expect(config.dataFormat).toEqual(dataFormat)
  })

  it.each([true, false])('preserves explicitly authored waffle commas=%s', commas => {
    const result = update_4_26_10({
      type: 'waffle-chart',
      version: '4.26.8',
      dataFormat: { commas }
    })

    expect(result.dataFormat.commas).toBe(commas)
  })

  it('preserves omitted waffle data formatting in dashboard visualizations', () => {
    const result = update_4_26_10({
      type: 'dashboard',
      version: '4.26.8',
      visualizations: {
        waffle: { type: 'waffle-chart', visualizationType: 'TP5 Waffle' },
        gauge: { type: 'waffle-chart', visualizationType: 'TP5 Gauge', dataFormat: {} },
        chart: { type: 'chart' }
      }
    })

    expect(result.visualizations.waffle.dataFormat).toEqual({ commas: false })
    expect(result.visualizations.gauge.dataFormat).toEqual({ commas: false })
    expect(result.visualizations.chart).not.toHaveProperty('dataFormat')
  })

  it('runs the waffle compatibility migration only when 4.26.10 is eligible', () => {
    const legacyResult = coveUpdateWorker({ type: 'waffle-chart', version: '4.26.8' })
    const currentResult = coveUpdateWorker({ type: 'waffle-chart', version: '4.26.10' })

    expect(legacyResult.dataFormat).toEqual({ commas: false })
    expect(currentResult).not.toHaveProperty('dataFormat')
  })
})
