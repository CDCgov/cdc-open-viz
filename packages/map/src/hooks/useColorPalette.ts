import { useReducer } from 'react';
import { colorPalettes } from '../data/color-palettes';

// create constants 
export const ON_SEQUENTIAL = 'ON_SEQUENTIAL';
export const ON_SEQUENTIAL_REVERSE = 'ON_SEQUENTIAL_REVERSE';
export const ON_NON_SEQUENTIAL = 'ON_NON_SEQUENTIAL';
export const ON_NON_SEQUENTIAL_REVERSE = 'ON_NON_SEQUENTIAL_REVERSE';

// create types & interfaces 
// type PalletTypes = typeof colorPalettes;
// type PalletType = keyof PalletTypes;
interface State {
    readonly filteredPallets:any[]
    readonly filteredQualitative:any[]
    readonly isSwitched: boolean;
    readonly isSwitched2: boolean;
   }
   interface Action {
    type:
      | 'ON_SEQUENTIAL_REVERSE'
      | 'ON_SEQUENTIAL'
      | 'ON_NON_SEQUENTIAL'
      | 'ON_NON_SEQUENTIAL_REVERSE';
    payload: typeof colorPalettes;
  }

// create initial state
const initialState:State = {
    filteredPallets: [],
    filteredQualitative: [],
    isSwitched: false,
    isSwitched2: false,
  };

// create reducer function to handle multiple states & manupilate with each state
function reducer (state:State,action:Action){
  const palletNamesArr:string[] = Object.keys(action.payload); // action.payload === colorPalettes object
  let reverseRegex = new RegExp('reverse$'); // matches a string that ends in with "reverse".
  let qualitativeRegex = new RegExp('^qualitative'); //matches any string that starts with "qualitative".

  switch(action.type){
      default : return state;
  }
}
// create custon hook and export
export function useColorPalette(){
    // register reducer hook to handle multiple states at a time
  const [state, dispatch] = useReducer(reducer, initialState);

    return;
}