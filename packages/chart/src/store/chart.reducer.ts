import ChartActions from './chart.actions'

export const initialState = {
  isLoading: false,
  config: {},
  data: [],
  filteredData: [],
  brushData: []
}
type State = typeof initialState
export const reducer = (state: State, action: ChartActions) => {
  const { type, payload } = action

  switch (type) {
    case 'LOAD_START':
      return {
        ...state,
        isLoading: true
      }
    case 'LOAD_SUCCESS':
      return {
        ...state,
        config: payload.config,
        data: payload.data,
        colorScale: payload.colorScale,
        isLoading: false,
        filteredData: payload.filteredData,
        excludedData: payload.excludedData,
        tableData: payload.tableData
      }
    case 'LOAD_FAIL':
      return {
        ...state,
        isLoading: false
      }
    case 'ON_PREP_CONFIG':
      return {
        ...state,
        config: { ...action.payload }
      }
    default:
      return state
  }
}
