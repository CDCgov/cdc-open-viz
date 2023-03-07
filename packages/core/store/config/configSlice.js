// Slice Actions
import visualizationSlice from '../visualization/visualizationSlice'

// Slice
export const configSlice = (set, get) => ({
  // Config State
  config: {
    defaults: {},
    runtime: {},
    missingRequiredSections: false,
    visualizations: visualizationSlice(get).visualizations
  }
})

export default configSlice
