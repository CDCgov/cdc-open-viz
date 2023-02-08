import { useCallback } from 'react'

// Third Party
import parse from 'html-react-parser'

// Store
import { useConfigStore } from '@cdc/core/stores/configStore'

// Data
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
} from '../data/consts.js'

// Helpers
import { numberFromString, applyPrecision } from '@cdc/core/helpers/coveHelpers'

// Components - Core
import CircleCallout from '../components/CircleCallout'

// Visualization
const DataBite = () => {
  const { config } = useConfigStore()

  const calculateDataBite = (includePrefixSuffix = true) => {
    //If either the column or function aren't set, do not calculate
    if (!config.dataColumn || !config.dataFunction) {
      return ''
    }

    // filter null and 0 out from count data
    const getColumnCount = (arr) => {
      if (config.dataFormat.ignoreZeros) {
        numericalData = numericalData.filter(item => item && item)
        return numericalData.length
      } else {
        return numericalData.length
      }
    }

    const getColumnSum = (arr) => {
      // first validation
      if (arr === undefined || arr === null) {
        console.error('Enter valid value for getColumnSum function ')
        return
      }
      // second validation
      console.log('arr', arr)
      if (arr.length === 0 || !Array.isArray(arr)) {
        console.error('Arguments are not valid getColumnSum function ')
        return
      }
      let sum = 0
      if (arr.length > 1) {
        /// first convert each element to number then add using reduce method to escape string concatination.
        sum = arr.map(el => Number(el)).reduce((sum, x) => sum + x)
      } else {
        sum = Number(arr[0])
      }
      return applyPrecision(sum, config.dataFormat.roundToPlace)
    }

    const getColumnMean = (arr) => {
      // add default params to escape errors on runtime
      // first validation
      if (arr === undefined || arr === null || !Array.isArray(arr)) {
        console.error('Enter valid parameter getColumnMean function')
        return
      }

      if (config.dataFormat.ignoreZeros) {
        arr = arr.filter(num => num !== 0)
      }

      let mean = 0
      if (arr.length > 1) {
        /// first convert each element to number then add using reduce method to escape string concatination.
        mean = arr.map(el => Number(el)).reduce((a, b) => a + b) / arr.length
      } else {
        mean = Number(arr[0])
      }
      return applyPrecision(mean, config.dataFormat.roundToPlace)
    }

    const getMode = (arr = []) => {
      // add default params to escape errors on runtime
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
      return applyPrecision(value, config.dataFormat.roundToPlace)
    }

    const applyLocaleString = (value) => {
      if (value === undefined || value === null) return
      if (Number.isNaN(value) || typeof value === 'number') {
        value = String(value)
      }
      const language = 'en-US'
      let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumFractionDigits: 6
      })
      // Add back missing .0 in e.g. 12.0
      const match = value.match(/\.\d*?(0*)$/)

      if (match) {
        formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]
      }
      return formattedValue
    }

    //Optionally filter the data based on the user's filter
    let filteredData = config.data

    config.filters.map(filter => {
      if (filter.columnName && filter.columnValue) {
        return (filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue
        }))
      } else {
        return false
      }
    })

    let numericalData = []
    // Get the column's data
    if (filteredData.length) {
      filteredData.forEach(row => {
        let value = numberFromString(row[config.dataColumn])
        if (typeof value === 'number') numericalData.push(value)
      })
    } else {
      numericalData = config.data.map(item => Number(item[config.dataColumn]))
    }

    let dataBite = ''

    switch (config.dataFunction) {
      case DATA_FUNCTION_COUNT:
        dataBite = getColumnCount(numericalData)
        break
      case DATA_FUNCTION_SUM:
        dataBite = getColumnSum(numericalData)
        break
      case DATA_FUNCTION_MEAN:
        dataBite = getColumnMean(numericalData)
        break
      case DATA_FUNCTION_MEDIAN:
        dataBite = getMedian(numericalData)
        break
      case DATA_FUNCTION_MAX:
        dataBite = Math.max(...numericalData)
        break
      case DATA_FUNCTION_MIN:
        dataBite = Math.min(...numericalData)
        break
      case DATA_FUNCTION_MODE:
        dataBite = getMode(numericalData).join('')
        break
      case DATA_FUNCTION_RANGE:
        let rangeMin = Math.min(...numericalData)
        let rangeMax = Math.max(...numericalData)
        rangeMin = applyPrecision(rangeMin, config.dataFormat.roundToPlace)
        rangeMax = applyPrecision(rangeMax, config.dataFormat.roundToPlace)
        if (config.dataFormat.commas) {
          rangeMin = applyLocaleString(rangeMin)
          rangeMax = applyLocaleString(rangeMax)
        }
        dataBite = config.dataFormat.prefix + rangeMin + config.dataFormat.suffix + ' - ' + config.dataFormat.prefix + rangeMax + config.dataFormat.suffix
        break
      default:
        console.warn('Data bite function not recognized: ' + config.dataFunction)
    }

    // If not the range, then round and format here
    if (config.dataFunction !== DATA_FUNCTION_RANGE) {
      dataBite = applyPrecision(dataBite, config.dataFormat.roundToPlace)

      if (config.dataFormat.commas) {
        dataBite = applyLocaleString(dataBite)
      }
      // Optional
      // return config.dataFormat.prefix + dataBite + config.dataFormat.suffix;

      return includePrefixSuffix ? config.dataFormat.prefix + dataBite + config.dataFormat.suffix : dataBite
    } else {
      //Rounding and formatting for ranges happens earlier.

      return includePrefixSuffix ? config.dataFormat.prefix + dataBite + config.dataFormat.suffix : dataBite
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
    let imageSource = config.imageData.url
    let imageAlt = config.imageData.alt

    if ('dynamic' === config.imageData.display && config.imageData.options && config.imageData.options?.length > 0) {
      let targetVal = Number(calculateDataBite(false))
      let argumentActive = false

      config.imageData.options.forEach((option, index) => {
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

    return imageSource.length > 0 && 'graphic' !== config.biteStyle && 'none' !== config.imageData.display
      ? <img alt={imageAlt} src={imageSource} className="bite-image callout"/>
      : null
  }, [ config.imageData ])


  let isTop = false
  let isBottom = false

  switch (config.bitePosition) {
    case IMAGE_POSITION_LEFT:
    case IMAGE_POSITION_RIGHT:
    case IMAGE_POSITION_TOP:
      isTop = true
      break
    case IMAGE_POSITION_BOTTOM:
      isBottom = true
      break
    default:
      break
  }

  const showBite = undefined !== config.dataColumn && undefined !== config.dataFunction

  return <>
    {!config.missingRequiredSections && !config.newViz && (<>
      <div className={`cove-data-bite__container${config.fontSize ? ' font-' + config.fontSize : ''}`} flow={config.biteFlow}>
        {showBite && 'graphic' === config.biteStyle && isTop &&
          <div className="cove-data-bite__callout">
            <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={config.biteFontSize}/>
          </div>
        }
        {isTop && <DataImage/>}
        <div className="cove-data-bite__content">
          {showBite && 'title' === config.biteStyle &&
            <div className="cove-data-bite__value" style={{ fontSize: config.biteFontSize + 'px' }}>{calculateDataBite()}</div>
          }
          <p className="cove-data-bite__text">
            {showBite && 'body' === config.biteStyle &&
              <span className="cove-data-bite__value mr-1" style={{ fontSize: config.biteFontSize + 'px' }}>{calculateDataBite()}</span>
            }
            {parse(config.biteBody)}
          </p>
          {config.subtext && !config.general.isCompactStyle &&
            <p className="cove-data-bite__subtext">{parse(config.subtext)}</p>
          }
        </div>
        {isBottom && <DataImage/>}
        {showBite && 'graphic' === config.biteStyle && !isTop &&
          <div className="cove-data-bite__callout">
            <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={config.biteFontSize}/>
          </div>
        }
      </div>
    </>)}
    {config.link && config.link}
  </>
}

export default DataBite
