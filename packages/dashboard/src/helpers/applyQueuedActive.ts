import { FILTER_STYLE } from '../types/FilterStyles'
import { SharedFilter } from '../types/SharedFilter'

export const applyQueuedActive = (sharedFilter: SharedFilter) => {
  if (sharedFilter.filterStyle === FILTER_STYLE.nestedDropdown) {
    sharedFilter.active = sharedFilter.queuedActive[0]
    sharedFilter.subGrouping.active = sharedFilter.queuedActive[1]
  } else {
    sharedFilter.active = sharedFilter.queuedActive
  }
  delete sharedFilter.queuedActive
}
