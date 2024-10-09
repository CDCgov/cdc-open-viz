import { VIZ_FILTER_STYLE } from '../Filters'
import { SharedFilter } from '@cdc/dashboard/src/types/SharedFilter'

export const applyQueuedActive = (sharedFilter: SharedFilter) => {
  if (sharedFilter.filterStyle === VIZ_FILTER_STYLE.nestedDropdown) {
    sharedFilter.active = sharedFilter.queuedActive[0]
    sharedFilter.subGrouping.active = sharedFilter.queuedActive[1]
  } else {
    sharedFilter.active = sharedFilter.queuedActive
  }
  delete sharedFilter.queuedActive
}
