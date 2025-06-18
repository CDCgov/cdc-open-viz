import _ from 'lodash'

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
  autoStandardize(data): Object[] | undefined {
    const errorsFound: string[] = []

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
      if (
        description.seriesKey !== undefined &&
        description.xKey !== undefined &&
        (description.valueKey !== undefined ||
          (description.valueKeys !== undefined && description.valueKeys.length > 0) ||
          (description.valueKeysTallSupport !== undefined && description.valueKeysTallSupport.length > 0))
      ) {
        const hasTallSupportKeys =
          Array.isArray(description.valueKeysTallSupport) && description.valueKeysTallSupport.length > 0
        const hasSeriesKeyInData = data.some(row => row.hasOwnProperty(description.seriesKey))
        const hasAnyTallKeyInData = data.some(row =>
          description.valueKeysTallSupport.some(key => row.hasOwnProperty(key))
        )
        if (hasTallSupportKeys && hasSeriesKeyInData && hasAnyTallKeyInData) {
          const standardizedMapped = {}

          data.forEach(row => {
            // must have xKey and seriesKey
            if (!row.hasOwnProperty(description.xKey) || !row.hasOwnProperty(description.seriesKey)) return

            // Build grouping key parts
            const parts = [String(row[description.xKey])]
            Object.entries(row).forEach(([key, val]) => {
              if (
                key !== description.xKey &&
                key !== description.seriesKey &&
                !description.valueKeysTallSupport.includes(key) &&
                !(Array.isArray(description.ignoredKeys) && description.ignoredKeys.includes(key))
              ) {
                parts.push(`${key}=${val}`)
              }
            })
            const uniqueKey = parts.join('|')

            // Initialize with xKey
            if (!standardizedMapped[uniqueKey]) {
              standardizedMapped[uniqueKey] = {
                [description.xKey]: row[description.xKey],
                // save original tall support values
                ...description.valueKeysTallSupport.reduce((acc, key) => {
                  if (row.hasOwnProperty(key)) acc[key] = row[key]
                  return acc
                }, {})
              }
            }

            Object.entries(row).forEach(([key, val]) => {
              if (
                key !== description.xKey &&
                key !== description.seriesKey &&
                !description.valueKeysTallSupport.includes(key) &&
                !(Array.isArray(description.ignoredKeys) && description.ignoredKeys.includes(key))
              ) {
                standardizedMapped[uniqueKey][key] = val
              }
            })

            description.valueKeysTallSupport.forEach((valueKey, i) => {
              if (row.hasOwnProperty(valueKey)) {
                const seriesVal = String(row[description.seriesKey])
                const colName = i === 0 ? seriesVal : `${seriesVal}-${valueKey}`
                standardizedMapped[uniqueKey][colName] = row[valueKey]
              }
            })
          })

          return Object.values(standardizedMapped)
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
                standardizedMapped[uniqueKey] = {
                  [description.xKey]: row[description.xKey],
                  '**Numeric Value Property**': valueKey
                }
                extraKeys.forEach(key => {
                  standardizedMapped[uniqueKey][key] = row[key]
                })
              }

              standardizedMapped[uniqueKey][row[description.seriesKey]] = row[valueKey]
            })
          })

          Object.keys(standardizedMapped).forEach(key => {
            if (
              !description.ignoredKeys ||
              description.ignoredKeys.indexOf(standardizedMapped[key]['**Numeric Value Property**']) === -1
            ) {
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
              standardizedMapped[uniqueKey] = {
                [description.xKey]: row[description.xKey],
                [row[description.seriesKey]]: row[description.valueKey]
              }
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

  cleanData(data: DataArray, excludeKey: string, includedKeys: string[]): DataArray {
    if (!Array.isArray(data) || !excludeKey) return data

    const removeCommasAndDollars = (value: string) => value.replace(/[,\$]/g, '')
    const isNumber = (value: any) => !isNaN(parseFloat(value)) && isFinite(value)
    return data.map(item =>
      _.mapValues(item, (value, key) => {
        if (key === excludeKey) return value

        if (includedKeys.includes(key)) {
          if (typeof value === 'string') {
            // Handle string values and sanitize them
            const sanitized = removeCommasAndDollars(value)
            return isNumber(sanitized) ? sanitized : ''
          }
          return isNumber(value) ? value : ''

          // For non-string values, validate them as numbers
        }
        return value
      })
    )
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
