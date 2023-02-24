import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Third Party
import merge from 'lodash.merge'

// Helpers
import { setConfigKeyValue } from '../helpers/configHelpers'
import { immer } from 'zustand/middleware/immer'

const configStore = (set) => ({
  // Config
  config: {
    defaults: {},
    runtime: {},
    missingRequiredSections: false,
    data: {}
  },

  // Actions
  setConfig: config => set(state => ({
    config: config
  })),
  setConfigDefaults: defaults => set(state => {
    state.config.defaults = defaults
  }),
  setConfigRuntime: runtime => set(state => {
    state.config.runtime = runtime
  }),
  setData: data => set(state => {
    state.config.data = data
  }),
  setMissingRequiredSections: bool => set(state => {
    state.config.missingRequiredSections = bool
  }),
  updateConfig: config => set(state => ({
    config: {
      ...state.config,
      ...config
    }
  })),
  // Provides a direct update for a specific config values; includes a deep clone merge option
  updateConfigField: (fieldPayload, setValue, deep = true) => {
    set(state => {
      if (deep) return merge(
        state,
        { config: setConfigKeyValue(fieldPayload, setValue) }
      )
      return { config: setConfigKeyValue(fieldPayload, setValue) }
    })
  },

  updateParentConfig: null,
  setUpdateParentConfig: updateFunction => set(state => ({ updateParentConfig: updateFunction }))
})

const useConfigStore = create(
  immer(
    devtools(
      configStore,
      {
        enabled: true,
        name: 'ConfigStore'
      }
    )
  )
)

export default useConfigStore
