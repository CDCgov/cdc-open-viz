type Action<T, P = undefined, R = undefined> = {
  type: T
  payload?: P
  resource?: R
}

// Action Types
type LOAD_START = Action<'LOAD_START', undefined>
type LOAD_SUCCESS = Action<
  'LOAD_SUCCESS',
  {
    config: object
    data: object[]
    colorScale: (value) => void
    tableData: object[]
    filteredData: object[]
    excludedData: object[]
  }
>
type LOAD_FAIL = Action<'LOAD_FAIL', null>
type ON_PREP_CONFIG = Action<'ON_PREP_CONFIG', Object>
type SET_FILTERED_DATA = Action<'SET_FILTERED_DATA', any>
type SET_RAW_DATA = Action<'SET_RAW_DATA', any>
type SET_BRUSH_DATA = Action<'SET_BRUSH_DATA', any>
type RESET_STATE = Action<'RESET_STATE'>

type ChartActions =
  | LOAD_START
  | LOAD_SUCCESS
  | LOAD_FAIL
  | ON_PREP_CONFIG
  | SET_FILTERED_DATA
  | SET_RAW_DATA
  | SET_BRUSH_DATA
  | RESET_STATE
export default ChartActions
