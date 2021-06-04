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

    if(description.series === undefined){
      throw 'Error';
    }

    if(description.series === true && description.singleRow === undefined){
      throw 'Error';
    }

    if(description.series === true && description.singleRow === false){
      if(description.seriesKey !== undefined && description.xKey !== undefined && description.valueKey !== undefined){
        let standardizedMapped = {};
        let standardized = [];

        data.forEach((row) => {
          if(standardizedMapped[row[description.xKey]]){
            standardizedMapped[row[description.xKey]][row[description.seriesKey]] = row[description.valueKey];
          } else {
            standardizedMapped[row[description.xKey]] = {[description.xKey]: row[description.xKey], [row[description.seriesKey]]: row[description.valueKey]};
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
