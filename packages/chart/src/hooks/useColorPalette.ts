import { useEffect, useReducer } from 'react';
// create constants 
export const SEQUENTIAL = "SEQUENTIAL";
export const SEQUENTIAL_REVERSE ='SEQUENTIAL_REVERSE';
export const NON_SEQUENTIAL = "NON_SEQUENTIAL";
export const NON_SEQUENTIAL_REVERSE = "NON_SEQUENTIAL_REVERSE";

// state interface
interface State {
    readonly isSequentialReversed: boolean;
     readonly isNonSequentialReversed: boolean;
     readonly filteredSequential:any[];
     readonly filteredQualitative: any[];
  }
  // custom type
  type Case = "SEQUENTIAL_REVERSE"|"NON_SEQUENTIAL_REVERSE";
  // action type
  interface Action<Pallets> {
   readonly type:
      | "SEQUENTIAL" 
      | "SEQUENTIAL_REVERSE"
      | "NON_SEQUENTIAL"
      | "NON_SEQUENTIAL_REVERSE"
    payload: Pallets ;
  }
  
  const initialState: State = {
    isNonSequentialReversed: false,
    isSequentialReversed: false,
    filteredSequential: [],
    filteredQualitative: [],
  };
  
  // reducer func ll handle 4 different state changes
  function reducer<T>(state: State, action: Action<T>): State {
    const colorNamesArr = Object.keys(action.payload); // action.payload ===colorPalletes object;
    let reverseRegex = new RegExp('reverse$'); // matches a string that ends in with "reverse".
    let sequentialRegex = new RegExp('^sequential'); //matches any string that starts with "sequential".
    let qualitativeRegex = new RegExp('^qualitative'); //matches any string that starts with "qualitative".
       
    switch (action.type) {
      case SEQUENTIAL:
        const sequential: string[] = colorNamesArr.filter((name: string) =>name.match(sequentialRegex) && !name.match(reverseRegex));
        return {...state,filteredSequential: sequential,isSequentialReversed:false};
      case SEQUENTIAL_REVERSE:
        const sequantialReversed: string[] = colorNamesArr.filter((name: string) =>!name.match(qualitativeRegex) && name.match(reverseRegex));
        return {...state,isSequentialReversed: true,filteredSequential: sequantialReversed};
      case NON_SEQUENTIAL:
          const qualitative = colorNamesArr.filter((name:string)=>name.match(qualitativeRegex) && !name.match(reverseRegex) )
        return { ...state, isNonSequentialReversed: false,filteredQualitative:qualitative };
      case NON_SEQUENTIAL_REVERSE:
          const qualitativeReverse = colorNamesArr.filter((name:string)=>!name.match(sequentialRegex) && name.match(reverseRegex) )
  
        return { ...state, isNonSequentialReversed: true,filteredQualitative:qualitativeReverse };
      default:
        return state;
    }
  }
  
  const useColorPallete = <T>(colorPalettes:T) => {
   
    
  };
  export default useColorPallete;
