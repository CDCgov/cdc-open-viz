import { useEffect, useReducer } from 'react';

// create constants 
const SEQUENTIAL = 'SEQUENTIAL';
export const SEQUENTIAL_REVERSE = 'SEQUENTIAL_REVERSE';  // this constant will be argument for handleSwitch function on editors pannel
const NON_SEQUENTIAL = 'NON_SEQUENTIAL';
export const NON_SEQUENTIAL_REVERSE = 'NON_SEQUENTIAL_REVERSE'; // this constant will be argument for handleSwitch function on editors pannel

// create types & interfaces 
type Case = "SEQUENTIAL_REVERSE"|"NON_SEQUENTIAL_REVERSE";

interface State {
    readonly filteredPallets:string[]
    readonly filteredQualitative:string[]
    readonly isSequentialReversed: boolean;
    readonly isNonSequentialReversed: boolean;
   }
   interface Action<Palettes> {
    type:
      | 'SEQUENTIAL_REVERSE'
      | 'SEQUENTIAL'
      | 'NON_SEQUENTIAL'
      | 'NON_SEQUENTIAL_REVERSE';
    payload: Palettes;
  };

// create initial state
const initialState:State = {
    filteredPallets: [],
    filteredQualitative: [],
    isSequentialReversed: false,
    isNonSequentialReversed: false,
  };

// create reducer function to handle multiple states & manupilate with each state
function reducer<T> (state:State,action:Action<T>):State{     // <T> refers to generic type
  const palletNamesArr:string[] = Object.keys(action.payload); // action.payload === colorPalettes object
  let reverseRegex = new RegExp('reverse$'); // matches a string that ends in with "reverse".
  let qualitativeRegex = new RegExp('^qualitative'); //matches any string that starts with "qualitative".

  switch(action.type){
    case SEQUENTIAL:
      const sequential = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && !name.match(reverseRegex));
  
      return { ...state, isSequentialReversed: false, filteredPallets: sequential };
     case SEQUENTIAL_REVERSE:
        const sequentialReverse = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && name.match(reverseRegex));
        return { ...state, isSequentialReversed: true, filteredPallets: sequentialReverse };
  
     case NON_SEQUENTIAL:
        const qualitative = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && (!name.match(reverseRegex) && !name.includes('qualitative9')));
        return { ...state, isNonSequentialReversed: false, filteredQualitative: qualitative };
      
    case NON_SEQUENTIAL_REVERSE:
        const qualitativeReverse = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && name.match(reverseRegex));
        return { ...state,isNonSequentialReversed: true,filteredQualitative: qualitativeReverse};
      default : return state;
  }
}
// create custon hook and export
export function useColorPalette<T>(colorPalettes:T){
    // register reducer hook to handle multiple states at a time
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSwitch = (caseValue:Case) => {
  // this func will handle sequantial & sequatial-reverse colors and ll be mounted to switch toogle bar.
      if(caseValue === undefined || caseValue === null ){
          console.error('Enter valid arguments to handleSwitch function')
          return ;
      };

    if(caseValue === "SEQUENTIAL_REVERSE"){
        if (state.isSequentialReversed) {
            dispatch({ type: SEQUENTIAL, payload: colorPalettes });
        } else {
            dispatch({ type: SEQUENTIAL_REVERSE, payload: colorPalettes });
          };
      }

    if (caseValue === "NON_SEQUENTIAL_REVERSE") {
      if (state.isNonSequentialReversed) {
    dispatch({ type: NON_SEQUENTIAL, payload: colorPalettes });
          
        } else {
        dispatch({type: NON_SEQUENTIAL_REVERSE, payload: colorPalettes});
      }
    }
};

  /// useEffect will run when page render first time and provide default filtered colors

  useEffect(() => {
    dispatch({ type: SEQUENTIAL, payload: colorPalettes });
    dispatch({ type: NON_SEQUENTIAL, payload: colorPalettes });
  }, []);

    return { state,handleSwitch}
}