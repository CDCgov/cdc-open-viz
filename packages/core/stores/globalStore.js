import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import produce from 'immer'

export const useGlobalStore = create(devtools((set) => ({
    // Global
    viewMode: window.location.href.includes('editor=true') ? 'editor' : 'component',
    os: navigator.userAgent.indexOf('Win') !== -1 ? 'Win' : navigator.userAgent.indexOf('Mac') !== -1 ? 'MacOS' : null,
    overlay: null,
    dimensions: null,

    // Actions
    setViewMode: (view) => set(() => ({ viewMode: view })),
    setDimensions: (dimensions) => set(() => ({ dimensions: dimensions })),

    // Actions > Overlay
    openOverlay: (obj, disableBgClose = false) => set(
      (state) => ({
        overlay: { object: obj, show: true, disableBgClose: disableBgClose }
      })
    ),

    toggleOverlay: (display = false) => set(
      produce((state) => state.overlay.show = display)
    ),
  }),
  {
    enabled: true,
    store: 'GlobalStore'
  }
))
