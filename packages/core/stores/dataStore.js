import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Third Party
import { immer } from 'zustand/middleware/immer'

// Slices
import dataStoreActions from './dataStoreActions'

// Helpers
import produce from 'immer'

export const dataStore = (set, get) => ({
  // Data
  data: [],
  ...dataStoreActions(set, get)
})

const useDataStore = create(
  immer(
    devtools(
      dataStore,
      {
        enabled: true,
        name: 'DataStore'
      }
    )
  )
)

export default useDataStore
