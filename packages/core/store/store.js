// Third Party
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// Store Slices
import globalSlice from './global/globalSlice'
import visConfigSlice from './config/visConfigSlice'
import dataSlice from './data/dataSlice'

// Store
export const store = (set, get) => ({
  // Global Slice
  ...globalSlice(set, get),

  // Config Slice
  ...visConfigSlice(set, get),

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
