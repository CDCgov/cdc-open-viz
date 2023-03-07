// Third Party
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// Store Slices
import globalSlice from './global/globalSlice'
import globalSliceActions from './global/globalSliceActions'
import configSlice from './config/configSlice'
import configSliceActions from './config/configSliceActions'
import dataSlice from './data/dataSlice'
import dataSliceActions from './data/dataSliceActions'

// Store
export const store = (set, get) => ({
  // Global Slice
  ...globalSlice(set, get),
  ...globalSliceActions(set, get),

  // Config Slice
  ...configSlice(set, get),
  ...configSliceActions(set, get),

  // Data Slice
  ...dataSlice(set, get),
  ...dataSliceActions(set, get)
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
