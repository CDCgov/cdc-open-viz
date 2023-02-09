import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import produce from 'immer'

import { setConfigKeyValue } from '../helpers/configHelpers'

import merge from 'lodash.merge'

export const useConfigStore = create(
  devtools(
    set => ({
      // Config
      config: {
        defaults: {},
        runtime: {},
        missingRequiredSections: false,
        data: {}
      },

      // Actions
      setConfig: config => set(state => ({ config: config })),
      setConfigDefaults: defaults =>
        set(
          produce(state => {
            state.config.defaults = defaults
          })
        ),
      setConfigRuntime: runtime =>
        set(
          produce(state => {
            state.config.runtime = runtime
          })
        ),
      setData: data =>
        set(
          produce(state => {
            state.config.data = data
          })
        ),
      setMissingRequiredSections: bool =>
        set(
          produce(state => {
            state.config.missingRequiredSections = bool
          })
        ),
      updateConfig: config => set(state => ({ config: { ...state.config, ...config } })),
      updateConfigField: (fieldPayload, setValue) => {
        set(produce(state => merge(state, { config: setConfigKeyValue(fieldPayload, setValue) })))
      },
      updateWizardConfig: () => {},
      setUpdateWizardConfig: updateFunction => set(state => ({ updateWizardConfig: updateFunction }))
    }),
    {
      enabled: true,
      store: 'ConfigStore'
    }
  )
)
