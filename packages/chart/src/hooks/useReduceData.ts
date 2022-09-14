
function useReduceData(config,data) {

const getMaxValueFromData = ()=>{
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
    
const getMinValueFromData = ()=> {
    let min;
    const minNumberFromData = Math.min(...data.map((d) => Math.min(...config.runtime.seriesKeys.map((key) => Number(d[key])))));
    min = String(minNumberFromData)
 
    return min;
};
    
    const maxValue = getMaxValueFromData();
    const minValue = getMinValueFromData()
  return {minValue,maxValue}
}

export default useReduceData