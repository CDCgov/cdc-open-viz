import { createContext } from 'react'
import type { CountyDotDensitySettings } from '../helpers/countyDotDensityLayer'

/** Experimental runtime layer injection. Not a saved config or editor API. */
export const CountyDotDensityContext = createContext<{
  settings: CountyDotDensitySettings
  radius: number
  hiddenSeries: readonly string[]
  initialStateCode?: string
} | null>(null)
