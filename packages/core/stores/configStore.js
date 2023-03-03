import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Third Party
import { immer } from 'zustand/middleware/immer'

// Slices
import configStoreActions from './configStoreActions'

export const configStore = (set, get) => ({
  // Config
  config: {
    defaults: {},
    runtime: {},
    missingRequiredSections: false,
    data: {}
  },
  ...configStoreActions(set, get)

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
