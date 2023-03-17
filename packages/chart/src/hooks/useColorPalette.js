import { useEffect, useReducer } from 'react'

// constants
const SEQUENTIAL = 'SEQUENTIAL'
const SEQUENTIAL_REVERSE = 'SEQUENTIAL_REVERSE'
export const GET_PALETTE = 'GET_PALETTE'

// create initial state
const initialArgs = {
  filteredPallets: [],
  isPaletteReversed: false,
  filteredQualitative: [],
  paletteName: undefined
}

function paletteReducer(state, action) {
  const palletNamesArr = Object.keys(action.payload) // action.payload === colorPalettes object
  let paletteName = ''
  switch (action.type) {
    case GET_PALETTE:
      return { ...state, paletteName: action.paletteName }
    case SEQUENTIAL:
      paletteName = state.paletteName && state.paletteName.endsWith('reverse') ? String(state.paletteName).substring(0, state.paletteName.length - 7) : String(state.paletteName)
      const qualitative = palletNamesArr.filter((name) => String(name).startsWith('qualitative') && !String(name).endsWith('reverse'))
      const sequential = palletNamesArr.filter((name) => String(name).startsWith('sequential') && !String(name).endsWith('reverse'))
      return { ...state, filteredPallets: sequential, filteredQualitative: qualitative, paletteName: paletteName, isPaletteReversed: false }

    case SEQUENTIAL_REVERSE:
      paletteName = palletNamesArr.find((name) => name === String(state.paletteName).concat('reverse') || name === String(state.paletteName).concat('-reverse'))
      const qualitativeReverse = palletNamesArr.filter((name) => String(name).startsWith('qualitative') && String(name).endsWith('reverse'))
      const sequentialReverse = palletNamesArr.filter((name) => String(name).startsWith('sequential') && String(name).endsWith('reverse'))
      return { ...state, filteredQualitative: qualitativeReverse, filteredPallets: sequentialReverse, paletteName: paletteName, isPaletteReversed: true }
    default:
      return state
  }
}

// Pass payload to reducer
function init(payload) {
  return payload
}

export function useColorPalette(colorPalettes, configState) {
  const [state, dispatch] = useReducer(paletteReducer, initialArgs, init)

  const { paletteName, isPaletteReversed, filteredPallets, filteredQualitative } = state

  useEffect(() => {
    dispatch({ type: 'SEQUENTIAL', payload: colorPalettes })
  }, [])

  useEffect(() => {
    if (configState.isPaletteReversed) {
      dispatch({ type: 'SEQUENTIAL_REVERSE', payload: colorPalettes })
      return () => dispatch({ type: 'SEQUENTIAL', payload: colorPalettes })
    }
  }, [configState.isPaletteReversed, dispatch, colorPalettes])

  return { paletteName, isPaletteReversed, filteredPallets, filteredQualitative, dispatch }
}
