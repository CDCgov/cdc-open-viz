import { useEffect, useReducer } from 'react'

// constants
const SEQUENTIAL = 'SEQUENTIAL'
const SEQUENTIAL_REVERSE = 'SEQUENTIAL_REVERSE'
export const GET_PALETTE = 'GET_PALETTE'

//  types & interfaces
interface State {
  readonly filteredPallets: string[]
  readonly filteredQualitative: string[]
  readonly isPaletteReversed: boolean
  paletteName: string | undefined
}
interface Action<Palettes> {
  type: 'SEQUENTIAL' | 'SEQUENTIAL_REVERSE' | 'GET_PALETTE'
  payload: Palettes
  paletteName?: string
}

// create initial state
const initialState: State = {
  filteredPallets: [],
  isPaletteReversed: false,
  filteredQualitative: [],
  paletteName: undefined
}

function reducer<T>(state: State, action: Action<T>): State {
  // <T> refers to generic type
  const palletNamesArr: string[] = Object.keys(action.payload) // action.payload === colorPalettes object
  let paletteName: string = ''
  switch (action.type) {
    case GET_PALETTE:
      return { ...state, paletteName: action.paletteName }
    case SEQUENTIAL:
      paletteName = state.paletteName && state.paletteName.endsWith('reverse') ? String(state.paletteName).substring(0, state.paletteName.length - 7) : String(state.paletteName)
      const qualitative = palletNamesArr.filter((name: string) => String(name).startsWith('qualitative') && !String(name).endsWith('reverse'))
      const sequential = palletNamesArr.filter((name: string) => String(name).startsWith('sequential') && !String(name).endsWith('reverse'))
      return { ...state, filteredPallets: sequential, filteredQualitative: qualitative, paletteName: paletteName, isPaletteReversed: false }

    case SEQUENTIAL_REVERSE:
      paletteName = palletNamesArr.find((name: string) => name === String(state.paletteName).concat('reverse') || name === String(state.paletteName).concat('-reverse'))
      const qualitativeReverse: string[] = palletNamesArr.filter((name: string) => String(name).startsWith('qualitative') && String(name).endsWith('reverse'))
      const sequentialReverse: string[] = palletNamesArr.filter((name: string) => String(name).startsWith('sequential') && String(name).endsWith('reverse'))
      return { ...state, filteredQualitative: qualitativeReverse, filteredPallets: sequentialReverse, paletteName: paletteName, isPaletteReversed: true }
    default:
      return state
  }
}

interface Keyable {
  palette: string
  isPaletteReversed: boolean
}
function init(initialState) {
  return initialState
}

export function useColorPalette<T, Y extends Keyable>(colorPalettes: T, configState: Y) {
  const [state, dispatch] = useReducer(reducer, initialState, init)
  const { paletteName, isPaletteReversed, filteredPallets, filteredQualitative } = state

  useEffect(() => {
    dispatch({ type: SEQUENTIAL, payload: colorPalettes })
  }, [])

  useEffect(() => {
    if (configState.isPaletteReversed) {
      dispatch({ type: 'SEQUENTIAL_REVERSE', payload: colorPalettes })
      return () => dispatch({ type: 'SEQUENTIAL', payload: colorPalettes })
    }
  }, [configState.isPaletteReversed, dispatch, colorPalettes])

  return { paletteName, isPaletteReversed, filteredPallets, filteredQualitative, dispatch }
}
