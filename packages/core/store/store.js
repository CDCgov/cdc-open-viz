// Third Party
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// Store Slices
import globalSlice from './global/globalSlice'
import globalSliceActions from './global/globalSliceActions'
import dataSlice from './data/dataSlice'
import dataSliceActions from './data/dataSliceActions'
import visualizationSlice from './visualization/visualizationSlice'
import visualizationSliceActions from './visualization/visualizationSliceActions'

// Store
export const store = (set, get) => ({
  // Global Slice
  ...globalSlice(set, get),
  ...globalSliceActions(set, get),

  ...visualizationSlice(set, get),
  ...visualizationSliceActions(set, get),

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
