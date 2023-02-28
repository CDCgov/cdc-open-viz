import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const globalStore = (set) => ({
  // Global State
  viewMode: {
    isEditor: false,
    isDashboard: false,
    isWizard: false
  },
  os: navigator.userAgent.indexOf('Win') !== -1 ? 'Win' : navigator.userAgent.indexOf('Mac') !== -1 ? 'MacOS' : null,
  overlay: {
    object: null,
    show: false,
    disableBgClose: false
  },
  dimensions: null,

  // Actions
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
  })),
})

const useGlobalStore = create(
  devtools(
    globalStore,
    {
      enabled: true,
      name: 'GlobalStore'
    }
  )
)

export default useGlobalStore
