// Slice Actions
import visualizationSliceActions from './visualizationSliceActions'

// Slice
const visualizationSlice = (set, get) => ({
  visualizations: {},

  ...visualizationSliceActions(set, get),
})

export default visualizationSlice
