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
export default function cleanData(data, excludeKey, testing = false) {
  let cleanedupData = []
  if (excludeKey === undefined) {
    excludeKey = 'Date'  // have a default value
  }
  data.forEach(function (d, i) {
    let cleanedBar = {}
    Object.keys(d).forEach(function (key) {
      if (key === excludeKey) {
        // pass through
        cleanedBar[key] = d[key]
      } else {
        // remove comma and dollar signs
        let tmp = ''
        if (typeof d[key] === 'string') {
          tmp = d[key] !== null && d[key] !== '' ? d[key].replace(/[,\$]/g, '') : ''
        } else {
          tmp = d[key] !== null && d[key] !== '' ? d[key] : ''
        }
        if ((tmp !== '' && tmp !== null && !isNaN(tmp)) || (tmp !== '' && tmp !== null && /\d+\.?\d*/.test(tmp))) {
          cleanedBar[key] = tmp
        } else {
          cleanedBar[key] = ''
        }
        // if you get here, then return nothing to skip bad data point
      }
    })
    cleanedupData.push(cleanedBar)
  })
  return cleanedupData
}
