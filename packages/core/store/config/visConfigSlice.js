// Slice Actions
import visConfigSliceActions from './visConfigSliceActions'

// Slice
export const visConfigSlice = (set, get) => ({

  visualizations: {},

  ...visConfigSliceActions(set, get)

})

export default visConfigSlice
