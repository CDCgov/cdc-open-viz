import { useEffect, useReducer } from 'react';

// create constants 
const SEQUENTIAL = 'SEQUENTIAL';
export const SEQUENTIAL_REVERSE = 'SEQUENTIAL_REVERSE';  // this constant will be argument for handleSwitch function on editors pannel
const NON_SEQUENTIAL = 'NON_SEQUENTIAL';
export const NON_SEQUENTIAL_REVERSE = 'NON_SEQUENTIAL_REVERSE'; // this constant will be argument for handleSwitch function on editors pannel
export const GET_PALETTE = 'GET_PALETTE';
// create types & interfaces 
type Case = "SEQUENTIAL_REVERSE"|"NON_SEQUENTIAL_REVERSE";

interface State {
    readonly filteredPallets:string[]
    readonly filteredQualitative:string[]
    readonly isSequentialReversed: boolean;
    readonly isNonSequentialReversed: boolean;
    palletName:string|undefined
   }
   interface Action<Palettes> {
    type:
      | 'SEQUENTIAL_REVERSE'
      | 'GET_PALETTE'
      | 'SEQUENTIAL'
      | 'NON_SEQUENTIAL'
      | 'NON_SEQUENTIAL_REVERSE';
    payload: Palettes;
    paletteName?:string
  };

// create initial state
const initialState:State = {
    filteredPallets: [],
    filteredQualitative: [],
    isSequentialReversed: false,
    isNonSequentialReversed: false,
    palletName:undefined   // default palletName "yelloworangered" selected on UI 
  };

// create reducer function to handle multiple states & manupilate with each state
function reducer<T> (state:State,action:Action<T>):State{     // <T> refers to generic type
  const palletNamesArr:string[] = Object.keys(action.payload); // action.payload === colorPalettes object
  let reverseRegex = new RegExp('reverse$'); // matches a string that ends in with "reverse".
  let qualitativeRegex = new RegExp('^qualitative'); //matches any string that starts with "qualitative".
  switch(action.type){
    case GET_PALETTE:
      // this case runs first time when page loads and then every time when color.state changes.It is mounted insude of useEffect on Editors Panel
      // action.palletName is a string type and equals to state.color which is inisde Editors Panel.
      return {...state,palletName:action.paletteName}
      case SEQUENTIAL:
       let sequantialPalletName:string =!String(state.palletName).startsWith("qualitative") && ((String(state.palletName).endsWith('reverse') )) ? String(state.palletName).substring(0,state.palletName.length-7) :"yelloworangered";
      // filters out all strins which begins DOEST NOT begin with QUALATIVE and DOES NOT end with reverse. Typical :  yelloworangered, yelloworangebrown and etc
       const sequential = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && !name.match(reverseRegex));
  
      return { ...state, isSequentialReversed: false, filteredPallets: sequential,palletName:sequantialPalletName };
     case SEQUENTIAL_REVERSE:
       let reversedPaletteName:string= state.palletName &&  !String(state.palletName).startsWith('qualitative1')  ?  String(state.palletName).concat('reverse') : "yelloworangeredreverse"
        const sequentialReverse = palletNamesArr.filter((name: string) => !name.match(qualitativeRegex) && name.match(reverseRegex));
        return { ...state, isSequentialReversed: true, filteredPallets: sequentialReverse ,palletName:reversedPaletteName};
  
     case NON_SEQUENTIAL:
       const nonSeqPaletteName:string = String(state.palletName).startsWith("qualitative") && String(state.palletName).endsWith('reverse') ? String(state.palletName).substring(0,state.palletName.length-7) :"qualitative1" // "reverse" has 7 chars
        const qualitative = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && (!name.match(reverseRegex) && !name.includes('qualitative9')));
        return { ...state, isNonSequentialReversed: false, filteredQualitative: qualitative,palletName:nonSeqPaletteName };
      
    case NON_SEQUENTIAL_REVERSE:
     let reversedNonSeqPalletName:string = String(state.palletName).startsWith('qualitative')  ? String(state.palletName).concat('reverse') : 'qualitative1'

        const qualitativeReverse = palletNamesArr.filter((name: string) => name.match(qualitativeRegex) && name.match(reverseRegex));
        return { ...state,isNonSequentialReversed: true,filteredQualitative: qualitativeReverse,palletName:reversedNonSeqPalletName};
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

    if(caseValue === SEQUENTIAL_REVERSE){
        if (state.isSequentialReversed) {
            dispatch({ type: SEQUENTIAL, payload: colorPalettes });
        } else {
            dispatch({ type: SEQUENTIAL_REVERSE, payload: colorPalettes });
          };
      }

    if (caseValue === NON_SEQUENTIAL_REVERSE) {
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

    return { state,handleSwitch,dispatch}
}