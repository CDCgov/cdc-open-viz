// Slice Actions
import dataSliceActions from './dataSliceActions'

// Slice
export const dataSlice = (set, get) => ({
  // Data State
  data: [],
  datasets: [],
  filteredData: [],
  formattedData: [],

  ...dataSliceActions(set, get)
})

export default dataSlice
