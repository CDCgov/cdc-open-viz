const globalSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------

  setViewMode: (view, value) => set((state) => ({
    viewMode: {
      ...state.viewMode,
      [view]: value
    }
  })),
  setDimensions: (dimensions) => set(() => ({
    dimensions: dimensions
  })),

  // Overlay Actions
  openOverlay: (obj, disableBgClose = false) => set(() => ({
    overlay: {
      object: obj,
      show: true,
      disableBgClose: disableBgClose
    }
  })),
  toggleOverlay: (display = false) => set(() => ({
    overlay: {
      show: display
    }
  }))
})

export default globalSliceActions
