import  {useEffect, useMemo, useReducer} from 'react';
type Data = {
    name:string
    Radius:string
    Diameter:string
    distance:string
    [key:string]:any
};
type Config = {
    [key:string]:any
};

type UpdateField = (a:string,b:string|null,c:string,d:any)=>void;
interface Style {
    input:{outline:string };
    span:{ color:string,display:string};
};
interface State {
maxValue:string
enteredValue:string
isEnteredValueIsValid :boolean
style : Style
step:string
};

interface Action{
    type:'ON_ENTERED_VALUE'|'ON_CLEANUP'|'GET_MAX'| 'ON_VALIDATE'|'ON_STEP';
    payload:string | boolean;
};

// constants 
const ON_ENTERED_VALUE= 'ON_ENTERED_VALUE';
const GET_MAX = 'GET_MAX';
const ON_VALIDATE = 'ON_VALIDATE';
const ON_CLEANUP = 'ON_CLEANUP';
const ON_STEP = 'ON_STEP';

const initialState ={
    maxValue:'',
    enteredValue:'',
    step:'1',
    isEnteredValueIsValid :false,
    style : { input:{outline:'1px solid transparent'},span:{color:'red',display:'none' }}

};


const reducer =(state:State,action:Action):State=>{
    let style:Style = { input:{outline:'1px solid transparent'},span:{color:'red',display:'none' }}
    switch(action.type){
        case GET_MAX :
            //const  roundMax = Math.round(parseFloat())
            return {...state,maxValue: action.payload as string}; 

        case ON_ENTERED_VALUE :
            //let stepValue = String(parseFloat(action.payload as string) /10);
            return {...state,enteredValue:action.payload as string }; 

        case ON_VALIDATE  :
            const enteredValue = action.payload as string ; 
            const maxVal = state.maxValue as string;
            let isValid :boolean = parseFloat(maxVal) <= parseFloat(enteredValue);
            style= !isValid ?  { input:{outline:'1px solid red'},span:{color:'red',display:'block'}} :{ input:{outline:'1px solid transparent'},span:{color:'red',display:'none' }};
            return {...state,isEnteredValueIsValid:isValid,style} ;

        case ON_CLEANUP : 
            style = !action.payload ?  { input:{outline:'1px solid red'},span:{color:'red',display:'block'}} :{ input:{outline:'1px solid transparent'},span:{color:'red',display:'none' }};
            return {...state,style:style};  
         
        case ON_STEP :
            return {...state} ;   
     
        default :return state;
    };
};



// create  CUSTOM hook
const useInput=(config:Config,data:Array<Data>,updateField:UpdateField)=>{
    // register state.
    const [state,dispatch] = useReducer(reducer,initialState);
    // destructure state
    const {enteredValue,isEnteredValueIsValid,maxValue} = state;
    
    // remember last returned value.
    const memorizedValue:string = useMemo(()=>getMaxValueFromData(config,data),[data,config]);

      useEffect(()=>{
          // runs first time and every time when data max max value changes;
        dispatch({type:GET_MAX,payload:memorizedValue as string})
    },[dispatch,memorizedValue,config,data])




    const onChangeHandler = (e:React.FormEvent<EventTarget>):void=>{
        let target = e.target as HTMLInputElement;
        let value = target.value as string;
        // validation.
        if(value === undefined || value === null ){
            console.error('Enter valid value  on ==> onChangeHandler function')
            return undefined;
        };
        // dispatch both cases on each value when user enters
        dispatch({type:ON_ENTERED_VALUE,payload:String(value)});
        dispatch({type:ON_VALIDATE,payload:String(value)})
    };

 useEffect (()=>{
 // validate again if max value changes on original data
    if(maxValue && isEnteredValueIsValid){
        dispatch({type:ON_VALIDATE,payload:String(enteredValue)})
     };
    },[maxValue,isEnteredValueIsValid,enteredValue])
   
useEffect(()=>{
// cleanup for styling
   if(!enteredValue.length){
      dispatch({type:ON_CLEANUP,payload:true});
    }
  return ()=>dispatch({type:ON_CLEANUP,payload:false});
},[enteredValue])
  
useEffect(() => {
        if(isEnteredValueIsValid  && enteredValue !== config.yAxis.max) {
            updateField('yAxis', null, 'max', enteredValue)
         }else if (!enteredValue.length || !isEnteredValueIsValid){
           updateField('yAxis', null, 'max', maxValue)
        }
   
      }, [isEnteredValueIsValid,enteredValue,maxValue]) // dont add  updateField as a dependency.


    return {state,dispatch,onChangeHandler};

};

export default useInput;





const getMaxValueFromData = (config:Config,data:Array<Data>):string=>{
    let max:string;  // will hold max number from data.

      if (config.visualizationType === 'Bar' && config.visualizationSubType === 'stacked') {
        const yTotals = data.reduce((allTotals, xValue) => {
          const totalYValues = config.runtime.seriesKeys.reduce((yTotal, k) => {
            yTotal += Number(xValue[k]);
            return yTotal;
          }, 0);
          allTotals.push(totalYValues);
          if(totalYValues > max){
            max = totalYValues;
          };
          return allTotals;
        }, [] as number[]);

        max = String( Math.max(...yTotals));
      } else if(config.visualizationType === 'Bar' && config.confidenceKeys && config.confidenceKeys.upper) {
        max = String(Math.max(...data.map((d) => Number(d[config.confidenceKeys.upper]))));
      } else {
        max = String(Math.max(...data.map((d) => Math.max(...config.runtime.seriesKeys.map((key) => Number(d[key]))))));
      }

      return max as string;
    };

   