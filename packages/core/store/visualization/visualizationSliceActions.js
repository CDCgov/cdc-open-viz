const visualizationSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  addVisualization(key, config) {
    set(state => ({ visualizations: { ...state.visualizations, [key]: config } }))
  },
  updateVisualization(key, config) {
    set(state => ({
      visualizations: {
        ...state.visualizations,
        [key]: { ...state.visualizations[key], ...config }
      }
    }))
  },
  removeVisualization(key) {
    set(state => {
      delete state.config.visualizations[key]
      return { ...state }
    })
  }
})

export default visualizationSliceActions
