
function useReduceData(config,data) {
    // for combo charts check all  Data Series set to Bar;
  const isBar = config?.series?.every(element=>element?.type === 'Bar');

const getMaxValueFromData = () => {
  let max; // will hold max number from data.
  if (
    (config.visualizationType === "Bar" || (config.visualizationType === "Combo" && isBar )) &&
    config.visualizationSubType === "stacked"
  ) {
    const yTotals = data.reduce((allTotals, xValue) => {
      const totalYValues = config.runtime.seriesKeys.reduce((yTotal, k) => {
        yTotal += Number(xValue[k]);
        return yTotal;
      }, 0);

      allTotals.push(totalYValues);
      if (totalYValues > max) {
        max = totalYValues;
      }
      return allTotals;
    }, [] as number[]);

    max = Math.max(...yTotals);
  } else if (
    config.visualizationType === "Bar" &&
    config.series &&
    config.series.dataKey
  ) {
    max = Math.max(...data.map((d) => Number(d[config.series.dataKey])));

  }else if(config.visualizationType === "Combo"  && config.visualizationSubType === "stacked" && !isBar){
    let total  = []
    // get barSeries max Values added to each other
    data.map(function (d,index) {
      const totalYValues =config.runtime.barSeriesKeys.reduce((yTotal, k) => {
          yTotal += Number(d[k]);
          return yTotal;
        }, 0);
        total.push(totalYValues) 
    
   });
   // get lineSeries largest values
   const lineMaxValue =  Math.max(
    ...data.map((d) =>
      Math.max(...config.runtime.lineSeriesKeys.map((key) => Number(d[key])))
    )
  );
    const barSum = Math.max(...total) 
    max = (barSum > lineMaxValue) ? barSum : lineMaxValue;

  }else {
    max = Math.max(
      ...data.map((d) =>
        Math.max(...config.runtime.seriesKeys.map((key) => Number(d[key])))
      )
    );
  }

  return max;
};
    
const getMinValueFromData = ()=> {
    let min;
    const minNumberFromData = Math.min(...data.map((d) => Math.min(...config.runtime.seriesKeys.map((key) => Number(d[key])))));
    min = String(minNumberFromData)
 
    return min;
};

const findPositiveNum = ():boolean=>{
  // loop throught provided data to find positve number in arr based on series keys.
  let existPositiveValue = false;
  if (config.runtime.seriesKeys) {
    for(let i = 0; i < config.runtime.seriesKeys.length; i++) {
      existPositiveValue = data.some(d => d[config.runtime.seriesKeys[i]] >= 0);
    };
  };
  return existPositiveValue;
};
  
  
    
    const maxValue = getMaxValueFromData();
    const minValue = getMinValueFromData();
    const existPositiveValue = findPositiveNum();
  return {minValue,maxValue,existPositiveValue};
}

export default useReduceData