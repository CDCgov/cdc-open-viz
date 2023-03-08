// Third Party
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// Store Slices
import globalSlice from './global/globalSlice'
import configSlice from './config/configSlice'
import visualizationSlice from './visualization/visualizationSlice'
import dataSlice from './data/dataSlice'

// Store
export const store = (set, get) => ({
  // Global Slice
  ...globalSlice(set, get),

  // Config Slice
  ...configSlice(set, get),

  // Visualization Slice
  ...visualizationSlice(set, get),

  // Data Slice
  ...dataSlice(set, get),
})

const useStore = create(
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

export default useStore
