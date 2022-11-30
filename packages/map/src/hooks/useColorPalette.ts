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

// create reducer function to handle multiple states & manupilate with each state
function reducer<T>(state: State, action: Action<T>): State {
  // <T> refers to generic type
  const palletNamesArr: string[] = Object.keys(action.payload) // action.payload === colorPalettes object
  let reverseRegex = new RegExp('reverse$') // matches a string that ends in with "reverse".
  let qualitativeRegex = new RegExp('^qualitative') //matches any string that starts with "qualitative".
  let paletteName: string = ''
  switch (action.type) {
    case GET_PALETTE:
      // this case runs first time when page loads and then every time when color.state changes.It is mounted insude of useEffect on Editors Panel
      // action.palletName is a string type and equals to state.color which is inisde Editors Panel.
      return { ...state, paletteName: action.paletteName }
    case SEQUENTIAL:
      paletteName = String(state.paletteName).endsWith('reverse') ? String(state.paletteName).substring(0, state.paletteName.length - 7) : String(state.paletteName)
      const qualitative: string[] = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && !name.match(reverseRegex) && !name.includes('qualitative9'))
      const sequential: string[] = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && !name.match(reverseRegex))

      return { ...state, filteredPallets: sequential, filteredQualitative: qualitative, paletteName: paletteName, isPaletteReversed: false }

    case SEQUENTIAL_REVERSE:
      paletteName = state.paletteName && String(state.paletteName).concat('reverse')
      const qualitativeReverse: string[] = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && name.match(reverseRegex))
      const sequentialReverse: string[] = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && name.match(reverseRegex))

      return { ...state, filteredQualitative: qualitativeReverse, filteredPallets: sequentialReverse, paletteName: paletteName, isPaletteReversed: true }
    default:
      return state
  }
}

interface Keyable {
  color: string
  general: {
    palette: {
      isReversed: boolean
    }
  }
}

export function useColorPalette<T, Y extends Keyable>(colorPalettes: T, configState: Y) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { paletteName, isPaletteReversed, filteredPallets, filteredQualitative } = state

  useEffect(() => {
    dispatch({ type: SEQUENTIAL, payload: colorPalettes })
  }, [])

  useEffect(() => {
    if (configState.general.palette.isReversed) {
      dispatch({ type: 'SEQUENTIAL_REVERSE', payload: colorPalettes })
    }
    return () => dispatch({ type: 'SEQUENTIAL', payload: colorPalettes })
  }, [configState.general.palette.isReversed, dispatch, colorPalettes])

  useEffect(() => {
    if (configState.color) dispatch({ type: GET_PALETTE, payload: colorPalettes, paletteName: configState.color })
  }, [dispatch, configState.color])

  return { paletteName, isPaletteReversed, filteredPallets, filteredQualitative, dispatch }
}
