// Slice Actions
import configSliceActions from './configSliceActions'

// Slice
export const configSlice = (set, get) => ({
  // Config State
  config: {
    defaults: {},
    runtime: {},
    missingRequiredSections: false
  },

  ...configSliceActions(set, get)

})

export default configSlice
