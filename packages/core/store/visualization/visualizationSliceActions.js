const visualizationSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  addVisualization(key, config) {
    set(state => {
      state.config.visualizations = { ...state.config.visualizations, [key]: config }
    })
  },
  removeVisualization(key) {
    set(state => {
      delete state.config.visualizations[key]
      return { ...state }
    })
  }
})

export default visualizationSliceActions
