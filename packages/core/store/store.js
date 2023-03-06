// Third Party
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// Store Slices
import globalSlice from './global/globalSlice'
import configSlice from './config/configSlice'
import dataSlice from './data/dataSlice'

// Store
export const store = (set, get) => ({
  // Global Slice
  ...globalSlice(set, get),

  // Config Slice
  ...configSlice(set, get),

  // Data Slice
  ...dataSlice(set, get)
})

const useConfigStore = create(
  immer(
    devtools(
      store,
      {
        enabled: true,
        name: 'COVE Store'
      }
    )
  )
)

export default useConfigStore
