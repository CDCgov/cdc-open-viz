import { removeMultiSelectPropFromMultiselect, setXAxisLabelOffsetToZero } from '../4.24.10'
import { expect, describe, it } from 'vitest'

describe('removeMultiSelectPropFromMultiSelect() ', () => {
  it('replaces multiSelect boolean with filterStyle = multiSelect', () => {
    const mockConfig = { type: 'dashboard', dashboard: { sharedFilters: [{ multiSelect: true }] } } as any
    removeMultiSelectPropFromMultiselect(mockConfig)
    expect(mockConfig.dashboard.sharedFilters[0].filterStyle).toBe('multi-select')
    expect(mockConfig.dashboard.sharedFilters[0].multiSelect).toBeUndefined()
  })
})

describe('setXAxisLabelOffsetToZero(config) ', () => {
  it('sets the x-axis label offset to 0', () => {
    const mockConfig = { xAxis: { labelOffset: 5 } } as any
    const newConfig = setXAxisLabelOffsetToZero(mockConfig)
    expect(newConfig.xAxis.labelOffset).toBe(0)
  })
})
