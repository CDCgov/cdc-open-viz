import { FilterBase, SubGrouping } from '@cdc/core/types/VizFilter'
import { APIFilter } from './APIFilter'
import { FilterStyle } from './FilterStyles'
export type SharedFilter = FilterBase & {
  type?: 'urlfilter' | 'datafilter' | ''
  fileName?: string
  filterBy?: 'Query String' | 'File Name'
  filterStyle: FilterStyle
  queryParameter?: string
  setByQueryParameter?: string
  active?: string | string[]
  queuedActive?: string | string[]
  usedBy?: (string | number)[] // if number used by whole row, else used by specific viz
  order: 'cust' | 'desc' | 'asc' | 'column'
  parents?: string[]
  setBy?: string
  selectLimit?: number
  resetLabel?: string
  labels?: Record<string, any>
  key: string
  apiFilter?: APIFilter
  datasetKey?: string
  subGrouping: SubGrouping
  tier?: number
  /**
   * How to format the end file name when filter.filterBy is set to "File Name"
   *
   * @example * United States
   *
   *  Keep Spaces: United%20States.json
   *  Remove Spaces: UnitedStates.json
   *  Replace With Underscore: United_States.json
   **/
  whitespaceReplacement?: 'Keep Spaces' | 'Remove Spaces' | 'Replace With Underscore'
}
