import { removeMultiSelectPropFromMultiselect } from '../4.24.10'
import { expect, describe, it } from 'vitest'

describe('removeMultiSelectPropFromMultiSelect() ', () => {
  it('replaces multiSelect boolean with filterStyle = multiSelect', () => {
    const mockConfig = { type: 'dashboard', dashboard: { sharedFilters: [{ multiSelect: true }] } } as any
    removeMultiSelectPropFromMultiselect(mockConfig)
    expect(mockConfig.dashboard.sharedFilters[0].filterStyle).toBe('multi-select')
    expect(mockConfig.dashboard.sharedFilters[0].multiSelect).toBeUndefined()
  })
})
