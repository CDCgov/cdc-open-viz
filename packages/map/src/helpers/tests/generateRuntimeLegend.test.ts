import { describe, expect, it } from 'vitest'
import initialState from '../../data/initial-state'
import { generateRuntimeLegend } from '../generateRuntimeLegend'
import { generateRuntimeLegendHash } from '../generateRuntimeLegendHash'

const buildConfig = () => {
  const config = JSON.parse(JSON.stringify(initialState))

  config.columns.geo.name = 'state'
  config.columns.primary.name = 'value'
  config.legend.type = 'manual'
  config.legend.breakpoints = [20, 40, 60, 80]
  config.legend.specialClasses = []
  config.general.geoType = 'us'
  config.data = [
    { state: 'Alabama', value: 5 },
    { state: 'Alaska', value: 18 },
    { state: 'Arizona', value: 21 },
    { state: 'Arkansas', value: 37 },
    { state: 'California', value: 49 },
    { state: 'Colorado', value: 65 },
    { state: 'Connecticut', value: 95 }
  ]

  return config
}

describe('generateRuntimeLegend', () => {
  it('builds manual breakpoint bins from authored legend breakpoints', () => {
    const config = buildConfig()
    const legendMemo = { current: new Map<string, number>() }
    const legendSpecialClassLastMemo = { current: new Map<string, number>() }

    const runtimeLegend = generateRuntimeLegend(
      config,
      config.data,
      'manual-breakpoints',
      () => undefined,
      { fromHash: 7 } as any,
      legendMemo,
      legendSpecialClassLastMemo
    )

    expect(runtimeLegend).toMatchObject({
      fromHash: 'manual-breakpoints',
      runtimeDataHash: 7
    })
    expect(runtimeLegend.items).toHaveLength(5)
    expect(runtimeLegend.items.map(item => [item.min, item.max])).toEqual([
      [5, 20],
      [20, 40],
      [40, 60],
      [60, 80],
      [80, 95]
    ])
    expect(legendMemo.current.size).toBe(config.data.length)
  })

  it('includes manual breakpoints in the runtime legend cache hash', () => {
    const config = buildConfig()
    const baselineHash = generateRuntimeLegendHash(config, {})

    config.legend.breakpoints = [10, 30, 50, 70]

    expect(generateRuntimeLegendHash(config, {})).not.toBe(baselineHash)
  })
})
