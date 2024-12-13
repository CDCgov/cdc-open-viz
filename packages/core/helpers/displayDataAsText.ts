import { MapConfig } from '@cdc/map/src/types/MapConfig'

export const displayDataAsText = (value: string | number, columnName, state: MapConfig) => {
  console.log('state', state)
  if (value === null || value === '' || value === undefined) {
    return ''
  }

  // if string of letters like 'Home' then don't need to format as a number
  if (typeof value === 'string' && value.length > 0 && /[a-zA-Z]/.test(value) && state.legend.type === 'equalnumber') {
    return value
  }

  let formattedValue = value

  let columnObj = state.columns[columnName]

  if (columnObj === undefined) {
    // then use left axis config
    columnObj = state.columns.primary
    // NOTE: Left Value Axis uses different names
    // so map them below so the code below works
    // - copy commas to useCommas to work below
    columnObj['useCommas'] = columnObj.commas
    // - copy roundTo to roundToPlace to work below
    columnObj['roundToPlace'] = columnObj.roundTo ? columnObj.roundTo : ''
  }

  if (columnObj) {
    // If value is a number, apply specific formatting
    if (Number(value)) {
      const hasDecimal = columnObj.roundToPlace && (columnObj.roundToPlace !== '' || columnObj.roundToPlace !== null)
      const decimalPoint = columnObj.roundToPlace ? Number(columnObj.roundToPlace) : 0

      // Rounding
      if (columnObj.hasOwnProperty('roundToPlace') && hasDecimal) {
        formattedValue = Number(value).toFixed(decimalPoint)
      }

      if (columnObj.hasOwnProperty('useCommas') && columnObj.useCommas === true) {
        // Formats number to string with commas - allows up to 5 decimal places, if rounding is not defined.
        // Otherwise, uses the rounding value set at 'columnObj.roundToPlace'.
        formattedValue = Number(value).toLocaleString('en-US', {
          style: 'decimal',
          minimumFractionDigits: hasDecimal ? decimalPoint : 0,
          maximumFractionDigits: hasDecimal ? decimalPoint : 5
        })
      }
    }

    // Check if it's a special value. If it is not, apply the designated prefix and suffix
    if (false === state.legend.specialClasses.includes(String(value))) {
      formattedValue = (columnObj.prefix || '') + formattedValue + (columnObj.suffix || '')
    }
  }

  return formattedValue
}
