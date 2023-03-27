import React, { useCallback, useEffect } from 'react'

// Third Party
import parse from 'html-react-parser'

// Store
import useStore from '@cdc/core/store/store'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Constants
import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_SUM,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_RANGE
} from '../data/consts.js'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import CircleCallout from '../components/CircleCallout'
import DataBiteImage from './DataBite.Image'

// Visualization
const DataBite = () => {
  // Store Selectors
  const { config, visualizationKey } = useVisConfig()
  const { setMissingRequiredSections } = useStore()
  const { data } = config

  /** Required Sections -------------------------------------------------------------------------- */
  const requiredSections = useCallback(() => {
    return [
      config.dataColumn,
      config.dataFunction
    ]
  }, [ config ])

  useEffect(() => {
    if (requiredSections && config) {
      setMissingRequiredSections(visualizationKey, !requiredSections().every(section => !!CoveHelper.General.isValid(section) === true))
    }
  }, [ config, requiredSections, setMissingRequiredSections, visualizationKey ])


  /** Vis Functions ------------------------------------------------------------------------------ */
  const calculateDataBite = useCallback((includePrefixSuffix = true) => {
    //If either the column or function aren't set, do not calculate
    if (!config.dataColumn || !config.dataFunction) return ''

    // filter null and 0 out from count data
    const getColumnCount = (arr) => {
      if (config.dataFormat.ignoreZeros) {
        arr.filter(item => item && item)
        return arr.length
      }
      return arr.length
    }

    //Optionally filter the data based on the user's filter
    let filteredData = data
    let numericalData = []

    config.filters.map(filter => {
      if (filter.columnName && filter.columnValue) {
        return (filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue
        }))
      } else {
        return false
      }
    })

    // Get the column's data
    if (filteredData.length) {
      filteredData.forEach(row => {
        let value = CoveHelper.String.convertStringToNumber(row[config.dataColumn])
        if (typeof value === 'number') numericalData.push(value)
      })
    } else {
      numericalData = data.map(item => Number(item[config.dataColumn]))
    }

    let dataBite = ''

    switch (config.dataFunction) {
      case DATA_FUNCTION_COUNT:
        dataBite = getColumnCount(numericalData)
        break
      case DATA_FUNCTION_SUM:
        dataBite = CoveHelper.Number.roundToPlace(CoveHelper.Math.getSum(numericalData), config.dataFormat.roundToPlace)
        break
      case DATA_FUNCTION_MEAN:
        dataBite = CoveHelper.Number.roundToPlace(CoveHelper.Math.getMean(numericalData), config.dataFormat.roundToPlace)
        break
      case DATA_FUNCTION_MEDIAN:
        dataBite = CoveHelper.Number.roundToPlace(CoveHelper.Math.getMedian(numericalData), config.dataFormat.roundToPlace)
        break
      case DATA_FUNCTION_MAX:
        dataBite = Math.max(...numericalData)
        break
      case DATA_FUNCTION_MIN:
        dataBite = Math.min(...numericalData)
        break
      case DATA_FUNCTION_MODE:
        dataBite = CoveHelper.Math.getMode(numericalData).join('')
        break
      case DATA_FUNCTION_RANGE:
        let rangeMin = Math.min(...numericalData)
        let rangeMax = Math.max(...numericalData)
        rangeMin = CoveHelper.Number.roundToPlace(rangeMin, config.dataFormat.roundToPlace)
        rangeMax = CoveHelper.Number.roundToPlace(rangeMax, config.dataFormat.roundToPlace)
        if (config.dataFormat.commas) {
          rangeMin = CoveHelper.Number.convertNumberToLocaleString(rangeMin)
          rangeMax = CoveHelper.Number.convertNumberToLocaleString(rangeMax)
        }
        dataBite = config.dataFormat.prefix + rangeMin + config.dataFormat.suffix + ' - ' + config.dataFormat.prefix + rangeMax + config.dataFormat.suffix
        break
      default:
        console.warn('Data bite function not recognized: ' + config.dataFunction)
    }

    // If not the range, then round and format here
    if (config.dataFunction !== DATA_FUNCTION_RANGE) {
      dataBite = CoveHelper.Number.roundToPlace(dataBite, config.dataFormat.roundToPlace)

      if (config.dataFormat.commas) {
        dataBite = CoveHelper.Number.convertNumberToLocaleString(dataBite)
      }

      return includePrefixSuffix ? config.dataFormat.prefix + dataBite + config.dataFormat.suffix : dataBite
    } else {

      //Rounding and formatting for ranges happens earlier.
      return includePrefixSuffix ? config.dataFormat.prefix + dataBite + config.dataFormat.suffix : dataBite
    }
  }, [ config, data ])

  const DataImage = useCallback(() => (
    <DataBiteImage calculateDataBite={calculateDataBite}/>
  ), [ config ])


  let isTop = false
  let isBottom = false

  switch (config.bitePosition) {
    case 'left':
    case 'right':
    case 'top':
      isTop = true
      break
    case 'bottom':
      isBottom = true
      break
    default:
      break
  }

  const showBite = undefined !== config.dataColumn && undefined !== config.dataFunction

  return <>
    {config.missingRequiredSections && <>Missing data in sections</>}
    {!config.missingRequiredSections && (<>
      <div className={`cove-data-bite__container${config.fontSize ? ' font-' + config.fontSize : ''}`} flow={config.bitePosition}>
        {showBite && 'graphic' === config.biteStyle && isTop &&
          <div className="cove-data-bite__callout">
            <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={config.biteFontSize}/>
          </div>
        }
        {isTop &&
          <DataImage/>
        }
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
          {config.subtext &&
            <p className="cove-data-bite__subtext">{parse(config.subtext)}</p>
          }
        </div>
        {isBottom &&
          <DataImage/>
        }
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
