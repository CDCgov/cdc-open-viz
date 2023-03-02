/**
 * isNumber
 *
 * There are many ways this could be written but this one is working
 * to check if something is a number or not
 * Input: value
 * 
 * Output: boolean: true or false
 */
export default function isNumber(value = '') {
  // if you need to check data to see if there is junk in there that can't be handled
  // you can run the points through this and see values on the console
  // in debugging I saw cases where inbound was a 'number'
  // and other times a 'string' so might as well take care of both here
  if (typeof value === 'number') {
    return !Number.isNaN(value)
  }
  if (typeof value === 'string') {
    return value !== null && value !== '' && /\d+\.?\d*/.test(value)
    // regex explanation: if 1 or more digits, and a decimal followed by 0 or more digits, 
    // then its a number
  }
  return false // if we get here something is wrong so return false
}
