import { describe, expect, it } from 'vitest'

import vegaBarsWithLine from '../../_stories/vega-fixtures/bars-with-line.json'
import vegaBars from '../../_stories/vega-fixtures/bars.json'
import vegaHorizontalBar from '../../_stories/vega-fixtures/horizontal-bar.json'
import vegaMeaslesMap from '../../_stories/vega-fixtures/measles-map.json'

HTMLCanvasElement.prototype.getContext = (() => ({ measureText: () => ({ width: 0 }) })) as any

describe('convertVegaConfig', () => {
  it('stamps converted configs with the current COVE config version', async () => {
    const { CURRENT_COVE_CONFIG_VERSION } = await import('../coveUpdateWorker')
    const { convertVegaConfig, getVegaConfigType, parseVegaConfig } = await import('../vegaConfig')
    const parsedVegaConfig = await parseVegaConfig(vegaBars)
    const configType = getVegaConfigType(parsedVegaConfig)
    const starterConfig = {
      type: 'chart',
      visualizationType: 'Bar',
      visualizationSubType: 'regular',
      orientation: 'vertical',
      newViz: true,
      datasets: {},
      xAxis: { type: 'categorical', size: 75 },
      yAxis: { size: 60 }
    }

    const convertedConfig = convertVegaConfig(configType, parsedVegaConfig, starterConfig)

    expect(convertedConfig.version).toBe(CURRENT_COVE_CONFIG_VERSION)
    expect(convertedConfig.newViz).toBeUndefined()
    expect(convertedConfig.xAxis.size).toBeUndefined()
    expect(convertedConfig.yAxis.size).toBeUndefined()
    expect(convertedConfig.table.download).toBe(true)
    expect(convertedConfig.table.showDownloadLinkBelow).toBe(true)
  })

  it('stores map titles and current legend ordering in their map config sections', async () => {
    const { convertVegaConfig, getVegaConfigType, parseVegaConfig } = await import('../vegaConfig')
    const parsedVegaConfig = await parseVegaConfig(vegaMeaslesMap)
    parsedVegaConfig.title = { text: 'Imported map' }

    const convertedConfig = convertVegaConfig(getVegaConfigType(parsedVegaConfig), parsedVegaConfig, {
      type: 'map',
      newViz: true,
      datasets: {},
      general: { geoType: 'us' }
    })

    expect(convertedConfig.general).toEqual(
      expect.objectContaining({
        title: 'Imported map',
        showTitle: true
      })
    )
    expect(convertedConfig).not.toHaveProperty('title')
    expect(convertedConfig).not.toHaveProperty('showTitle')
    expect(convertedConfig.legend.showSpecialClassesLast).toBe(true)
    expect(convertedConfig.table.download).toBe(true)
    expect(convertedConfig.table.showDownloadLinkBelow).toBe(true)
  })

  it('uses palette version 2.1 for imported maps', async () => {
    const { maybeConvertVega } = await import('../vegaConfigImport')

    const convertedConfig = await maybeConvertVega(vegaMeaslesMap)

    expect(convertedConfig.general.palette).toEqual({
      isReversed: false,
      name: 'sequential_blue',
      version: '2.1'
    })
  })

  it('uses current axis tick targets for vertical charts with dates', async () => {
    const { maybeConvertVega } = await import('../vegaConfigImport')

    const convertedConfig = await maybeConvertVega(vegaBarsWithLine)

    expect(convertedConfig.orientation).toBe('vertical')
    expect(convertedConfig.yAxis.numTicks).toBe(4)
    expect(convertedConfig.xAxis.numTicks).toBe(6)
    expect(convertedConfig.xAxis.viewportNumTicks).toEqual({ xs: 4, xxs: 4 })
  })

  it('uses current horizontal bar axis targets', async () => {
    const { maybeConvertVega } = await import('../vegaConfigImport')

    const convertedConfig = await maybeConvertVega(vegaHorizontalBar)

    expect(convertedConfig.orientation).toBe('horizontal')
    expect(convertedConfig.xAxis.hideAxis).toBe(true)
    expect(convertedConfig.xAxis.hideTicks).toBe(true)
    expect(convertedConfig.yAxis.labelPlacement).toBe('On Date/Category Axis')
    expect(convertedConfig.yAxis.autoMaxStrategy).toBe('clean-top-tick')
  })
})
