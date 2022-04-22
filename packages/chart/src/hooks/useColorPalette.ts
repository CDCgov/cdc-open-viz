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

