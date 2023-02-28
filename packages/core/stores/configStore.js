import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Third Party
import { immer } from 'zustand/middleware/immer'

// Helpers
import { fetchAsyncUrl } from '../helpers/data'
import { setConfigKeyValue } from '../helpers/configHelpers'
import coveUpdateWorker from '../helpers/update/coveUpdateWorker'
import dataTransform from '../helpers/dataTransform'

const transform = new dataTransform()

const configStore = (set, get) => ({
  // Config
  config: {
    defaults: {},
    runtime: {},
    missingRequiredSections: false,
    data: {}
  },

  // Actions
  setConfig: config => set(state => {
    state.config = config
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
  updateConfig: config => set(state => {
    state.config = { ...state.config, ...config }
  }),
  updateConfigField: (fieldPayload, setValue) => {
    set((state) => {
      state.config = {...state.config, ...setConfigKeyValue(fieldPayload, setValue)}
    })
  },

  // Data Fetching ------------------------------------------------------------------------------------------------------------------------------------------------
  fetchConfig: async (configObj, configUrl) => {
    // Check if "data" is included through a URL, or directly, and set value
    let response = configObj || await fetchAsyncUrl(configUrl) || {}

    let responseData = response.formattedData || response.data || []

    // If a data URL is provided, fetch data then return. Overrides any previous data set.
    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()

      // If data from the URL has a "data description", use the standardization functions on that returned data
      if (response.dataDescription) {
        responseData = transform.autoStandardize(responseData)
        responseData = transform.developerStandardize(responseData, response.dataDescription)
      }
    }

    // If defaults exist, create the new config object with shallow merge of defaults and data
    let newConfig = { ...response }
    newConfig.data = responseData // Attach data to newConfig

    get().setConfig(newConfig) // Set newConfig to state
  },

  processConfigDefaults: async (defaults = null) => {
    // If defaults exist, create the new config object with shallow merge of defaults and data
    if (defaults) get().updateConfig({ ...defaults })
  },

  runConfigUpdater: async () => {
    // Validates config file and updates any previous entries into new format
    let updatedConfig = coveUpdateWorker(get().config)
    get().updateConfig(updatedConfig)
  }
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
