import React, { useCallback } from 'react'

//Third Party
import parse from 'html-react-parser'

//Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Components
import CircleCallout from './CircleCallout'
import Component from '@cdc/core/components/Component'

//Helpers
import numberFromString from '@cdc/core/helpers/numberFromString'

//Constants
import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_SUM,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_RANGE,
  IMAGE_POSITION_LEFT,
  IMAGE_POSITION_RIGHT,
  IMAGE_POSITION_TOP,
  IMAGE_POSITION_BOTTOM
} from '../consts.js'

//Visualization
const DataByte = () => {
  const { config, missingRequiredSections } = useConfigContext()
  const {
    title,
    theme,
    dataColumn,
    dataFunction,
    fontSize,
    imageData,
    byteBody,
    byteFontSize,
    byteStyle,
    dataFormat,
    filters,
    subtext
  } = config

  /*const fetchRemoteData = async (url) => {
    try {
      const urlObj = new URL(url)
      const regex = /(?:\.([^.]+))?$/

      let data = []

      const ext = (regex.exec(urlObj.pathname)[1])
      if ('csv' === ext) {
        data = await fetch(url)
          .then(response => response.text())
          .then(responseText => {
            const parsedCsv = Papa.parse(responseText, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true
            })
            return parsedCsv.data
          })
      }

      if ('json' === ext) {
        data = await fetch(url)
          .then(response => response.json())
      }

      return data
    } catch {
      // If we can't parse it, still attempt to fetch it
      try {
        let response = await (await fetch(configUrl)).json()
        return response
      } catch {
        console.error(`Cannot parse URL: ${url}`)
      }
    }
  }*/

  const calculateDataByte = () => {
    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) return ''

    const applyPrecision = (value) => {
      // first validation
      if (value === undefined || value === null) {
        console.error('A numerical value must be supplied to applyPrecision()')
        return
      }
      // second validation
      if (Number.isNaN(value)) {
        console.error('Argument isNaN, cannot process applyPrecision()')
        return
      }
      let result = value
      let roundToPlace = Number(config.dataFormat.roundToPlace) // default equals to 0
      //  ROUND FIELD  going -1,-2,-3 numbers
      if (roundToPlace < 0) {
        console.error('ROUND field is below "0", cannot process applyPrecision()')
        return
      }
      if (typeof roundToPlace === 'number' && roundToPlace > -1) {
        result = Number(result).toFixed(roundToPlace)   // returns STRING
      }
      return String(result)
    }

    const getColumnSum = (arr) => {
      // first validation
      if (arr === undefined || arr === null) {
        console.error('Enter valid value for getColumnSum()')
        return
      }
      // second validation
      if (arr.length === 0 || !Array.isArray(arr)) {
        console.error('Arguments are not valid getColumnSum()')
        return
      }
      let sum = 0
      if (arr.length > 1) {
        /// first convert each element to number then add using reduce method to escape string concatination.
        sum = arr.map(el => Number(el)).reduce((sum, x) => sum + x)
      } else {
        sum = Number(arr[0])
      }
      return applyPrecision(sum)
    }

    const getColumnMean = (arr) => {
      // first validation
      if (arr === undefined || arr === null || !Array.isArray(arr)) {
        console.error('Enter valid parameter getColumnMean function')
        return
      }

      let mean = 0
      if (arr.length > 1) {
        /// first convert each element to number then add using reduce method to escape string concatination.
        mean = arr.map(el => Number(el)).reduce((a, b) => a + b) / arr.length
      } else {
        mean = Number(arr[0])
      }
      return applyPrecision(mean)
    }

    const getMode = (arr) => {
      // this function accepts any array and returns array of strings
      let freq = {}
      let max = -Infinity

      for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
          freq[arr[i]] += 1
        } else {
          freq[arr[i]] = 1
        }

        if (freq[arr[i]] > max) {
          max = freq[arr[i]]
        }
      }

      let res = []

      for (let key in freq) {
        if (freq[key] === max) res.push(key)
      }

      return res
    }

    const getMedian = arr => {
      if (!arr.length) return
      const mid = Math.floor(arr.length / 2),
        nums = [ ...arr ].sort((a, b) => a - b)
      const value = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
      return applyPrecision(value)
    }

    const applyLocaleString = (value) => {
      if (value === undefined || value === null) return

      const language = 'en-US'

      let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumFractionDigits: 6
      })

      if (Number.isNaN(value) || typeof value === 'number') value = String(value)

      // Add back missing .0 in e.g. 12.0
      const match = value.match(/\.\d*?(0*)$/)
      if (match) formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0]

      //Return formatted value
      return formattedValue
    }

    let dataByte = ''

    //Optionally filter the data based on the user's filter
    let filteredData = config.data

    filters.map((filter) => {
      if (filter.columnName && filter.columnValue) {
        return filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue
        })
      } else {
        return false
      }
    })

    let numericalData = []

    if (filteredData.length) {
      filteredData.forEach(row => {
        let value = numberFromString(row[dataColumn])
        if (typeof value === 'number') numericalData.push(value)
      })
    }

    switch (dataFunction) {
      case DATA_FUNCTION_COUNT:
        dataByte = numericalData.length
        break
      case DATA_FUNCTION_SUM:
        dataByte = getColumnSum(numericalData)
        break
      case DATA_FUNCTION_MEAN:
        dataByte = getColumnMean(numericalData)
        break
      case DATA_FUNCTION_MEDIAN:
        dataByte = getMedian(numericalData)
        break
      case DATA_FUNCTION_MAX:
        dataByte = Math.max(...numericalData)
        break
      case DATA_FUNCTION_MIN:
        dataByte = Math.min(...numericalData)
        break
      case DATA_FUNCTION_MODE:
        dataByte = getMode(numericalData).join('')
        break
      case DATA_FUNCTION_RANGE:
        let rangeMin = Math.min(...numericalData)
        let rangeMax = Math.max(...numericalData)
        rangeMin = applyPrecision(rangeMin)
        rangeMax = applyPrecision(rangeMax)
        if (config.dataFormat.commas) {
          rangeMin = applyLocaleString(rangeMin)
          rangeMax = applyLocaleString(rangeMax)
        }
        dataByte = config.dataFormat.prefix + rangeMin + config.dataFormat.suffix + ' - ' + config.dataFormat.prefix + rangeMax + config.dataFormat.suffix
        break
      default:
        console.warn('Data byte function not recognized: ' + dataFunction)
    }

    // If not the range, then round and format here
    if (dataFunction !== DATA_FUNCTION_RANGE) {
      dataByte = applyPrecision(dataByte)

      if (config.dataFormat.commas) {
        dataByte = applyLocaleString(dataByte)
      }
      // Optional
      // return config.dataFormat.prefix + dataByte + config.dataFormat.suffix;

      return dataByte
    } else {
      //Rounding and formatting for ranges happens earlier.

      return dataByte
    }
  }

  const DataImage = useCallback(() => {
    let operators = {
      '<': (a, b) => {
        return a < b
      },
      '>': (a, b) => {
        return a > b
      },
      '<=': (a, b) => {
        return a <= b
      },
      '>=': (a, b) => {
        return a >= b
      },
      '≠': (a, b) => {
        return a !== b
      },
      '=': (a, b) => {
        return a === b
      }
    }
    let imageSource = imageData.url
    let imageAlt = imageData.alt

    if ('dynamic' === imageData.display && imageData.options && imageData.options?.length > 0) {
      let targetVal = Number(calculateDataByte())
      let argumentActive = false

      imageData.options.forEach((option, index) => {
        let argumentArr = option.arguments
        let { source, alt } = option

        if (false === argumentActive && argumentArr.length > 0) {
          if (argumentArr[0].operator.length > 0 && argumentArr[0].threshold.length > 0) {
            if (operators[argumentArr[0].operator](targetVal, argumentArr[0].threshold)) {
              if (undefined !== argumentArr[1]) {
                if (argumentArr[1].operator?.length > 0 && argumentArr[1].threshold?.length > 0) {
                  if (operators[argumentArr[1].operator](targetVal, argumentArr[1].threshold)) {
                    imageSource = source
                    if (alt !== '' && alt !== undefined) {
                      imageAlt = alt
                    }
                    argumentActive = true
                  }
                }
              } else {
                imageSource = source
                if (alt !== '' && alt !== undefined) {
                  imageAlt = alt
                }
                argumentActive = true
              }
            }
          }
        }
      })
    }

    return (
      imageSource.length > 0 && 'graphic' !== byteStyle && 'none' !== imageData.display ?
        <img alt={imageAlt} src={imageSource} className="cove-data-byte__image"/> : null
    )
  }, [ imageData ])

  let byteFlow

  let isTop = false
  let isBottom = false

  switch (config.bytePosition) {
    case IMAGE_POSITION_TOP:
      byteFlow = 'top'
      isTop = true
      break
    case IMAGE_POSITION_RIGHT:
      byteFlow = 'right'
      isTop = true
      break
    case IMAGE_POSITION_BOTTOM:
      byteFlow = 'bottom'
      isBottom = true
      break
    case IMAGE_POSITION_LEFT:
      byteFlow = 'left'
      isTop = true
      break
    default:
      byteFlow = 'left'
      isTop = true
      break
  }

  const showByte = undefined !== dataColumn && undefined !== dataFunction

  const Callout = () => (
    <div className="cove-data-byte__callout">
      <CircleCallout theme={config.theme} text={calculateDataByte()} byteFontSize={byteFontSize} dataFormat={dataFormat}/>
    </div>
  )

  return (
    <Component className="cove-data-byte" title={title} theme={theme}>
      {!missingRequiredSections && !config.newViz && (<>
        <div className={`cove-data-byte__container${fontSize ? ' font-' + fontSize : ''}`} flow={byteFlow}>
          {showByte && 'graphic' === byteStyle && isTop && <Callout/>}
          {isTop && <DataImage/>}
          <div className="cove-data-byte__content">
            {showByte && 'title' === byteStyle &&
              <div className="cove-data-byte__value" style={{ fontSize: byteFontSize + 'px' }}>{calculateDataByte()}</div>
            }
            <p className="cove-data-byte__text">
              {showByte && 'body' === byteStyle &&
                <span className="cove-data-byte__value mr-1" style={{ fontSize: byteFontSize + 'px' }}>{calculateDataByte()}</span>
              }
              {parse(byteBody)}
            </p>
            {subtext &&
              <p className="cove-data-byte__subtext">{parse(subtext)}</p>
            }
          </div>
          {isBottom && <DataImage/>}
          {showByte && 'graphic' === byteStyle && !isTop && <Callout/>}
        </div>
      </>)}
    </Component>
  )
}

export default DataByte
