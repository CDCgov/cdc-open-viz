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

    if(description.series === true){
      if(description.singleRow !== undefined){
        if(description.seriesKey !== undefined){
          let standardized = [];
          
        } else {
          throw 'Error';
        }
      } else {
        throw 'Error';
      }
    }

    return data;
    /*if(!description || description.horizontal === 'undefined'){
      return;
    }

    if(!description || !description.root){
      throw {id: this.constants.descriptionRoot, details: Object.keys(data[0])};
    }

    if(description.filters){
      description.filters.forEach((filter) => {

      });
    }

    if(description.seriesKey && description.value){

    }

    let rootValues = {};
    data.forEach((row) => {
      if(row[description.root] && rootValues[row[description.root]]){
        throw {id: this.constants.descriptionSeriesFilter};
      } else {
        rootValues[row[description.root]] = true;
      }
    });

    return data;*/
  }
}

export default DataTransform;
