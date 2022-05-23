import  {useEffect, useMemo, useReducer} from 'react';
const ON_ENTERED_VALUE= 'ON_ENTERED_VALUE';
const GET_DATA_VALUE = 'GET_DATA_VALUE';
const ON_VALIDATE = 'ON_VALIDATE';
const GET_CONFIG = 'GET_CONFIG';

const initialState ={
    enteredValue:{min:'',max:''},
    config:{},
    data:{min:'',max:''},
    message:{min:'',max:''},
    isValid:{min:false,max:false},
    isAllNegative:false
};


const reducer =(state,action)=>{
   // let style:Style = { input:{outline:'1px solid transparent'},span:{color:'red',display:'none' }}
    switch(action.type){
        case GET_CONFIG:
            return { ...state, config: action.payload };
        case GET_DATA_VALUE:
            return {...state,data:action.payload,isAllNegative:!action.existPositiveVal}; 
        case ON_ENTERED_VALUE :
            return {...state, enteredValue:action.payload}; 
        case ON_VALIDATE  :
            const {min,max} = action.payload ; 
            const isBar = state.config.visualizationType === 'Bar';
            const isLine = state.config.visualizationType === 'Line'
            const isCombo = state.config.visualizationType === 'Combo'
            const maxVal = state.data.max ;
            const minVal = state.data.min ;
            let minIsValid = false;
            let maxIsValid = false;
            let minMsg = '';
            let maxMsg = '';
            const isNegative = parseFloat(minVal) < 0 ;
            if (isBar || isCombo) {
                if (parseFloat(max) < 0 && state.isAllNegative) {
                    maxIsValid = false
                    maxMsg = 'Value must be more than or equal to 0'
                }
                else if (parseFloat(max ) < parseFloat(maxVal) && !state.isAllNegative ) {
                    maxIsValid = false
                    maxMsg = 'Max value must be more than '+ maxVal
                } else {
                     maxIsValid =  true
                }
                if(parseFloat(min ) > 0){
                    minIsValid = false
                    minMsg = 'Value must be less than or equal to 0'
                } 
                else if (isNegative &&( parseFloat(min ) > parseFloat(minVal) ) ){
                    minIsValid = false
                    minMsg = 'Value must be less than ' + minVal // -9.3
                } else {
                    minIsValid = true
                }
                
            } else if (isLine) {
                minIsValid = (parseFloat(min) <= parseFloat(minVal))
                minMsg = 'Value must be less than ' + minVal
            }
            return {...state,message:{min:minMsg,max:maxMsg},isValid:{min:minIsValid,max:maxIsValid}} ;
        default :return state;
    };
};



const useInput=(config,data)=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const {enteredValue,isValid,data:originalData} = state;
    
    const memorizedMaxValue= useMemo(()=>getMaxValueFromData(config,data),[data,config]);
    const memorizedMinValue = useMemo(()=>getMinValueFromData(config,data),[data,config]);


      useEffect(()=>{
        dispatch({type:GET_DATA_VALUE,payload:{min:memorizedMinValue ,max:memorizedMaxValue },existPositiveVal:findPositiveNumber(config,data)})
          dispatch({ type: GET_CONFIG, payload: config })
         
    },[dispatch,memorizedMaxValue,memorizedMinValue,config,data])


    const onChangeHandler = (e,param)=>{
        let value = e.target.value ;
        if(value === undefined || value === null ){
            console.error('Enter valid value  on ==> onChangeHandler function')
            return undefined;
        };
        if(param==='MAX'){
            dispatch({type:ON_ENTERED_VALUE,payload:{...state.enteredValue,max:value}});
            dispatch({type:ON_VALIDATE,payload:{...state.enteredValue,max:value}})
        }else if (param==='MIN') {
            dispatch({type:ON_ENTERED_VALUE,payload:{...state.enteredValue,min:value}});
            dispatch({type:ON_VALIDATE,payload:{...state.enteredValue,min:value}})
        }
    };

 useEffect (()=>{
 // validate again if max or min value changes on original data
    if((originalData.max || originalData.min)  && (isValid.max || isValid.min)){
      dispatch({type:ON_VALIDATE,payload:{...state.enteredValue}})
     };
    },[originalData.max,originalData.min, isValid.max ,isValid.min,enteredValue.max,enteredValue.min,state.enteredValue])
    return {state,dispatch,onChangeHandler};

};

export default useInput;





const getMaxValueFromData = (config,data)=>{
    let max;  // will hold max number from data.

    if (config.visualizationType === 'Bar' && config.visualizationSubType === 'stacked') {
        const yTotals = data.reduce((allTotals, xValue) => {
          const totalYValues = config.runtime.seriesKeys.reduce((yTotal, k) => {
            yTotal += Number(xValue[k]);
            return yTotal;
          }, 0);
          allTotals.push(totalYValues);
          if(totalYValues > max){
            max = totalYValues;
          }
          return allTotals;
        }, [] as number[]);

        max = Math.max(...yTotals);
      } else if(config.visualizationType === 'Bar' && config.confidenceKeys && config.confidenceKeys.upper) {
        max = Math.max(...data.map((d) => Number(d[config.confidenceKeys.upper])));
      } else {
        max = Math.max(...data.map((d) => Math.max(...config.runtime.seriesKeys.map((key) => Number(d[key])))));
      }

      return max;
    };

const getMinValueFromData = (config, data)=> {
    let min;
    const minNumberFromData = Math.min(...data.map((d) => Math.min(...config.runtime.seriesKeys.map((key) => Number(d[key])))));
    min = String(minNumberFromData)
 
    return min;
};

const findPositiveNumber = (config,data) => {
    return  data.some(v => v[config.runtime.seriesKeys] >= 0 )
}

