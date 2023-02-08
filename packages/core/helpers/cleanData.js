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
export default function cleanData (data, excludeKey, testing = false) {
    let cleanedupData = []
    if (testing) console.log('## Data to clean=', data)
    if (excludeKey === undefined) {
      excludeKey = "Date"  // have a default value
    }
    data.forEach(function (d, i) {
      if (testing) console.log("clean", i, " d", d);
      let cleanedBar = {}
      Object.keys(d).forEach(function (key) {
        if (key === excludeKey) {
          // pass thru
          cleanedBar[key] = d[key]
        } else {
          // remove comma and dollar signs
          if (testing) console.log("typeof d[key] is ", typeof d[key]);
          let tmp = "";
          if (typeof d[key] === 'string') {
            tmp = d[key] !== null && d[key] !== '' ? d[key].replace(/[,\$]/g, '') : ''
          } else {
            tmp =  d[key] !== null && d[key] !== '' ? d[key] : ''
          }
          if ((tmp !== '' && tmp !== null && !isNaN(tmp)) || (tmp !== '' && tmp !== null && /\d+\.?\d*/.test(tmp))) {
            cleanedBar[key] = tmp
          } else { cleanedBar[key] = '' }
          // if you get here, then return nothing to skip bad data point
        }
      })
      if (testing) console.log("cleanedBar=", cleanedBar);
      cleanedupData.push(cleanedBar)
    })
    if (testing) console.log('## cleanedData =', cleanedupData)
    return cleanedupData
  }
