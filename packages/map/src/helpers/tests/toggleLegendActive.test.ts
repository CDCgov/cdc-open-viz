import { describe, expect, it, vi } from 'vitest'
import { hashObj } from '@cdc/core/helpers/hashObj'
import initialState from '../../data/initial-state'
import { applyLegendToRow } from '../applyLegendToRow'
import { DISABLED_MAP_COLOR } from '../constants'
import generateRuntimeData from '../generateRuntimeData'
import { generateRuntimeLegend } from '../generateRuntimeLegend'
import { toggleLegendActive } from '../toggleLegendActive'
import worldBubbleDiseaseType from '../../_stories/_mock/world-bubble-disease-type.json'

const buildConfig = () => {
  const config = JSON.parse(JSON.stringify(initialState))

  config.columns.geo.name = 'state'
  config.columns.primary.name = 'value'
  config.general.geoType = 'us'
  config.general.type = 'data'
  config.legend.type = 'category'
  config.legend.showSpecialClassesLast = false

  return config
}

const buildRuntimeLegend = () => ({
  items: [
    { value: 'Yes', color: '#eeeeee', bin: 0 },
    { value: 'No', color: '#111111', bin: 1 }
  ],
  disabledAmt: 0
})

describe('toggleLegendActive', () => {
  it('uses the legend label when displayed order differs from runtime order', () => {
    const runtimeLegend = buildRuntimeLegend()
    const dispatch = vi.fn()

    toggleLegendActive(0, 'No', runtimeLegend, dispatch, 'highlight')

    const updatedLegend = dispatch.mock.calls.find(([action]) => action.type === 'SET_RUNTIME_LEGEND')?.[0].payload

    expect(updatedLegend.disabledAmt).toBe(1)
    expect(updatedLegend.items).toMatchObject([
      { value: 'Yes', disabled: true },
      { value: 'No', disabled: false }
    ])
  })

  it('keeps a clicked category tied to its own swatch color after highlighting', () => {
    const config = buildConfig()
    const yesRow = { state: 'Alaska', value: 'Yes' }
    const noRow = { state: 'Alabama', value: 'No' }
    const legendMemo = {
      current: new Map([
        [hashObj(yesRow), 0],
        [hashObj(noRow), 1]
      ])
    }
    const legendSpecialClassLastMemo = { current: new Map() }
    const dispatch = vi.fn()

    toggleLegendActive(0, 'No', buildRuntimeLegend(), dispatch, 'highlight')

    const updatedLegend = dispatch.mock.calls.find(([action]) => action.type === 'SET_RUNTIME_LEGEND')?.[0].payload

    expect(applyLegendToRow(noRow, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe('#111111')
    expect(applyLegendToRow(yesRow, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(
      DISABLED_MAP_COLOR
    )
  })

  it('supports isolate behavior for the resolved legend label', () => {
    const dispatch = vi.fn()

    toggleLegendActive(0, 'No', buildRuntimeLegend(), dispatch, 'isolate')

    const updatedLegend = dispatch.mock.calls.find(([action]) => action.type === 'SET_RUNTIME_LEGEND')?.[0].payload

    expect(updatedLegend.disabledAmt).toBe(1)
    expect(updatedLegend.items).toMatchObject([
      { value: 'Yes', hidden: true },
      { value: 'No', hidden: false }
    ])
  })

  it('highlights the matching U.S. categorical geographies when No is clicked', () => {
    const config = buildConfig()
    config.legend.categoryValuesOrder = ['No', 'Yes']
    config.data = [
      { state: 'Alabama', value: 'No' },
      { state: 'Alaska', value: 'Yes' },
      { state: 'Arizona', value: 'No' }
    ]
    const legendMemo = { current: new Map() }
    const legendSpecialClassLastMemo = { current: new Map() }
    const runtimeData = generateRuntimeData(config, [] as any, 1, true)
    const runtimeLegend = generateRuntimeLegend(
      config,
      runtimeData as any,
      'yes-no-map',
      () => undefined,
      Object.assign([], { fromHash: 1 }) as any,
      legendMemo,
      legendSpecialClassLastMemo
    ) as any
    const noIndex = runtimeLegend.items.findIndex(item => item.value === 'No')
    const dispatch = vi.fn()

    toggleLegendActive(noIndex, 'No', runtimeLegend, dispatch, 'highlight')

    const updatedLegend = dispatch.mock.calls.find(([action]) => action.type === 'SET_RUNTIME_LEGEND')?.[0].payload
    const noColor = runtimeLegend.items.find(item => item.value === 'No')?.color
    const runtimeRows = Object.values(runtimeData)
    const alabama = runtimeRows.find((row: any) => row.state === 'Alabama')
    const alaska = runtimeRows.find((row: any) => row.state === 'Alaska')
    const arizona = runtimeRows.find((row: any) => row.state === 'Arizona')

    expect(noColor).toBeTruthy()
    expect(applyLegendToRow(alabama, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(noColor)
    expect(applyLegendToRow(arizona, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(noColor)
    expect(applyLegendToRow(alaska, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(
      DISABLED_MAP_COLOR
    )
  })

  it('highlights Yes countries in the bubble legend story fixture when Yes is clicked', () => {
    const config = JSON.parse(JSON.stringify(worldBubbleDiseaseType))
    const legendMemo = { current: new Map() }
    const legendSpecialClassLastMemo = { current: new Map() }
    const runtimeData = generateRuntimeData(config, [] as any, 1, true)
    const runtimeLegend = generateRuntimeLegend(
      config,
      runtimeData as any,
      'world-yes-no-map',
      () => undefined,
      Object.assign([], { fromHash: 1 }) as any,
      legendMemo,
      legendSpecialClassLastMemo
    ) as any
    const yesIndex = runtimeLegend.items.findIndex(item => item.value === 'Yes')
    const dispatch = vi.fn()

    toggleLegendActive(yesIndex, 'Yes', runtimeLegend, dispatch, 'highlight')

    const updatedLegend = dispatch.mock.calls.find(([action]) => action.type === 'SET_RUNTIME_LEGEND')?.[0].payload
    const yesColor = runtimeLegend.items.find(item => item.value === 'Yes')?.color
    const runtimeRows = Object.values(runtimeData)
    const brazil = runtimeRows.find((row: any) => row.country === 'Brazil')
    const france = runtimeRows.find((row: any) => row.country === 'France')
    const canada = runtimeRows.find((row: any) => row.country === 'Canada')
    const mexico = runtimeRows.find((row: any) => row.country === 'Mexico')

    expect(runtimeLegend.items.map(item => item.value)).toEqual(['Yes', 'No'])
    expect(yesColor).toBeTruthy()
    expect(applyLegendToRow(brazil, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(yesColor)
    expect(applyLegendToRow(france, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(yesColor)
    expect(applyLegendToRow(canada, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(
      DISABLED_MAP_COLOR
    )
    expect(applyLegendToRow(mexico, config, updatedLegend, legendMemo, legendSpecialClassLastMemo)[0]).toBe(
      DISABLED_MAP_COLOR
    )
  })
})
