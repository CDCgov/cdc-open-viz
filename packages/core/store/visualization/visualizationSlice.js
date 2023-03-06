// Slice Actions
import visualizationSliceActions from './visualizationSliceActions'

// Slice
const visualizationSlice = (set, get) => ({
  // Visualization State
  visualizations: [],

  ...visualizationSliceActions(set, get)
})

export default visualizationSlice
