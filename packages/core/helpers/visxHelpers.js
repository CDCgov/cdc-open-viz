import { timeFormat, timeParse } from 'd3-time-format'

export const visxFormatDate = (format = undefined, date) => {
  // config.runtime.xAxis.dateDisplayFormat
  return timeFormat(format)(date)
}

export const visxParseDate = (format = undefined, dateString) => {
  //config.runtime.xAxis.dateParseFormat
  let date = timeParse(format)(dateString)
  return date || new Date()

  //TODO: COVE Refactor - Modify runtime errors
  /*if (!date) {
    config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
    return new Date()
  } else {
    return date
  }*/
}
