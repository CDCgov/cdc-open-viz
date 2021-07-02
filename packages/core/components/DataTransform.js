export class DataTransform {
  constructor() {
    this.constants = {
      errorMessageEmtpyData: 'Your data file is empty.', 
      errorMessageFormat: 'Your datatype is not supported.',
      descriptionHeader: 1,
      descriptionRoot: 2,
      descriptionSeriesFilter: 3
    };
  }

  //Performs standardizations that can be completed automatically without use input
  autoStandardize(data){
    const errorsFound = []

    // Empty data
    if ( 0 === data.length ) {
      errorsFound.push(this.constants.errorMessageEmptyData);
    }   

    // Does it have the correct data structure?
    if (!data.filter || data.filter(row =>  typeof row !== 'object').length > 0) {
      errorsFound.push(this.constants.errorMessageFormat);
    }

    if(errorsFound.length > 0) {
      throw errorsFound;
    }

    //Convert array of arrays, to array of objects
    if (data.filter(row =>  row.constructor !== Object).length > 0) {
      let standardizedData = [];
      for(let row = 1; row < data.length; row++){
        let standardizedRow = {};
        data[row].forEach((datum, col) => {
          standardizedRow[data[0][col]] = datum;
        });
        standardizedData.push(standardizedRow);
      }
      data = standardizedData;
    }

    return data;
  }

  //Performs standardizations based on developer provided description of the data
  developerStandardize(data, description){
    //Validate the description object
    if(!description){
      throw 'Error';
    }

    if(description.horizontal === undefined || description.series === undefined){
      throw 'Error';
    }

    if(description.series === true && description.horizontal === false && description.singleRow === undefined){
      throw 'Error';
    }

    if(description.horizontal === true){
      if(description.series === true) {
        if(!description.seriesKey){
          throw 'Error';
        }

        let standardizedMapped = {};
        let standardized = [];
        data.forEach((row) => {
          let nonNumericKeys = [];
          Object.keys(row).forEach((key) => {
            if(key !== description.seriesKey && isNaN(parseFloat(row[key]))){
              nonNumericKeys.push(key);
            }
          });

          Object.keys(row).forEach((key) => {
            if(key !== description.seriesKey && nonNumericKeys.indexOf(key) === -1) {
              let uniqueKey = key + '|' + nonNumericKeys.map((nonNumericKey) => (nonNumericKey + '=' + row[nonNumericKey]));
              if(!standardizedMapped[uniqueKey]){
                standardizedMapped[uniqueKey] = {[row[description.seriesKey]]: row[key], key};
                nonNumericKeys.forEach((nonNumericKey) => {
                  standardizedMapped[uniqueKey][nonNumericKey] = row[nonNumericKey];
                });
              }
              standardizedMapped[uniqueKey][row[description.seriesKey]] = row[key];
            }
          });
        });

        Object.keys(standardizedMapped).forEach((key) => {
          standardized.push(standardizedMapped[key]);
        });

        return standardized;
      } else {
        let standardized = [];

        data.forEach((row) => {
          let nonNumericKeys = [];
          Object.keys(row).forEach((key) => {
            if(isNaN(parseFloat(row[key]))){
              nonNumericKeys.push(key);
            }
          });

          Object.keys(row).forEach((key) => {
            if(nonNumericKeys.indexOf(key) === -1){
              let newRow = {key, value: row[key]};

              nonNumericKeys.forEach((nonNumericKey) => {
                newRow[nonNumericKey] = row[nonNumericKey];
              });

              standardized.push(newRow);
            }
          });
        });

        return standardized;
      }
    } else if(description.series === true && description.singleRow === false){
      if(description.seriesKey !== undefined && description.xKey !== undefined && description.valueKey !== undefined){
        let standardizedMapped = {};
        let standardized = [];

        data.forEach((row) => {
          let extraKeys = [];
          let uniqueKey = row[description.xKey];
          Object.keys(row).forEach((key) => {
            if(key !== description.xKey && key !== description.seriesKey && key !== description.valueKey){
              uniqueKey += '|' + key + '=' + row[key];
              extraKeys.push(key);
            }
          });

          if(standardizedMapped[uniqueKey]){
            standardizedMapped[uniqueKey][row[description.seriesKey]] = row[description.valueKey];
          } else {
            standardizedMapped[uniqueKey] = {[description.xKey]: row[description.xKey], [row[description.seriesKey]]: row[description.valueKey]};
            extraKeys.forEach((key) => {
              standardizedMapped[uniqueKey][key] = row[key];
            });
          }
        });

        Object.keys(standardizedMapped).forEach((key) => {
          standardized.push(standardizedMapped[key]);
        });

        return standardized;
      } else {
        throw 'Error';
      }
    } 

    return data;
  }
}

export default DataTransform;
