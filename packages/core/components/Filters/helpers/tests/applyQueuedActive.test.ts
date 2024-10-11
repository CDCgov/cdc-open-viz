import { describe, it, expect } from 'vitest'
import { applyQueuedActive } from '../applyQueuedActive'
import { VIZ_FILTER_STYLE } from '../../Filters'
import { SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'

describe('applyQueuedActive', () => {
  it('should apply queuedActive to active and subGrouping.active for nestedDropdown filter style', () => {
    const sharedFilter: SharedFilter = {
      filterStyle: VIZ_FILTER_STYLE.nestedDropdown,
      queuedActive: ['activeValue', 'subActiveValue'],
      active: null,
      subGrouping: {
        active: null
      }
    }

    applyQueuedActive(sharedFilter)

    expect(sharedFilter.active).toBe('activeValue')
    expect(sharedFilter.subGrouping.active).toBe('subActiveValue')
    expect(sharedFilter.queuedActive).toBeUndefined()
  })

  it('should apply queuedActive to active for non-nestedDropdown filter style', () => {
    const sharedFilter: SharedFilter = {
      filterStyle: 'someOtherStyle',
      queuedActive: 'activeValue',
      active: null
    }

    applyQueuedActive(sharedFilter)

    expect(sharedFilter.active).toBe('activeValue')
    expect(sharedFilter.queuedActive).toBeUndefined()
  })

  it('should handle empty queuedActive for non-nestedDropdown filter style', () => {
    const sharedFilter: SharedFilter = {
      filterStyle: 'someOtherStyle',
      queuedActive: null,
      active: null
    }

    applyQueuedActive(sharedFilter)

    expect(sharedFilter.active).toBeNull()
    expect(sharedFilter.queuedActive).toBeUndefined()
  })
})
