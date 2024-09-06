type DataArray = Record<string, any>[]

export class DataTransform {
  constants: any
  constructor() {
    this.constants = {
      errorMessageEmtpyData: 'Your data file is empty.',
      errorMessageFormat: 'Your datatype is not supported.',
      descriptionHeader: 1,
      descriptionRoot: 2,
      descriptionSeriesFilter: 3
    }
  }

  //Performs standardizations that can be completed automatically without use input
  autoStandardize(data) {
    const errorsFound: any[] = []

    // Empty data
    if (!data || 0 === data.length) {
      errorsFound.push(this.constants.errorMessageEmptyData)
    }

    // Does it have the correct data structure?
    if (!data?.filter || data.filter(row => typeof row !== 'object').length > 0) {
      errorsFound.push(this.constants.errorMessageFormat)
    }

    if (errorsFound.length > 0) {
      console.error(errorsFound)
      return undefined
    }

    //Convert array of arrays, to array of objects
    if (data.filter(row => row.constructor !== Object).length > 0) {
      let standardizedData: Record<string, any>[] = []
      for (let row = 1; row < data.length; row++) {
        let standardizedRow = {}
        data[row].forEach((datum, col) => {
          standardizedRow[data[0][col]] = datum
        })
        standardizedData.push(standardizedRow)
      }
      data = standardizedData
    }

    return data
  }

  //Performs standardizations based on developer provided description of the data
  developerStandardize(data, description) {
    if (!data) {
      return []
    }

    //Validate the description object
    if (!description) {
      return undefined
    }

    if (description.horizontal === undefined || description.series === undefined) {
      return undefined
    }

    if (description.series === true && description.horizontal === false && description.singleRow === undefined) {
      return undefined
    }

    if (description.horizontal === true) {
      if (description.series === true) {
        if (!description.seriesKey) {
          return undefined
        }

        let standardizedMapped = {}
        let standardized: string[] = []
        data.forEach(row => {
          let nonNumericKeys: any[] = []
          Object.keys(row).forEach(key => {
            if (key !== description.seriesKey && isNaN(parseFloat(row[key]))) {
              nonNumericKeys.push(key)
            }
          })

          Object.keys(row).forEach(key => {
            if (key !== description.seriesKey && nonNumericKeys.indexOf(key) === -1) {
              let uniqueKey = key + '|' + nonNumericKeys.map(nonNumericKey => nonNumericKey + '=' + row[nonNumericKey])
              if (!standardizedMapped[uniqueKey]) {
                standardizedMapped[uniqueKey] = { [row[description.seriesKey]]: row[key], key }
                nonNumericKeys.forEach(nonNumericKey => {
                  standardizedMapped[uniqueKey][nonNumericKey] = row[nonNumericKey]
                })
              }
              standardizedMapped[uniqueKey][row[description.seriesKey]] = row[key]
            }
          })
        })

        Object.keys(standardizedMapped).forEach(key => {
          standardized.push(standardizedMapped[key])
        })

        return standardized
      } else {
        let standardized: { key: string; value: any }[] = []

        data.forEach(row => {
          let nonNumericKeys: string[] = []
          Object.keys(row).forEach(key => {
            if (isNaN(parseFloat(row[key]))) {
              nonNumericKeys.push(key)
            }
          })

          Object.keys(row).forEach(key => {
            if (nonNumericKeys.indexOf(key) === -1) {
              let newRow = { key, value: row[key] }

              nonNumericKeys.forEach(nonNumericKey => {
                newRow[nonNumericKey] = row[nonNumericKey]
              })

              standardized.push(newRow)
            }
          })
        })

        return standardized
      }
    } else if (description.series === true && description.singleRow === false) {
      if (description.seriesKey !== undefined && description.xKey !== undefined && (description.valueKey !== undefined || (description.valueKeys !== undefined && description.valueKeys.length > 0) || (description.valueKeysTallSupport !== undefined && description.valueKeysTallSupport.length > 0))) {
        if (description.valueKeysTallSupport !== undefined) {
          let standardizedMapped = {}
          let standardized: string[] = []

          data.forEach(row => {
            let uniqueKey = row[description.xKey]
            Object.keys(row).forEach(key => {
              if (key !== description.xKey && key !== description.seriesKey && description.valueKeysTallSupport.indexOf(key) === -1 && (!description.ignoredKeys || description.ignoredKeys.indexOf(key) === -1)) {
                uniqueKey += '|' + row[key]
              }
            })

            if (!standardizedMapped[uniqueKey]) {
              standardizedMapped[uniqueKey] = { [description.xKey]: row[description.xKey] }
            }
            Object.keys(row).forEach(key => {
              if (key !== description.xKey && key !== description.seriesKey && description.valueKeysTallSupport.indexOf(key) === -1 && (!description.ignoredKeys || description.ignoredKeys.indexOf(key) === -1)) {
                standardizedMapped[uniqueKey][key] = row[key]
              }
            })
            description.valueKeysTallSupport.forEach((valueKey, i) => {
              standardizedMapped[uniqueKey][i === 0 ? row[description.seriesKey] : (row[description.seriesKey] + '-' + valueKey)] = row[valueKey]
            })
          })

          standardized = Object.keys(standardizedMapped).map(key => standardizedMapped[key])

          return standardized
        } else if (description.valueKeys !== undefined) {
          let standardizedMapped = {}
          let standardized: string[] = []
          let valueKeys = description.valueKeys
          if (description.ignoredKeys && description.ignoredKeys.length > 0) {
            valueKeys = valueKeys.concat(description.ignoredKeys)
          }

          data.forEach(row => {
            valueKeys.forEach(valueKey => {
              let extraKeys: string[] = []
              let uniqueKey = row[description.xKey] + '|' + valueKey
              Object.keys(row).forEach(key => {
                if (key !== description.xKey && key !== description.seriesKey && valueKeys.indexOf(key) === -1) {
                  uniqueKey += '|' + key + '=' + row[key]
                  extraKeys.push(key)
                }
              })

              if (!standardizedMapped[uniqueKey]) {
                standardizedMapped[uniqueKey] = { [description.xKey]: row[description.xKey], '**Numeric Value Property**': valueKey }
                extraKeys.forEach(key => {
                  standardizedMapped[uniqueKey][key] = row[key]
                })
              }

              standardizedMapped[uniqueKey][row[description.seriesKey]] = row[valueKey]
            })
          })

          Object.keys(standardizedMapped).forEach(key => {
            if (!description.ignoredKeys || description.ignoredKeys.indexOf(standardizedMapped[key]['**Numeric Value Property**']) === -1) {
              standardized.push(standardizedMapped[key])
            }
          })

          return standardized
        } else {
          let standardizedMapped = {}
          let standardized: any[] = []

          data.forEach(row => {
            let extraKeys: string[] = []
            let uniqueKey = row[description.xKey]
            Object.keys(row).forEach(key => {
              if (key !== description.xKey && key !== description.seriesKey && key !== description.valueKey) {
                uniqueKey += '|' + key + '=' + row[key]
                extraKeys.push(key)
              }
            })

            if (standardizedMapped[uniqueKey]) {
              standardizedMapped[uniqueKey][row[description.seriesKey]] = row[description.valueKey]
            } else {
              standardizedMapped[uniqueKey] = { [description.xKey]: row[description.xKey], [row[description.seriesKey]]: row[description.valueKey] }
              extraKeys.forEach(key => {
                standardizedMapped[uniqueKey][key] = row[key]
              })
            }
          })

          Object.keys(standardizedMapped).forEach(key => {
            standardized.push(standardizedMapped[key])
          })

          return standardized
        }
      } else {
        return undefined
      }
    }

    return data
  }

  /**
     * cleanData
     *
    // This cleans a data set by:
    // - removing commas and $ signs from any numbers to try to plot the point
    // - removing any data points that are NOT composed of of all digits (but allow a decimal point)
    // Without this the charts "break" and do not render
    *
    * Inputs: data as array, excludeKey indicates which key to use to NOT clean
    *                        Example: "Date" should not be cleaned if part of the data
    *
    * Output: returns the cleanedData
    *
    * Set testing = true if you need to see before and after data
    *
    */
  cleanData(data: DataArray, excludeKey, testing = false): DataArray {
    let cleanedupData: DataArray = []
    if (!Array.isArray(data)) debugger
    if (testing) console.log('## Data to clean=', data)
    if (excludeKey === undefined) {
      console.log('COVE: cleanData excludeKey undefined')
      return data // because no excludeKey
    }
    data.forEach(function (d, i) {
      if (testing) console.log('clean', i, ' d', d)
      let cleaned = {}
      Object.keys(d).forEach(function (key) {
        const value = d[key]
        if (key === excludeKey) {
          // pass thru
          cleaned[key] = value
        } else {
          // remove comma and dollar signs
          if (testing) console.log('typeof value is ', typeof value)
          let tmp = ''
          const removeCommasAndDollars = (num: string) => num.replace(/[,\$]/g, '')
          if (typeof value === 'string') {
            tmp = value ? removeCommasAndDollars(value) : ''
          } else {
            tmp = value ? value : ''
          }
          // UNSAFE_isANumber: matches for any string of digits optionally interrupted by a period.
          const UNSAFE_isANumber = (num: any) => /\d+\.?\d*/.test(num)
          if (!isNaN(parseFloat(tmp)) || UNSAFE_isANumber(tmp)) {
            cleaned[key] = tmp
          } else {
            cleaned[key] = ''
          }
          // if you get here, then return nothing to skip bad data point
        }
      })
      if (testing) console.log('cleaned=', cleaned)
      cleanedupData.push(cleaned)
    })
    if (testing) console.log('## cleanedData =', cleanedupData)
    return cleanedupData
  }

  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(data, testing = false) {
    if (testing) console.log('clean', data)
    let cleaned = ''

    // remove comma and dollar signs
    let tmp = ''
    if (typeof data === 'string') {
      tmp = data !== null && data !== '' ? data.replace(/[,\$\%]/g, '') : ''
    } else {
      tmp = data !== null && data !== '' ? data : ''
    }

    if (testing) console.log('## cleanedData =', tmp)
    return tmp
  }
}

export default DataTransform
