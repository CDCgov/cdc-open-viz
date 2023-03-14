// Third Party
import { merge as _merge } from 'lodash'

// Helpers
import { setConfigKeyValue } from '../../helpers/configHelpers'

const visConfigSliceActions = (set, get) => ({
  // Visualization Config Actions -----------------------------------------------------------------------------------------------------------------------------------------
  addVisConfig: (key, config) => {
    set(state => {
      state.visualizations[key] = config
    })
  },
  updateVisConfig: (key, config) => {
    console.log('updating vis config', key, config)

    // TODO: CANT USE MERGE HERE, PERSISTING DELETED VISUALIZATIONS AND ROWS IN STATE
    if (key === '__default__') {
      // Dashboard or Visualization Standalone
      set(state => {
        state.visualizations[key] = { ...state.visualizations[key], ...config }
      })
    } else {
      // Visualization in Dashboard
      set(state => {
        state.visualizations['__default__'].visualizations[key] = { ...state.visualizations['__default__'].visualizations[key], ...config }
      })
    }
  },
  updateVisConfigField: (key, fieldPayload, setValue, merge = true) => {
    console.log('updating vis config field', key, fieldPayload, setValue, merge)
    if (key === '__default__') {
      // Dashboard or Visualization Standalone
      if (merge) {
        set(state => {
          state.visualizations[key] = _merge(state.visualizations[key], setConfigKeyValue(fieldPayload, setValue))
        })
      } else {
        set(state => {
          state.visualizations[key] = { ...state.visualizations[key], ...setConfigKeyValue(fieldPayload, setValue) }
        })
      }
    } else {
      // Visualization in Dashboard
      set(state => {
        delete state.visualizations['__default__'].visualizations[key].newViz // Remove newViz flag
      })

      if (merge) {
        set(state => {
          state.visualizations['__default__'].visualizations[key] = _merge(state.visualizations['__default__'].visualizations[key], setConfigKeyValue(fieldPayload, setValue))
        })
      } else {
        set(state => {
          state.visualizations['__default__'].visualizations[key] = { ...state.visualizations['__default__'].visualizations[key], ...setConfigKeyValue(fieldPayload, setValue) }
        })
      }
    }
  },
  removeVisConfig: key => {
    set(state => {
      delete state.visualizations[key]
      return { ...state }
    })
  },

  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  setMissingRequiredSections: (key, value) => {
    set(state => {
      state.visualizations[key].missingRequiredSections = value
    })
  }
})

export default visConfigSliceActions
