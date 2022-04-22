import { useReducer } from 'react';
import { colorPalettes } from '../data/color-palettes';

// create initial state
const initialState = {
    filteredPallets: [],
    filteredQualitative: [],
    isSwitched: false,
    isSwitched2: false,
  };

// create reducer function to handle multiple states & manupilate with each state
function reducer (state,action){}
// create custon hook and export
export function useColorPalette(){
    // register reducer hook to handle multiple states at a time
  const [state, dispatch] = useReducer(reducer, initialState);

    return;
}