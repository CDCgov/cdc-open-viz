import { APIFilter } from './APIFilter'
export type SharedFilter = {
  type?: 'urlfilter' | 'datafilter' | ''
  fileName?: string
  filterBy?: 'Query String' | 'File Name'
  queryParameter?: string
  active?: string | string[]
  queuedActive?: string
  usedBy?: string[]
  parents?: string[]
  pivot?: string
  setBy?: string
  selectLimit?: number
  columnName?: string
  resetLabel?: string
  showDropdown?: boolean
  labels?: Record<string, any>
  key: string
  values?: string[]
  apiFilter?: APIFilter
  datasetKey?: string
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
