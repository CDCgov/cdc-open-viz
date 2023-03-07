// Third Party
import { merge as _merge } from 'lodash'
import produce from 'immer'

// Helpers
import { setConfigKeyValue } from '../../helpers/configHelpers'
import coveUpdateWorker from '../../helpers/update/coveUpdateWorker'

const configSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  setMissingRequiredSections: (value) => set(state => {
    state.config.missingRequiredSections = value
  }),


  // Config Actions -------------------------------------------------------------------------------------------------------------------------------------------------------
  setConfig: config => set(state => {
    state.config = config
  }),
  updateConfig: config => set(state => {
    state.config = { ...state.config, ...config }
  }),
  updateConfigField: (fieldPayload, setValue, merge = true) => {
    merge
      ? set((state) => {
        state.config = { ..._merge(state.config, setConfigKeyValue(fieldPayload, setValue)) }
      })
      : set((state) => {
        state.config = { ...state.config, ...setConfigKeyValue(fieldPayload, setValue) }
      })
  },

  // Config Defaults & Processing ---------------------------------------------------------------------------------------------------------------------------------------
  setConfigDefaults: async (defaults = null, visualizationKey = null) => {
    // If defaults exist, create the new config object with shallow merge of defaults and data
    if (defaults) {
      if (visualizationKey) {
        await set(produce((draft) => {
            draft.config.visualizations[visualizationKey] = { ...defaults, ...draft.config.visualizations[visualizationKey] }
          }
        ))
      } else {
        await get().setConfig(defaults)
      }
    }
  },

  runConfigUpdater: async () => {
    // Validates config file and updates any previous entries into new format;
    // Manipulations/removals should be done in the worker
    await set(state => { state.config = { ...coveUpdateWorker(state.config) } })
    await set(state => { delete state.config.visual })
  }
})

export default configSliceActions
