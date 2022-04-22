import { useEffect, useReducer } from 'react';

// create constants 
export const SEQUENTIAL = 'SEQUENTIAL';
export const SEQUENTIAL_REVERSE = 'SEQUENTIAL_REVERSE';
export const NON_SEQUENTIAL = 'NON_SEQUENTIAL';
export const NON_SEQUENTIAL_REVERSE = 'NON_SEQUENTIAL_REVERSE';

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
function reducer (state:State,action:Action):State{
  const palletNamesArr:string[] = Object.keys(action.payload); // action.payload === colorPalettes object
  let reverseRegex = new RegExp('reverse$'); // matches a string that ends in with "reverse".
  let qualitativeRegex = new RegExp('^qualitative'); //matches any string that starts with "qualitative".

  switch(action.type){
    case ON_SEQUENTIAL:
      const sequential = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && !name.match(reverseRegex));
  
      return { ...state, isSequentialReversed: false, filteredPallets: sequential };
     case ON_SEQUENTIAL_REVERSE:
        const sequentialReverse = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && name.match(reverseRegex));
        return { ...state, isSequentialReversed: true, filteredPallets: sequentialReverse };
  
     case ON_NON_SEQUENTIAL:
        const qualitative = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && (!name.match(reverseRegex) && !name.includes('qualitative9')));
        return { ...state, isNonSequentialReversed: false, filteredQualitative: qualitative };
      
    case ON_NON_SEQUENTIAL_REVERSE:
        const qualitativeReverse = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && name.match(reverseRegex));
        return { ...state,isNonSequentialReversed: true,filteredQualitative: qualitativeReverse};
      default : return state;
  }
}
// create custon hook and export
export function useColorPalette(){
    // register reducer hook to handle multiple states at a time
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSwitch = (caseValue:CaseValue) => {
   // this func will handle sequantial & sequatial-reverse colors and ll be mounted to switch toogle bar.
      if((caseValue !== Case.ON_NON_SEQUENTIAL  && caseValue !== Case.ON_SEQUENTIAL)  || caseValue === undefined ){
          console.error('Enter valid arguments to handleSwitch function')
          return ;
      };

      if(caseValue === Case.ON_SEQUENTIAL){
        if (state.isSequentialReversed) {
            dispatch({ type: ON_SEQUENTIAL, payload: colorPalettes });
          } else {
            dispatch({ type: ON_SEQUENTIAL_REVERSE, payload: colorPalettes });
          };
      }


      if(caseValue === Case.ON_NON_SEQUENTIAL){
        if (state.isNonSequentialReversed) {
            dispatch({ type: ON_NON_SEQUENTIAL, payload: colorPalettes });
          } else {
            dispatch({ type: ON_NON_SEQUENTIAL_REVERSE, payload: colorPalettes });
          };
      }
};

  /// useEffect will run when page render first time and provide default filtered colors

  useEffect(() => {
    dispatch({ type: ON_SEQUENTIAL, payload: colorPalettes });
    dispatch({ type: ON_NON_SEQUENTIAL, payload: colorPalettes });
  }, []);

    return { state,handleSwitch}
}