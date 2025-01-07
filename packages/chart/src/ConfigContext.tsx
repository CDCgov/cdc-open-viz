import { createContext, Dispatch } from 'react'
import { ChartContext } from './types/ChartContext'

import ChartActions from './store/chart.actions'
import { initialState } from './store/chart.reducer'

// export const ConfigContext = createContext(initialState)
export const ChartDispatchContext = createContext<Dispatch<ChartActions>>(() => {})

const ConfigContext = createContext({} as ChartContext)

export default ConfigContext
