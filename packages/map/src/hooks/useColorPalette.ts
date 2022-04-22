import { useReducer } from 'react';
import { colorPalettes } from '../data/color-palettes';


// create custon hook and export
export function useColorPalette(){
    // register reducer hook to handle multiple states at a time
  const [state, dispatch] = useReducer(reducer, initialState);

    return ;
}