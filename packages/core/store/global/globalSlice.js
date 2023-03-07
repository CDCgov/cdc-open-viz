// Slice
const globalSlice = (set, get) => ({
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
  dimensions: null
})

export default globalSlice
